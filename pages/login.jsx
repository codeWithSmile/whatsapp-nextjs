import { get, child } from 'firebase/database';
import React, { useState, useEffect } from 'react'
import { ref } from 'firebase/database';
import { database } from './firebase';
import { useRouter } from 'next/router';
// import { auth } from './firebase'

function login() {
    const router = useRouter();
    const [uname, setUname] = useState('');
    const [pass, setPass] = useState('');

    // const [conditionToRedirect, setConditionToRedirect] = useState(false);


    const loginHandleClick = () => {
        const trimmedUname = uname.trim();
        const trimmedPass = pass.trim();
        if (!trimmedUname || !trimmedPass) {
            alert('Username and password are required.');
            return;
        }
        const usersRef = ref(database, 'users');

        // Fetch user data from Firebase based on the provided username
        get(child(usersRef, trimmedUname))
            .then(snapshot => {
                const userData = snapshot.val();
                if (userData && userData.password === trimmedPass) {
                    // Authentication successful, redirect to sidebar or user dashboard
                    router.push('/sidebar');
                }
                else {
                    // Authentication failed, show error message
                    alert('Invalid username or password');
                }
            })
            .catch(error => {
                console.error("Error fetching user data: ", error);
                alert('Error occurred during authentication. Please try again later.');
            });
    };

    // useEffect(() => {
    //     if (conditionToRedirect) {
    //         router.push('/sidebar');
    //     }
    // }, [conditionToRedirect, router]);
    //         Router.push('/sidebar')
    //         // setUname(''),
    //         // setPass('')

    //     }

    return (
        <div className='outer-layer'>
            <div className='division'>
                <img src='./Images/whatsapp_icon.jpeg' className='icon' />
                <h2 className='heading1'>WHATSAPP WEB</h2>
            </div>
            <div className='division-box2'>
                <div className='inner-layer'>
                    <div className='A'>
                        <div className='h2'>
                            <h2 >Use WhatsApp on your computer</h2>
                        </div>
                        <ol className='points'>
                            <li >Open WhatsApp on your phone</li>
                            <li >Tap Menu : or Settings and select Linked Devices</li>
                            <li >Tap on link a device</li>
                            <li >Point your phone to this screen to capture the QR code</li>
                        </ol>
                        <p className='green'>Link with phone number</p>
                        <h2 className='grey'>Tutorial</h2>
                        <h5 className='green1'>Need help to get started</h5>
                        <video text-align="center" width="320" height="240" controls>
                            <source src="https://blog.whatsapp.com/whats-app-video-call" type="video/mp4"></source>
                        </video>
                    </div>
                    <div className='login-container'>
                        <div>
                            <label className='label'><b>username : </b></label>
                            <input type='text' className='login-user' value={uname} placeholder='Enter your username' onChange={(e) => setUname(e.target.value)} /><br />
                        </div>
                        <div>
                            <label className='label'><b>password : </b></label>
                            <input type='password' className='login-pass' value={pass} placeholder='Enter your password' onChange={(e) => setPass(e.target.value)} /><br />
                        </div>
                        <div>
                            <button onClick={loginHandleClick} className='login-btn'><b>Login</b></button>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default login
