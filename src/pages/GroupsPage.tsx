import { Plus, Filter } from 'lucide-react';
import { groups } from '../data/mockData';

export default function GroupsPage() {
  return (
    <div>
      <div className="page-header">
        <h2 className="page-title">Guruhlar ro'yhati</h2>
        <button className="btn-add">
          Yangi guruh qo'shish
          <span className="icon-circle"><Plus size={16} /></span>
        </button>
      </div>

      <div className="filter-bar">
        <input className="input-field" placeholder="Ism orqali qidirish" style={{ width: 160 }} />
        <input className="input-field" placeholder="Narx bo'yicha" style={{ width: 140 }} />
        <input className="input-field" placeholder="Kurs bo'yicha" style={{ width: 140 }} />
        <select className="select-field" style={{ width: 160 }}>
          <option value="">O'qituvchi bo'yicha</option>
        </select>
        <input className="input-field" placeholder="Xona bo'yicha" style={{ width: 120 }} />
        <input className="input-field" placeholder="Kun bo'yicha" style={{ width: 120 }} />
        <input className="input-field" placeholder="Teglar bo'yicha" style={{ width: 140 }} />
        <button className="btn btn-outline" style={{ padding: '6px 14px' }}>Tozalash</button>
        <button className="btn-icon"><Filter size={16} /></button>
      </div>

      <div style={{ display: 'flex', gap: 16, marginBottom: 16, fontSize: 13 }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <span style={{ width: 10, height: 10, borderRadius: 2, background: '#333', display: 'inline-block' }}></span>
          Barchasi
        </span>
        <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <span style={{ width: 10, height: 10, borderRadius: 2, background: '#0d9488', display: 'inline-block' }}></span>
          sinov darsida
        </span>
      </div>

      <div className="card" style={{ padding: 0, overflow: 'auto' }}>
        <table>
          <thead>
            <tr>
              <th>T/R</th>
              <th>NOMI</th>
              <th>NARX</th>
              <th>DARS VAQTI</th>
              <th>KURS</th>
              <th>O'QITUVCHILAR</th>
              <th>DARS KUNLARI</th>
            </tr>
          </thead>
          <tbody>
            {groups.map((g, i) => (
              <tr key={g.id}>
                <td>{i + 1}.</td>
                <td>
                  <span style={{ color: '#5b7fc7', fontWeight: 500 }}>{g.name}</span>
                  {' '}
                  <span style={{ color: '#0d9488', fontSize: 11 }}>[{g.debtors}]</span>
                </td>
                <td>{g.price} so'm</td>
                <td>{g.time}</td>
                <td>
                  {g.course}
                  <span style={{ fontSize: 11, color: '#888', display: 'block' }}>[{g.room}]</span>
                </td>
                <td style={{ fontSize: 12 }}>
                  <span style={{ color: '#5b7fc7' }}>{g.teacher}</span>
                </td>
                <td>
                  {g.days.map(d => (
                    <span key={d} className="badge" style={{ background: '#e8f5e9', color: '#2e7d32', marginRight: 4, padding: '2px 8px', borderRadius: 4, fontSize: 11 }}>
                      {d}
                    </span>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
