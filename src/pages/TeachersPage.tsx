import { Plus, Mail, MoreVertical } from 'lucide-react';
import { teachers } from '../data/mockData';

export default function TeachersPage() {
  return (
    <div>
      <div className="page-header">
        <h2 className="page-title">O'qituvchilar ro'yhati</h2>
        <div className="page-header-right">
          <button className="btn-add">
            Yangi o'qituvchi qo'shish
            <span className="icon-circle"><Plus size={16} /></span>
          </button>
        </div>
      </div>

      <div className="filter-bar">
        <input className="input-field" placeholder="Ism orqali qidirish" style={{ width: 180 }} />
        <input className="input-field" placeholder="Telefon raqam orqali qidirish" style={{ width: 220 }} />
        <input className="input-field" placeholder="Maosh turi bo'yicha" style={{ width: 160 }} />
        <select className="select-field" style={{ width: 160 }}>
          <option value="">Guruhni tanlang</option>
        </select>
        <button className="btn btn-outline" style={{ padding: '6px 14px' }}>Tozalash</button>
        <button style={{ width: 36, height: 36, borderRadius: '50%', background: '#e8a840', color: 'white', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', marginLeft: 'auto' }}>
          <Mail size={16} />
        </button>
      </div>

      <div className="card" style={{ padding: 0, overflow: 'auto' }}>
        <table>
          <thead>
            <tr>
              <th>T/R</th>
              <th>NOMI</th>
              <th></th>
              <th>TELEFON RAQAM</th>
              <th>ISH HAQI (TURI)</th>
              <th>TUG'ILGAN SANA</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {teachers.map((t, i) => (
              <tr key={t.id}>
                <td>{i + 1}.</td>
                <td>
                  <span style={{ color: '#5b7fc7', fontWeight: 500, cursor: 'pointer' }}>{t.name}</span>
                </td>
                <td style={{ color: '#888', fontSize: 12 }}>({t.groups} ta guruh)</td>
                <td>{t.phone}</td>
                <td>
                  {t.salary.split('[')[0]}
                  <span style={{ color: '#5b7fc7', fontSize: 12 }}> [{t.salary.split('[')[1]}</span>
                </td>
                <td style={{ fontSize: 12 }}>{t.birthday}</td>
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

      <div style={{ textAlign: 'right', marginTop: 16 }}>
        <button className="btn btn-outline" style={{ borderColor: '#0d9488', color: '#0d9488' }}>
          Excelga eksport qilish
        </button>
      </div>
    </div>
  );
}
