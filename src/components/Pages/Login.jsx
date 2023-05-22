import { useContext, useState } from "react";
import { FaGooglePlusSquare } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Login = () => {
  const { signIn, signInWithGoogle } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [error, setError] = useState('')
  const [password, setPassword] = useState("");
  const location = useLocation();
  const navigate = useNavigate();


  const handleSignIn = (e) => {
    e.preventDefault();
    console.log(email, password);

    if ((email, password)) {
      signIn(email, password)
        .then((result) => {
          console.log(result.user);
          navigate(location.state?.pathname || "/", { replace: true });
          toast.success('You are successfully logged in', {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });

        })
        .catch((error) => {
          console.log(error.message);
          setError('Invalid email/password')
          
        });
    }
  };

  const handleSignInWithGoogle = (e) => {
    e.preventDefault();
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        navigate(location.state?.pathname || "/", { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div>
            <h1 className="text-4xl font-bold text-gray-600">Login Please!</h1>
          </div>
          <div className="card flex-shrink-0 w-96 shadow-2xl bg-base-100 py-12">
            {/* form start */}
            <form onSubmit={handleSignIn}>
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    onChange={(e) => setEmail(e.target.value)}
                    name="email"
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
                    onChange={(e) => setPassword(e.target.value)}
                    className="input input-bordered"
                  />
                </div>
                <p><small className="text-red-600">{error}</small></p>
                <div className="form-control mt-6">
                  <button className="btn bg-blue-500">Login</button>
                </div>
              </div>
            </form>
            {/* form end */}
            <div className="w-4/5 mx-auto -mt-4">
              <h1 className="text-center font-bold">Or</h1> <br />
              <div className="flex justify-center items-center gap-2">
                <button onClick={handleSignInWithGoogle} className="btn btn-block bg-blue-500 normal-case flex gap-2 mb-4">
                  <FaGooglePlusSquare size={24} />
                  <h1>Sign In With Google</h1>
                </button>
              </div>
              <p className="text-sm font-semibold">
                New to this Page ?{" "}
                <Link className="underline text-blue-500" to="/register">
                  Creat an account
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
