import { Plus, Settings, MoreVertical, Filter, Home } from 'lucide-react';
import { payments } from '../data/mockData';

export default function PaymentsPage() {
  return (
    <div>
      <div className="page-header">
        <div className="page-header-left">
          <h2 className="page-title">To'lovlar ro'yhati</h2>
          <span className="count-badge">15</span>
          <div style={{ display: 'flex', gap: 8, marginLeft: 16 }}>
            <span style={{ fontSize: 13, color: '#555' }}>To'lovlar hisoboti</span>
            <button className="btn-icon" style={{ width: 28, height: 28 }}><Settings size={14} /></button>
          </div>
        </div>
        <div className="page-header-right">
          <button className="btn-add">
            To'lov qilish
            <span className="icon-circle"><Plus size={16} /></span>
          </button>
        </div>
      </div>

      <div className="filter-bar">
        <input className="input-field" type="text" defaultValue="2026-04-01 to 2026-04-28" style={{ width: 200 }} />
        <input className="input-field" placeholder="Ism orqali qidirish" style={{ width: 160 }} />
        <input className="input-field" placeholder="O'qituvchi bo'yicha" style={{ width: 140 }} />
        <input className="input-field" placeholder="Xodim boyicha" style={{ width: 130 }} />
        <select className="select-field" style={{ width: 150 }}>
          <option value="">Guruhni tanlang</option>
        </select>
        <input className="input-field" placeholder="To'lov turi" style={{ width: 120 }} />
        <input className="input-field" placeholder="To'lov yaratilgan vaqt" style={{ width: 170 }} />
        <button className="btn btn-outline" style={{ padding: '6px 14px' }}>Tozalash</button>
        <button className="btn-icon" style={{ background: '#0d9488', color: 'white', border: 'none' }}><Home size={16} /></button>
      </div>

      <div style={{ marginBottom: 12 }}>
        <label style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: '#555' }}>
          <input type="checkbox" /> Chegirma berilgan talabalar
        </label>
      </div>

      <div style={{ marginBottom: 16, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div className="total-info">
          Jami: <span style={{ color: '#5b7fc7', fontWeight: 600 }}>56,365,000 so'm</span> / 217 ta
        </div>
        <button className="btn-icon"><Filter size={16} /></button>
      </div>

      <div className="card" style={{ padding: 0, overflow: 'auto' }}>
        <table>
          <thead>
            <tr>
              <th>T/R</th>
              <th>SANA</th>
              <th>FISH</th>
              <th>NARX</th>
              <th>TO'LOV USULI</th>
              <th>O'QITUVCHILAR</th>
              <th>GURUH</th>
              <th>HODIM</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {payments.map((p, i) => (
              <tr key={p.id}>
                <td>{i + 1}.</td>
                <td style={{ fontSize: 12, whiteSpace: 'nowrap' }}>{p.date}</td>
                <td>
                  <span style={{ color: '#5b7fc7', fontWeight: 500 }}>{p.name}</span>
                </td>
                <td>{p.amount} so'm</td>
                <td>{p.method}</td>
                <td>
                  <span style={{ color: p.teacher.includes('kelishuv') ? '#e8a840' : '#5b7fc7', fontSize: 12 }}>
                    {p.teacher}
                  </span>
                </td>
                <td>
                  <span style={{ color: '#5b7fc7', fontSize: 12 }}>{p.group}</span>
                </td>
                <td style={{ fontSize: 12 }}>{p.staff}</td>
                <td>
                  <button style={{ border: 'none', background: 'none', cursor: 'pointer', color: '#5b7fc7' }}>
                    <MoreVertical size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
