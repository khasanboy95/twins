import { Plus, Edit, Trash2, Copy, ExternalLink } from 'lucide-react';

export function LeadFormsPage() {
  return (
    <div>
      <div className="page-header">
        <h2 className="page-title">Lid formalar</h2>
        <button className="btn-add">
          Yangi forma qo'shish
          <span className="icon-circle"><Plus size={16} /></span>
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 16 }}>
        {[
          { name: 'Asosiy lid forma', leads: 15, active: true },
          { name: 'Instagram reklama', leads: 8, active: true },
          { name: 'Telegram bot', leads: 3, active: false },
        ].map((form, i) => (
          <div key={i} className="card" style={{ borderLeft: `3px solid ${form.active ? '#0d9488' : '#ccc'}` }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
              <h4 style={{ fontSize: 14, fontWeight: 600 }}>{form.name}</h4>
              <span className={`badge ${form.active ? 'badge-green' : 'badge-red'}`}>
                {form.active ? 'Faol' : 'Nofaol'}
              </span>
            </div>
            <p style={{ fontSize: 12, color: '#888', marginBottom: 12 }}>Jami: {form.leads} ta lid</p>
            <div style={{ display: 'flex', gap: 8 }}>
              <button className="btn-icon" style={{ width: 28, height: 28 }}><ExternalLink size={14} /></button>
              <button className="btn-icon" style={{ width: 28, height: 28 }}><Copy size={14} /></button>
              <button className="btn-icon" style={{ width: 28, height: 28 }}><Edit size={14} /></button>
              <button className="btn-icon" style={{ width: 28, height: 28, color: '#dc3545' }}><Trash2 size={14} /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function SimpleFormsPage() {
  return (
    <div>
      <div className="page-header">
        <h2 className="page-title">Oddiy formalar</h2>
        <button className="btn-add">
          Yangi forma qo'shish
          <span className="icon-circle"><Plus size={16} /></span>
        </button>
      </div>
      <div className="card" style={{ textAlign: 'center', padding: 40, color: '#999' }}>
        Hozircha oddiy formalar mavjud emas
      </div>
    </div>
  );
}

export function ReferralFormsPage() {
  return (
    <div>
      <div className="page-header">
        <h2 className="page-title">Referral formalar</h2>
        <button className="btn-add">
          Yangi referral qo'shish
          <span className="icon-circle"><Plus size={16} /></span>
        </button>
      </div>
      <div className="card" style={{ textAlign: 'center', padding: 40, color: '#999' }}>
        Hozircha referral formalar mavjud emas
      </div>
    </div>
  );
}
