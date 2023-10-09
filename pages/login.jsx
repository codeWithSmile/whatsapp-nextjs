// import { get, child } from 'firebase/database';
import React from 'react'
// import { ref } from 'firebase/database';
// import { database } from './firebase';
import { useRouter } from 'next/router';
import { auth } from './firebase';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

// import { signInWithEmailAndPassword } from "firebase/auth";
import firebase from './firebase'

function login() {
    const router = useRouter();
    // const [uname, setUname] = useState('');
    // const [pass, setPass] = useState('');

    // const [conditionToRedirect, setConditionToRedirect] = useState(false);


    const signInWithGoogle = async () => {
        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            // Handle the successful login result here if needed
            console.log('Google Sign-In Successful:', result);
            router.push('/sidebar');
        } catch (error) {
            console.error('Google Sign-In Error:', error);
        }
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
                        <h1><center>Login In</center></h1>
                        <button className="login-btn" onClick={signInWithGoogle}>
                            Sign In
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default login
