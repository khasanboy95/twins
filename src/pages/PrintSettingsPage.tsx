import { Save } from 'lucide-react';

export default function PrintSettingsPage() {
  return (
    <div>
      <h2 className="page-title" style={{ marginBottom: 20 }}>Chek sozlamalari</h2>

      <div className="card" style={{ padding: 0, overflow: 'auto', marginBottom: 20 }}>
        <table>
          <thead>
            <tr>
              <th>T/R</th>
              <th>NOMI</th>
              <th>HOLATI</th>
            </tr>
          </thead>
          <tbody>
            {[
              { name: "To'lov cheki", active: true },
              { name: 'Qaytarish cheki', active: true },
              { name: 'Shartnoma', active: false },
            ].map((item, i) => (
              <tr key={i}>
                <td>{i + 1}.</td>
                <td>{item.name}</td>
                <td>
                  <label style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}>
                    <input type="checkbox" defaultChecked={item.active} />
                    <span style={{ fontSize: 12, color: item.active ? '#0d9488' : '#999' }}>
                      {item.active ? 'Yoqilgan' : "O'chirilgan"}
                    </span>
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="card">
        <h3 style={{ fontSize: 15, fontWeight: 600, marginBottom: 16 }}>Chek shabloni</h3>
        <div style={{ border: '1px dashed #ccc', borderRadius: 8, padding: 20, minHeight: 200, background: '#fafafa', color: '#888', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          Chek shablonini sozlang
        </div>
        <button className="btn btn-primary" style={{ marginTop: 16 }}>
          <Save size={16} /> Saqlash
        </button>
      </div>
    </div>
  );
}
