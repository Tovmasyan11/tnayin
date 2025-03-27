
import { getMoreById, more } from '../data/more';
import './Subscription.css'
import { useNavigate, useParams } from 'react-router-dom';

export const More = () => {
    const params = useParams();
    const subscription = getMoreById(params.subscriptionId);

    const Navigate = useNavigate();

    const handleSomething = (morId) => {
        Navigate(`/more/${morId}`);
    };

    return (

        <section>

            <div className='kub'>
                <div key={subscription.id} className='buy'>
                    <br></br>

                    <p>
                        <h3>  Subscription Name: <p></p> {subscription.name} </h3>
                    </p>

                    <p>
                        <h3>   Subscription Price:  {subscription.price}</h3>
                    </p>
                    <p>
                        <h3>   Subscription Aravelutyun:  {subscription.plus}</h3>
                    </p>
                    <button className='buy1' onClick={
                        () => handleSomething(subscription.id)
                    }
                    >
                        Buy</button>

                </div>
            </div>
        </section>
    )
};