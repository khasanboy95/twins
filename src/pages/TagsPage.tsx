import { Plus, Edit, Trash2 } from 'lucide-react';

export default function TagsPage() {
  return (
    <div>
      <div className="page-header">
        <h2 className="page-title">Teglar</h2>
        <button className="btn-add">
          Yangi teg qo'shish
          <span className="icon-circle"><Plus size={16} /></span>
        </button>
      </div>

      <div className="card" style={{ padding: 0, overflow: 'auto' }}>
        <table>
          <thead>
            <tr>
              <th>T/R</th>
              <th>NOMI</th>
              <th>RANGI</th>
              <th>AMALLAR</th>
            </tr>
          </thead>
          <tbody>
            {[
              { name: 'VIP', color: '#f5c542' },
              { name: 'Yangi', color: '#0d9488' },
              { name: 'Instagram', color: '#e1306c' },
              { name: 'Telegram', color: '#0088cc' },
              { name: "Do'stlar tavsiyasi", color: '#5b7fc7' },
            ].map((tag, i) => (
              <tr key={i}>
                <td>{i + 1}.</td>
                <td>
                  <span className="badge" style={{ background: tag.color + '20', color: tag.color, border: `1px solid ${tag.color}` }}>
                    {tag.name}
                  </span>
                </td>
                <td>
                  <div style={{ width: 24, height: 24, borderRadius: 4, background: tag.color }}></div>
                </td>
                <td>
                  <div style={{ display: 'flex', gap: 8 }}>
                    <button className="btn-icon" style={{ width: 28, height: 28 }}><Edit size={14} /></button>
                    <button className="btn-icon" style={{ width: 28, height: 28, color: '#dc3545' }}><Trash2 size={14} /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
