import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllToys = () => {
  const [toys, setToys] = useState([]);
  const [searchText, setSearchText] = useState("");
  // const {totalToys} = useLoaderData();
  // console.log(totalToys)

  // const toysPerPage = 20;

  useEffect(() => {
    fetch("https://server-gray-mu.vercel.app/allToys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  const handleSearch = () => {
    fetch(`https://server-gray-mu.vercel.app/toySearchByName/${searchText}`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  };

  return (
    <div className="container mx-auto">
      <div className=" py-8 flex justify-center gap-4">
        <input
          onChange={(e) => setSearchText(e.target.value)}
          type="text"
          placeholder="Type here"
          className="input input-bordered input-info w-2/5 "
        />
        <button onClick={handleSearch} className="btn bg-blue-500">
          Search
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
                  <Link
                    to={`/singleToy/${toy._id}`}
                    className="btn bg-blue-500"
                  >
                    details
                  </Link>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
