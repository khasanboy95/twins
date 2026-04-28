import { ExternalLink } from 'lucide-react';

export default function IntegrationPage() {
  return (
    <div>
      <h2 className="page-title" style={{ marginBottom: 20 }}>Integratsiyalar</h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}>
        {[
          { name: 'Telegram Bot', desc: 'Telegram bot orqali bildirishnomalar olish', connected: true, icon: '🤖' },
          { name: 'Click', desc: 'Click orqali onlayn to\'lov qabul qilish', connected: false, icon: '💳' },
          { name: 'Payme', desc: 'Payme orqali onlayn to\'lov qabul qilish', connected: false, icon: '💰' },
          { name: 'Google Calendar', desc: 'Google Calendar bilan sinxronizatsiya', connected: false, icon: '📅' },
          { name: 'SMS Provider', desc: 'SMS xabarlarni yuborish uchun', connected: true, icon: '📱' },
        ].map((item, i) => (
          <div key={i} className="card" style={{ borderTop: `3px solid ${item.connected ? '#0d9488' : '#ccc'}` }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
              <span style={{ fontSize: 28 }}>{item.icon}</span>
              <div>
                <h4 style={{ fontSize: 14, fontWeight: 600 }}>{item.name}</h4>
                <span className={`badge ${item.connected ? 'badge-green' : 'badge-red'}`} style={{ fontSize: 10 }}>
                  {item.connected ? 'Ulangan' : 'Ulanmagan'}
                </span>
              </div>
            </div>
            <p style={{ fontSize: 12, color: '#888', marginBottom: 12 }}>{item.desc}</p>
            <button className={`btn ${item.connected ? 'btn-outline' : 'btn-primary'}`} style={{ width: '100%', justifyContent: 'center' }}>
              <ExternalLink size={14} />
              {item.connected ? 'Sozlamalar' : 'Ulash'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
