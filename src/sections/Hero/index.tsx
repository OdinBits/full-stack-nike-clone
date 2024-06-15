import { Button, ShoeCard } from '../../components';
import { arrowRight, bigShoe1 } from '../../shared/constants/images';
import { shoes, statistics } from '../../shared/constants';
import './style.scss';
const Hero: React.FC = () => {
    return (
        <section
            id="home"
            className="heroContainer"
        >
            <div className="heroContent">
                <p className="summerCollection">Our Summer Collection</p>
                <h1 className='h1Container'>
                    <span className='theArrival'> The New Arrival </span>
                    <br />
                    <span className='nike'>Nike</span>
                    Shoes
                </h1>
                <p className='discover'>Discover stylish Nike arrivals, quality comfort, and innovation for your active life </p>
                <Button label={'Shop Now'} icon={arrowRight} />

                <div className="statistics">
                    {statistics.map((item) => (
                        <div key={`stat-${item.label}`}>
                            <p className='statValue'>{item.value}</p>
                            <p className='statLabel'>{item.label}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="imgContainer">
                    <img src={bigShoe1} alt="bigShoe1" className="shoeImg" />
                    <div className="">
                    {shoes.map((shoe) => (
                        <div key={shoe.bigShoe}>
                            <ShoeCard
                                bigShoeImg={''} 
                                handleImg={function (): {} {
                                    throw new Error('Function not implemented.');
                                } } 
                                imgUrl={shoe} 
                            />
                        </div>
                    ))}
                    </div>
                </div>
        </section>
    )
}

export default Hero
