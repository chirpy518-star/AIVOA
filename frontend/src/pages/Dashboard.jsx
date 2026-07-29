import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import ComplaintForm from '../components/ComplaintForm';
import UploadBox from '../components/UploadBox';
import ChatWindow from '../components/ChatWindow';
import ChatInput from '../components/ChatInput';
import SummaryCard from '../components/SummaryCard';

const Dashboard = () => {
  return (
    <div className="dashboard-page">
      <Navbar />
      <Sidebar />
      <Header />
      <ComplaintForm />
      <UploadBox />
      <ChatWindow />
      <ChatInput />
      <SummaryCard />
    </div>
  );
};

export default Dashboard;
