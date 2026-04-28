import { Plus } from 'lucide-react';
import { workers } from '../data/mockData';

export default function WorkersPage() {
  return (
    <div>
      <div className="page-header">
        <h2 className="page-title">Xodimlar ro'yhati</h2>
        <button className="btn-add">
          Yangi xodim qo'shish
          <span className="icon-circle"><Plus size={16} /></span>
        </button>
      </div>

      <div className="filter-bar">
        <input className="input-field" placeholder="Ism orqali qidirish" style={{ width: 180 }} />
        <input className="input-field" placeholder="Telefon raqam" style={{ width: 160 }} />
        <select className="select-field" style={{ width: 160 }}>
          <option value="">Lavozim bo'yicha</option>
        </select>
        <button className="btn btn-outline" style={{ padding: '6px 14px' }}>Tozalash</button>
      </div>

      <div className="card" style={{ padding: 0, overflow: 'auto' }}>
        <table>
          <thead>
            <tr>
              <th>T/R</th>
              <th>FISH</th>
              <th>TELEFON RAQAM</th>
              <th>LAVOZIM</th>
              <th>ISH HAQI</th>
            </tr>
          </thead>
          <tbody>
            {workers.map((w, i) => (
              <tr key={w.id}>
                <td>{i + 1}.</td>
                <td style={{ fontWeight: 500, color: '#5b7fc7' }}>{w.name}</td>
                <td>{w.phone}</td>
                <td><span className="badge badge-teal">{w.role}</span></td>
                <td>{w.salary || '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
