import React, { Suspense } from 'react';
import TopNav from './components/TopNav';
import LeftNavBar from './components/LeftNavBar';
import styles from './App.module.scss';
import {
    BrowserRouter as Router,
    Route,
    Routes } from "react-router-dom";

const ListApp = React.lazy(() => import("listApp/ListApp"));

export default function App({ children }) {
    return (
        <div className={styles['shell-wrapper']}>
            <Router>
                <LeftNavBar />
                <div style={{
                display: 'flex',
                width: '100%',
                flexDirection: 'column'}}>
                    <TopNav />
                    <div style={{
                        width: '100%',
                        height: '100%'
                    }}>
                        <Routes>
                        <Route path="/" element={
                                <h1>Home Page</h1>
                            } />
                            <Route path="/list" element={
                                <Suspense fallback={<h1>Loading</h1>}>
                                    <ListApp />
                                </Suspense>
                            } />
                        </Routes>
                    </div>
                </div>
            </Router>
        </div>
    );
}