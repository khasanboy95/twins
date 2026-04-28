import { Save } from 'lucide-react';

export default function CenterSettingsPage() {
  return (
    <div>
      <h2 className="page-title" style={{ marginBottom: 20 }}>Markaz ma'lumotlari</h2>

      <div className="card" style={{ marginBottom: 20 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          <div>
            <label style={{ display: 'block', fontSize: 13, color: '#555', marginBottom: 6 }}>Markaz nomi</label>
            <input className="input-field" defaultValue="TWINS" style={{ width: '100%' }} />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: 13, color: '#555', marginBottom: 6 }}>Telefon raqam</label>
            <input className="input-field" defaultValue="+(998) 93-449-77-63" style={{ width: '100%' }} />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: 13, color: '#555', marginBottom: 6 }}>Manzil</label>
            <input className="input-field" defaultValue="Toshkent shahri" style={{ width: '100%' }} />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: 13, color: '#555', marginBottom: 6 }}>Telegram</label>
            <input className="input-field" placeholder="@username" style={{ width: '100%' }} />
          </div>
          <div style={{ gridColumn: '1 / -1' }}>
            <label style={{ display: 'block', fontSize: 13, color: '#555', marginBottom: 6 }}>Qo'shimcha ma'lumot</label>
            <textarea className="input-field" rows={3} style={{ width: '100%', resize: 'vertical' }} placeholder="Markaz haqida qo'shimcha ma'lumot..." />
          </div>
        </div>
      </div>

      <div className="card" style={{ marginBottom: 20 }}>
        <h3 style={{ fontSize: 15, fontWeight: 600, marginBottom: 16 }}>Filiallar</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
          <div style={{ padding: '12px 20px', border: '2px solid #5b7fc7', borderRadius: 8, background: '#f0f4ff', fontWeight: 600, color: '#5b7fc7' }}>
            TWINS
          </div>
        </div>
      </div>

      <button className="btn btn-primary">
        <Save size={16} /> Saqlash
      </button>
    </div>
  );
}
