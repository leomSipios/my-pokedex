import React, {Component} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage'
import DetailPage from './components/DetailPage'

const App = () => {
    return (
        <Router>
            <div className="App">
            <div className='home_link'><Link to={'/'}>Home page</Link></div>
            <Routes>
                <Route path='/' element={<HomePage/>} />
                <Route path='/detail-page' element={<DetailPage/>} />
            </Routes>
            </div>
        </Router>
    )
}

export default App;
