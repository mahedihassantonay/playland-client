import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Registration = () => {
    const {registerUser , updateUserProfile} = useContext(AuthContext)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [photo, setPhoto] = useState('')

    const handleRegistration = e =>{
        e.preventDefault();
        console.log(name,email,password)

        if(name,email,password){

            registerUser(email,password)
            .then(result=>{
                console.log(result.user)
                updateUserProfile(result.user, name, photo);
            })
            .catch((error) => {
                console.log(error.message)
            })
        }
    }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col ">
        <div className="">
          <h1 className="text-4xl font-bold text-gray-600">Sign Up Here!</h1>
        </div>
        <div className="card flex-shrink-0 w-96 py-8 shadow-2xl bg-base-100">
          {/* form start */}
          <form onSubmit={handleRegistration}>
            <div className="card-body">
                {/* name */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                onChange={e=>setName(e.target.value)}
                  type="text"
                  placeholder="your name"
                  name="name"
                  className="input input-bordered"
                />
              </div>

              {/* email */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                onChange={e=>setEmail(e.target.value)}
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
                {/* password */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                
                onChange={e=>setPassword(e.target.value)}
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                  required
                />
              </div>
              {/* photo url */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input
                onChange={e=> setPhoto(e.target.value)}
                  type="text"
                  placeholder="url"
                  name="photo"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-blue-500">Sign Up</button>
              </div>
              <p className="text-sm font-semibold">
                Already have an account ?{" "}
                <Link className="underline text-blue-500" to="/login">
                  Login
                </Link>
              </p>
            </div>
          </form>
          {/* form end */}
        </div>
      </div>
    </div>
  );
};

export default Registration;
