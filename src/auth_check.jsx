import axios from 'axios'

export const auth_check= async () => {
    const loggedIn = await axios({
        method:"get",
        withCredentials:true,
        url:"http://localhost:3001/authenticated"
    })
    return loggedIn.data
}

