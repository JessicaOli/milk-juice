import milkJuice from '../images/milk-juice.png';

export default function Hero() {
    return (
        <>
            <section>
                <div className="hero-header">
                    <div className="left">
                        <h1 className="hero-title">A Couple Juice</h1>
                        <div className="hero-desc">
                            Jus buah Blueberry dan Strawberry ditambah dengan susu asli untuk sepasang kekasi.
                        </div>
                        <button className='button'>Order now
                            <span className="material-symbols-outlined">
                                arrow_right_alt
                            </span>
                        </button>
                    </div>
                    <div className="right">
                        <img src={milkJuice} alt='image' className='image' />
                    </div>
                </div>
            </section>
            <section>
                <div className="hero-header">
                    <h1>Discover</h1>
                    <div>
                        
                    </div>
                </div>
            </section>
        </>
    )
}