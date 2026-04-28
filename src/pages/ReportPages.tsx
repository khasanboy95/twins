import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';
import GenericListPage from './GenericListPage';

const COLORS = ['#5b7fc7', '#0d9488', '#e8a840', '#dc3545', '#7b1fa2', '#28a745'];

export function CourseReportPage() {
  const data = [
    { name: 'Starter', students: 33, income: 7590000 },
    { name: 'Elementary', students: 45, income: 12600000 },
    { name: 'Pre-intermediate', students: 28, income: 8400000 },
    { name: 'Intermediate', students: 35, income: 12250000 },
    { name: 'Rus tili', students: 5, income: 1750000 },
    { name: 'Ona tili', students: 12, income: 3600000 },
    { name: 'Matematika', students: 8, income: 2000000 },
    { name: 'Mental Arifmetika', students: 3, income: 750000 },
  ];

  return (
    <div>
      <h2 className="page-title" style={{ marginBottom: 20 }}>Kurs samaradorligi hisoboti</h2>
      <div className="filter-bar" style={{ marginBottom: 20 }}>
        <select className="select-field"><option>2026</option></select>
        <select className="select-field"><option>Aprel</option></select>
        <button className="btn btn-outline" style={{ padding: '6px 14px' }}>Tozalash</button>
      </div>
      <div className="card" style={{ marginBottom: 20 }}>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" fontSize={11} />
            <YAxis fontSize={11} />
            <Tooltip />
            <Legend />
            <Bar dataKey="students" name="Talabalar soni" fill="#5b7fc7" radius={[4,4,0,0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="card" style={{ padding: 0, overflow: 'auto' }}>
        <table>
          <thead>
            <tr><th>KURS</th><th>TALABALAR</th><th>DAROMAD</th></tr>
          </thead>
          <tbody>
            {data.map((d, i) => (
              <tr key={i}><td>{d.name}</td><td>{d.students}</td><td>{d.income.toLocaleString()} so'm</td></tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function TeacherReportPage() {
  const data = [
    { name: 'Nigora D.', groups: 10, students: 80, income: 22000000 },
    { name: 'Khasan D.', groups: 5, students: 55, income: 18000000 },
    { name: 'Saidaxon', groups: 1, students: 5, income: 1400000 },
    { name: 'Nabiyeva', groups: 1, students: 5, income: 1400000 },
    { name: 'Mohlaroy', groups: 1, students: 5, income: 1750000 },
    { name: 'Gulasal', groups: 1, students: 12, income: 3600000 },
  ];

  return (
    <div>
      <h2 className="page-title" style={{ marginBottom: 20 }}>O'qituvchi samaradorligi</h2>
      <div className="card" style={{ marginBottom: 20, display: 'flex', gap: 24 }}>
        <div style={{ flex: 1 }}>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={data} dataKey="income" nameKey="name" cx="50%" cy="50%" outerRadius={100} label>
                {data.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
              </Pie>
              <Tooltip formatter={(v) => String(v).replace(/\B(?=(\d{3})+(?!\d))/g, ',') + " so'm"} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="card" style={{ padding: 0, overflow: 'auto' }}>
        <table>
          <thead>
            <tr><th>O'QITUVCHI</th><th>GURUHLAR</th><th>TALABALAR</th><th>DAROMAD</th></tr>
          </thead>
          <tbody>
            {data.map((d, i) => (
              <tr key={i}><td style={{ fontWeight: 500, color: '#5b7fc7' }}>{d.name}</td><td>{d.groups}</td><td>{d.students}</td><td>{d.income.toLocaleString()} so'm</td></tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function CashFlowPage() {
  const data = [
    { month: 'Yan', kirim: 53000000, chiqim: 20000000 },
    { month: 'Fev', kirim: 58000000, chiqim: 20500000 },
    { month: 'Mar', kirim: 55000000, chiqim: 23000000 },
    { month: 'Apr', kirim: 52000000, chiqim: 16000000 },
  ];

  return (
    <div>
      <h2 className="page-title" style={{ marginBottom: 20 }}>Pul oqimi</h2>
      <div className="card" style={{ marginBottom: 20 }}>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis tickFormatter={(v) => `${v / 1000000}M`} />
            <Tooltip formatter={(v) => String(v).replace(/\B(?=(\d{3})+(?!\d))/g, ',') + " so'm"} />
            <Legend />
            <Line type="monotone" dataKey="kirim" name="Kirim" stroke="#0d9488" strokeWidth={2} />
            <Line type="monotone" dataKey="chiqim" name="Chiqim" stroke="#dc3545" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export function SalaryReportPage() {
  return (
    <GenericListPage
      title="Ish haqi hisoboti"
      columns={[
        { key: 'index', label: 'T/R', width: '50px' },
        { key: 'hodim', label: 'HODIM' },
        { key: 'lavozim', label: 'LAVOZIM' },
        { key: 'hisoblangan', label: 'HISOBLANGAN' },
        { key: 'tolangan', label: "TO'LANGAN" },
        { key: 'qoldiq', label: 'QOLDIQ' },
      ]}
      data={[
        { hodim: 'Nigora Djemilova', lavozim: "O'qituvchi", hisoblangan: "5,500,000", tolangan: "5,000,000", qoldiq: "500,000" },
        { hodim: 'Khasan Djemilov', lavozim: "O'qituvchi", hisoblangan: "180,000", tolangan: "0", qoldiq: "180,000" },
        { hodim: 'Saidaxon', lavozim: "O'qituvchi", hisoblangan: "3,360,000", tolangan: "3,000,000", qoldiq: "360,000" },
      ]}
      filters={[
        { placeholder: "Oy tanlang", width: 160 },
        { placeholder: "Hodim qidirish", width: 180 },
      ]}
    />
  );
}

export function LeadReportPage() {
  return (
    <GenericListPage
      title="Lid hisobotlari"
      columns={[
        { key: 'index', label: 'T/R', width: '50px' },
        { key: 'manba', label: 'MANBA' },
        { key: 'sorov', label: "SO'ROV" },
        { key: 'boglanish', label: "BOG'LANISH KERAK" },
        { key: 'jarayon', label: 'JARAYONDA' },
        { key: 'yozildi', label: 'YOZILDI' },
        { key: 'jami', label: 'JAMI' },
      ]}
      data={[
        { manba: 'Instagram', sorov: 5, boglanish: 3, jarayon: 2, yozildi: 1, jami: 11 },
        { manba: 'Telegram', sorov: 3, boglanish: 1, jarayon: 0, yozildi: 0, jami: 4 },
        { manba: "Do'stlar tavsiyasi", sorov: 8, boglanish: 2, jarayon: 1, yozildi: 5, jami: 16 },
      ]}
      filters={[
        { placeholder: "Dan - gacha", width: 180 },
        { placeholder: "Manba bo'yicha", width: 160 },
      ]}
    />
  );
}

export function RemovedStudentsReportPage() {
  return (
    <GenericListPage
      title="Guruhdan o'chirilganlar hisoboti"
      columns={[
        { key: 'index', label: 'T/R', width: '50px' },
        { key: 'fish', label: 'FISH' },
        { key: 'guruh', label: 'GURUH' },
        { key: 'sabab', label: 'SABAB' },
        { key: 'sana', label: 'SANA' },
        { key: 'hodim', label: 'HODIM' },
      ]}
      data={[
        { fish: "Rahimova Gulnora", guruh: 'Starter Yangi', sabab: "Ko'chib ketdi", sana: 'Apr 15, 2026', hodim: 'Khusan Djemilov' },
      ]}
      filters={[
        { placeholder: "Dan - gacha", width: 180 },
        { placeholder: "Guruh bo'yicha", width: 160 },
        { placeholder: "Sabab bo'yicha", width: 150 },
      ]}
    />
  );
}

export function AttendanceReportPage() {
  return (
    <GenericListPage
      title="Davomat hisobotlari"
      columns={[
        { key: 'index', label: 'T/R', width: '50px' },
        { key: 'guruh', label: 'GURUH' },
        { key: 'jami_dars', label: 'JAMI DARS' },
        { key: 'keldi', label: 'KELDI' },
        { key: 'kelmadi', label: 'KELMADI' },
        { key: 'foiz', label: 'FOIZ' },
      ]}
      data={[
        { guruh: 'Nigora elementary toq 15/17', jami_dars: 24, keldi: 45, kelmadi: 3, foiz: '94%' },
        { guruh: 'HasanMultilevel 2 15/17', jami_dars: 24, keldi: 350, kelmadi: 34, foiz: '91%' },
      ]}
      filters={[
        { placeholder: "Dan - gacha", width: 180 },
        { placeholder: "Guruh tanlang", width: 160 },
      ]}
    />
  );
}

export function GradesReportPage() {
  return (
    <GenericListPage
      title="Ballar hisoboti"
      columns={[
        { key: 'index', label: 'T/R', width: '50px' },
        { key: 'guruh', label: 'GURUH' },
        { key: 'urtacha', label: "O'RTACHA BAL" },
        { key: 'eng_yuqori', label: 'ENG YUQORI' },
        { key: 'eng_past', label: 'ENG PAST' },
      ]}
      data={[
        { guruh: 'Nigora elementary toq 15/17', urtacha: '4.2', eng_yuqori: '5.0', eng_past: '3.0' },
        { guruh: 'HasanMultilevel 2 15/17', urtacha: '3.8', eng_yuqori: '5.0', eng_past: '2.0' },
      ]}
      filters={[
        { placeholder: "Dan - gacha", width: 180 },
        { placeholder: "Guruh tanlang", width: 160 },
      ]}
    />
  );
}

export function ExamReportPage() {
  return (
    <GenericListPage
      title="Imtihon hisoboti"
      columns={[
        { key: 'index', label: 'T/R', width: '50px' },
        { key: 'imtihon', label: 'IMTIHON' },
        { key: 'guruh', label: 'GURUH' },
        { key: 'ishtirok', label: 'ISHTIROKCHILAR' },
        { key: 'urtacha', label: "O'RTACHA BAL" },
        { key: 'sana', label: 'SANA' },
      ]}
      data={[
        { imtihon: 'Monthly Test - March', guruh: 'Elementary Saidaxon', ishtirok: 5, urtacha: '78%', sana: 'Mar 30, 2026' },
      ]}
      filters={[
        { placeholder: "Dan - gacha", width: 180 },
        { placeholder: "Guruh tanlang", width: 160 },
      ]}
    />
  );
}

export function DiscountReportPage() {
  return (
    <GenericListPage
      title="Chegirma hisoboti"
      columns={[
        { key: 'index', label: 'T/R', width: '50px' },
        { key: 'fish', label: 'FISH' },
        { key: 'guruh', label: 'GURUH' },
        { key: 'chegirma', label: 'CHEGIRMA' },
        { key: 'turi', label: 'TURI' },
        { key: 'sabab', label: 'SABAB' },
      ]}
      data={[
        { fish: 'Rahimov Sardor', guruh: 'Starter Yangi', chegirma: '20%', turi: 'Foizda', sabab: 'Aka-uka chegirma' },
      ]}
      filters={[
        { placeholder: "Dan - gacha", width: 180 },
        { placeholder: "Guruh tanlang", width: 160 },
      ]}
    />
  );
}

export function WorkTimeReportPage() {
  return (
    <GenericListPage
      title="Ish vaqti hisoboti"
      columns={[
        { key: 'index', label: 'T/R', width: '50px' },
        { key: 'hodim', label: 'HODIM' },
        { key: 'kelish', label: 'KELISH VAQTI' },
        { key: 'ketish', label: 'KETISH VAQTI' },
        { key: 'jami', label: 'JAMI SOAT' },
        { key: 'sana', label: 'SANA' },
      ]}
      data={[
        { hodim: 'Khusan Djemilov', kelish: '08:30', ketish: '18:00', jami: '9.5', sana: 'Apr 28, 2026' },
      ]}
      filters={[
        { placeholder: "Dan - gacha", width: 180 },
        { placeholder: "Hodim tanlang", width: 160 },
      ]}
    />
  );
}

export function JournalsPage() {
  return (
    <GenericListPage
      title="Jurnallar"
      columns={[
        { key: 'index', label: 'T/R', width: '50px' },
        { key: 'hodim', label: 'HODIM' },
        { key: 'amal', label: 'AMAL' },
        { key: 'sana', label: 'SANA' },
        { key: 'vaqt', label: 'VAQT' },
      ]}
      data={[
        { hodim: 'Khusan Djemilov', amal: "To'lov qo'shildi - Muqimov Abdulloh - 350,000 so'm", sana: 'Apr 28, 2026', vaqt: '14:30' },
        { hodim: 'Khusan Djemilov', amal: "Yangi talaba qo'shildi - Rahimov Sardor", sana: 'Apr 27, 2026', vaqt: '10:15' },
      ]}
      filters={[
        { placeholder: "Dan - gacha", width: 180 },
        { placeholder: "Hodim tanlang", width: 160 },
        { placeholder: "Amal bo'yicha", width: 160 },
      ]}
    />
  );
}

export function CoinsHistoryPage() {
  return (
    <GenericListPage
      title="Tanga/Kristal hisoboti"
      columns={[
        { key: 'index', label: 'T/R', width: '50px' },
        { key: 'fish', label: 'FISH' },
        { key: 'tangalar', label: 'TANGALAR' },
        { key: 'kristallar', label: 'KRISTALLAR' },
        { key: 'jami', label: 'JAMI' },
      ]}
      data={[
        { fish: 'Muhtorov Navro\'zbek', tangalar: 150, kristallar: 5, jami: 155 },
        { fish: 'Hakimova Diyora', tangalar: 120, kristallar: 3, jami: 123 },
      ]}
      filters={[
        { placeholder: "Ism orqali qidirish", width: 180 },
        { placeholder: "Guruh tanlang", width: 160 },
      ]}
    />
  );
}
