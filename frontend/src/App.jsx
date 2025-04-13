import Header from './components/Header'
import HomePage from './pages/HomePage'
import Layout from './components/Layout'
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Modal from './components/Modal'
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'
import AnnouncementPage from './pages/AnnouncementPage'
import CreateAnnouncementPage from './pages/CreateAnnouncementPage'
import SheltersPage from './pages/SheltersPage'
import ShelterDetailPage from './pages/ShelterDetailPage'
import AnimalDetailPage from "./pages/AnimalDetailPage"
import NewsDetailPage from './pages/NewsDetailPage';
import NewsListPage from './pages/NewsListPage';
import DashboardShelter from './pages/DashboardShelter';
import Footer from './components/Footer'

function App() {
    const [modalType, setModalType] = useState(null)

    const closeModal = () => setModalType(null)

    return (
        <Router>
            <Layout>
               <Header
                  onLoginOpen={() => setModalType('login')}
                  onRegisterOpen={() => setModalType('register')}
                />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/announcements" element={<AnnouncementPage />} />
                    <Route path="/announcements/create" element={<CreateAnnouncementPage />} />
                    <Route path="/animals/:id" element={<AnimalDetailPage />} />
                    <Route path="/news/:id" element={<NewsDetailPage />} />
                    <Route path="/news" element={<NewsListPage />} />
                    <Route path="/shelters" element={<SheltersPage />} />
                    <Route path="/shelters/:id" element={<ShelterDetailPage />} />
                    <Route path="/dashboard/shelter" element={<DashboardShelter />} />

                </Routes>
                <Modal isOpen={modalType !== null} onClose={closeModal}>
                  {modalType === 'login' ? <LoginForm /> : <RegisterForm />}
                </Modal>
                <Footer></Footer>
            </Layout>
        </Router>
    )
}

export default App
