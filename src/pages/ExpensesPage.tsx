import { Plus, Filter } from 'lucide-react';
import { expenses } from '../data/mockData';

export default function ExpensesPage() {
  return (
    <div>
      <div className="page-header">
        <h2 className="page-title">O'zgaruvchi xarajatlar</h2>
        <button className="btn-add">
          Xarajat qo'shish
          <span className="icon-circle"><Plus size={16} /></span>
        </button>
      </div>

      <div className="filter-bar">
        <input className="input-field" type="text" placeholder="Dan - gacha" style={{ width: 180 }} />
        <input className="input-field" placeholder="Sabab bo'yicha" style={{ width: 160 }} />
        <select className="select-field" style={{ width: 140 }}>
          <option value="">To'lov turi</option>
        </select>
        <button className="btn btn-outline" style={{ padding: '6px 14px' }}>Tozalash</button>
        <button className="btn-icon"><Filter size={16} /></button>
      </div>

      <div className="card" style={{ padding: 0, overflow: 'auto', marginBottom: 20 }}>
        <table>
          <thead>
            <tr>
              <th>T/R</th>
              <th>SABAB</th>
              <th>SUMMA</th>
              <th>SANA</th>
              <th>TO'LOV USULI</th>
              <th>HODIM</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((e, i) => (
              <tr key={e.id}>
                <td>{i + 1}.</td>
                <td>{e.reason}</td>
                <td>{e.amount} so'm</td>
                <td style={{ fontSize: 12 }}>{e.date}</td>
                <td>{e.method}</td>
                <td style={{ fontSize: 12 }}>{e.staff}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 style={{ fontSize: 15, fontWeight: 600, marginBottom: 16 }}>Doimiy xarajatlar</h3>
      <div className="card" style={{ padding: 0, overflow: 'auto', marginBottom: 20 }}>
        <table>
          <thead>
            <tr>
              <th>T/R</th>
              <th>SABAB</th>
              <th>SUMMA</th>
              <th>SANA</th>
              <th>TO'LOV USULI</th>
              <th>HODIM</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1.</td>
              <td>Arenda</td>
              <td>5,000,000 so'm</td>
              <td style={{ fontSize: 12 }}>Apr 01, 2026</td>
              <td>Bank o'tkazma</td>
              <td style={{ fontSize: 12 }}>Khusan Djemilov</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
