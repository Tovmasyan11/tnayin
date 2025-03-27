import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
// import { Images } from '../pages/Images';
import { Subscription } from '../pages/Subscription';
import { More } from '../pages/More';
import { Buyy } from '../pages/Buyy';
import { Userss } from '../pages/Userss';

import { MainLayout } from '../components/MainLayout';
import { PublicRoutes } from '../routing/PublicRoutes'
import { PrivateRoutes } from '../routing/PrivateRoutes'
import { SignIn } from '../pages/SignIn'
import { Products } from '../pages/Products';


export const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<PublicRoutes />}>
                    <Route path='/signin' element={<SignIn />} />
                </Route>

                <Route element={<MainLayout />} >
                    <Route element={<PrivateRoutes />}>
                        <Route index element={<Home />} />
                        {/* <Route path='/images' element={<Images />} /> */}
                        <Route path='/subscription' element={<Subscription />} />
                        <Route path='/subscription/:subscriptionId' element={<More />} />
                        <Route path='/more/:moreId' element={<Buyy />} />
                        <Route path='/buyy/:buyyId' element={<Home />} />
                        <Route path='/products' element={<Products />} />
                        <Route path='/userss' element={<Userss />} />
                    </Route>


                </Route>

            </Routes>
        </BrowserRouter>
    );
};