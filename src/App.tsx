import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AdminLayout from './layouts/AdminLayout';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import LidlarPage from './pages/LidlarPage';
import StudentsPage from './pages/StudentsPage';
import GroupsPage from './pages/GroupsPage';
import TeachersPage from './pages/TeachersPage';
import PaymentsPage from './pages/PaymentsPage';
import IncomePage from './pages/IncomePage';
import SalaryPage from './pages/SalaryPage';
import BonusPage from './pages/BonusPage';
import ExpensesPage from './pages/ExpensesPage';
import DebtorsPage from './pages/DebtorsPage';
import CashRegisterPage from './pages/CashRegisterPage';
import CenterSettingsPage from './pages/CenterSettingsPage';
import SettingsPage from './pages/SettingsPage';
import RolesPage from './pages/RolesPage';
import WorkersPage from './pages/WorkersPage';
import RoomsPage from './pages/RoomsPage';
import HolidaysPage from './pages/HolidaysPage';
import PrintSettingsPage from './pages/PrintSettingsPage';
import CoursesPage from './pages/CoursesPage';
import ReasonsPage from './pages/ReasonsPage';
import LevelTestPage from './pages/LevelTestPage';
import GradingPage from './pages/GradingPage';
import ExamTemplatesPage from './pages/ExamTemplatesPage';
import { BuySmsPage, AutoSmsPage, SmsTemplatesPage, SentSmsPage } from './pages/SmsPages';
import { LeadFormsPage, SimpleFormsPage, ReferralFormsPage } from './pages/FormsPage';
import TagsPage from './pages/TagsPage';
import PaymentTypesPage from './pages/PaymentTypesPage';
import IntegrationPage from './pages/IntegrationPage';
import BillingPage from './pages/BillingPage';
import {
  CourseReportPage, TeacherReportPage, CashFlowPage,
  SalaryReportPage, LeadReportPage, RemovedStudentsReportPage,
  AttendanceReportPage, GradesReportPage, ExamReportPage,
  DiscountReportPage, WorkTimeReportPage, JournalsPage,
  CoinsHistoryPage
} from './pages/ReportPages';
import WorkerAttendancePage from './pages/WorkerAttendancePage';
import MarketPage from './pages/MarketPage';
import GenericListPage from './pages/GenericListPage';

function ArchivePage({ title }: { title: string }) {
  return (
    <GenericListPage
      title={`${title} (Arxiv)`}
      columns={[
        { key: 'index', label: 'T/R', width: '50px' },
        { key: 'nomi', label: 'NOMI' },
        { key: 'sana', label: 'ARXIVGA OLINGAN SANA' },
        { key: 'sabab', label: 'SABAB' },
      ]}
      data={[]}
      filters={[
        { placeholder: 'Ism orqali qidirish', width: 180 },
        { placeholder: 'Dan - gacha', width: 160 },
      ]}
    />
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="lidlar" element={<LidlarPage />} />
          <Route path="students" element={<StudentsPage />} />
          <Route path="groups" element={<GroupsPage />} />
          <Route path="teachers" element={<TeachersPage />} />
          {/* Moliya */}
          <Route path="tolovlar" element={<PaymentsPage />} />
          <Route path="daromadlar" element={<IncomePage />} />
          <Route path="ish-haqi" element={<SalaryPage />} />
          <Route path="bonus" element={<BonusPage />} />
          <Route path="xarajatlar" element={<ExpensesPage />} />
          <Route path="qarzdorlar" element={<DebtorsPage />} />
          <Route path="kassa" element={<CashRegisterPage />} />
          {/* Sozlamalar */}
          <Route path="center-setting" element={<CenterSettingsPage />} />
          <Route path="sozlamalar" element={<SettingsPage />} />
          <Route path="roles" element={<RolesPage />} />
          <Route path="workers" element={<WorkersPage />} />
          <Route path="rooms" element={<RoomsPage />} />
          <Route path="bayramlar" element={<HolidaysPage />} />
          <Route path="print" element={<PrintSettingsPage />} />
          <Route path="fans" element={<CoursesPage />} />
          <Route path="sabab" element={<ReasonsPage />} />
          <Route path="level-test" element={<LevelTestPage />} />
          <Route path="davomatlar" element={<GradingPage />} />
          <Route path="imtixon-shablons" element={<ExamTemplatesPage />} />
          <Route path="buysms" element={<BuySmsPage />} />
          <Route path="auto-sms" element={<AutoSmsPage />} />
          <Route path="shablons" element={<SmsTemplatesPage />} />
          <Route path="forms" element={<LeadFormsPage />} />
          <Route path="forms-simple" element={<SimpleFormsPage />} />
          <Route path="referral" element={<ReferralFormsPage />} />
          <Route path="tags" element={<TagsPage />} />
          <Route path="payment-types" element={<PaymentTypesPage />} />
          <Route path="integration" element={<IntegrationPage />} />
          <Route path="billing" element={<BillingPage />} />
          {/* Hisobotlar */}
          <Route path="kurs-samaradorlik" element={<CourseReportPage />} />
          <Route path="teacher-samaradorlik" element={<TeacherReportPage />} />
          <Route path="cash-flow" element={<CashFlowPage />} />
          <Route path="hisobot/ish-haqi" element={<SalaryReportPage />} />
          <Route path="lid-hisobotlari" element={<LeadReportPage />} />
          <Route path="guruhdan-ochirilganlar" element={<RemovedStudentsReportPage />} />
          <Route path="davomat-list" element={<AttendanceReportPage />} />
          <Route path="ball-list" element={<GradesReportPage />} />
          <Route path="imtixon" element={<ExamReportPage />} />
          <Route path="discount" element={<DiscountReportPage />} />
          <Route path="sms-list" element={<SentSmsPage />} />
          <Route path="working-time" element={<WorkTimeReportPage />} />
          <Route path="worker-reports" element={<JournalsPage />} />
          <Route path="coins-history" element={<CoinsHistoryPage />} />
          {/* Xodimlar davomati */}
          <Route path="worker-progol" element={<WorkerAttendancePage />} />
          {/* Arxiv */}
          <Route path="archive/lids" element={<ArchivePage title="Lidlar" />} />
          <Route path="archive/student" element={<ArchivePage title="Talabalar" />} />
          <Route path="archive/teachers" element={<ArchivePage title="O'qituvchilar" />} />
          <Route path="archive/worker" element={<ArchivePage title="Xodimlar" />} />
          <Route path="archive/groups" element={<ArchivePage title="Guruhlar" />} />
          <Route path="archive/tolovlar" element={<ArchivePage title="To'lovlar" />} />
          <Route path="archive/ish-haqi" element={<ArchivePage title="Ish haqi" />} />
          <Route path="archive/xarajatlar" element={<ArchivePage title="Xarajatlar" />} />
          <Route path="archive/daromadlar" element={<ArchivePage title="Qo'shimcha daromadlar" />} />
          <Route path="archive/bonuslar" element={<ArchivePage title="Bonuslar" />} />
          {/* Market */}
          <Route path="market" element={<MarketPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
