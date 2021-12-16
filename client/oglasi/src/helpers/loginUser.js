export async function loginUser (user) {
const response = await fetch(`/login/login`,{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify(user),
    })
    const data = await response.json()
    console.log(response)
    return data;
}

export async function tokenLogin () {
    const response = await fetch(`/login/token`,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        })
    const data = await response.json()
    console.log(data)
    return data
}


export async function logoutUser () {
    const response = await fetch(`/login/logout`,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        })
    const data = await response.json()
    console.log(data)
    return data
}