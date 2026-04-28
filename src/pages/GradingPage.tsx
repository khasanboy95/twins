import { Save } from 'lucide-react';

export default function GradingPage() {
  return (
    <div>
      <h2 className="page-title" style={{ marginBottom: 20 }}>Baholash tizimi</h2>

      <div className="card" style={{ marginBottom: 20 }}>
        <h3 style={{ fontSize: 14, fontWeight: 600, marginBottom: 16, color: '#5b7fc7' }}>Har bir baho uchun tangalar soni</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 12 }}>
          {[
            { grade: '5', coins: 10, color: '#28a745' },
            { grade: '4', coins: 7, color: '#5b7fc7' },
            { grade: '3', coins: 4, color: '#ffc107' },
            { grade: '2', coins: 0, color: '#dc3545' },
            { grade: '1', coins: 0, color: '#6c757d' },
          ].map((item) => (
            <div key={item.grade} className="card" style={{ textAlign: 'center', border: `2px solid ${item.color}` }}>
              <div style={{ fontSize: 28, fontWeight: 700, color: item.color, marginBottom: 8 }}>{item.grade}</div>
              <div style={{ fontSize: 12, color: '#666', marginBottom: 8 }}>Tangalar</div>
              <input className="input-field" type="number" defaultValue={item.coins} style={{ width: 60, textAlign: 'center' }} />
            </div>
          ))}
        </div>
      </div>

      <button className="btn btn-primary">
        <Save size={16} /> Saqlash
      </button>
    </div>
  );
}
