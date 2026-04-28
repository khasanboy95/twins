import { Plus, Edit, Trash2 } from 'lucide-react';

export default function ReasonsPage() {
  return (
    <div>
      <h2 className="page-title" style={{ marginBottom: 20 }}>Sabab sozlamalari</h2>

      <div className="card" style={{ marginBottom: 20 }}>
        <h3 style={{ fontSize: 14, fontWeight: 600, marginBottom: 12, color: '#5b7fc7' }}>Dars qoldirganlik sabablari</h3>
        <div className="card" style={{ padding: 0, overflow: 'auto' }}>
          <table>
            <thead>
              <tr>
                <th>T/R</th>
                <th>NOMI</th>
                <th>AMALLAR</th>
              </tr>
            </thead>
            <tbody>
              {['Kasal', "Oilaviy sabab", 'Transport muammosi', 'Boshqa'].map((name, i) => (
                <tr key={i}>
                  <td>{i + 1}.</td>
                  <td>{name}</td>
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
        <button className="btn btn-outline" style={{ marginTop: 12, fontSize: 12 }}>
          <Plus size={14} /> Yangi sabab qo'shish
        </button>
      </div>

      <div className="card">
        <h3 style={{ fontSize: 14, fontWeight: 600, marginBottom: 12, color: '#5b7fc7' }}>Guruhdan chiqish sabablari</h3>
        <div className="card" style={{ padding: 0, overflow: 'auto' }}>
          <table>
            <thead>
              <tr>
                <th>T/R</th>
                <th>NOMI</th>
                <th>AMALLAR</th>
              </tr>
            </thead>
            <tbody>
              {["Ko'chib ketdi", "Moliyaviy muammo", "Boshqa markaz", "Shaxsiy sabab"].map((name, i) => (
                <tr key={i}>
                  <td>{i + 1}.</td>
                  <td>{name}</td>
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
        <button className="btn btn-outline" style={{ marginTop: 12, fontSize: 12 }}>
          <Plus size={14} /> Yangi sabab qo'shish
        </button>
      </div>
    </div>
  );
}
