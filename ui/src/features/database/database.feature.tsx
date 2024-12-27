import { useEffect } from 'react';
import { FullScreen, TabPanel } from 'juny-react-style';
import { useAppDispatch, useAppSelector } from '@hooks';
import {
  fetchEntityApi,
  feachRecordApi,
  selectDatabase,
  setSelectedTable,
} from './database.slice';
import DatabaseEntityTable from './components/entity/database-entity-table';

const DatabaseFeature = () => {
  const dispatch = useAppDispatch();
  const { entites, loading, selectedTable, error, record } =
    useAppSelector(selectDatabase);

  useEffect(() => {
    dispatch(fetchEntityApi());
  }, [dispatch]);

  useEffect(() => {
    if (selectedTable) {
      dispatch(feachRecordApi(selectedTable));
    }
  }, [selectedTable]);
  
  return (
    <FullScreen>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>Error: {JSON.stringify(error)}</p>}
      <TabPanel>
        <TabPanel.Tab label="entity">
          <DatabaseEntityTable
            tables={entites?.map((entity) => ({ name: entity.tableName }))}
            column={[
              {
                key: 'name',
                label: 'Column Name',
              },
              {
                key: 'isPrimary',
                label: 'Primary',
              },
              {
                key: 'isNullable',
                label: 'Not Null',
              },
              {
                key: 'default',
                label: 'Default',
              },
            ]}
            selectedTable={selectedTable}
            data={
              entites.find((entity) => entity.tableName == selectedTable)
                ?.columns || []
            }
            onSelectetTable={({ name }) => {
              dispatch(setSelectedTable(name));
            }}
          />
        </TabPanel.Tab>
        <TabPanel.Tab label="record">
          <DatabaseEntityTable
            tables={entites?.map((entity) => ({ name: entity.tableName }))}
            column={
              entites
                .find((entity) => entity.tableName == selectedTable)
                ?.columns.map((column) => ({
                  key: column.name,
                  label: column.name,
                })) || []
            }
            selectedTable={selectedTable}
            data={record}
            onSelectetTable={({ name }) => {
              dispatch(setSelectedTable(name));
            }}
          />
        </TabPanel.Tab>
      </TabPanel>
    </FullScreen>
  );
};

export default DatabaseFeature;
