import { Search, CalendarDays, Bell, CheckSquare } from 'lucide-react';
import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <div className="header-logo">
          <div className="logo-icon">
            <svg width="28" height="28" viewBox="0 0 40 40" fill="none">
              <path d="M8 8h10v10H8z" fill="#5b7fc7" />
              <path d="M22 8h10v10H22z" fill="#5b7fc7" />
              <path d="M8 22h10v10H8z" fill="#5b7fc7" />
              <circle cx="27" cy="13" r="5" fill="#f5c542" />
            </svg>
          </div>
          <span className="logo-text">Twins</span>
        </div>
        <div className="header-search">
          <Search size={16} className="search-icon" />
          <input type="text" placeholder="Qidirish" className="search-input" />
        </div>
      </div>
      <div className="header-right">
        <button className="branch-btn">TWINS</button>
        <button className="header-icon-btn">
          <CalendarDays size={20} />
        </button>
        <button className="header-icon-btn notification-btn">
          <Bell size={20} />
          <span className="notification-dot"></span>
        </button>
        <button className="header-icon-btn">
          <CheckSquare size={20} />
        </button>
        <div className="header-avatar">
          <img src="https://ui-avatars.com/api/?name=KD&background=5b7fc7&color=fff&size=36" alt="User" />
        </div>
      </div>
    </header>
  );
}
