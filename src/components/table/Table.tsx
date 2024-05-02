import React from 'react';
import Icon from '../icon';
import TrashIcon from '../../icons/TrashIcon';
import styles from './Table.module.css';

const actionToIconMapping: Record<string, React.FC> = {
  delete: TrashIcon
}

interface Column {
  title: string;
  sortable?: boolean;
}

interface TableProps {
  data: Array<{ [key: string]: any }>;
  columns: { [key: string]: Column };
  sortedColumns: any;
  deletingId: number | null;
  actions?: string[];
  onRowClick?: (item: any) => void;
  onActionClick?: (action: string, id: number) => void;
  onSort?: (field: string) => void;
}

const Table: React.FC<TableProps> = ({ deletingId, data, columns, sortedColumns, actions, onRowClick, onActionClick, onSort }) => {
  if (data.length === 0) {
    return <div className={styles.noData}>No data available</div>;
  }

  const columnKeys = Object.keys(columns);

  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
        <tr className={styles.tr}>
          {columnKeys.map((key) => (
            <th
              onClick={() => columns[key].sortable && onSort?.(key)}
              key={key}
              className={`${styles.th} ${columns[key].sortable && styles.sortable}`}
            >
              {columns[key].title} {columns[key].sortable && <span>{sortedColumns?.field === key ? (sortedColumns.asc ? <>&#8595;</> : <>&#8593;</> ) : <>&#8595;&#8593;</>}</span>}</th>
          ))}
          {actions && actions.length > 0 && <th className={`${styles.th} ${styles.thAction}`}>Actions</th>}
        </tr>
        </thead>
        <tbody>
        {data.map((item, index) => (
          <tr key={index} onClick={() => onRowClick?.(item)}
              className={`${styles.tableRow} ${item.id === deletingId ? styles.fadeOut : ''}`}>
            {columnKeys.map((key) => (
              <td key={`${key}-${item.id}`} className={styles.td}>
                {item[key]}
              </td>
            ))}
            {actions && (
              <td className={`${styles.td} ${styles.tdAction}`}>
                {actions.map((action) => (
                  <Icon key={action} icon={actionToIconMapping[action]} onClick={(e) => {
                    e.stopPropagation();
                    onActionClick?.(action, item.id);
                  }}/>
                ))}
              </td>
            )}
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
