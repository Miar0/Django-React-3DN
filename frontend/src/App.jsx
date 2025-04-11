import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import Layout from './components/Layout'

function App() {
    return (
        <Router>
            <Layout>
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                </Routes>
            </Layout>
        </Router>
    )
}

export default App
