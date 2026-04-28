import { Users, UserCheck, GraduationCap, CreditCard, Snowflake, AlertCircle, CalendarDays, Settings as SettingsIcon } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { dashboardStats, chartData } from '../data/mockData';

const statIcons: Record<string, React.ReactNode> = {
  users: <Users size={32} color="#5b7fc7" />,
  test: <UserCheck size={32} color="#0d9488" />,
  students: <GraduationCap size={32} color="#5b7fc7" />,
  payments: <CreditCard size={32} color="#0d9488" />,
  frozen: <Snowflake size={32} color="#5b7fc7" />,
  debtors: <AlertCircle size={32} color="#5b7fc7" />,
};

export default function DashboardPage() {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 12, marginBottom: 20 }}>
        <select className="select-field" defaultValue="2026">
          <option>2024</option><option>2025</option><option>2026</option>
        </select>
        <select className="select-field" defaultValue="Aprel">
          <option>Yanvar</option><option>Fevral</option><option>Mart</option>
          <option>Aprel</option><option>May</option><option>Iyun</option>
          <option>Iyul</option><option>Avgust</option><option>Sentabr</option>
          <option>Oktabr</option><option>Noyabr</option><option>Dekabr</option>
        </select>
        <div className="badge-teal badge" style={{ padding: '6px 14px', fontSize: 13 }}>
          <span style={{ marginRight: 4 }}>x</span> TWINS
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 12, marginBottom: 24 }}>
        {dashboardStats.map((stat) => (
          <div key={stat.label} className="card" style={{ textAlign: 'center', padding: '16px 12px' }}>
            <div style={{ marginBottom: 8 }}>{statIcons[stat.icon]}</div>
            <div style={{ fontSize: 11, fontWeight: 600, color: '#555', textTransform: 'uppercase', marginBottom: 6 }}>
              {stat.label}
            </div>
            <div style={{ fontSize: 18, fontWeight: 700, color: '#333' }}>
              {stat.value}
              {stat.extra && (
                <span style={{ fontSize: 11, marginLeft: 4 }}>
                  <span style={{ color: '#28a745' }}>{stat.extra.split('/')[0]}</span>
                  {' / '}
                  <span style={{ color: '#dc3545' }}>{stat.extra.split('/')[1]}</span>
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="card" style={{ marginBottom: 24 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
          <h3 style={{ fontSize: 15, fontWeight: 600 }}>Daromad va chiqimlar oylar kesimida</h3>
          <div style={{ display: 'flex', gap: 8 }}>
            <button className="btn-icon"><CalendarDays size={16} /></button>
            <button className="btn-icon"><SettingsIcon size={16} /></button>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={320}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="month" fontSize={12} />
            <YAxis fontSize={12} tickFormatter={(v) => v >= 1000000 ? `${v / 1000000}M` : v} />
            <Tooltip formatter={(value) => String(value).replace(/\B(?=(\d{3})+(?!\d))/g, ',') + " so'm"} />
            <Legend />
            <Bar dataKey="tolovlar" name="To'lovlar" fill="#7bb3e8" radius={[2, 2, 0, 0]} />
            <Bar dataKey="maosh" name="Maosh" fill="#4dd9b4" radius={[2, 2, 0, 0]} />
            <Bar dataKey="chiqimlar" name="Chiqimlar" fill="#4a6db5" radius={[2, 2, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <button className="btn btn-outline" style={{ borderRadius: 8 }}>
        <CalendarDays size={16} />
        Dars jadvalini ochish
      </button>
    </div>
  );
}
