import React from 'react';
import styles from './Table.module.css';

interface Column {
  title: string;
}

interface TableProps {
  data: Array<{ [key: string]: any }>;
  columns: { [key: string]: Column };
  actions?: string[];
  onRowClick?: (item: any) => void;
  onActionClick?: (action: string, index: number) => void;
}

const Table: React.FC<TableProps> = ({ data, columns, actions, onRowClick, onActionClick }) => {
  if (data.length === 0) {
    return <div className={styles.noData}>No data available</div>;
  }

  const columnKeys = Object.keys(columns);

  return (
    <table className={styles.table}>
      <thead>
      <tr className={styles.tr}>
        {columnKeys.map((key) => (
          <th key={key} className={styles.th}>{columns[key].title}</th>
        ))}
        {actions && actions.length > 0 && <th className={styles.th}>Actions</th>}
      </tr>
      </thead>
      <tbody>
      {data.map((item, index) => (
        <tr key={index} onClick={() => onRowClick?.(item)} className={styles.tableRow}>
          {columnKeys.map((key) => (
            <td key={`${key}-${index}`} className={styles.td}>
              {item[key]}
            </td>
          ))}
          {actions && (
            <td className={styles.td}>
              {actions.map((action, idx) => (
                <button key={idx} onClick={(e) => { e.stopPropagation(); onActionClick?.(action, index); }}>
                  {action}
                </button>
              ))}
            </td>
          )}
        </tr>
      ))}
      </tbody>
    </table>
  );
};

export default Table;
