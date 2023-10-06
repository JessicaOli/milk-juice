import { useState } from "react";
import DiscoverTabs from "./discoverTabs";

export default function DiscoverSection() {
    const [selectedTab, setSelectedTab] = useState('Meelky Juice');

    const products = [{name:'Meelky Juice', icon:'milk-jug'}, {name:'Meelky Original', icon:'milk-carton'}, {name:'Meelky Special', icon:'milk-glass'}];

    const handleTabChange = (product: string) => {
        setSelectedTab(product);
    }

    return (
        <section>
            <div className="hero-discover">
                <h1 className="discover-title">Discover</h1>
                <div className="tabs">
                    {products.map((product: any) => (
                        <DiscoverTabs selectTab={() => handleTabChange(product.name)} active={selectedTab === product.name}>
                            {product}
                        </DiscoverTabs>
                    ))}
                </div>
            </div>
        </section>
    )
}