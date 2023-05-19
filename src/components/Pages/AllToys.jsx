import { useLoaderData } from "react-router-dom";

const AllToys = () => {
    const allToys = useLoaderData();
    console.log(allToys)

    
    return (
        <div className="container mx-auto">
            <div className="overflow-x-auto w-full">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        
        <th>Image</th>
        <th>Toy Name</th>
        <th>Seller Name</th>
        <th>SubCategory</th>
        <th>Price</th>
        <th>Available Quantity</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}

      {
        allToys.map(toy=> (
            <tr  key={toy._id}  className="font-semibold">
        
            <td>
              
                
                  <div className="mask mask-squircle w-24 h-24 border-4 overflow-hidden">
                    <img src={toy.image} />
                  
                </div>
               
              
            </td>
            <td >
              {toy.toy_name}
              
              
            </td>
            <td>{toy.seller_name}</td>
            <td>{toy.sub_category}</td>
            <td>${toy.price}</td>
            <td>{toy.quantity}</td>

            <th>
              <button className="btn bg-blue-500">details</button>
            </th>
          </tr>

        ))
      }
     
      
    </tbody>
   
    
  </table>
</div>
        </div>
    );
};

export default AllToys;