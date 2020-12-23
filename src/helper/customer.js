import axios from 'axios'

export const register = newCustomer => {
    return axios
    .post('http://localhost:8080/user', newCustomer).then(response => {
        console.log("User Registered")
        return response.data
    }).catch(error => {
        console.log('Something Went Wrong')
    })
}

export const login = customer => {
    return axios
    .post('http://localhost:8080/user/login', customer).then(response => {
        localStorage.setItem('usertoken', response.data)
        console.log(response)
        return response.data
    }).catch(error => {
        console.log('ini')
    })
}

// export const getName = name => {
//     return axios
//     .get(`http://localhost:8080/user/login?${name}`).then(response => {
//         return response.data
//     })
// }