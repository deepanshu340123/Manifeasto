import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Navbar from './components/main/Navbar';
import Home from './components/main/Home';
import SignIn from './components/main/SignIn';
import SignUp from './components/main/SignUp';
import ForgetPswd from './components/main/ForgetPswd';
import Feedback from './components/main/Feedback';
import Pro_entry from './components/user/Pro_entry';
import Pro_list from './components/main/Pro_list';
import All_Details from './components/user/All_Details';
import Update_Pro from './components/user/Update_Pro';
import Profile_check from './components/main/Profile_check';
import UserProvider from './context/UserProvider'
import UserAuth from './auth/UserAuth'
import AdminProvider from './context/AdminProvider'
import Main from './components/main';
import User from './components/user';

function App() {
  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));
  const [currentAdmin, setCurrentAdmin] = useState(JSON.parse(sessionStorage.getItem('admin')));
  return (
    <BrowserRouter>
      {/* <AdminProvider> */}
      <UserProvider currentUser={currentUser}>
        <Routes>
          
          <Route path='/' element={<Navigate to='/main/homepage' />} />
          <Route element={<Main />} path='main'>
            <Route element={<Home />} path='homepage' />
            <Route element={<SignIn />} path='signin' />
            <Route element={<SignUp />} path='signup' />
            <Route element={<ForgetPswd />} path='forgetpswd' />
            <Route element={<Pro_list />} path='pro_list' />
          </Route>

          <Route element={<UserAuth><User /></UserAuth>} path='user'>
            <Route element={<Feedback />} path='feedback' />
            <Route element={<All_Details />} path='all_details' />
            <Route element={<Pro_entry />} path='pro_entry' />
            <Route element={<Update_Pro />} path='update_pro/:id' />
          </Route>
          {/* <Route element={<Profile_check />} path='profile_check/:id' /> */}
        </Routes>
      </UserProvider>
      {/* </AdminProvider> */}
    </BrowserRouter>
  );
}

export default App;
