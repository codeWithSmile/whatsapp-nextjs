import { ref, push } from 'firebase/database';
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import React, { useState } from 'react';
import Router, { useRouter } from 'next/router';
import { database } from './firebase';

// import { auth, database } from './firebase';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [uname, setUname] = useState('');
  const [pass, setPass] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState(0);

  const registrationHandleSubmit = () => {
    if (!name) {
      alert('Name can not be empty');
      return;
    }
    if (!uname) {
      alert('username can not be empty');
      return;
    }
    if (!pass || pass.length < 8) {
      alert('Password must be at least 8 characters long');
      return;
    }
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    if (!emailRegex.test(email)) {
      alert('Email is required. Pattern: abc@gmail.com');
      return;
    }
    // auth.createUserWithUnameAndPass(uname, pass){}

    if (phoneNumber.toString().length !== 10) {
      alert('Please enter a valid 10-digit Phone Number');
      return;
    }
    const usersRef = ref(database, 'users');
    const newUserData = {
      name: name,
      username: uname,
      email: email,
      phoneNumber: phoneNumber
      // Add other user data as needed
    };

    // Push new user data to Firebase database
    push(usersRef, newUserData)
      .then(() => {
        // Redirect to login page after successful registration
        Router.push('/login');
      })
      .catch(error => {
        console.error("Error storing user data: ", error);
      });
  };
  //   Router.push('/login')
  //   // setUname(''),
  //   // setPass('')

  // }


  return (
    <>
      <main className={`${styles.main} ${inter.className}`}>
        <div className='registration-container'>
          <div>
            <label className='reg-label'><b>Name : </b></label>
            <input type='text' className='reg-name' value={name} placeholder='Enter your Full Name' onChange={(e) => setName(e.target.value)} /><br />
          </div>
          <div>
            <label className='reg-label'><b>Username : </b></label>
            <input type='text' className='reg-user' value={uname} placeholder='Enter your username' onChange={(e) => setUname(e.target.value)} /><br />
          </div>
          <div>
            <label className='reg-label'><b>Password : </b></label>
            <input type='text' className='reg-pass' value={pass} placeholder='Enter your password' onChange={(e) => setPass(e.target.value)} /><br />
          </div>
          <div>
            <label className='reg-label'><b>Email Address : </b></label>
            <input type='text' className='reg-email' value={email} placeholder='Enter your email address' onChange={(e) => setEmail(e.target.value)} /><br />
          </div>
          <div>
            <label className='reg-label'><b>Phone Number : </b></label>
            <input type='phone' className='reg-phn' country={'in'} value={phoneNumber} placeholder='Enter your Phone Number' onChange={(e) => setPhoneNumber(e.target.value)} /><br />
          </div>
          <div>
            <button onClick={registrationHandleSubmit} className='reg-btn'><b>Submit</b></button>
          </div>

        </div>
      </main>
    </>
  )
}







