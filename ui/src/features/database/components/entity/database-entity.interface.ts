import { DatabaseTableName } from '@features/database/database.interface';
import { TableColumn } from 'juny-react-style';


export interface TableNameDropFieldItem {
  name: DatabaseTableName;
}

export interface DatabaseEntityTableProps {
  tables: TableNameDropFieldItem[] | [];
  onSelectetTable: (selectedTable: TableNameDropFieldItem) => void;
  selectedTable: DatabaseTableName | null;
  column?: TableColumn[];
  // name: string;
  // tableName: string;
  // columns: DatabaseEntityColumn[];
}
