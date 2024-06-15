// import React from 'react'
// import { auth } from './firebase';

// function chatMessage(props) {
//     const { text, uid, photoURL } = props.message;
//     const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';
//     return (
//         <div className={`message ${messageClass}`}>
//             <img src={photoURL || 'https://placekitten.com/50/50'} alt="User" />
//             <p>{text}</p>
//         </div>
//     )
// }

// export default chatMessage

const blogPosts = [
    {
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        content: "Lorem ipsum dolor sit amet, consectetur iscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis",
        date: "21 October 2023",
        category: "Fitness",
        imageSrc: "/assets/images/blogs/water.png",
        readMoreLink: "#",
    },
    {
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        content: "Lorem ipsum dolor sit amet, consectetur iscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis",
        date: "21 October 2023",
        category: "Fitness",
        imageSrc: "/assets/images/blogs/equipments.png",
        readMoreLink: "#",
    },
    {
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        content: "Lorem ipsum dolor sit amet, consectetur iscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis",
        date: "21 October 2023",
        category: "Fitness",
        imageSrc: "/assets/images/blogs/water.png",
        readMoreLink: "#",
    },
    {
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        content: "Lorem ipsum dolor sit amet, consectetur iscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis",
        date: "21 October 2023",
        category: "Fitness",
        imageSrc: "/assets/images/blogs/water.png",
        readMoreLink: "#",
    },
    {
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        content: "Lorem ipsum dolor sit amet, consectetur iscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis",
        date: "21 October 2023",
        category: "Fitness",
        imageSrc: "/assets/images/blogs/water.png",
        readMoreLink: "#",
    },

];

const BlogSection = () => {
    return (
        <section className="flex">
            {blogPosts.map((post, index) => (
                <div key={index} className="mt-10 justify-left border-slate-250 border-2 rounded-lg w-[1070px] m-[50px] ml-15">
                    <div className="flex">
                        <div>
                            <img src={post.imageSrc} alt="image" className="h-[272.037px] w-[832.295px]" />
                        </div>
                        <div className="h-[272.037px]">
                            <h1 className="font-bold text-2xl mt-5 ml-5 mr-5">{post.title}</h1>
                            <p className="font-normal text-xl mt-2 ml-5 mr-5">{post.content}</p>
                            <a href={post.readMoreLink} id="readMoreLink" className="text-[#f2994a] transition duration-300 hover:underline ml-5">Read More</a>
                            <div className="flex">
                                <span className="text-black font-bold ml-5 mt-5">{post.date}</span>
                                <span className="font-bold mt-5 ml-[430px]">{post.category}</span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default BlogSection;
