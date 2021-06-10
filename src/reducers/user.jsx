const userReducer = (state=null, action) => {
    switch (action.type) {
        case "updateUser":
            return action.data
        default:
            return state
    }
}

export default userReducer;







