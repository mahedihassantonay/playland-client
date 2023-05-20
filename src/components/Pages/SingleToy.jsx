import { useLoaderData } from "react-router-dom";

const SingleToy = () => {
    const toyDetails = useLoaderData()
    const {toy_name,email,seller_name, image,price,quantity,rating,description}=toyDetails;
    return (
        <div className="container mx-auto">

<div className="card lg:card-side bg-gradient-to-r from-gray-600 to-blue-300 shadow-xl p-20 mt-24 text-lg">
  <figure><img className="h-96 border rounded-2xl p-8"  src={image} alt="Album"/></figure>
  <div className="card-body font-semibold w-4/6">
    <h2 className="font-bold text-3xl"> {toy_name}</h2>
    <p>PostedBY: {seller_name}</p>
    <p>Price: ${price}</p>
    <p>Available Qnt: {quantity}</p>
    <p>Rating: {rating}</p>
    <p>Description: {description}</p>
    <p>Email: {email}</p>
    
  </div>
</div>
            
        </div>
    );
};

export default SingleToy;