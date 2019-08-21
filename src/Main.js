import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Redirect, NavLink } from 'react-router-dom'
import DadDog from '../src/dog/DadDog';
import Admin from '../src/admin/Admin';
import RemoveDog from './admin/RemoveDog';
import AdminLogin from './admin/AdminLogin';
import CreatAdmin from './admin/CreatAdmin';
import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';
import AboutMe from './aboutMe/AbouMe';
import Form from './form/form'; 
import UserDeatails from './admin/user_deatails';

const nav = [
    {
        path: '/homePage',
        component: DadDog,
        name: 'Home page '
    },
    {
        path: '/admin',
        component: Admin,
        name: 'Admin'
    },
    {
        path: '/removeDog',
        component: RemoveDog,
        name: 'To remove dog'
    },
    {
        path: '/login',
        component: AdminLogin,
        name: 'login'
    },
    {
        path: '/creatAdmin',
        component: CreatAdmin,
        name: 'To creat admin'
    },
    {
        path: '/about',
        component: AboutMe,
        name: 'about '
    },
    {
        path: '/contact',
        component: Form,
        name: 'Contact '
    },
    {
        path: '/userContact',
        component: UserDeatails,
        name: 'ShowContact '
    }


]

class Main extends Component {
    constructor(props) {
        super(props);
    }


    render() {

        // let navBar = nav.map((x) => {
        //     return <li><NavLink to={x.path}>{x.name}></NavLink></li>
        // })

        let routers = nav.map((x) => {
            return <Route key={x.path} path={x.path} component={x.component} />
        })

        return (
            <div>
                  <Router>
                  <Navbar/>
                    {/* <ul>
                        {navBar}
                    </ul> */}
                    <div className="main-container">
                        {routers}
                    </div>
                    <Footer/>
                </Router>
            </div>
        )
    }

}
export default Main