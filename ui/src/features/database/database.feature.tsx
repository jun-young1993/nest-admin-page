import { useEffect } from 'react';
import { FullScreen } from 'juny-react-style';

import { useAppDispatch, useAppSelector } from '@hooks';

import { fetchDatabaseApi, selectDatabase } from './database.slice';

const DatabaseFeature = () => {
  const dispatch = useAppDispatch();
  const { data, loading, error } = useAppSelector(selectDatabase);
  console.log('data2', data);
  useEffect(() => {
    dispatch(fetchDatabaseApi());
    console.log('data', data);
  }, [dispatch]);
  return (
    <FullScreen>
      {/* <Table $columns={columns} $data={tableData} /> */}
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>Error: {JSON.stringify(error)}</p>}
      {data && <p>Response: {JSON.stringify(data)}</p>}
    </FullScreen>
  );
};

export default DatabaseFeature;
