import React from 'react';
import Icon from '../icon';
import TrashIcon from '../../icons/TrashIcon';
import styles from './Table.module.css';

const actionToIconMapping: Record<string, React.FC> = {
  delete: TrashIcon
}

interface Column {
  title: string;
}

interface TableProps {
  data: Array<{ [key: string]: any }>;
  columns: { [key: string]: Column };
  deletingId: number | null;
  actions?: string[];
  onRowClick?: (item: any) => void;
  onActionClick?: (action: string, id: number) => void;
}

const Table: React.FC<TableProps> = ({ deletingId, data, columns, actions, onRowClick, onActionClick }) => {
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
            <th key={key} className={styles.th}>{columns[key].title}</th>
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
