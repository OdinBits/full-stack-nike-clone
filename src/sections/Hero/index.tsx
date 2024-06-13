import './style.scss';
const Hero: React.FC = () => {
    return (
        <section
            id="home"
            className="heroContainer xl:w-2/5 max-xl:padding-x"
        >
            <div className="heroContent ">
                <p>Our Summer Collection</p>
                <h1>
                    <span> The New Arrival </span>
                    <br/>
                    <span>Nike</span>
                    Shoes
                </h1>
                <p>Discover stylish Nike arrivals, quality comfort, and innovation for your active life </p>
            </div>
        </section>
    )
}

export default Hero
