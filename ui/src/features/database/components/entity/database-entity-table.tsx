import { DatabaseEntityTableProps } from "./database-entity.interface";

const DatabaseEntityTable = (props: DatabaseEntityTableProps) => {
  const columns = [
    { key: 'id', label: 'ID' },
    { key: 'name', label: 'Name' },
  ];
  return <div>hi</div>;
};

export default DatabaseEntityTable;
