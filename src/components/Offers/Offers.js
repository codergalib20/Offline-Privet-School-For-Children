import React, { useEffect, useState } from 'react';
import Offer from '../Offer/Offer';

const Offers = () => {
    const [offers, setOffers] = useState([])
    useEffect(() => {
        fetch('./offerClass.JSON')
            .then(res => res.json())
            .then(data => setOffers(data));
    }, [])
    console.log(offers.length)
    return (
        <div className="container mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 py-10">
            {
                offers.map(offer => <Offer key={offer.key} offer={offer}></Offer>)
            }
        </div>
    );
};

export default Offers;