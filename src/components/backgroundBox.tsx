import Hero from "./hero";
import Navbar from "./navbar";

export default function BackgroundBox() {
    return (
        <div className="background-box">
            <Navbar />
            <Hero/>
        </div>
    )
}