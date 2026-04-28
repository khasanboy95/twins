import GenericListPage from './GenericListPage';

export default function BonusPage() {
  return (
    <GenericListPage
      title="Bonuslar listi"
      addButtonText="Bonus qo'shish"
      columns={[
        { key: 'index', label: 'T/R', width: '50px' },
        { key: 'sana', label: 'SANA' },
        { key: 'hodim', label: 'HODIM' },
        { key: 'summa', label: 'SUMMA' },
        { key: 'sabab', label: 'SABAB' },
        { key: 'usul', label: "TO'LOV USULI" },
      ]}
      data={[
        { sana: 'Apr 20, 2026', hodim: 'Nigora Djemilova', summa: "500,000 so'm", sabab: 'Yangi talabalar uchun', usul: 'Naqd pul' },
      ]}
      filters={[
        { placeholder: 'Dan - gacha', width: 180 },
        { placeholder: 'Hodim qidirish', width: 160 },
      ]}
    />
  );
}
