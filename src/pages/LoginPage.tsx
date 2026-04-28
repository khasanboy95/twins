import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import './LoginPage.css';

export default function LoginPage() {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const formatPhone = (value: string) => {
    const digits = value.replace(/\D/g, '').slice(0, 12);
    if (digits.length === 0) return '';
    let formatted = '+(' + digits.slice(0, 3);
    if (digits.length > 3) formatted += ') ' + digits.slice(3, 5);
    if (digits.length > 5) formatted += '-' + digits.slice(5, 8);
    if (digits.length > 8) formatted += '-' + digits.slice(8, 10);
    if (digits.length > 10) formatted += '-' + digits.slice(10, 12);
    return formatted;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/\D/g, '');
    setPhone(raw);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/admin');
  };

  return (
    <div className="login-page">
      <div className="login-bg-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
      </div>
      <div className="login-card">
        <div className="login-logo">
          <svg width="44" height="44" viewBox="0 0 40 40" fill="none">
            <path d="M8 8h10v10H8z" fill="#5b7fc7" />
            <path d="M22 8h10v10H22z" fill="#5b7fc7" />
            <path d="M8 22h10v10H8z" fill="#5b7fc7" />
            <circle cx="27" cy="13" r="5" fill="#f5c542" />
          </svg>
          <span className="login-logo-text">Twins</span>
        </div>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label className="form-label">Telefon raqam</label>
            <input
              type="text"
              className="form-input"
              placeholder="+(998)-__-___-__-__"
              value={formatPhone(phone)}
              onChange={handlePhoneChange}
            />
          </div>
          <div className="form-group">
            <label className="form-label">Parol</label>
            <div className="password-wrapper">
              <input
                type={showPassword ? 'text' : 'password'}
                className="form-input"
                placeholder="Parolni kiriting"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>
          <button type="submit" className="login-btn">KIRISH</button>
        </form>
      </div>
    </div>
  );
}
