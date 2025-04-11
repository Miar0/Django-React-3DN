import Header from './components/Header'
import HomePage from './pages/HomePage'
import Layout from './components/Layout'
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Modal from './components/Modal'
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'

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
                </Routes>
                <Modal isOpen={modalType !== null} onClose={closeModal}>
                  {modalType === 'login' ? <LoginForm /> : <RegisterForm />}
                </Modal>
            </Layout>
        </Router>
    )
}

export default App
