interface University {
  id: number;
  name: string;
  country: string;
  web_pages: string[];
  alpha_two_code: string;
}

type UniversityField = keyof University;

type SortState = {
  field: UniversityField;
  asc: boolean;
} | null;

interface Column {
  title: string;
  sortable?: boolean;
}

interface TableProps {
  data: Array<{ [key: string]: any }>;
  columns: { [key: string]: Column };
  sortedColumns: SortState;
  deletingId: number | null;
  actions?: string[];
  onRowClick?: (item: any) => void;
  onActionClick?: (action: string, id: number) => void;
  onSort?: (field: UniversityField) => void;
}

export type { Column, TableProps, University, SortState, UniversityField };
