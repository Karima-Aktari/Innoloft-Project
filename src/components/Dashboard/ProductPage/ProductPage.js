import React, { useEffect, useState } from 'react';

const ProductPage = () => {
    const [product, setProduct] = useState();

    //Product-data
    useEffect(() => {
        fetch('https://api-test.innoloft.com/product/6781/')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, []);
    console.log(product);
    return (
        <div className='container mx-auto'>
            <h1>ProductPage</h1>
            <div className='grid md:grid-cols-3 sm:grid-cols-1 gap-2'>
                <div className='col-span-2'>
                    <div className="w-96 mx-auto h-80">
                        <img src={product.picture} className="w-full" alt='' />
                    </div>
                    <div className='text-center bg-blue-200 py-3'>
                        <h1 className='text-3xl font-bold'>{product.name}</h1>
                        <h1 className='text-xl font-bold'>{product.type.name}</h1>
                    </div>
                    <div className='w-full'>
                        <button className='bg-pink-600 text-center text-xl w-1/2 text-slate-200 py-2'>Description</button>
                        <button className='bg-violet-600 text-center text-xl w-1/2 text-slate-200 py-2'>Attributes</button>
                    </div>
                    <div>
                        Description
                    </div>
                </div>
                <div>
                    <div className='bg-gray-400 rounded p-3'>
                        <h1>User Info</h1>
                        <img src={product.user.profilePicture} className="w-full rounded" alt='' />
                        <h1 className='text-2xl font-bold'>{product.user.firstName} {product.user.lastName}</h1>
                        <h2 className='text-xl font-bold'>{product.company.name}</h2>
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