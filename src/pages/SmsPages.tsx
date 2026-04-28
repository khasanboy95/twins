import { Plus, Edit, Trash2, ShoppingCart } from 'lucide-react';
import GenericListPage from './GenericListPage';

export function BuySmsPage() {
  return (
    <div>
      <h2 className="page-title" style={{ marginBottom: 20 }}>SMS sotib olish</h2>
      <div className="card" style={{ marginBottom: 20 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16 }}>
          <div style={{ fontSize: 14, color: '#555' }}>Joriy balans:</div>
          <div style={{ fontSize: 20, fontWeight: 700, color: '#0d9488' }}>1,250 ta SMS</div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {[
            { amount: 500, price: '50,000' },
            { amount: 1000, price: '90,000' },
            { amount: 5000, price: '400,000' },
          ].map((pkg) => (
            <div key={pkg.amount} className="card" style={{ textAlign: 'center', border: '1px solid var(--border-color)' }}>
              <div style={{ fontSize: 24, fontWeight: 700, color: '#5b7fc7', marginBottom: 8 }}>{pkg.amount.toLocaleString()} ta</div>
              <div style={{ fontSize: 14, color: '#666', marginBottom: 12 }}>{pkg.price} so'm</div>
              <button className="btn btn-primary" style={{ width: '100%' }}>
                <ShoppingCart size={14} /> Sotib olish
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function AutoSmsPage() {
  return (
    <div>
      <div className="page-header">
        <h2 className="page-title">Avtomatik SMS sozlamalari</h2>
      </div>

      <div className="card" style={{ marginBottom: 16 }}>
        {[
          { name: "To'lov qilinganda", desc: "Talaba to'lov qilganda avtomatik SMS yuboriladi", active: true },
          { name: 'Tug\'ilgan kun', desc: 'Talaba tug\'ilgan kunida tabrik SMS yuboriladi', active: true },
          { name: 'Qarzdorlik eslatma', desc: "Qarzdor talabalarga eslatma SMS yuboriladi", active: false },
          { name: 'Dars boshlanishi', desc: "Dars boshlanishidan oldin eslatma SMS yuboriladi", active: false },
          { name: "Guruhga qo'shilganda", desc: "Talaba yangi guruhga qo'shilganda SMS yuboriladi", active: true },
        ].map((item, i) => (
          <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', borderBottom: i < 4 ? '1px solid var(--border-color)' : 'none' }}>
            <div>
              <div style={{ fontWeight: 500, fontSize: 14, marginBottom: 4 }}>{item.name}</div>
              <div style={{ fontSize: 12, color: '#888' }}>{item.desc}</div>
            </div>
            <label style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}>
              <input type="checkbox" defaultChecked={item.active} />
              <span style={{ fontSize: 12, color: item.active ? '#0d9488' : '#999' }}>
                {item.active ? 'Yoqilgan' : "O'chirilgan"}
              </span>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

export function SmsTemplatesPage() {
  return (
    <div>
      <div className="page-header">
        <h2 className="page-title">SMS shablonlari</h2>
        <button className="btn-add">
          Yangi shablon qo'shish
          <span className="icon-circle"><Plus size={16} /></span>
        </button>
      </div>

      <div className="card" style={{ padding: 0, overflow: 'auto' }}>
        <table>
          <thead>
            <tr>
              <th>T/R</th>
              <th>NOMI</th>
              <th>MATN</th>
              <th>AMALLAR</th>
            </tr>
          </thead>
          <tbody>
            {[
              { name: "To'lov tasdiqlash", text: "Hurmatli {ism}, {summa} so'm to'lov qabul qilindi. Rahmat!" },
              { name: "Tug'ilgan kun", text: "Hurmatli {ism}, tug'ilgan kuningiz muborak!" },
              { name: 'Eslatma', text: "Hurmatli {ism}, ertaga soat {vaqt} da darsingiz bor." },
            ].map((t, i) => (
              <tr key={i}>
                <td>{i + 1}.</td>
                <td style={{ fontWeight: 500 }}>{t.name}</td>
                <td style={{ fontSize: 12, color: '#666', maxWidth: 300 }}>{t.text}</td>
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

export function SentSmsPage() {
  return (
    <GenericListPage
      title="Yuborilgan SMSlar"
      columns={[
        { key: 'index', label: 'T/R', width: '50px' },
        { key: 'sana', label: 'SANA' },
        { key: 'qabul', label: 'QABUL QILUVCHI' },
        { key: 'telefon', label: 'TELEFON' },
        { key: 'matn', label: 'MATN' },
        { key: 'holat', label: 'HOLAT' },
      ]}
      data={[
        { sana: 'Apr 28, 2026', qabul: 'Muqimov Abdulloh', telefon: '+(998) 93-048-23-20', matn: "350,000 so'm to'lov qabul qilindi", holat: 'Yuborildi' },
        { sana: 'Apr 27, 2026', qabul: 'Ozodbekov Muhammadjon', telefon: '+(998) 94-930-07-78', matn: "215,000 so'm to'lov qabul qilindi", holat: 'Yuborildi' },
      ]}
      filters={[
        { placeholder: 'Dan - gacha', width: 180 },
        { placeholder: 'Telefon raqam', width: 160 },
        { placeholder: 'Holat bo\'yicha', width: 140 },
      ]}
    />
  );
}
