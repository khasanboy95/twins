import { Plus, Edit, Trash2 } from 'lucide-react';

export default function PaymentTypesPage() {
  return (
    <div>
      <div className="page-header">
        <h2 className="page-title">To'lov turlari</h2>
        <button className="btn-add">
          Yangi to'lov turi qo'shish
          <span className="icon-circle"><Plus size={16} /></span>
        </button>
      </div>

      <div className="card" style={{ padding: 0, overflow: 'auto' }}>
        <table>
          <thead>
            <tr>
              <th>T/R</th>
              <th>NOMI</th>
              <th>HOLATI</th>
              <th>AMALLAR</th>
            </tr>
          </thead>
          <tbody>
            {[
              { name: 'Naqd pul', active: true },
              { name: 'Plastik karta', active: true },
              { name: "Bank o'tkazma", active: true },
              { name: 'Click', active: false },
              { name: 'Payme', active: false },
            ].map((type, i) => (
              <tr key={i}>
                <td>{i + 1}.</td>
                <td style={{ fontWeight: 500 }}>{type.name}</td>
                <td>
                  <span className={`badge ${type.active ? 'badge-green' : 'badge-red'}`}>
                    {type.active ? 'Faol' : 'Nofaol'}
                  </span>
                </td>
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
    </div>
  );
}
