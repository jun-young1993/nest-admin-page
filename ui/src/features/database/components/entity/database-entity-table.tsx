import { DropDownField, FullScreen, Table } from 'juny-react-style';
import { DatabaseEntityTableProps } from './database-entity.interface';
import { useState } from 'react';

const DatabaseEntityTable = (props: DatabaseEntityTableProps) => {
  const [isTableDropFieldOpen, setTableDropFieldOpen] =
    useState<boolean>(false);

  return (
    <FullScreen $flexDirection="column" $gap="0.5rem">
      <FullScreen $height="1.5rem" $zIndex={1}>
        <DropDownField
          $isOpen={isTableDropFieldOpen}
          $items={props.tables}
          // $firstSelect={true}
          $onToggle={() => setTableDropFieldOpen(!isTableDropFieldOpen)}
          $onSelect={(selectedItem) => {
            setTableDropFieldOpen(false);
            props.onSelectetTable?.(selectedItem);
          }}
        >
          <div>{props.selectedTable}</div>
        </DropDownField>
      </FullScreen>
      <FullScreen>
        <Table $columns={props.column || []} $data={[]} />
      </FullScreen>
    </FullScreen>
  );
};

export default DatabaseEntityTable;
