import { useEffect } from 'react';
import { FullScreen } from 'juny-react-style';

import { useAppDispatch, useAppSelector } from '@hooks';

import {
  fetchEntityApi,
  selectDatabase,
  setSelectedTable,
} from './database.slice';
import DatabaseEntityTable from './components/entity/database-entity-table';

const DatabaseFeature = () => {
  const dispatch = useAppDispatch();
  const { entites, loading, selectedTable, error } =
    useAppSelector(selectDatabase);

  useEffect(() => {
    dispatch(fetchEntityApi());
  }, [dispatch]);

  return (
    <FullScreen>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>Error: {JSON.stringify(error)}</p>}
      <DatabaseEntityTable
        tables={entites?.map((entity) => ({ name: entity.tableName }))}
        column={entites
          .find((entity) => entity.tableName == selectedTable)
          ?.columns.map((column) => ({ key: column.name, label: column.name }))}
        selectedTable={selectedTable}
        onSelectetTable={({ name }) => {
          dispatch(setSelectedTable(name));
        }}
      />
    </FullScreen>
  );
};

export default DatabaseFeature;
