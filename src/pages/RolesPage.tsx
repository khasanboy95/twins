import { Plus, Edit, Trash2 } from 'lucide-react';

const roles = [
  { name: 'Direktor', permissions: 'Barcha huquqlar', color: '#5b7fc7' },
  { name: 'Reseption', permissions: "Talabalar, Lidlar, To'lovlar", color: '#0d9488' },
  { name: "O'qituvchi", permissions: 'Guruhlar, Davomat', color: '#e8a840' },
  { name: 'Buxgalter', permissions: 'Moliya, Hisobotlar', color: '#7b1fa2' },
];

export default function RolesPage() {
  return (
    <div>
      <div className="page-header">
        <h2 className="page-title">Lavozimlar ro'yhati</h2>
        <button className="btn-add">
          Yangi lavozim qo'shish
          <span className="icon-circle"><Plus size={16} /></span>
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}>
        {roles.map((role) => (
          <div key={role.name} className="card" style={{ borderLeft: `4px solid ${role.color}` }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
              <h4 style={{ fontSize: 16, fontWeight: 600, color: role.color }}>{role.name}</h4>
              <div style={{ display: 'flex', gap: 8 }}>
                <button className="btn-icon" style={{ width: 28, height: 28 }}><Edit size={14} /></button>
                <button className="btn-icon" style={{ width: 28, height: 28, color: '#dc3545' }}><Trash2 size={14} /></button>
              </div>
            </div>
            <p style={{ fontSize: 12, color: '#666' }}>{role.permissions}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
