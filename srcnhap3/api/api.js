const BASE_URL = 'http://localhost/api/';

const API = {
    getList(name) {
        // if (name === 'type') {
        return fetch(`${BASE_URL}`)
            .then((response) => response.json())
            .then((responseJson) => {
                if (name === 'type') {
                    console.log(name, responseJson.type);
                    return responseJson.type;
                } else {
                    console.log(name, responseJson.product);
                    return responseJson.product;
                }
            })
            .catch((error) => {
                // alert('error')
                console.error(error);
                return [];
            })
        // }else if (name === 'product') {
        //     return fetch(`${BASE_URL}`)
        //         .then((response) => response.json())
        //         .then((responseJson) => {
        //             return responseJson.product;
        //         })
        //         .catch((error) => {
        //             // alert('error')
        //             console.error(error);
        //             return [];
        //         })
        // }

    },
    getListProduct() {
        return fetch(`${BASE_URL}`)
            .then((response) => response.json())
            .then((responseJson) => responseJson.product)
            .catch((error) => {
                console.error(error);
                return [];
            })
    },
    getListCat() {
        return fetch(`${BASE_URL}`)
            .then((response) => response.json())
            .then((responseJson) => responseJson.type)
            .catch((error) => {
                console.error(error);
                return [];
            })
    },
    // getListProduct() {
    //     return fetch(`${BASE_URL}`)
    //     .then((response) => response.json())
    //     .then((responseJson) => {
    //         // return `${responseJson}.${name}`;
    //         return responseJson.product;
    //     })
    //     .catch((error) => {
    //         // alert('error')
    //         console.error(error);
    //         return [];
    //     })
    // }
}

export default API;
