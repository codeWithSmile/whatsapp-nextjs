const coachesImage = [
    {
        imageSrc: "/assets/images/coaches/coach_header.png",
        name: "FirstName LastName",
        content: "Lorem ipsum dolor sit amet, consectetur iscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis",

    },
    {
        imageSrc: "/assets/images/coach_list/coach_07.png",
        name: "FirstName LastName",
        content: "Lorem ipsum dolor sit amet, consectetur iscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis",
    },
    {
        imageSrc: "/assets/images/coach_list/coach_08.png",
        name: "FirstName LastName",
        content: "Lorem ipsum dolor sit amet, consectetur iscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis",
    },
];
const Coaches = () => {
    return (
        <div>
            <section className="bg-[#f5f5f5] w-full h-[800px] px-5 py-10 space-y-5">
                <h3 className="text-black text-5xl font-bold mb-20"><center>Our Coaches</center></h3>
                <div className="flex relative">
                    <span className="text-[#FBEFB0] bg-[#f2994a] w-10 h-8 mt-64 rounded-full text-2xl font-bold absolute right-0">⟶</span>
                    <div className="ml-[140px] w-[1100px] h-[202px]">
                        <div className="flex">
                            {coachesImage.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex-shrink-0 w-[410px] h-[520px] m-[20px] ml-[50px] border-slate-250 border-2 rounded-lg "
                                >
                                    <img src={item.imageSrc} alt="blog_banner" className="w-[500px] object-cover h-[280px] flex-shrink rounded-lg" />
                                    <div className="p-5">
                                        <h1 className="font-bold mt-5">{item.name}</h1>
                                        <p className="font-normal mt-2">{item.content}</p>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                    <span className="text-[#FBEFB0] bg-[#f2994a] w-10 h-8 mt-64 rounded-full text-2xl font-bold float-left absolute left-0">⟵</span>
                </div>
            </section>
            <section className="w-full px-5 py-10 space-y-5 ">
                <div>
                    <h3 className="text-black text-5xl font-bold mb-20"><center>Your very own personal coaches</center></h3>
                    <div className="flex">
                        <div className="ml-[250px]">
                            <div className="pt-1 w-96 h-80 bg-[#FBEFB0] text-black mt-10 rounded-lg">
                                <center>
                                    <img
                                        src="/assets/images/coaches/fitness.png"
                                        alt="coaches_fitness"
                                        className="rounded-full w-14 h-14 bg-[#f2994a] p-4 mt-5"
                                    />
                                </center>
                                <h2 className="mt-10"><center>
                                    Fitness + diet plan and questions answered</center>
                                </h2>
                                <p className="mt-6"><center>
                                    We answer all of your fitness and nutrition questions, so you can focus on getting in shape. Logging your food intake and workouts is easy with our user-friendly app, and our team of experts are always here to help. So what are you waiting for.</center>
                                </p>
                            </div>
                            <div className="w-0 h-0 
                  border-l-[50px] border-l-transparent
                  border-t-[75px] border-[#FBEFB0]
                  border-r-[50px] border-r-transparent  mx-40"  >
                            </div>
                        </div>

                        <div className="m-10 w-96 h-80 border-slate-250 border-2 rounded-lg">
                            <center>
                                <img
                                    src="/assets/images/coaches/personalized.png"
                                    alt="coaches_personalized"
                                    className="rounded-full w-14 h-14 bg-[#f2994a] p-4 mt-5"
                                />
                            </center>
                            <h2 className="mt-5"><center>
                                Personalized coaching + recommendations</center>
                            </h2>
                            <p className="mt-5"><center>
                                We offer personalized coaching and recommendations to help you reach your fitness goals. Whether you're looking to lose weight, gain muscle, or just get healthy, we can help.</center>

                            </p>
                        </div >
                        <div className="m-10 w-96 h-80 border-slate-250 border-2 rounded-lg">
                            <center>
                                <img
                                    src="/assets/images/coaches/fitness.png"
                                    alt="coaches_fitness"
                                    className="rounded-full w-14 h-14 bg-[#f2994a] p-4 mt-5"
                                />
                            </center>
                            <h2 className="mt-5"><center>
                                Get help from your coaches</center>
                            </h2>
                            <p className="mt-5"><center>
                                These personal trainers will help motivate you to reach your fitness goals, whether you're looking to lose weight, build muscle, or just get in better shape.</center>
                            </p>

                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Coaches;