import {updateUser} from "../../actions";
import {useDispatch} from "react-redux";
import axios from 'axios'
import {useCallback} from "react";

/**Querying the server for user info */
function UserInfo() {
    const dispatch = useDispatch()
    const doUpdate = useCallback(
        (data) => dispatch(updateUser(data.data)),
        [dispatch]
    );

    const handler = async () => {
        const user = await axios({
            method:"get",
            withCredentials:true,
            url:"http://localhost:3001/user"
        })
        if(user) doUpdate(user)

    }
    handler()


    return false
}

export default UserInfo