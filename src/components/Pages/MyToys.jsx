import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";
import UpdateToy from "./UpdateToy";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);
  const [control, setControl] = useState(false);
  const [sortPrice, setSortPrice] = useState("ascending");
  console.log(toys);

  useEffect(() => {
    fetch(
      `https://server-gray-mu.vercel.app/myToys/${user?.email}?sort=${sortPrice}`
    )
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, [user, control, sortPrice]);

  const handleToyUpdate = (data) => {
    // console.log(data)
    fetch(`https://server-gray-mu.vercel.app/updateToy/${data?._id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.modifiedCount > 0) {
          Swal.fire("Updated", "Your file has been updated.", "success");
          setControl(!control);
        }
      });
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://server-gray-mu.vercel.app/deleteToy/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remaining = toys.filter((toy) => toy._id !== id);
              setToys(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-center gap-4 my-12">
        <h1 className="font-bold">Sort By Price-</h1>
        <button
          onClick={() => setSortPrice("ascending")}
          className="btn bg-blue-500 font-bold normal-case"
        >
          Ascending
        </button>
        <button
          onClick={() => setSortPrice("descending")}
          className="btn bg-blue-500 font-bold normal-case"
        >
          Descending
        </button>
      </div>
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
                  <label
                    htmlFor={`my-modal-${toy._id}`}
                    className="btn bg-blue-500"
                  >
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
                      <UpdateToy toy={toy} handleToyUpdate={handleToyUpdate} />
                      <div className="modal-action">
                        <label htmlFor={`my-modal-${toy._id}`} className="btn">
                          Close
                        </label>
                      </div>
                    </div>
                  </div>
                </th>
                <th>
                  <button
                    onClick={() => handleDelete(toy._id)}
                    className="btn bg-blue-500"
                  >
                    X
                  </button>
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
