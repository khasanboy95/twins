import { Plus, Settings, RefreshCw } from 'lucide-react';
import { students } from '../data/mockData';

export default function StudentsPage() {
  return (
    <div>
      <div className="page-header">
        <div className="page-header-left">
          <h2 className="page-title">Talabalar ro'yhati</h2>
          <span className="count-badge">20</span>
          <div style={{ display: 'flex', gap: 8, marginLeft: 20 }}>
            <span style={{ color: '#555', fontSize: 13 }}>Aktiv talabalar hisoboti</span>
            <button className="btn-icon" style={{ width: 28, height: 28 }}><Settings size={14} /></button>
          </div>
        </div>
        <div className="page-header-right">
          <button className="btn-add">
            Yangi talaba qo'shish
            <span className="icon-circle"><Plus size={16} /></span>
          </button>
        </div>
      </div>

      <div className="filter-bar">
        <input className="input-field" placeholder="Ism orqali qidirish" style={{ width: 150 }} />
        <input className="input-field" placeholder="Telefon raqam orq" style={{ width: 140 }} />
        <input className="input-field" placeholder="Ota-ona raqami" style={{ width: 130 }} />
        <select className="select-field" style={{ width: 140 }}>
          <option value="">Guruhni tanlang</option>
        </select>
        <input className="input-field" placeholder="Kurs" style={{ width: 100 }} />
        <select className="select-field" style={{ width: 150 }}>
          <option value="">O'qituvchi bo'yicha</option>
        </select>
        <input className="input-field" placeholder="Teglar" style={{ width: 100 }} />
        <span style={{ color: '#555', fontSize: 13 }}>Barcha talabalar</span>
        <button className="btn btn-outline" style={{ padding: '6px 14px' }}>Tozalash</button>
        <button className="btn-icon"><Settings size={16} /></button>
      </div>

      <div className="total-info" style={{ marginBottom: 16 }}>
        Jami : 1258
      </div>

      <div className="card" style={{ padding: 0, overflow: 'auto' }}>
        <table>
          <thead>
            <tr>
              <th>T/R</th>
              <th>FISH &#8597;</th>
              <th>TELEFON RAQAM</th>
              <th>GURUHLAR</th>
              <th>BALANS <RefreshCw size={12} style={{ verticalAlign: 'middle' }} /></th>
              <th>O'QITUVCHILAR</th>
            </tr>
          </thead>
          <tbody>
            {students.map((s, i) => (
              <tr key={s.id}>
                <td>{i + 1}.</td>
                <td style={{ fontWeight: 500 }}>{s.name}</td>
                <td>{s.phone}</td>
                <td>
                  <span className="badge badge-teal">{s.groups[0]}</span>
                  <span style={{ fontSize: 11, color: '#888', marginLeft: 6 }}>[{s.room}]</span>
                </td>
                <td style={{ fontWeight: 600, color: s.balance < 0 ? '#dc3545' : '#0d9488' }}>
                  {s.balance.toLocaleString()}
                </td>
                <td>
                  <span style={{ fontSize: 12 }}>{s.teacher}</span>
                  <span style={{ fontSize: 11, color: '#888', marginLeft: 6 }}>[{s.course}]</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
