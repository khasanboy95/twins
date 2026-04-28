import GenericListPage from './GenericListPage';

export default function CashRegisterPage() {
  return (
    <GenericListPage
      title="O'tkazmalar ro'yhati"
      addButtonText="O'tkazma qilish"
      columns={[
        { key: 'index', label: 'T/R', width: '50px' },
        { key: 'sana', label: 'SANA' },
        { key: 'summa', label: 'SUMMA' },
        { key: 'dan', label: 'DAN' },
        { key: 'ga', label: 'GA' },
        { key: 'izoh', label: 'IZOH' },
        { key: 'hodim', label: 'HODIM' },
      ]}
      data={[
        { sana: 'Apr 25, 2026', summa: "1,000,000 so'm", dan: 'Naqd pul', ga: 'Bank hisob', izoh: 'Oylik o\'tkazma', hodim: 'Khusan Djemilov' },
      ]}
      filters={[
        { placeholder: 'Dan - gacha', width: 180 },
        { placeholder: 'Izoh bo\'yicha', width: 160 },
      ]}
    />
  );
}
