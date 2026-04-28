import GenericListPage from './GenericListPage';

export default function SalaryPage() {
  return (
    <GenericListPage
      title="Ish haqi ro'yhati"
      addButtonText="Ish haqi berish"
      columns={[
        { key: 'index', label: 'T/R', width: '50px' },
        { key: 'hodim', label: 'HODIM' },
        { key: 'summa', label: 'SUMMA' },
        { key: 'sana', label: 'SANA' },
        { key: 'turi', label: 'TURI' },
        { key: 'usul', label: "TO'LOV USULI" },
        { key: 'izoh', label: 'IZOH' },
      ]}
      data={[
        { hodim: 'Nigora Djemilova', summa: "5,000,000 so'm", sana: 'Apr 25, 2026', turi: 'Oylik', usul: 'Naqd pul', izoh: 'Aprel oyi uchun' },
        { hodim: 'Saidaxon', summa: "3,000,000 so'm", sana: 'Apr 25, 2026', turi: 'Oylik', usul: 'Naqd pul', izoh: 'Aprel oyi uchun' },
        { hodim: 'Xoldarova Mohlaroy', summa: "2,500,000 so'm", sana: 'Apr 25, 2026', turi: 'Oylik', usul: 'Plastik karta', izoh: '' },
      ]}
      filters={[
        { placeholder: 'Dan - gacha', width: 180 },
        { placeholder: 'Hodim qidirish', width: 160 },
        { placeholder: "To'lov turi", width: 130 },
      ]}
      totalInfo="Jami: 10,500,000 so'm / 3 ta"
    />
  );
}
