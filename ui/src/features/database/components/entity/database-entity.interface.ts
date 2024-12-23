export interface DatabaseEntityColumn {
  isNullable: boolean;
  name: string;
  default?: unknown;
}
export interface DatabaseEntityTableProps {
  name: string;
  tableName: string;
  columns: DatabaseEntityColumn[];
}
