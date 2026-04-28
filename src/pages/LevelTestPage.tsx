import { Plus } from 'lucide-react';

export default function LevelTestPage() {
  return (
    <div>
      <div className="page-header">
        <h2 className="page-title">Daraja imtihoni yo'nalishlari</h2>
        <button className="btn-add">
          Yangi yo'nalish qo'shish
          <span className="icon-circle"><Plus size={16} /></span>
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}>
        {[
          { name: 'English Level Test', levels: ['Starter', 'Elementary', 'Pre-intermediate', 'Intermediate', 'Upper-intermediate', 'Advanced'] },
          { name: 'Rus tili Level Test', levels: ['Boshlang\'ich', "O'rta", 'Yuqori'] },
        ].map((test, i) => (
          <div key={i} className="card" style={{ borderTop: '3px solid #5b7fc7' }}>
            <h4 style={{ fontSize: 15, fontWeight: 600, marginBottom: 12 }}>{test.name}</h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {test.levels.map((level, j) => (
                <span key={j} className="badge badge-teal" style={{ fontSize: 11 }}>{level}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
