

const Cat = [{}]
// fetch('http://192.168.1.22/api/')
// .then((response) => response.json())
// .then((responseJson) => {
//     return responseJson.type;
// })
// .catch((error) => {
//     // alert('error')
//     console.error(error);
// });

export default ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            return resolve(Cat);
        },3000)
    })
}