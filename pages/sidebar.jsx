
import React, { useState, useEffect } from 'react';
// import { ref, push, set, onValue } from 'firebase/database';
import { FaEllipsisV, FaUsers, FaCommentDots, FaRegSmile, FaSearch } from 'react-icons/fa';
import { auth } from './firebase';
import { database } from './firebase';
import axios from 'axios';
// import Chat from './chat';

function Sidebar() {
    const [contacts, setContacts] = useState([]);
    // const [searchName, setSearchName] = useState('');
    // const [searchResult, setSearchResult] = useState('');
    const [selectedContact, setSelectedContact] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    // const user = auth.currentUser;

    const handleChatChange = (e) => {
        setSearchQuery(e.target.value);
    }
    const filteredContacts = contacts.filter((contact) =>
        contact.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    const handleSearchClick = () => {
        setSearchQuery(searchQuery);
        setSearchQuery('');

    }
    // const handleSearchClick = () => {
    //     if (user && user.uid && searchName.trim() !== '') {
    //         const chatRef = ref(database, 'chats'); // 'chats' is the name of your chat collection in Firebase
    //         const newMessageRef = push(chatRef);
    //         const messageData = {
    //             sender: user.uid, // Use the UID of the sender as the sender ID
    //             receiver: 'receiver_user_uid', // Replace 'receiver_user_uid' with the UID of the receiver
    //             message: searchName,
    //             timestamp: Date.now(),
    //             // Add other necessary fields like sender name, receiver name, etc.
    //         };

    //         set(newMessageRef, messageData);
    //         setSearchName('');
    //     }
    // }
    const handleContactClick = (contactId) => {
        // Set the selected contact's unique identifier in the state
        setSelectedContact(contactId);
    };
    useEffect(() => {
        // Fetch contacts from the API when the component mounts
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                setContacts(response.data);
            })
            .catch(error => {
                console.error('Error fetching contacts:', error);
            });
    }, []);
    // useEffect(() => {
    //     if (user) {
    //         const contactsRef = ref(database, 'contacts'); // 'contacts' is the name of your contacts collection in Firebase

    //         const unsubscribe = onValue(contactsRef, (snapshot) => {
    //             const data = snapshot.val();
    //             if (data) {
    //                 const contactsArray = Object.values(data);
    //                 console.log('Contacts Array:', contactsArray);
    //                 setContacts(contactsArray);
    //             } else {
    //                 setContacts([]);
    //             }
    //         });

    //         return () => {
    //             // Unsubscribe from the contactsRef when the component unmounts
    //             unsubscribe();
    //         };
    //     }
    // }, [user]);
    return (

        <div className='s-container'>
            <div className='side-container'>
                <>
                    <div>
                        <div className='top'>
                            <span className='flex'>
                                <img src="./Images/musfinal1.jpg" className='img' />
                                <pre>Muskan Daruka</pre>
                            </span>
                            <span className='icons1'>
                                <FaUsers style={{ fontSize: '24px', marginRight: '10px' }} />
                                <FaCommentDots style={{ fontSize: '24px', marginRight: '10px' }} />
                                <FaRegSmile style={{ fontSize: '24px', marginRight: '10px' }} />
                                <FaEllipsisV style={{ fontSize: '24px', marginRight: '10px' }} />
                            </span>
                        </div>
                    </div>

                    <div className='middle1'>
                        <div className='search1'>
                            <input type='text' placeholder='Search or start new chat' value={searchQuery} className='input1' onChange={handleChatChange} />
                            <button onClick={handleSearchClick}
                                style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}>
                                <FaSearch style={{ fontSize: '20px', marginRight: '10px' }} />
                            </button>
                        </div>
                    </div>

                    <div className='bottom1'>
                        {/* <div className='flex'>
                            <img src="./Images/musfinal1.jpg" className='img' />
                            <p>Muskan</p>
                        </div>
                        <hr />
                        <div className='flexx'>
                            <img src="./Images/Manavpic.jpeg" className='img' />
                            <p>Manav</p>
                        </div>
                        <hr />
                        <div className='flexx'>
                            <img src="./Images/Beautiful_View.jpeg" className='img' />
                            <p>Mumma</p>
                        </div>
                        <hr />
                        <div className='flexx'>
                            <img src="./Images/Beautiful_View.jpeg" className='img' />
                            <p >Papa</p>
                        </div> */}
                        {/* {contacts.map((contact, index) => (
                            <div key={index} className='flexx'>
                                <img src={contact.profilePicture} className='img' />
                                <p>{contact.name}</p>
                            </div>
                        ))}
                        <hr />
                        {searchResult && (
                            <div className='search-result'>
                                Search Result: {searchResult}
                            </div>
                        )}
                        <div className='contacts'>
                            {contacts.map((contact) => (
                                <div
                                    key={contact.id}
                                    className={`contact ${selectedContact === contact.id ? 'selected' : ''}`}
                                    onClick={() => handleContactClick(contact.id)}
                                >
                                    {contact.name}
                                </div>
                            ))}
                        </div>
                        {selectedContact && <Chat contactId={selectedContact} />} */}
                        {filteredContacts.map((contact) => (
                            <div
                                key={contact.id}
                                className={`contact ${selectedContact === contact.id ? 'selected' : ''}`}
                                onClick={() => handleContactClick(contact.id)}
                            >
                                {contact.name}
                            </div>
                        ))}
                    </div>
                </>

            </div>
            <span className='rightside'>
                <div>
                    <img src='./Images/sidebarright.jpeg' className='img1' />
                    <h1 className='heading'>WhatsApp Web</h1>
                    <p className='p1'>Send and receive messages without keeping your phone online <br />
                        Use Whatsapp on up to 4 linked devices and 1 phone at the same time.
                    </p>
                    <p className='p2'>End-to-end encrypted</p>
                </div>
            </span>
        </div>

    );
}

export default Sidebar;


