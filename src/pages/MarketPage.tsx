import { ShoppingBag } from 'lucide-react';

export default function MarketPage() {
  return (
    <div>
      <h2 className="page-title" style={{ marginBottom: 20 }}>Market</h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: 16 }}>
        {[
          { name: "Ingliz tili darslik", price: '50,000', stock: 25, img: '📚' },
          { name: "Ruchka (3 dona)", price: '5,000', stock: 100, img: '🖊️' },
          { name: "Daftar A4", price: '8,000', stock: 50, img: '📓' },
          { name: "Sertifikat blankalari", price: '15,000', stock: 30, img: '📜' },
          { name: "Stiker to'plami", price: '3,000', stock: 200, img: '⭐' },
          { name: "Kubik-Rubik", price: '25,000', stock: 10, img: '🎲' },
        ].map((item, i) => (
          <div key={i} className="card" style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 48, marginBottom: 12 }}>{item.img}</div>
            <h4 style={{ fontSize: 14, fontWeight: 600, marginBottom: 8 }}>{item.name}</h4>
            <div style={{ fontSize: 16, fontWeight: 700, color: '#5b7fc7', marginBottom: 8 }}>{item.price} so'm</div>
            <div style={{ fontSize: 12, color: '#888', marginBottom: 12 }}>Qoldiq: {item.stock} ta</div>
            <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
              <ShoppingBag size={14} /> Sotib olish
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
