import GenericListPage from './GenericListPage';

export default function ExamTemplatesPage() {
  return (
    <GenericListPage
      title="Imtihon shablonlar ro'yxati"
      addButtonText="Yangi shablon qo'shish"
      columns={[
        { key: 'index', label: 'T/R', width: '50px' },
        { key: 'nomi', label: 'NOMI' },
        { key: 'savollar', label: 'SAVOLLAR SONI' },
        { key: 'vaqt', label: 'VAQT (daqiqa)' },
        { key: 'kurs', label: 'KURS' },
      ]}
      data={[
        { nomi: 'Starter Final Exam', savollar: 30, vaqt: 45, kurs: 'Starter' },
        { nomi: 'Elementary Monthly Test', savollar: 20, vaqt: 30, kurs: 'Elementary' },
        { nomi: 'Pre-intermediate Midterm', savollar: 40, vaqt: 60, kurs: 'Pre-intermediate' },
      ]}
    />
  );
}
