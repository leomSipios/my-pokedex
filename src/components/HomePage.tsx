import React, {Component} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Pokemon from './Pokemon'
import DetailPage from './DetailPage'

const HomePage = () => {
    const elements = ["1","2","3","4","5","6","7","8","9"]

    return (
        <div>
            {elements.map((val,index)=> <Link to={'detail-page'} key={index}><Pokemon key={index} id={val}/></Link> )}
        </div>
    )
}

export default HomePage;