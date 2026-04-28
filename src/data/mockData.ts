export const dashboardStats = [
  { label: 'LIDLAR', value: '2', extra: '+30 / -0', icon: 'users' },
  { label: 'SINOV DARSIDA', value: '2', extra: '+27 / -4', icon: 'test' },
  { label: 'FAOL TALABALAR', value: '203 / 213', extra: '+31 / -13', icon: 'students' },
  { label: 'APREL TO\'LAGANLAR', value: '187', icon: 'payments' },
  { label: 'MUZLATILGANLAR', value: '1', icon: 'frozen' },
  { label: 'QARZDORLAR', value: '24', icon: 'debtors' },
];

export const chartData = [
  { month: 'Jan', tolovlar: 53000000, maosh: 12000000, chiqimlar: 8000000 },
  { month: 'Feb', tolovlar: 58000000, maosh: 11000000, chiqimlar: 9500000 },
  { month: 'Mar', tolovlar: 55000000, maosh: 13000000, chiqimlar: 10000000 },
  { month: 'Apr', tolovlar: 52000000, maosh: 9000000, chiqimlar: 7000000 },
  { month: 'May', tolovlar: 0, maosh: 0, chiqimlar: 0 },
  { month: 'Jun', tolovlar: 0, maosh: 0, chiqimlar: 0 },
  { month: 'Jul', tolovlar: 0, maosh: 0, chiqimlar: 0 },
  { month: 'Aug', tolovlar: 0, maosh: 0, chiqimlar: 0 },
  { month: 'Sep', tolovlar: 0, maosh: 0, chiqimlar: 0 },
  { month: 'Okt', tolovlar: 0, maosh: 0, chiqimlar: 0 },
  { month: 'Nov', tolovlar: 0, maosh: 0, chiqimlar: 0 },
  { month: 'Dec', tolovlar: 0, maosh: 0, chiqimlar: 0 },
];

export const leads = [
  { id: 1, name: 'Kozimov Fahriddin', phone: '77 208-37-37', date: '2026-04-25', status: "So'rov" },
  { id: 2, name: 'Mirzajonov Xalilullo', phone: '50 187-43-54', date: '2026-04-10', status: "So'rov" },
];

export const students = [
  { id: 1, name: "Muhtorov Navro'zbek", phone: '+(998) 93-048-23-20', groups: ['Nigora Sefr Juft 08/10'], room: 'Uchinchi xona', balance: 52308, teacher: 'Nigora Djemilova', course: 'Khasan Pre-intermediate (Level 3)' },
  { id: 2, name: 'Hakimova Diyora', phone: '+(998) 99-346-66-83', groups: ['Nigora elementary toq 15/17'], room: 'Ikkinchi xona', balance: 52308, teacher: 'Khasan Djemilov', course: 'Elementary (Level 2) Khasan teacher' },
  { id: 3, name: 'Akramova Marjona', phone: '+(998) 94-930-07-78', groups: ['Nigora elementary toq 15/17'], room: 'Ikkinchi xona', balance: 5769, teacher: 'Khasan Djemilov', course: 'Elementary (Level 2) Khasan teacher' },
  { id: 4, name: 'Abdulahadov Muhammad Ibrohim', phone: '+(998) 94-773-74-01', groups: ['HasanMultilevel 2 15/17'], room: 'Beshinchi xona', balance: -161538, teacher: 'Khasan Djemilov', course: 'Khasan Intermediate (Level 4)' },
  { id: 5, name: "To'lqinova Fotimaxon", phone: '+(998) 94-587-12-27', groups: ['HasanMultilevel 2 15/17'], room: 'Beshinchi xona', balance: 3462, teacher: 'Khasan Djemilov', course: 'Khasan Intermediate (Level 4)' },
  { id: 6, name: 'Hurshidbek Tohirov', phone: '+(998) 99-727-49-72', groups: ['IELTS Upper intermediate'], room: 'Oltinchi xona', balance: 769, teacher: 'Khasan Djemilov', course: 'Khasan Intermediate (Level 4)' },
  { id: 7, name: 'Bozorova Nilufar', phone: '+(998) 99-222-78-75', groups: ['Nigora stater toq 08/10'], room: 'Oltinchi xona', balance: 769, teacher: 'Nigora Djemilova', course: 'Starter' },
  { id: 8, name: 'Sultonova Mohinur', phone: '+(998) 87-708-08-01', groups: ['Ona tili sertificat'], room: "To'rtinchi xona", balance: 0, teacher: 'Gulasal Ona Tili Teacher', course: 'Ona tili sertificat' },
  { id: 9, name: 'Asqarova Dilfura', phone: '+(998) 93-469-09-17', groups: ['Ona tili sertificat'], room: "To'rtinchi xona", balance: 46154, teacher: 'Gulasal Ona Tili Teacher', course: 'Ona tili sertificat' },
  { id: 10, name: 'Sharobidinova Zebuzar', phone: '+(998) 91-176-02-88', groups: ['Ona tili sertificat'], room: "To'rtinchi xona", balance: 46154, teacher: 'Gulasal Ona Tili Teacher', course: 'Ona tili sertificat' },
];

export const groups = [
  { id: 1, name: 'Elementary Saidaxon juft 15/17 [5]', debtors: 0, price: '280,000', time: '15:00 - 17:00', course: 'Yangi Elementry', room: 'Ikkinchi xona', teacher: 'Saidaxon [40 Foiz]', days: ['Seshanba', 'Payshanba'] },
  { id: 2, name: 'Nigora elementary toq 15/17 [2]', debtors: 0, price: '280,000', time: '15:00 - 17:00', course: 'Elementary (Level 2) Khasan teacher', room: 'Ikkinchi xona', teacher: 'Khasan Djemilov [1 Foiz]\nNigora Djemilova [50 Foiz]', days: ['Dushanba', 'Chorshanba'] },
  { id: 3, name: 'Mohlaroy rus tili [5]', debtors: 0, price: '350,000', time: '16:00 - 17:00', course: 'Rus tili', room: 'Birinchi xona', teacher: 'Xoldarova Mohlaroy [50 Foiz]', days: ['Seshanba', 'Payshanba'] },
  { id: 4, name: 'Nigora Starter Yangi [8]', debtors: 0, price: '230,000', time: '15:00 - 16:30', course: 'Starter', room: 'Beshinchi xona', teacher: 'Nigora Djemilova [50 Foiz]', days: ['Seshanba', 'Payshanba'] },
  { id: 5, name: 'Nabiyeva Elementary 08/10 [5]', debtors: 0, price: '280,000', time: '08:00 - 10:00', course: 'Elementary (Level 2) Khasan teacher', room: 'Ikkinchi xona', teacher: 'Nigora Nabiyeva [40 Foiz]', days: ['Seshanba', 'Payshanba'] },
  { id: 6, name: 'Nigora stater toq 08/10 [25]', debtors: 0, price: '230,000', time: '08:00 - 09:30', course: 'Starter', room: 'Oltinchi xona', teacher: 'Nigora Djemilova [50 Foiz]', days: ['Dushanba', 'Chorshanba'] },
  { id: 7, name: 'Nigora beginner toq 13/15 [16]', debtors: 0, price: '250,000', time: '13:00 - 14:30', course: 'Yangi beginner', room: 'Birinchi xona', teacher: 'Nigora Djemilova [50 Foiz]', days: ['Dushanba', 'Chorshanba'] },
  { id: 8, name: 'Ona tili sertificat [12]', debtors: 0, price: '300,000', time: '13:00 - 15:00', course: 'Ona tili sertificat', room: "To'rtinchi xona", teacher: 'Gulasal Ona tili teacher [40 Foiz]', days: ['Seshanba', 'Payshanba'] },
];

export const teachers = [
  { id: 1, name: 'Xoldarova Mohlaroy', groups: 1, phone: '+(998) 90-761-09-36', salary: '50 [Foiz]', birthday: '' },
  { id: 2, name: 'Saidaxon', groups: 1, phone: '+(998) 50-054-26-73', salary: '40 [Foiz]', birthday: '' },
  { id: 3, name: 'Nigora Nabiyeva', groups: 1, phone: '+(998) 77-385-25-08', salary: '40 [Foiz]', birthday: '' },
  { id: 4, name: 'Gulasal Ona tili teacher', groups: 1, phone: '+(998) 88-141-98-03', salary: '50 [Foiz]', birthday: '' },
  { id: 5, name: "Jo'raboyeva Madina", groups: 1, phone: '+(998) 94-431-80-00', salary: '50 [Foiz]', birthday: '2008-08-11' },
  { id: 6, name: 'Mavjuda opa Matematika', groups: 1, phone: '+(998) 94-675-60-19', salary: '50 [Foiz]', birthday: '1961-01-10' },
  { id: 7, name: 'Oydinoy Djemilova', groups: 2, phone: '+(998) 99-067-79-18', salary: '1,000,000 [Summa]', birthday: '2005-02-22' },
  { id: 8, name: 'Nigora Djemilova', groups: 10, phone: '+(998) 99-374-93-86', salary: '50 [Foiz]', birthday: '1993-02-17' },
  { id: 9, name: 'Khasan Djemilov', groups: 5, phone: '+(998) 99-171-95-13', salary: '1 [Foiz]', birthday: '1995-07-13' },
];

export const payments = [
  { id: 1, date: 'Apr 28, 2026', name: 'Muqimov Abdulloh', amount: '350,000', method: 'Naqd pul', teacher: 'Nigora Djemilova', group: 'Nigora PRE juft 10/12', staff: 'Khusan Djemilov' },
  { id: 2, date: 'Apr 28, 2026', name: 'Mirzaahmedova Nigora', amount: '350,000', method: 'Naqd pul', teacher: 'Nigora Djemilova', group: 'Nigora PRE juft 10/12', staff: 'Khusan Djemilov' },
  { id: 3, date: 'Apr 27, 2026', name: "Xakimjonova Mo'mina", amount: '300,000', method: 'Naqd pul', teacher: 'Nigora Djemilova', group: 'Nigora PRE enter juft 1330/1530', staff: 'Khusan Djemilov' },
  { id: 4, date: 'Apr 27, 2026', name: "No'monjonova Madina", amount: '350,000', method: 'Naqd pul', teacher: 'Guruh bilan kelishuv summa', group: 'Hasanboy Yangi ertalab toq Preinter 13/15', staff: 'Khusan Djemilov' },
  { id: 5, date: 'Apr 27, 2026', name: 'Ozodbekov Muhammadjon', amount: '215,000', method: 'Naqd pul', teacher: "Jo'raboyeva Madina", group: 'Mental Arifmetika', staff: 'Khusan Djemilov' },
  { id: 6, date: 'Apr 27, 2026', name: "Yo'ldoshev Oyatillo", amount: '120,000', method: 'Naqd pul', teacher: 'Khasan Djemilov', group: 'IELTS Upper intermediate', staff: 'Khusan Djemilov' },
  { id: 7, date: 'Apr 27, 2026', name: 'Nazirova Nigina', amount: '30,000', method: 'Naqd pul', teacher: 'Nigora Djemilova', group: 'Nigora stater toq 08/10', staff: 'Khusan Djemilov' },
  { id: 8, date: 'Apr 27, 2026', name: 'Soliyev Muhammadyusuf', amount: '85,000', method: 'Plastik karta', teacher: 'Nigora Djemilova', group: 'Nigora PRE juft 10/12', staff: 'Khusan Djemilov' },
];

export const expenses = [
  { id: 1, reason: 'Ofis uchun', amount: '500,000', date: 'Apr 25, 2026', method: 'Naqd pul', staff: 'Khusan Djemilov' },
  { id: 2, reason: 'Internet', amount: '200,000', date: 'Apr 20, 2026', method: 'Plastik karta', staff: 'Khusan Djemilov' },
  { id: 3, reason: 'Qog\'oz va ruchkalar', amount: '150,000', date: 'Apr 15, 2026', method: 'Naqd pul', staff: 'Khusan Djemilov' },
];

export const workers = [
  { id: 1, name: 'Khusan Djemilov', phone: '+(998) 93-449-77-63', role: 'Direktor', salary: '' },
  { id: 2, name: 'Shaxlo Reseption', phone: '+(998) 90-123-45-67', role: 'Reseption', salary: '3,000,000' },
];

export const rooms = [
  { id: 1, name: 'Birinchi xona', capacity: 20 },
  { id: 2, name: 'Ikkinchi xona', capacity: 25 },
  { id: 3, name: 'Uchinchi xona', capacity: 15 },
  { id: 4, name: "To'rtinchi xona", capacity: 20 },
  { id: 5, name: 'Beshinchi xona', capacity: 30 },
  { id: 6, name: 'Oltinchi xona', capacity: 25 },
];

export const courses = [
  { id: 1, name: 'Starter', price: '230,000', duration: '3 oy' },
  { id: 2, name: 'Elementary (Level 2)', price: '280,000', duration: '3 oy' },
  { id: 3, name: 'Pre-intermediate (Level 3)', price: '300,000', duration: '3 oy' },
  { id: 4, name: 'Intermediate (Level 4)', price: '350,000', duration: '3 oy' },
  { id: 5, name: 'Rus tili', price: '350,000', duration: '3 oy' },
  { id: 6, name: 'Ona tili sertificat', price: '300,000', duration: '2 oy' },
  { id: 7, name: 'Mental Arifmetika', price: '250,000', duration: '6 oy' },
  { id: 8, name: 'Matematika', price: '250,000', duration: '3 oy' },
];
