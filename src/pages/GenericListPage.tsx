import { Plus, Filter } from 'lucide-react';

interface Column {
  key: string;
  label: string;
  width?: string;
}

interface GenericListPageProps {
  title: string;
  addButtonText?: string;
  columns: Column[];
  data: Record<string, string | number>[];
  filters?: { placeholder: string; width: number }[];
  totalInfo?: string;
}

export default function GenericListPage({ title, addButtonText, columns, data, filters, totalInfo }: GenericListPageProps) {
  return (
    <div>
      <div className="page-header">
        <h2 className="page-title">{title}</h2>
        {addButtonText && (
          <button className="btn-add">
            {addButtonText}
            <span className="icon-circle"><Plus size={16} /></span>
          </button>
        )}
      </div>

      {filters && filters.length > 0 && (
        <div className="filter-bar">
          {filters.map((f, i) => (
            <input key={i} className="input-field" placeholder={f.placeholder} style={{ width: f.width }} />
          ))}
          <button className="btn btn-outline" style={{ padding: '6px 14px' }}>Tozalash</button>
          <button className="btn-icon"><Filter size={16} /></button>
        </div>
      )}

      {totalInfo && (
        <div className="total-info" style={{ marginBottom: 16 }}>{totalInfo}</div>
      )}

      <div className="card" style={{ padding: 0, overflow: 'auto' }}>
        <table>
          <thead>
            <tr>
              {columns.map(col => (
                <th key={col.key} style={col.width ? { width: col.width } : undefined}>{col.label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr key={i}>
                {columns.map(col => (
                  <td key={col.key}>
                    {col.key === 'index' ? `${i + 1}.` : String(row[col.key] ?? '')}
                  </td>
                ))}
              </tr>
            ))}
            {data.length === 0 && (
              <tr>
                <td colSpan={columns.length} style={{ textAlign: 'center', padding: 40, color: '#999' }}>
                  Ma'lumot topilmadi
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
