import React, { useState } from 'react';

const ProductPage = () => {
    const [products, setProducts] = useState();

    return (
        <div>

            <div className='grid md:grid-cols-3 sm:grid-cols-1 gap-2'>
                <div className='col-span-2'>
                    <h1>ProductPage</h1>
                    <div>
                        <img src='' alt='' />
                    </div>
                </div>
                <div>
                    <div>
                        <h1>User Info</h1>
                    </div>
                    <div>
                        <h1>Map</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;