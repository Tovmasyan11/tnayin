
import { subscription } from '../data/Subscription';
import './Subscription.css'
import { useNavigate } from 'react-router-dom';





export const Subscription = () => {

    const Navigate = useNavigate();

    const handleSomething = (subscriptionId) => {
        Navigate(`/subscription/${subscriptionId}`);
    };



    return (


        <section>

            <div className='container'>
                {subscription.map((sub) => (
                    <div key={sub.id} className='monts1'>
                        <br></br>
                        <p>
                            <h3>  Subscription Name: <p></p> {sub.name} </h3>
                        </p>

                        <p>
                            <h3>   Subscription Price:  {sub.price}</h3>
                        </p>
                        <button className='more' onClick={
                            () => handleSomething(sub.id)
                        }
                        >
                            More</button>

                    </div>
                ))}
            </div>
        </section>
    )
}



