import { useState } from "react";
import DiscoverTabs from "./discoverTabs";
import blankCarton from "../images/blank-carton.png";

export default function DiscoverSection() {
    const [selectedTab, setSelectedTab] = useState('Meelky Juice');

    const products = [{ name: 'Meelky Juice', icon: 'milk-jug' }, { name: 'Meelky Original', icon: 'milk-carton' }, { name: 'Meelky Special', icon: 'milk-glass' }];

    const handleTabChange = (product: string) => {
        setSelectedTab(product);
    }

    return (
        <section>
            <div className="hero-discover">
                <div className="hero-discover-left">
                    <h1 className="discover-title">Discover</h1>
                    <div className="tabs">
                        {products.map((product: any) => (
                            <DiscoverTabs selectTab={() => handleTabChange(product.name)} active={selectedTab === product.name}>
                                {product}
                            </DiscoverTabs>
                        ))}
                    </div>
                </div>
                <div className="hero-discover-middle">
                    <div className="discover-middle-background">
                        <img src={blankCarton} alt='blank carton' className="discover-image" />
                    </div>
                </div>
                <div className="hero-discover-right">
                    <h1 className="discover-right-title">Details</h1>
                    <div className="hero-desc">
                        Di ambil dari susus sapi asli yang masih segar kemudian di awetkan selama 1 bulan dengan cinta kasih.
                    </div>
                    <div className="nutrition-facts">
                        <div>149 kcal</div>
                        <div>7g fat</div>
                        <div>5g protein</div>
                    </div>
                </div>
            </div>
        </section>
    )
}