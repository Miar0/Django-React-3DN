import Header from './components/Header'
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
            <Header
                onLoginOpen={() => setModalType('login')}
                onRegisterOpen={() => setModalType('register')}
            />

            <Modal isOpen={modalType !== null} onClose={closeModal}>
                {modalType === 'login' ? <LoginForm /> : <RegisterForm />}
            </Modal>
        </Router>
    )
}

export default App
