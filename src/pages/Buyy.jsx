import { useNavigate } from 'react-router-dom';
import { buyy } from '../data/buyy';
import './Subscription.css'

export const Buyy = () => {

    const Navigate = useNavigate();



    const handleSomething = (buyId) => {
        Navigate(`/buyy/${buyId}`);
    };

    return (
        <section >


            <div >
                {buyy.map((buy) => (
                    <div key={buy.id} className='pay'>


                        Card Number<br></br>
                        <input></input>
                        <br></br>

                        Full Name<br></br>
                        <input></input>
                        <br></br>

                        CSV<br></br>
                        <input></input>
                        <br></br>

                        <button className='pay1' onClick={
                            () => handleSomething(buy.id)
                        }
                        >
                            Pay</button>

                    </div>
                ))}
            </div>

        </section>
    );
};