import { useContext } from "react";
import { AuthContext } from "../Pages/AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import {PropTypes} from "prop-types"
const PrivateAddProduct = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    const location=useLocation();
    console.log(location.pathname);
    if(loading){
        return <span className="loading loading-spinner loading-lg"></span>
    }
    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to="/signin"></Navigate>
};
PrivateAddProduct.propTypes={
    children:PropTypes.node
}
export default PrivateAddProduct;