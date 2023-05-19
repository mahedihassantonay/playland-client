import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Login = () => {
    const {signIn} = useContext(AuthContext)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
    const handleLogin = e =>{
        e.preventDefault();
        console.log(email,password)
       
    
            if(email,password){
    
                signIn(email,password)
                .then(result=>console.log(result.user))
                .catch((error) => {
                    console.log(error.message)
                })
            }
    }
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="">
            <h1 className="text-4xl font-bold text-gray-600">Login Please!</h1>
          </div>
          <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
            {/* form start */}
            <form onSubmit={handleLogin}>
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    onChange={e=>setEmail(e.target.value)}
                    name='email'
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="text"
                    placeholder="password"
                    name="password"
                    onChange={e=>setPassword(e.target.value)}
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn bg-blue-500">Login</button>
                </div>
                <p className="text-sm font-semibold">
                  New to this Page ?{" "}
                  <Link className="underline text-blue-500" to="/register">
                    Creat an account
                  </Link>
                </p>
              </div>
            </form>
            {/* form end */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
