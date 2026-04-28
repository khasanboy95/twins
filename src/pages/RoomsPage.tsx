import { Plus, Edit, Trash2 } from 'lucide-react';
import { rooms } from '../data/mockData';

export default function RoomsPage() {
  return (
    <div>
      <div className="page-header">
        <h2 className="page-title">Xonalar ro'yhati</h2>
        <button className="btn-add">
          Yangi xona qo'shish
          <span className="icon-circle"><Plus size={16} /></span>
        </button>
      </div>

      <div className="card" style={{ padding: 0, overflow: 'auto' }}>
        <table>
          <thead>
            <tr>
              <th>T/R</th>
              <th>NOMI</th>
              <th>SIG'IMI</th>
              <th>AMALLAR</th>
            </tr>
          </thead>
          <tbody>
            {rooms.map((r, i) => (
              <tr key={r.id}>
                <td>{i + 1}.</td>
                <td style={{ fontWeight: 500 }}>{r.name}</td>
                <td>{r.capacity} ta</td>
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
