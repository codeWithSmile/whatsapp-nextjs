import React, { useState, useEffect } from 'react'
import { FaSearch, FaPaperclip, FaEllipsisV } from 'react-icons/fa';
import { MdMic } from 'react-icons/md'
import { database, ref, push, set } from './firebase';
import { onValue } from 'firebase/database';
function chat({ chatId }) {
    const [messages, setMessages] = useState('');
    const [chatMessages, setChatMessages] = useState([]);
    const handleChange = (e) => {
        setMessages(e.target.value);

    }
    const handleClick = async () => {
        if (messages.trim() === '') {
            return;
        }

        const chatRef = ref(database, 'chats'); // 'chats' is the name of your chat collection in Firebase
        const chatMessages = {
            message: messages,
            timestamp: Date.now(),
            // Add other necessary fields like sender, receiver, etc.
        };

        // Update the local state to show the message immediately
        // setChatMessages([...chatMessages, newMessage]);

        // Push the new message to the Firebase Realtime Database
        const chatMessagesRef = push(chatRef);
        await set(chatMessagesRef, chatMessages);


        setMessages('');
    }
    useEffect(() => {
        const chatRef = ref(database, `chats/${chatId}/messages`); // 'chats' is the name of your chat collection in Firebase

        const unsubscribe = onValue(chatRef, (snapshot) => {
            const data = snapshot.val();
            if (data && typeof data === 'object') {
                const messagesArray = Object.values(data);
                setChatMessages(messagesArray);

            } else {
                setChatMessages([]);
            }
        }, (error) => {
            // Handle error here
            console.error("Error fetching chat messages: ", error);
            setChatMessages([]); // Initialize chatMessages as an empty array when there is an error

        });

        return () => {
            // Unsubscribe from the chatRef when the component unmounts
            unsubscribe();
        };
    }, [chatId]);

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
    // };


    return (
        <div className='c-container'>
            <div className='chat-container'>
                <>
                    <div>
                        <div className='top'>
                            <span className='flex'>
                                <img src="./Images/musfinal1.jpg" className='img' />
                                <pre>Muskan Daruka</pre>
                            </span>
                            <span className='icons'>
                                <FaSearch style={{ fontSize: '20px', marginRight: '10px' }} />
                                <FaEllipsisV style={{ fontSize: '24px', marginRight: '10px' }} />
                            </span>
                        </div>
                    </div>

                    <div className='middle'>
                        {/* {resultChat && (
                            <div className='result-chat'>
                                You: {resultChat}
                            </div>
                        )} */}
                        {chatMessages.map((message, index) => (
                            <div key={index} className='message'>
                                {message.message}
                            </div>
                        ))}
                        {/* <div className='input-container'> */}
                        {/* <input
                                type='text'
                                placeholder='Type your message...'
                                value={chatMessages}
                                onChange={(e) => setChatMessages(e.target.value)}
                            />
                            <button onClick={handleSendMessage}>Send</button> */}
                        {/* </div> */}
                    </div>

                    <div className='bottom'>

                        <FaPaperclip style={{ fontSize: '24px', margin: '10px', marginTop: '25px' }} />
                        <div className='bottom1'>
                            😀
                            <input type='text' placeholder='Search or start new chat' className='input' value={messages} onChange={handleChange} />
                            <button className='btn' onClick={handleClick}>Send</button>
                        </div>
                        <MdMic style={{ fontSize: '24px', margin: '10px', marginTop: '25px' }} />

                    </div>
                </>
            </div >
        </div>
    );
}

export default chat

