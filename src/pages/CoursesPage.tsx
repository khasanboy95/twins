import { Plus, Edit, Trash2, Link } from 'lucide-react';
import { courses } from '../data/mockData';

export default function CoursesPage() {
  return (
    <div>
      <div className="page-header">
        <h2 className="page-title">Kurslar ro'yhati</h2>
        <div className="page-header-right">
          <button className="btn btn-outline">Modullar biriktirish</button>
          <button className="btn-add">
            Kurs qo'shish
            <span className="icon-circle"><Plus size={16} /></span>
          </button>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 16 }}>
        {courses.map((c) => (
          <div key={c.id} className="card" style={{ borderTop: '3px solid #5b7fc7' }}>
            <h4 style={{ fontSize: 15, fontWeight: 600, marginBottom: 12, color: '#333' }}>{c.name}</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6, fontSize: 13, color: '#666' }}>
              <div>Narx: <strong>{c.price} so'm</strong></div>
              <div>Davomiyligi: <strong>{c.duration}</strong></div>
            </div>
            <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
              <button className="btn-icon" style={{ width: 28, height: 28 }}><Edit size={14} /></button>
              <button className="btn-icon" style={{ width: 28, height: 28 }}><Link size={14} /></button>
              <button className="btn-icon" style={{ width: 28, height: 28, color: '#dc3545' }}><Trash2 size={14} /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
