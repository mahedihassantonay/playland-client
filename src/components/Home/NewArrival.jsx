import img1 from "../../assets/1.jpg";
import img2 from "../../assets/2.jpg";
import img3 from "../../assets/3.jpg";
const NewArrival = () => {
  return (
    <div className="flex gap-8 py-12 border-2 border-pink-400 my-8">
      <div className="bg-pink-500 p-4 text-gray-300 font-bold text-xl space-y-7">
        <h1>N</h1>
        <h1>E</h1>
        <h1>W</h1>
        <br />
        <h1>A</h1>
        <h1>R</h1>
        <h1>R</h1>
        <h1>I</h1>
        <h1>V</h1>
        <h1>A</h1>
        <h1>L</h1>
      </div>
      <div className="flex gap-20">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={img1} alt="Shoes" className="rounded-xl h-96" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Jessie</h2>
            <p>Category: Toy</p>
            <p>Price: $12</p>
            <div className="card-actions">
              <button className="btn bg-pink-400 border-0 hover:bg-red-500">
                Buy Now
              </button>
            </div>
          </div>
        </div>

        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={img2} alt="Shoes" className="rounded-xl h-96" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Woody Cowboy</h2>
            <p>Category: Toy</p>
            <p>Price: $10</p>
            <div className="card-actions">
              <button className="btn bg-pink-400 border-0 hover:bg-orange-800">
                Buy Now
              </button>
            </div>
          </div>
        </div>

        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={img3} alt="Shoes" className="rounded-xl h-96" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Buzz Lightyear</h2>
            <p>Category: Toy</p>
            <p>Price: $15</p>
            <div className="card-actions">
              <button className="btn bg-pink-400 border-0 hover:bg-green-400">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
