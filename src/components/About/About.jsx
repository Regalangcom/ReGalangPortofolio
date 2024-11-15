import ImageAbout from "../../assets/assetPortofolio/ImageAbout.jpeg";
const About = () => {
    return (
        <div name="About" className="md:h-screen lg:h-[800px] lg:mb-80 ">
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-start h-full px-4 md:flex-row gap-7  ">
                <div>
                    <img
                        src={ImageAbout}
                        alt=""
                        style={{ width: "300px" }}
                        className="rounded-2xl mx-auto w-2/3 md:flex-full"
                    />
                </div>
                <div className="max-w-xl p-7 mx-auto flex flex-col justify-center w-full h-3/5">
                    <div className="pb-8 flex flex-wrap ">
                        <p className="text-3xl mb-6 inline border-b-4">About</p>
                    </div>
                    <p className="text-base leading-relaxed mb-4">
                        I am a working student currently pursuing my degree
                        while balancing professional responsibilities. I have a
                        strong background in software development and
                        information technology. My experience includes working
                        as a freelance mobile developer, where I successfully
                        completed a 3-month contract involving end-to-end mobile
                        app development. This role enhanced my technical skills
                        in mobile programming and project management, providing
                        me with a deep understanding of the needs and challenges
                        involved in delivering successful applications.
                    </p>
                    <p className="text-base leading-relaxed mb-4">
                        In addition, I am a graduate of a full-stack JavaScript
                        bootcamp, where I gained comprehensive technical skills
                        in web application development using cutting-edge
                        technologies such as MERN STACK in Genbox academy. This
                        intensive training equipped me with the ability to
                        develop responsive and efficient applications, as well
                        as build scalable software solutions.
                    </p>
                    <p className="text-base leading-relaxed">
                        With a blend of practical experience and solid
                        educational foundation, I am committed to continuously
                        advancing in the tech field and am ready to tackle new
                        challenges in the software development industry.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
