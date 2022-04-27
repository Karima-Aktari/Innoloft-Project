import React, { useEffect, useState } from 'react';

const ProductPage = () => {
    const [product, setProduct] = useState();
    const [categories, setCategories] = useState();
    const [businessModels, setBusinessModels] = useState();

    //Product-data
    useEffect(() => {
        fetch('https://api-test.innoloft.com/product/6781/')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, []);
    console.log(product);

    // categories
    useEffect(() => {
        fetch('https://api-test.innoloft.com/product/6781/')
            .then(res => res.json())
            .then(data => setCategories(data.categories))
    }, []);
    console.log(categories);

    // businessModels
    useEffect(() => {
        fetch('https://api-test.innoloft.com/product/6781/')
            .then(res => res.json())
            .then(data => setBusinessModels(data))
    }, []);
    console.log(businessModels);

    //description
    const setDescription = () => {

    }

    return (
        <div className='container mx-auto'>
            <div className='grid md:grid-cols-3 sm:grid-cols-1 gap-2'>
                <div className='md:col-span-2'>
                    <div className="w-96 mx-auto h-80">
                        <img src={product?.picture} className="w-full my-2" alt='' />
                    </div>
                    <div className='text-center bg-blue-200 py-3'>
                        <h1 className='text-3xl font-bold'>{product?.name}</h1>
                        <h1 className='text-xl font-bold'>{product?.type.name}</h1>
                    </div>
                    <div className='w-full'>
                        <button className='bg-pink-600 text-center text-xl w-1/2 text-slate-200 py-2'>Description</button>
                        <button className='bg-violet-600 text-center text-xl w-1/2 text-slate-200 py-2'>Attributes</button>
                        <div>
                            <div className='container mx-auto p-3'>
                                <p> {product?.description}</p>
                            </div>
                        </div>

                        <div>
                            <div className='mx-auto px-2'>
                                {
                                    categories.map(category => (
                                        <div>
                                            <h1 className='text-3xl font-bold'>{category.name}</h1>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>

                        {/* <div>
                            {
                                businessModels?.map(businessModel => (
                                    <div>
                                        <h1 className='text-3xl font-bold'>{businessModel.name}</h1>
                                    </div>
                                ))
                            }
                        </div> */}
                    </div>
                </div>
                <div className='h-full mt-0 pt-0'>
                    <div className='bg-gray-400 rounded p-4'>
                        <img src={product.user.profilePicture} className="w-full rounded" alt='' />
                        <h1 className='text-2xl font-bold'>{product.user.firstName} {product.user.lastName}</h1>
                        <h2 className='text-xl font-bold'>{product.company.name}</h2>
                    </div>
                    <div className='p-3 border'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10091.114733317616!2d6.1006609!3d50.7796761!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbb82ea0594132a59!2sInnoloft%20GmbH!5e0!3m2!1sen!2sbd!4v1651054603065!5m2!1sen!2sbd" width="100%" height="300" className=' border border-orange-400 rounded'></iframe>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProductPage;