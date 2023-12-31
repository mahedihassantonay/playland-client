import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../App.css";


const ShopByCategory = () => {
  const [toggleState, setToggleState] = useState("princes");
  const [toys, setToys] = useState([]);

  const toggleTab = (index) => {
    // console.log( index);
    setToggleState(index);
  };

  useEffect(() => {
    fetch(`https://server-gray-mu.vercel.app/allToys/${toggleState}`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [toggleState]);

  // const filterToy = toys?.filter(toy=> toy.sub_category == toggleState)
  // console.log(filterToy)
  return (
    <div className="my-16">
      <div className="md:w-1/4 ml-auto my-8">
        <h1 className="md:text-2xl p-4 font-semibold text-center text-gray-200 bg-orange-400 uppercase rounded-lg">
          Shop By Category
        </h1>
      </div>
      <div className="">
        <div className="bloc-tabs font-semibold">
          <button
            className={`${
              toggleState === "princes" ? "tabs active-tabs" : "tabs"
            } `}
            onClick={() => toggleTab("princes")}
          >
            Disney Princes
          </button>
          <button
            className={`${
              toggleState === "donald-duck" ? "tabs active-tabs" : "tabs"
            }`}
            onClick={() => toggleTab("donald-duck")}
          >
            Donald Duck
          </button>
          <button
            className={
              toggleState === "frozen-dolls" ? "tabs active-tabs" : "tabs"
            }
            onClick={() => toggleTab("frozen-dolls")}
          >
            Frozen Dolls
          </button>
        </div>

        <div className="content-tabs grid grid-cols-1 lg:grid-cols-3 py-8 gap-8">
          {toys.map((toy) => (
            <div key={toy._id} className="card xl:w-96 bg-base-100 shadow-xl">
              <figure>
                <img className="md:h-96 h-52" src={toy.image} alt="Shoes" />
              </figure>
              <div className="card-body text-center font-semibold">
                <h2 className="text-2xl font-bold">{toy.toy_name}</h2>
                <p>Price: ${toy.price}</p>
                <p>Rating: {toy.rating}</p>
                <div className="card-actions justify-center">
                  <Link to={`/singleToy/${toy._id}`}>
                    <button className="btn bg-orange-400">Details</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopByCategory;
