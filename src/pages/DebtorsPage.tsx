import GenericListPage from './GenericListPage';

export default function DebtorsPage() {
  return (
    <GenericListPage
      title="Qarzdorlar ro'yhati"
      columns={[
        { key: 'index', label: 'T/R', width: '50px' },
        { key: 'fish', label: 'FISH' },
        { key: 'telefon', label: 'TELEFON RAQAM' },
        { key: 'guruh', label: 'GURUH' },
        { key: 'balans', label: 'BALANS' },
        { key: 'oqituvchi', label: "O'QITUVCHI" },
      ]}
      data={[
        { fish: 'Abdulahadov Muhammad Ibrohim', telefon: '+(998) 94-773-74-01', guruh: 'HasanMultilevel 2 15/17', balans: '-161,538', oqituvchi: 'Khasan Djemilov' },
        { fish: 'Toshmuhammedov Bahtiyor', telefon: '+(998) 90-123-45-67', guruh: 'Nigora PRE juft 10/12', balans: '-50,000', oqituvchi: 'Nigora Djemilova' },
      ]}
      filters={[
        { placeholder: 'Ism orqali qidirish', width: 180 },
        { placeholder: 'Telefon raqam', width: 160 },
        { placeholder: "Guruhni tanlang", width: 160 },
      ]}
      totalInfo="Jami: 24 ta qarzdor"
    />
  );
}
