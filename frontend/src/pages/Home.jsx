import React, { useEffect, useState } from "react";

import ProductCard from '../components/ProductCard';

import axios from 'axios';

const Home = () => {

        // const fakeProduct =[
        //     {id:1,name:'Iphone', price:1000},
        //     {id:2,name:'S23', price:10},
        //     {id:3,name:'Vivo', price:2000},
        //     {id:4,name:'MI', price:1050},
        // ];

    const [products, setProducts] = useState([]);

    useEffect(() => {
            axios.get('http://127.0.0.1:8000/api/products/')
                .then((response) => {
                    // store the response
                    setProducts(response.data);
                })
                .catch((error) => {
                    console.error('Error fetching product: ', error)
                });
        }
            
        , [] );




return (
    <div className="container mt-5 w-100 m-auto">
        <h1>
            Products
        </h1>
        <div className="row">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}


        </div>

    </div>
);

};

export default Home;