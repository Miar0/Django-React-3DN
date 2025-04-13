import Header from './components/Header'
import HomePage from './pages/HomePage'
import Layout from './components/Layout'
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Modal from './components/Modal'
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'
import AnnouncementPage from './pages/AnnouncementPage'
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
