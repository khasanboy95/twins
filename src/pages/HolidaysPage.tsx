import { Plus, Trash2, AlertTriangle } from 'lucide-react';

export default function HolidaysPage() {
  return (
    <div>
      <div className="card" style={{ background: '#fff8e1', border: '1px solid #ffe082', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 10 }}>
        <AlertTriangle size={18} color="#f57c00" />
        <span style={{ fontSize: 13 }}><strong>Eslatma:</strong> Bayram kunlari belgilangan sanalarda darslar avtomatik bekor qilinadi.</span>
      </div>

      <div className="page-header">
        <h2 className="page-title">Bayram kunlari ro'yxati</h2>
        <button className="btn-add">
          Bayram kuni qo'shish
          <span className="icon-circle"><Plus size={16} /></span>
        </button>
      </div>

      <div className="card" style={{ padding: 0, overflow: 'auto' }}>
        <table>
          <thead>
            <tr>
              <th>T/R</th>
              <th>BAYRAM NOMI</th>
              <th>BOSHLANISH SANA</th>
              <th>TUGASH SANA</th>
              <th>AMAL</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1.</td>
              <td>Navro'z bayrami</td>
              <td>2026-03-21</td>
              <td>2026-03-23</td>
              <td><button className="btn-icon" style={{ width: 28, height: 28, color: '#dc3545' }}><Trash2 size={14} /></button></td>
            </tr>
            <tr>
              <td>2.</td>
              <td>Mustaqillik kuni</td>
              <td>2026-09-01</td>
              <td>2026-09-01</td>
              <td><button className="btn-icon" style={{ width: 28, height: 28, color: '#dc3545' }}><Trash2 size={14} /></button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
