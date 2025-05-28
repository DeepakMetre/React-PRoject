import React from "react";

const ProductCard = ({product}) => {
    return (
        <div className="col-md-4">
            <div className="card">
                <img src={product.image} alt={product.name} className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">
                        {product.name}
                    </h5>
                    <p className="card-text">
                        &#8377; {product.price}
                    </p>
                </div>
            </div>

        </div>
    );

};

export default ProductCard;