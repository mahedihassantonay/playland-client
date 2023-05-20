import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import UpdateToy from "./UpdateToy";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);
  console.log(toys);

  useEffect(() => {
    fetch(`http://localhost:2000/myToys/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, [user]);
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

            {toys.map((toy) => (
              <tr key={toy._id} className="font-semibold">
                <td>
                  <div className="mask mask-squircle w-24 h-24 border-4 overflow-hidden">
                    <img src={toy.image} />
                  </div>
                </td>
                <td>{toy.toy_name}</td>
                <td>{toy.seller_name}</td>
                <td>{toy.sub_category}</td>
                <td>${toy.price}</td>
                <td>{toy.quantity}</td>

                <th>
                  {/* The button to open modal */}
                  <label htmlFor={`my-modal-${toy._id}`} className="btn bg-blue-500">
                    Edit
                  </label>

                  {/* Put this part before </body> tag */}
                  <input
                    type="checkbox"
                    id={`my-modal-${toy._id}`}
                    className="modal-toggle"
                  />
                  <div className="modal">
                    <div className="modal-box w-11/12 max-w-5xl">
                     <UpdateToy toy={toy} />
                      <div className="modal-action">
                        <label htmlFor={`my-modal-${toy._id}`} className="btn">
                          Yay!
                        </label>
                      </div>
                    </div>
                  </div>
                </th>
                <th>
                  <button className="btn bg-blue-500">X</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
