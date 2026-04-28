import { Save } from 'lucide-react';

export default function SettingsPage() {
  return (
    <div>
      <h2 className="page-title" style={{ marginBottom: 20 }}>Sozlamalar</h2>

      <div className="card" style={{ marginBottom: 20 }}>
        <h3 style={{ fontSize: 15, fontWeight: 600, marginBottom: 16, color: '#5b7fc7' }}>Muhim sozlamalar (majburiy)</h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          <div>
            <label className="form-label" style={{ marginBottom: 6, display: 'block', fontSize: 13, color: '#555' }}>
              To'lov qilish
            </label>
            <select className="select-field" style={{ width: '100%' }}>
              <option>Oyiga bir marta</option>
              <option>Har darsda</option>
            </select>
          </div>
          <div>
            <label className="form-label" style={{ marginBottom: 6, display: 'block', fontSize: 13, color: '#555' }}>
              Chegirma qilish
            </label>
            <select className="select-field" style={{ width: '100%' }}>
              <option>Foizda</option>
              <option>Summada</option>
            </select>
          </div>
          <div>
            <label className="form-label" style={{ marginBottom: 6, display: 'block', fontSize: 13, color: '#555' }}>
              Valyuta
            </label>
            <select className="select-field" style={{ width: '100%' }}>
              <option>UZS - So'm</option>
              <option>USD - Dollar</option>
            </select>
          </div>
          <div>
            <label className="form-label" style={{ marginBottom: 6, display: 'block', fontSize: 13, color: '#555' }}>
              Til
            </label>
            <select className="select-field" style={{ width: '100%' }}>
              <option>O'zbekcha</option>
              <option>Ruscha</option>
              <option>Inglizcha</option>
            </select>
          </div>
        </div>
      </div>

      <div className="card" style={{ marginBottom: 20 }}>
        <h3 style={{ fontSize: 15, fontWeight: 600, marginBottom: 16, color: '#5b7fc7' }}>Qo'shimcha sozlamalar</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {[
            "Dars qoldirsa ham to'lov olinsin",
            'Talaba guruhga qo\'shilganda avtomatik SMS yuborilsin',
            "To'lov qilinganda SMS yuborilsin",
            'Qarzdorlar uchun eslatma SMS yuborilsin',
            'Darvoqa kirish tizimini yoqish',
          ].map((label, i) => (
            <label key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 13, cursor: 'pointer' }}>
              <input type="checkbox" defaultChecked={i < 2} />
              {label}
            </label>
          ))}
        </div>
      </div>

      <button className="btn btn-primary">
        <Save size={16} /> Saqlash
      </button>
    </div>
  );
}
