import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Lottie from "lottie-react";
import spinner from '../../src/assets/spinner.json'

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation();
    if(loading){
        return <Lottie className="h-96" animationData={spinner} loop={true} />

    }
    if(user){
        return children;
    }
    return <Navigate state={location} to='/login' replace></Navigate>
}


export default PrivateRoute;