const authenticatedReducer = (state=false, action) => {
    switch (action.type) {
        case "Login":
            return true
        case "Logout":
            return false
        default:
            return state
    }
}

export default authenticatedReducer;
