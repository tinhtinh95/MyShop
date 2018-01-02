

const Cat =
// [
//     { id: 1, name: "Nguyen Thi Tinh", age: "22" },
//     { id: 2, name: "Nguyen Thi Tinh1", age: "22" },
//     { id: 3, name: "Nguyen Thi Tinh2", age: "22" }

// ];
fetch('http://192.168.21.122/api/')
.then((response) => response.json())
.then((responseJson) => {
return responseJson.type;
})
.catch((error) => {
// alert('error')
console.error(error);
return [];
});

export default () =>{
// return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         return resolve(Cat);
//     },500)
// })
return Cat
}
// export default () => {return Cat};