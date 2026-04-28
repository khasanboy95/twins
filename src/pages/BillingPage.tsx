export default function BillingPage() {
  return (
    <div>
      <h2 className="page-title" style={{ marginBottom: 20 }}>Hisob-kitoblar</h2>

      <div className="card" style={{ marginBottom: 20 }}>
        <h3 style={{ fontSize: 15, fontWeight: 600, marginBottom: 16, color: '#5b7fc7' }}>Joriy tarif</h3>
        <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: 12, color: '#888' }}>Tarif nomi</div>
            <div style={{ fontSize: 16, fontWeight: 600, color: '#333' }}>Premium</div>
          </div>
          <div>
            <div style={{ fontSize: 12, color: '#888' }}>Muddat</div>
            <div style={{ fontSize: 16, fontWeight: 600, color: '#0d9488' }}>2026-12-31 gacha</div>
          </div>
          <div>
            <div style={{ fontSize: 12, color: '#888' }}>Holat</div>
            <span className="badge badge-green">Faol</span>
          </div>
        </div>
      </div>

      <div className="card" style={{ padding: 0, overflow: 'auto' }}>
        <h3 style={{ fontSize: 15, fontWeight: 600, padding: '16px 20px' }}>To'lovlar tarixi</h3>
        <table>
          <thead>
            <tr>
              <th>T/R</th>
              <th>SANA</th>
              <th>SUMMA</th>
              <th>TARIF</th>
              <th>MUDDAT</th>
              <th>HOLAT</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1.</td>
              <td>Jan 01, 2026</td>
              <td>2,400,000 so'm</td>
              <td>Premium</td>
              <td>12 oy</td>
              <td><span className="badge badge-green">To'langan</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
