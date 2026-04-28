import GenericListPage from './GenericListPage';

export default function WorkerAttendancePage() {
  return (
    <GenericListPage
      title="Xodimlar davomati"
      columns={[
        { key: 'index', label: 'T/R', width: '50px' },
        { key: 'fish', label: 'FISH' },
        { key: 'lavozim', label: 'LAVOZIM' },
        { key: 'kelgan', label: 'KELGAN KUNLAR' },
        { key: 'kelmagan', label: 'KELMAGAN' },
        { key: 'foiz', label: 'DAVOMAT %' },
      ]}
      data={[
        { fish: 'Khusan Djemilov', lavozim: 'Direktor', kelgan: 22, kelmagan: 0, foiz: '100%' },
        { fish: 'Nigora Djemilova', lavozim: "O'qituvchi", kelgan: 20, kelmagan: 2, foiz: '91%' },
        { fish: 'Saidaxon', lavozim: "O'qituvchi", kelgan: 22, kelmagan: 0, foiz: '100%' },
      ]}
      filters={[
        { placeholder: "Oy tanlang", width: 160 },
        { placeholder: "Hodim qidirish", width: 180 },
        { placeholder: "Lavozim", width: 140 },
      ]}
    />
  );
}
