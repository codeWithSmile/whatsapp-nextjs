import React, { useState, useEffect } from 'react'
import { FaSearch, FaPaperclip, FaEllipsisV } from 'react-icons/fa';
import { MdMic } from 'react-icons/md'
import { firestore, auth } from './firebase';
import { useRef } from 'react';
import chatMessage from './chatMessage';



function chat({ contactName }) {

    // const [messages, setMessages] = useState('');
    // const [messageHistory, setMessageHistory] = useState([]);
    // const [messageText, setMessageText] = useState('');
    // // const [chatMessages, setChatMessages] = useState([]);    
    // const handleChange = (e) => {
    //     setMessageText(e.target.value);

    // }
    // const handleClick = async () => {
    //     console.log('Clicked send button', messageText);
    //     if (messageText.trim() === '') {
    //         return;
    //     }
    //     try {
    //         await addMessageToFirestore({
    //             senderId: 'currentUserId', // Replace with the actual sender's ID
    //             receiverId: contactId,
    //             message: messageText,
    //             timestamp: new Date(),
    //         });

    //         setMessageText('');
    //     } catch (error) {
    //         console.error('Error sending message:', error);
    //     }
    // };

    // const addMessageToFirestore = async (messageData) => {
    //     try {
    //         const messagesRef = collection(firestore, 'messages');
    //         await addDoc(messagesRef, messageData);
    //         console.log('Message added successfully!');
    //     } catch (error) {
    //         console.error('Error adding message to Firestore:', error);
    //         throw error; // Re-throw the error to handle it at a higher level if necessary
    //     }
    // };

    // useEffect(() => {
    //     const messagesCollection = collection(firestore, 'messages');
    //     const unsubscribe = onSnapshot(messagesCollection, (snapshot) => {
    //         try {
    //             const messageData = [];
    //             snapshot.forEach((doc) => {
    //                 messageData.push({ id: doc.id, ...doc.data() });
    //             });
    //             setMessageHistory(messageData);
    //         } catch (error) {
    //             console.error('Error fetching messages:', error);
    //             // Handle the error as appropriate, e.g., set an error state.
    //         }
    //     });

    //     return () => unsubscribe();
    // }, [firestore, contactId]);




    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const messagesEndRef = useRef(null);

    useEffect(() => {
        // Subscribe to messages collection in Firestore
        const unsubscribe = firestore.collection('messages')
            .orderBy('createdAt')
            .limit(100)
            .onSnapshot(querySnapshot => {
                const data = querySnapshot.docs.map(doc => ({
                    ...doc.data(),
                    id: doc.id,
                }));
                setMessages(data);
                scrollToBottom();
            });

        // Unsubscribe from the collection when component unmounts
        return () => unsubscribe();
    }, []);
    const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    };
    const sendMessage = async (e) => {
        e.preventDefault();
        const { uid, photoURL } = auth.currentUser;

        // Add a new message to Firestore
        await firestore.collection('messages').add({
            text: newMessage,
            createdAt: new Date(),
            uid,
            photoURL,
        });

        setNewMessage('');
    }

    return (
        <div className='c-container'>
            <div className='chat-container'>
                <>
                    <div>
                        <div className='top'>
                            <span className='flex'>
                                <img src={`https://picsum.photos/200/300?random=${Math.floor(Math.random() * 1000)}`} className='img' />
                                <pre>{contactName}</pre>
                            </span>
                            <span className='icons'>
                                <FaSearch style={{ fontSize: '20px', marginRight: '10px' }} />
                                <FaEllipsisV style={{ fontSize: '24px', marginRight: '10px' }} />
                            </span>
                        </div>
                    </div>

                    <div className='middle'>
                        {/* {Array.isArray(messages) &&
                            messages.map((message, index) => (
                                <div key={index} className='message'>
                                    {message.text}
                                </div>
                            ))} */}
                        {messages.map((message) => (
                            <chatMessage key={message.id} message={message} />
                        ))}
                        <div ref={messagesEndRef} />

                        {/* {resultChat && (    
                            <div className='result-chat'>
                                You: {resultChat}
                            </div>
                        */}

                    </div>

                    <div className='bottom'>

                        <FaPaperclip style={{ fontSize: '24px', margin: '10px', marginTop: '25px' }} />
                        <div className='bottom1'>
                            <form onSubmit={sendMessage}>
                                <input type='text' placeholder='Type your message...' className='input' value={newMessage} onChange={(e) => setNewMessage(e.target.value)} />
                                <button className='btn'>Send</button>
                            </form>
                        </div>
                        <MdMic style={{ fontSize: '24px', margin: '10px', marginTop: '25px' }} />

                    </div>
                </>
            </div >
        </div>
    );
}

export default chat



































































































































































































































































































































































// const chatRef = ref(database, 'chats'); // 'chats' is the name of your chat collection in Firebase
// const chatMessages = {
//     message: messages,
//     timestamp: Date.now(),
// Add other necessary fields like sender, receiver, etc.
// try {
//     // Send the new message to your server using an API call
//     await axios.post('https://api.example.com/messages', {
//         sender: 'currentUserId', // Replace with the actual sender's ID or username
//         receiver: contactId,
//         message: messages,
//         timestamp: Date.now(),
//         // Add other necessary fields like sender, receiver, etc.
//     });
//     setMessageHistory(prevMessages => [
//         ...prevMessages, { sender: 'currentUserId', message: messages }]);

//     // Clear the input field after sending the message
//     setMessages('');
// } catch (error) {
//     console.error('Error sending message:', error);
// }

// Update the local state to show the message immediately
// setChatMessages([...chatMessages, newMessage]);

// Push the new message to the Firebase Realtime Database
//     const chatMessagesRef = push(chatRef);
//     await set(chatMessagesRef, chatMessages);
//     setMessages('');
// }
// useEffect(() => {
//     const messageListener = database.on('value', (snapshot) => {
//         const messagesData = snapshot.val(); // Retrieve all messages from the database

//         if (messagesData) {
//             // Convert messages from object to array format for state
//             const messagesArray = Object.keys(messagesData).map((key) => ({
//                 id: key,
//                 sender: messagesData[key].sender,
//                 message: messagesData[key].message,
//                 timestamp: messagesData[key].timestamp,
//             }));

//             // Update the local state with the messages from the database
//             setMessageHistory(messagesArray);
//         }
//     });

//     // Clean up the listener when the component unmounts
//     return () => {
//         database.off('value', messageListener);
//     };
// }, []);
//     const intervalId = setInterval(() => {
//         // Simulating receiving new messages locally
//         const newMessage = {
//             sender: 'otherUserId', // Assuming this is the ID of the other user
//             message: 'New message received!', // Example message content
//         };

//         // Update messageHistory state with new messages
//         setMessageHistory(prevMessages => [...prevMessages, newMessage]);
//     }, 2000);

//     // Clean up the interval when the component unmounts
//     return () => {
//         clearInterval(intervalId);
//     };
// }, []);
//     const fetchMessages = async () => {
//         try {
//             const response = await axios.get(`https://api.example.com/messages/${contactId}`)
//             const receivedMessages = response.data.messages;
//             setMessageHistory([...messageHistory, ...receivedMessages]);

//         } catch (error) {
//             console.error('Error fetching chat messages:', error);
//         }
//     };

//     // Poll for new messages every 2 seconds (adjust the interval as needed)
//     const intervalId = setInterval(fetchMessages, 2000);

//     // Clean up the interval when the component unmounts
//     return () => {
//         clearInterval(intervalId);
//     };
// }, [contactId, messageHistory]);
//         .then(response => {
//             setMessages(response.data.messages);
//             setContactName(response.data.name);
//         })
//         .catch(error => {
//             console.error('Error fetching chat messages:', error);
//             setMessages([]);        // Initialize messages as an empty array when there is an error
//             setContactName(contactName);
//         });
// }, [contactId]);
// useEffect(() => {
//     const chatRef = ref(database, `chats/${contactId}/messages`); // 'chats' is the name of your chat collection in Firebase

//     const unsubscribe = onValue(chatRef, (snapshot) => {
//         const data = snapshot.val();
//         if (data && typeof data === 'object') {
//             const messagesArray = Object.values(data);
//             setChatMessages(messagesArray);

//         } else {
//             setChatMessages([]);
//         }
//     }, (error) => {
//         // Handle error here
//         console.error("Error fetching chat messages: ", error);
//         setChatMessages([]); // Initialize chatMessages as an empty array when there is an error

//     });

//     return () => {
//         // Unsubscribe from the chatRef when the component unmounts
//         unsubscribe();
//     };
// }, [contactId]);

// const handleSendMessage = () => {
//     // Push new message to the Firebase database
//     const chatRef = ref(database, `chats/${contactId}`);
//     const chatMessagesRef = push(chatRef);
//     const messageData = {
//         text: chatMessages,
//         timestamp: Date.now(),
//     };
//     set(chatMessagesRef, messageData);
//     setChatMessages('');