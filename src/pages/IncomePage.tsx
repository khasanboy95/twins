import GenericListPage from './GenericListPage';

export default function IncomePage() {
  return (
    <GenericListPage
      title="Daromadlar ro'yhati"
      addButtonText="Daromad qo'shish"
      columns={[
        { key: 'index', label: 'T/R', width: '50px' },
        { key: 'narx', label: 'NARX' },
        { key: 'sana', label: 'SANA' },
        { key: 'sabab', label: 'SABAB' },
        { key: 'usul', label: "TO'LOV USULI" },
        { key: 'hodim', label: 'HODIM' },
      ]}
      data={[
        { narx: "500,000 so'm", sana: 'Apr 20, 2026', sabab: 'Kitoblar sotish', usul: 'Naqd pul', hodim: 'Khusan Djemilov' },
        { narx: "200,000 so'm", sana: 'Apr 15, 2026', sabab: 'Daraja testi', usul: 'Plastik karta', hodim: 'Khusan Djemilov' },
      ]}
      filters={[
        { placeholder: 'Dan - gacha', width: 180 },
        { placeholder: 'Ism orqali qidirish', width: 160 },
        { placeholder: "To'lov turi", width: 130 },
      ]}
      totalInfo="Jami: 700,000 so'm / 2 ta"
    />
  );
}
