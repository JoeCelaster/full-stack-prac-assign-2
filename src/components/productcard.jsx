// write product card here
// write product card here
import React from 'react';
import ViewProductButton from './button';
const Productcard = () => {
  const productImage = 'https://via.placeholder.com/150';
  const productName = 'Sample Product';
  const price = '$49.99';

  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-md bg-white p-5">
      <img
        className="w-full h-40 object-cover"
        src={productImage}
        alt="Product"
      />
      <div className="mt-4 text-center">
        <h2 className="text-lg font-bold text-gray-800">{productName}</h2>
        <p className="text-gray-600 text-lg">{price}</p>
        <div className="mt-4">
          <ViewProductButton />
        </div>
      </div>
    </div>
  );
};

export default Productcard;