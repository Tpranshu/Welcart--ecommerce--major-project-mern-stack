// create api calling service : if payload has no file field, contains only ascii characters

export async function createRecordAPI(collection, payload){  // collection --> type hai jo actions se aaega
    try {
        let response = await fetch(`${import.meta.env.VITE_APP_BACKEND_SERVER}/${collection}`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({...payload})  // payload --> means data ye bhi action se aaega wahi data body me spread krke bhej de rhe hai
        })

        response = await response.json()
        return response

    } catch (error) {
        console.log(error)
        return []
    }

}



// create api calling service : if payload has file field
export async function createMultipartRecordAPI(collection, payload){  // collection --> type hai jo actions se aaega
    try {
        let response = await fetch(`${import.meta.env.VITE_APP_BACKEND_SERVER}/${collection}`, {
            method: "POST",
            headers: {
            },
            body: payload // payload --> means data ye bhi action se aaega but is data me file hoga to ussey direct body me bhej dege

        })

        response = await response.json()
        return response

    } catch (error) {
        console.log(error)
        return []
    }

}

// get api calling service
export async function getRecordAPI(collection, payload){  // collection --> type hai jo actions se aaega
    try {
        let response = await fetch(`${import.meta.env.VITE_APP_BACKEND_SERVER}/${collection}`, {
            method: "GET",
            headers: {
                "content-type": "application/json"
            },

        })

        response = await response.json()
        return response

    } catch (error) {
        console.log(error)
        return []
    }

}

// update api calling service : if payload has no file field, contains only ascii characters

export async function updateRecordAPI(collection, payload){  // collection --> type hai jo actions se aaega
    try {
        let response = await fetch(`${import.meta.env.VITE_APP_BACKEND_SERVER}/${collection}/${payload.id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({...payload})  // payload --> means data ye bhi action se aaega wahi data body me spread krke bhej de rhe hai
        })

        response = await response.json()
        return response

    } catch (error) {
        console.log(error)
        return []
    }

}



// update api calling service : if payload has file field
export async function updateMultipartRecordAPI(collection, payload){  // collection --> type hai jo actions se aaega
    try {
        let response = await fetch(`${import.meta.env.VITE_APP_BACKEND_SERVER}/${collection}/${payload.get("id")}`, {
            method: "POST",
            headers: {
            },
            body: payload // payload --> means data ye bhi action se aaega but is data me file hoga to ussey direct body me bhej dege

        })

        response = await response.json()
        return response

    } catch (error) {
        console.log(error)
        return []
    }

}


// delete api calling service : if payload has no file field, contains only ascii characters

export async function deleteRecordAPI(collection, payload){  // collection --> type hai jo actions se aaega
    try {
        let response = await fetch(`${import.meta.env.VITE_APP_BACKEND_SERVER}/${collection}/${payload.id}`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({...payload})  // payload --> means data ye bhi action se aaega wahi data body me spread krke bhej de rhe hai
        })

        response = await response.json()
        return response

    } catch (error) {
        console.log(error)
        return []
    }

}