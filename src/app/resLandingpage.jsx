import IMG from "@eli/assets/Property_1_Default.png";
import Card from "./card";

const resLandingpage = () => {
    return (
        <section className="flex flex-col items-center justify-center max-w-screen px-2">
            <header className="flex flex-row items-center w-4/5 mb-4 justify-between mt-6">
                <p className="text-2xl font-bold">Frontend</p>
                <span className="text-gray-600">Next Layout</span>
            </header>
            <div className="flex items-center justify-center w-full max-w-screen-2xl">
                <img
                    src={IMG}
                    alt=""
                    className="w-full h-auto max-w-8xl object-cover"
                />
            </div>
            <Card />
        </section>
    );
};

export default resLandingpage;
