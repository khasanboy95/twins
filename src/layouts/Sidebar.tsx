import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  LayoutDashboard, Users, GraduationCap, UsersRound, UserCheck,
  Wallet, Settings, BarChart3, Clock, Archive, ShoppingBag,
  ChevronDown, ChevronLeft, CreditCard, HandCoins, Banknote,
  Gift, Receipt, AlertCircle, Landmark,
  Building, Briefcase, UserCog, DoorOpen, CalendarHeart, Printer,
  BookOpen, BookOpenCheck, ClipboardList, Award, FileText,
  ShoppingCart, Send, Bot, FileCode,
  FileStack, FileSpreadsheet, Tag, CreditCard as PaymentIcon,
  Puzzle, Calculator,
  TrendingUp, PieChart, DollarSign, Coins,
  UserX, CalendarCheck, Trophy, Percent, Mail, Timer, ScrollText, Gem,
  UsersRound as ArchUsers
} from 'lucide-react';
import './Sidebar.css';

interface SubMenuItem {
  label: string;
  path: string;
  icon: React.ReactNode;
}

interface SubGroup {
  label: string;
  items: SubMenuItem[];
}

interface MenuItem {
  label: string;
  path: string;
  icon: React.ReactNode;
  children?: (SubMenuItem | SubGroup)[];
}

const menuItems: MenuItem[] = [
  { label: 'Dashboard', path: '/admin', icon: <LayoutDashboard size={18} /> },
  { label: 'Lidlar', path: '/admin/lidlar', icon: <Users size={18} /> },
  { label: 'Talabalar', path: '/admin/students', icon: <GraduationCap size={18} /> },
  { label: 'Guruhlar', path: '/admin/groups', icon: <UsersRound size={18} /> },
  { label: "O'qituvchilar", path: '/admin/teachers', icon: <UserCheck size={18} /> },
  {
    label: 'Moliya', path: '#', icon: <Wallet size={18} />,
    children: [
      { label: "To'lovlar", path: '/admin/tolovlar', icon: <CreditCard size={16} /> },
      { label: "Qo'shimcha daromadlar", path: '/admin/daromadlar', icon: <HandCoins size={16} /> },
      { label: 'Ish haqi', path: '/admin/ish-haqi', icon: <Banknote size={16} /> },
      { label: 'Bonuslar', path: '/admin/bonus', icon: <Gift size={16} /> },
      { label: 'Xarajatlar', path: '/admin/xarajatlar', icon: <Receipt size={16} /> },
      { label: 'Qarzdorlar', path: '/admin/qarzdorlar', icon: <AlertCircle size={16} /> },
      { label: 'Kassa', path: '/admin/kassa', icon: <Landmark size={16} /> },
    ]
  },
  {
    label: 'Sozlamalar', path: '#', icon: <Settings size={18} />,
    children: [
      { label: "Markaz ma'lumotlari", path: '/admin/center-setting', icon: <Building size={16} /> },
      { label: 'Umumiy sozlamalar', path: '/admin/sozlamalar', icon: <Settings size={16} /> },
      {
        label: 'Ofis',
        items: [
          { label: 'Lavozimlar', path: '/admin/roles', icon: <Briefcase size={16} /> },
          { label: 'Xodimlar', path: '/admin/workers', icon: <UserCog size={16} /> },
          { label: 'Xonalar', path: '/admin/rooms', icon: <DoorOpen size={16} /> },
          { label: 'Bayram kunlari', path: '/admin/bayramlar', icon: <CalendarHeart size={16} /> },
          { label: 'Chek sozlama', path: '/admin/print', icon: <Printer size={16} /> },
        ]
      },
      {
        label: "O'quv bo'limi",
        items: [
          { label: 'Kurslar', path: '/admin/fans', icon: <BookOpen size={16} /> },
          { label: 'Sabablar', path: '/admin/sabab', icon: <ClipboardList size={16} /> },
          { label: 'Daraja testi', path: '/admin/level-test', icon: <Award size={16} /> },
          { label: 'Ballar', path: '/admin/davomatlar', icon: <BookOpenCheck size={16} /> },
          { label: 'Imtihon shablonlar', path: '/admin/imtixon-shablons', icon: <FileText size={16} /> },
        ]
      },
      {
        label: 'SMS',
        items: [
          { label: 'Sms sotib olish', path: '/admin/buysms', icon: <ShoppingCart size={16} /> },
          { label: 'Auto sms', path: '/admin/auto-sms', icon: <Bot size={16} /> },
          { label: 'Shablonlar', path: '/admin/shablons', icon: <FileCode size={16} /> },
        ]
      },
      {
        label: 'Formalar',
        items: [
          { label: 'Lid formalar', path: '/admin/forms', icon: <FileStack size={16} /> },
          { label: 'Oddiy forma', path: '/admin/forms-simple', icon: <FileSpreadsheet size={16} /> },
          { label: 'Referral formalar', path: '/admin/referral', icon: <Send size={16} /> },
        ]
      },
      { label: 'Teglar', path: '/admin/tags', icon: <Tag size={16} /> },
      { label: "To'lov turlari", path: '/admin/payment-types', icon: <PaymentIcon size={16} /> },
      { label: 'Integratsiyalar', path: '/admin/integration', icon: <Puzzle size={16} /> },
      { label: 'Hisob-kitoblar', path: '/admin/billing', icon: <Calculator size={16} /> },
    ]
  },
  {
    label: 'Hisobotlar', path: '#', icon: <BarChart3 size={18} />,
    children: [
      {
        label: 'Moliyaviy hisobotlar',
        items: [
          { label: 'Kurs hisoboti', path: '/admin/kurs-samaradorlik', icon: <TrendingUp size={16} /> },
          { label: "O'qituvchi samaradorligi", path: '/admin/teacher-samaradorlik', icon: <PieChart size={16} /> },
          { label: 'Pul oqimi', path: '/admin/cash-flow', icon: <DollarSign size={16} /> },
          { label: 'Ish haqi hisoboti', path: '/admin/hisobot/ish-haqi', icon: <Coins size={16} /> },
        ]
      },
      { label: 'Lid hisobotlari', path: '/admin/lid-hisobotlari', icon: <Users size={16} /> },
      { label: "Guruhdan o'chirilganlar", path: '/admin/guruhdan-ochirilganlar', icon: <UserX size={16} /> },
      { label: 'Davomat hisobotlar', path: '/admin/davomat-list', icon: <CalendarCheck size={16} /> },
      { label: 'Ballar hisoboti', path: '/admin/ball-list', icon: <Trophy size={16} /> },
      { label: 'Imtihon hisoboti', path: '/admin/imtixon', icon: <FileText size={16} /> },
      { label: 'Chegirma hisoboti', path: '/admin/discount', icon: <Percent size={16} /> },
      { label: 'Yuborilgan SMSlar', path: '/admin/sms-list', icon: <Mail size={16} /> },
      { label: 'Ish vaqti hisoboti', path: '/admin/working-time', icon: <Timer size={16} /> },
      { label: 'Jurnallar', path: '/admin/worker-reports', icon: <ScrollText size={16} /> },
      { label: 'Tanga/Kristal hisoboti', path: '/admin/coins-history', icon: <Gem size={16} /> },
    ]
  },
  { label: 'Xodimlar davomati', path: '/admin/worker-progol', icon: <Clock size={18} /> },
  {
    label: 'Arxiv', path: '#', icon: <Archive size={18} />,
    children: [
      { label: 'Lidlar', path: '/admin/archive/lids', icon: <Users size={16} /> },
      { label: 'Talabalar', path: '/admin/archive/student', icon: <GraduationCap size={16} /> },
      { label: "O'qituvchilar", path: '/admin/archive/teachers', icon: <UserCheck size={16} /> },
      { label: 'Xodimlar', path: '/admin/archive/worker', icon: <ArchUsers size={16} /> },
      { label: 'Guruhlar', path: '/admin/archive/groups', icon: <UsersRound size={16} /> },
      {
        label: 'Moliya',
        items: [
          { label: "To'lovlar", path: '/admin/archive/tolovlar', icon: <CreditCard size={16} /> },
          { label: 'Ish haqi', path: '/admin/archive/ish-haqi', icon: <Banknote size={16} /> },
          { label: 'Xarajatlar', path: '/admin/archive/xarajatlar', icon: <Receipt size={16} /> },
          { label: "Qo'shimcha daromadlar", path: '/admin/archive/daromadlar', icon: <HandCoins size={16} /> },
          { label: 'Bonuslar', path: '/admin/archive/bonuslar', icon: <Gift size={16} /> },
        ]
      },
    ]
  },
  { label: 'Market', path: '/admin/market', icon: <ShoppingBag size={18} /> },
];

function isSubGroup(item: SubMenuItem | SubGroup): item is SubGroup {
  return 'items' in item;
}

export default function Sidebar() {
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({});
  const [openSubGroups, setOpenSubGroups] = useState<Record<string, boolean>>({});
  const location = useLocation();

  const toggleMenu = (label: string) => {
    setOpenMenus(prev => ({ ...prev, [label]: !prev[label] }));
  };

  const toggleSubGroup = (label: string) => {
    setOpenSubGroups(prev => ({ ...prev, [label]: !prev[label] }));
  };

  const isActive = (path: string) => location.pathname === path;
  const isParentActive = (item: MenuItem) => {
    if (!item.children) return false;
    return item.children.some(child => {
      if (isSubGroup(child)) {
        return child.items.some(sub => isActive(sub.path));
      }
      return isActive(child.path);
    });
  };

  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        <ul className="sidebar-menu">
          <li className="sidebar-collapse-btn">
            <ChevronLeft size={16} />
            <span>Yopish</span>
          </li>
          {menuItems.map((item) => (
            <li key={item.label} className={`sidebar-item ${isParentActive(item) ? 'parent-active' : ''}`}>
              {item.children ? (
                <>
                  <button
                    className={`sidebar-link has-submenu ${openMenus[item.label] || isParentActive(item) ? 'open' : ''}`}
                    onClick={() => toggleMenu(item.label)}
                  >
                    <span className="sidebar-icon">{item.icon}</span>
                    <span className="sidebar-label">{item.label}</span>
                    <ChevronDown size={14} className={`submenu-arrow ${openMenus[item.label] || isParentActive(item) ? 'rotated' : ''}`} />
                  </button>
                  {(openMenus[item.label] || isParentActive(item)) && (
                    <ul className="submenu">
                      {item.children.map((child) => {
                        if (isSubGroup(child)) {
                          return (
                            <li key={child.label} className="subgroup">
                              <button
                                className={`subgroup-toggle ${openSubGroups[child.label] ? 'open' : ''}`}
                                onClick={() => toggleSubGroup(child.label)}
                              >
                                <span>{child.label}</span>
                                <ChevronDown size={12} className={openSubGroups[child.label] ? 'rotated' : ''} />
                              </button>
                              {openSubGroups[child.label] && (
                                <ul className="subgroup-menu">
                                  {child.items.map(sub => (
                                    <li key={sub.path}>
                                      <NavLink to={sub.path} className={({ isActive: active }) => `submenu-link ${active ? 'active' : ''}`}>
                                        {sub.icon}
                                        <span>{sub.label}</span>
                                      </NavLink>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </li>
                          );
                        }
                        return (
                          <li key={child.path}>
                            <NavLink to={child.path} className={({ isActive: active }) => `submenu-link ${active ? 'active' : ''}`}>
                              {child.icon}
                              <span>{child.label}</span>
                            </NavLink>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </>
              ) : (
                <NavLink
                  to={item.path}
                  end={item.path === '/admin'}
                  className={({ isActive: active }) => `sidebar-link ${active ? 'active' : ''}`}
                >
                  <span className="sidebar-icon">{item.icon}</span>
                  <span className="sidebar-label">{item.label}</span>
                </NavLink>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
