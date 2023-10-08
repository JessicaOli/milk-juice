import { useState } from "react";
import DiscoverTabs from "./discoverTabs";
import blankCarton from "../images/blank-carton.png";
import blankJug from "../images/blank-jug.png";
import blankGlass from "../images/blank-glass.png";
import { Product } from "../models/product";

export default function DiscoverSection() {
    const products: Product[] = [{ name: 'Meelky Juice', icon: 'milk-jug', image: blankJug }, { name: 'Meelky Original', icon: 'milk-carton', image: blankCarton }, { name: 'Meelky Special', icon: 'milk-glass', image: blankGlass }];

    const [selectedTab, setSelectedTab] = useState(products[0]);

    const handleTabChange = (productName: string) => {
        setSelectedTab(products.filter((product: Product) => {
            return product.name === productName
        })[0]);
    }

    return (
        <section>
            <div className="hero-discover">
                <div className="hero-discover-left">
                    <h1 className="discover-title">Discover</h1>
                    <div className="tabs">
                        {products.map((product: Product) => (
                            <DiscoverTabs selectTab={() => handleTabChange(product.name)} active={selectedTab.name === product.name}>
                                {product}
                            </DiscoverTabs>
                        ))}
                    </div>
                </div>
                <div className="hero-discover-middle">
                    <div className="discover-middle-background">
                        <img src={selectedTab.image} alt='blank carton' className="discover-image" />
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