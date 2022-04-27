import React, { useEffect, useState } from 'react';

const Description = () => {
    const [description, setDescription] = useState();

    //Product-data
    useEffect(() => {
        fetch('https://api-test.innoloft.com/product/6781/')
            .then(res => res.json())
            .then(data => setDescription(data))
    }, []);
    console.log(description);
    return (
        <div>

        </div>
    );
};

export default Description;