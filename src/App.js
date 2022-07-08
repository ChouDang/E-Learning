import './App.scss';
import React from 'react';
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
import { HomeTemplate } from './templates/Home/HomeTemplate';
// import Home from './pages/Home/Home';
import Courses from "./pages/Coures/Courses.jsx"
import AboutUs from "./pages/AboutUs/AboutUs"
import PageNoFound from "./PageNotFound/PageNotFound"
import CourseDetail from "./pages/CourseDetail/CourseDetail"
import { Suspense } from 'react';
import Loading from './Components/Loading/Loading';
import LoginTemplate from './templates/Login/LoginTemplate';
import Login from "./pages/Login/Login"
import Register from "./pages/Register/Register"
import UserProfiles from './pages/UserProfile/UserProfile';
import AdminTemplate from './templates/Admin/AdminTemplate';
import DashBoard from './pages/DashBoard/DashBoard';
import AdminUsers from "./pages/AdminUsers/AdminUsers"
import AdminCourse from "./pages/AdminCourse/AdminCours"
import AddOrUpdateCourse from "./pages/AddOrUpdateCourse/AddOrUpdateCourse"


const Home = React.lazy(() => import('./pages/Home/Home'));



export const history = createBrowserHistory();

function App() {
    return (
        <Suspense
            fallback={<div style={{
                position: "fixed",
                left: "50%",
                top: "35%",
                zIndex: 1000,
            }}>
                <Loading />
            </div>}>
            <BrowserRouter history={history}>
                <Switch >
                    <LoginTemplate path="/login" exact Component={Login} />
                    <LoginTemplate path="/register" exact Component={Register} />

                    <AdminTemplate path="/dashboard" exact Component={DashBoard} />
                    <AdminTemplate path="/adminusers" exact Component={AdminUsers} />
                    <AdminTemplate path="/admincourse" exact Component={AdminCourse} />
                    <AdminTemplate path="/admincourse/:action" exact Component={AddOrUpdateCourse} />


                    <HomeTemplate path="/home" exact Component={Home} />
                    <HomeTemplate path="/courses" exact Component={Courses} />
                    <HomeTemplate path="/course-detail/:maKhoaHoc" exact Component={CourseDetail} />
                    <HomeTemplate path="/aboutus" exact Component={AboutUs} />
                    <HomeTemplate path="/user-profiles/:id" exact Component={UserProfiles} />
                    <HomeTemplate path="/" exact Component={Home} />
                    <HomeTemplate path="" Component={PageNoFound} />
                </Switch>
            </BrowserRouter>
        </Suspense>
    );
}

export default App;
