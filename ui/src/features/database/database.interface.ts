import { TableData } from 'juny-react-style';

export type DatabaseTableName = string;

export interface DatabaseEntityColumn {
  isNullable: boolean;
  name: string;
  default?: unknown;
}

export interface DatabaseEntity {
  columns: DatabaseEntityColumn[] | [];
  name: DatabaseTableName;
  tableName: DatabaseTableName;
}
export interface DatabaseState {
  entites: DatabaseEntity[] | [];
  selectedTable: DatabaseTableName | null;
  record: TableData[] | [];
  loading: boolean;
  error: string | null;
}
