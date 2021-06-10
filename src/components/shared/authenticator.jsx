import {login,logout} from "../../actions";
import {useDispatch} from "react-redux";
import axios from 'axios'
import {useCallback} from "react";

/**Querying the server to check if logged in and updates the redux state*/

function Authenticator() {
    const dispatch = useDispatch()
    const doLogin = useCallback(
        () => dispatch(login()),
        [dispatch]
    );
    const doLogout = useCallback(
        () => dispatch(logout()),
        [dispatch]
    );





     const handler = async () => {
         const loggedIn = await axios({
             method:"get",
             withCredentials:true,
             url:"http://localhost:3001/authenticated"
         })
         if(loggedIn.data) doLogin()
         else doLogout()

    }
    handler()



    return false
}

export default Authenticator