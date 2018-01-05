const BASE_URL = 'http://localhost/api/';

const API = {
    getList(name) {
        return fetch(`${BASE_URL}`)
            .then((response) => response.json())
            .then((responseJson) => {
                if (name === 'type') {
                    // console.log(name, responseJson.type);
                    return responseJson.type;
                } else if (name === 'product'){
                    // console.log(name, responseJson.product);
                    return responseJson.product;
                }
            })
            .catch((error) => {
                // alert('error')
                console.error(error);
                return [];
            })
    },
}

export default API;
