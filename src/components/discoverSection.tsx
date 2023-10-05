import { useState } from "react";
import DiscoverTabs from "./discoverTabs";

export default function DiscoverSection() {
    const [selectedTab, setSelectedTab] = useState('Meelky Juice');

    const products = ['Meelky Juice', 'Meelky Original', 'Meelky Special'];

    const handleTabChange = (product: string) => {
        setSelectedTab(product);
    }

    return (
        <section>
            <div className="hero-discover">
                <h1>Discover</h1>
                <div className="tabs">
                    {products.map((product: string) => (
                        <DiscoverTabs selectTab={() => handleTabChange(product)} active={selectedTab === product}>
                            {product}
                        </DiscoverTabs>
                    ))}
                </div>
            </div>
        </section>
    )
}