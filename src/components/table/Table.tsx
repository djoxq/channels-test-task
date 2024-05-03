import React, { useState, useMemo } from 'react';
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
  deletingId: number | null;
  actions?: string[];
  onRowClick?: (item: any) => void;
  onActionClick?: (action: string, id: number) => void;
}

const Table: React.FC<TableProps> = ({ deletingId, data, columns, actions, onRowClick, onActionClick }) => {
  const [sortConfig, setSortConfig] = useState<{ field: string; direction: 'ascending' | 'descending' } | null>(null);

  const sortedData = useMemo(() => {
    if (!sortConfig) return data;

    const sorted = [...data].sort((a, b) => {
      if (a[sortConfig.field] < b[sortConfig.field]) {
        return sortConfig.direction === 'ascending' ? -1 : 1;
      }
      if (a[sortConfig.field] > b[sortConfig.field]) {
        return sortConfig.direction === 'ascending' ? 1 : -1;
      }
      return 0;
    });

    return sorted;
  }, [data, sortConfig]);

  const requestSort = (field: string) => {
    let direction: 'ascending' | 'descending' = 'ascending';
    if (sortConfig && sortConfig.field === field && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ field, direction });
  };

  const columnKeys = Object.keys(columns);

  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
        <tr className={styles.tr}>
          {columnKeys.map((key) => (
            <th
              onClick={() => columns[key].sortable && requestSort(key)}
              key={key}
              className={`${styles.th} ${columns[key].sortable ? styles.sortable : ''}`}
            >
              {columns[key].title}
              {columns[key].sortable && (
                <span>
                  {sortConfig && sortConfig.field === key ?
                    (sortConfig.direction === 'ascending' ? <>&#8593;</> : <>&#8595;</>) :
                    <>&#8595;&#8593;</>
                  }
                </span>
              )}
            </th>
          ))}
          {actions && actions.length > 0 && <th className={`${styles.th} ${styles.thAction}`}>Actions</th>}
        </tr>
        </thead>
        <tbody>
        {sortedData.map((item, index) => (
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
