import { useContext } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";
const AddToy = () => {
  const { user } = useContext(AuthContext);

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch("https://server-gray-mu.vercel.app/addToy", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.insertedId) {
          Swal.fire("Great job!", "You successfully added a Toy!", "success");
        }
      });
    console.log(data);
  };

  return (
    <div className="bg-gradient-to-r from-blue-300 to-gray-800 p-24">
      <div className="container mx-auto">
        <form onSubmit={handleSubmit(onSubmit)} className=" w-full">
          {errors.exampleRequired && <span>This field is required</span>}

          <div className="space-y-8 grid lg:grid-cols-2">
            {/* toy name */}
            <div className="text-2xl  font-semibold lg:p-4 flex gap-12 items-center">
              <label className="w-2/12">Toy name: </label>
              <input
                className="text-input lg:px-16 rounded-lg"
                {...register("toy_name")}
              />
            </div>
            {/* seller name */}
            <div className="text-2xl  font-semibold p-4 flex gap-12 items-center">
              <label className="w-2/12">Seller name: </label>
              <input
                className="text-input px-16 rounded-lg"
                {...register("seller_name", { required: true })}
              />
            </div>

            {/* email */}
            <div className="text-2xl  font-semibold p-4 flex gap-12 items-center">
              <label className="w-2/12">Email:</label>
              <input
                className="text-input px-16 rounded-lg"
                value={user?.email}
                {...register("email")}
                type="email"
              />
            </div>

            {/* sub category */}
            <div className="text-2xl  font-semibold p-4 flex gap-12 items-center">
              <label className="w-2/12">Sub Category</label>
              <select
                className="text-input px-16 rounded-lg"
                {...register("sub_category")}
              >
                <option value="princes">Princes</option>
                <option value="frozen-dolls">Frozen Dolls</option>
                <option value="donald-duck">Donald Duck</option>
              </select>
            </div>

            {/* price */}
            <div className="text-2xl  font-semibold p-4 flex gap-12 items-center">
              <label className="w-2/12">Price:</label>
              <input
                className="text-input px-16 rounded-lg"
                {...register("price", { required: true })}
                type="number"
              />
            </div>
            {/* image url */}
            <div className="text-2xl  font-semibold p-4 flex gap-12 items-center">
              <label className="w-2/12">Photo URL:</label>
              <input
                className="text-input px-16 rounded-lg"
                {...register("image")}
                type="url"
                // defaultValue="https://images.pexels.com/photos/2528118/pexels-photo-2528118.jpeg?auto=compress&cs=tinysrgb&w=600"
              />
            </div>

            {/* quantity */}
            <div className="text-2xl  font-semibold p-4 flex gap-12 items-center">
              <label className="w-2/12">Quantity:</label>
              <input
                className="text-input px-16 rounded-lg"
                {...register("quantity", { required: true })}
                type="number"
              />
            </div>

            {/* rating */}
            <div className="text-2xl  font-semibold p-4 flex gap-12 items-center">
              <label className="w-2/12">Rating:</label>
              <input
                className="text-input px-16 rounded-lg"
                {...register("rating", { required: true })}
                type="text"
              />
            </div>

            {/* dexcription */}
            <div className="text-2xl  font-semibold p-4 flex gap-12 items-center">
              <label className="w-2/12">Description:</label>
              <input
                className="text-input px-16 rounded-lg"
                {...register("description")}
              />
            </div>
          </div>

          <div className="p-4">
            <input
              className="btn btn-block font-bold text-xl"
              value="Add Toy"
              type="submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddToy;
