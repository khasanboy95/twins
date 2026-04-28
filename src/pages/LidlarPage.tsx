import { Plus, Phone, Calendar, MessageSquare, Mail, Filter, Settings, Layers } from 'lucide-react';
import { leads } from '../data/mockData';

const columns = [
  { id: 'sorov', title: "So'rov", color: '#5b7fc7' },
  { id: 'boglanish', title: "Bog'lanish Kerak", color: '#5b7fc7' },
  { id: 'jarayonda', title: 'Jarayonda', color: '#5b7fc7' },
  { id: 'darsga', title: 'Darsga Yozildi', color: '#5b7fc7' },
];

export default function LidlarPage() {
  return (
    <div>
      <div className="filter-bar" style={{ gap: 10, marginBottom: 20 }}>
        <input className="input-field" placeholder="Ism yoki telefon raqam" style={{ width: 200 }} />
        <input className="input-field" type="date" placeholder="Dan - gacha" style={{ width: 180 }} />
        <select className="select-field" style={{ width: 160 }}>
          <option value="">Kurs bo'yicha</option>
        </select>
        <input className="input-field" placeholder="Formalar" style={{ width: 140 }} />
        <input className="input-field" placeholder="Teglar" style={{ width: 140 }} />
        <input className="input-field" placeholder="Xodimlar bo'yicha" style={{ width: 160 }} />
        <div style={{ marginLeft: 'auto', display: 'flex', gap: 8 }}>
          <button className="btn-icon" style={{ background: '#5b7fc7', color: 'white', border: 'none' }}><Filter size={16} /></button>
          <button className="btn-icon" style={{ background: '#e8a840', color: 'white', border: 'none' }}><Filter size={16} /></button>
          <button className="btn-icon" style={{ background: '#5b7fc7', color: 'white', border: 'none' }}><Settings size={16} /></button>
          <button className="btn-icon"><Layers size={16} /></button>
        </div>
      </div>
      <div className="filter-bar" style={{ marginBottom: 20 }}>
        <select className="select-field" style={{ width: 200 }}>
          <option value="">Mas'ul xodim bo'yicha</option>
        </select>
      </div>

      <div className="kanban-board">
        {columns.map((col) => {
          const colLeads = col.id === 'sorov' ? leads : [];
          return (
            <div key={col.id} className="kanban-column">
              <div className="kanban-column-header">
                <span>{col.title} ({colLeads.length})</span>
                {col.id === 'sorov' && (
                  <button className="btn btn-primary" style={{ padding: '4px 12px', fontSize: 12 }}>
                    <Plus size={14} /> Qo'shish
                  </button>
                )}
                {col.id === 'darsga' && (
                  <button style={{ width: 28, height: 28, borderRadius: '50%', background: '#5b7fc7', color: 'white', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                    <Plus size={14} />
                  </button>
                )}
              </div>
              {colLeads.map((lead) => (
                <div key={lead.id} className="kanban-card">
                  <div className="name">
                    <span style={{ color: '#5b7fc7' }}>&#8226;</span>
                    {lead.name}
                    <div style={{ marginLeft: 'auto', display: 'flex', gap: 4 }}>
                      <Mail size={14} color="#888" />
                    </div>
                  </div>
                  <div className="phone">
                    <Phone size={12} /> {lead.phone}
                    <MessageSquare size={14} color="#5b7fc7" style={{ marginLeft: 'auto' }} />
                  </div>
                  <div className="date">
                    <Calendar size={12} /> {lead.date}
                  </div>
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}
