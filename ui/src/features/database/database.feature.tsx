import { useAppDispatch, useAppSelector } from '@hooks';
import { fetchDatabaseApi, selectDatabase } from './database.slice';
import { useEffect } from 'react';

const DatabaseFeature = () => {
  const dispatch = useAppDispatch();
  const { data, loading, error } = useAppSelector(selectDatabase);
  useEffect(() => {
    dispatch(fetchDatabaseApi);
  }, [dispatch]);
  return (
    <div>
      <div>hi 데이터 베이스</div>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {data && <p>Response: {data}</p>}
    </div>
  );
};

export default DatabaseFeature;
