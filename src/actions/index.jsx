export const login = () => {
    return {
        type: "Login"
    }
}

export const logout = () => {
    return {
        type: "Logout"
    }
}

export const updateUser = (data) => {
    return {
        type: "updateUser",
        data: data
    }
}