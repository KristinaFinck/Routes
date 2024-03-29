import React, {useState} from 'react';
import styles from "./components/Site.module.css";
import {Adidas} from "./components/pages/Adidas";
import {Puma} from "./components/pages/Puma";
import {Abibas} from "./components/pages/Abibas";
import {Navigate, NavLink, Route, Routes} from "react-router-dom";
import {Error404} from "./components/pages/Error404";
import {Model} from "./components/pages/Model";

const PATH = {
    PAGE1: '/adidas',
    PAGE2: '/puma',
    PAGE3: '/abibas',
    PAGEERROR: '/error404'

} as const

function App() {
    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    <div><NavLink
                        to={PATH.PAGE1}
                        className={({isActive}) => isActive ? styles.active : styles.navLink
                        }>ADIDAS</NavLink></div>
                    <div><NavLink
                        to={PATH.PAGE2}
                        className={({isActive}) => isActive ?  styles.active : styles.navLink
                        }>PUMA</NavLink></div>
                    <div><NavLink
                        to={PATH.PAGE3}
                        className={({isActive}) => isActive ?  styles.active : styles.navLink
                        }
                    >ABIBAS</NavLink></div>
                </div>
                <div className={styles.content}>
                    <Routes>
                        <Route path='/' element={<Navigate to={'page1'}/>}/>

                        <Route path={PATH.PAGE1} element={<Adidas/>}/>
                        <Route path={PATH.PAGE2} element={<Puma/>}/>
                        <Route path={PATH.PAGE3} element={<Abibas/>}/>
                        <Route path={PATH.PAGEERROR} element={<Error404/>}/>

                        {/*<Route path='/*' element={<Navigate to={'/error404'}/>}/>*/}
                        {/*<Route path={'/*'} element={<Navigate to={'page/error'}/>}/>*/}

                        <Route path='/*' element={<Navigate to={PATH.PAGE1}/>}/>
                        <Route path= {'/adidas/:id'} element={<Model/>} />
                    </Routes>
                </div>
            </div>
            <div className={styles.footer}>abibas 2023</div>
        </div>
    );
}


export default App;
