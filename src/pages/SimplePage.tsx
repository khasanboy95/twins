interface SimplePageProps {
  title: string;
  description?: string;
}

export default function SimplePage({ title, description }: SimplePageProps) {
  return (
    <div>
      <h2 className="page-title" style={{ marginBottom: 16 }}>{title}</h2>
      {description && <p style={{ color: '#666', fontSize: 13 }}>{description}</p>}
      <div className="card" style={{ marginTop: 16, textAlign: 'center', padding: 40, color: '#999' }}>
        Ma'lumot topilmadi yoki bo'sh
      </div>
    </div>
  );
}
