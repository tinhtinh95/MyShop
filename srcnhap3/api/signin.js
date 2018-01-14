const signin=(email, password)=>(
    fetch('http://192.168.1.31/api/login.php',
    {
        method:'POST',
        headers:{
            'Content-Type': 'application/json',
            Accept:'application/json',
        },
        body: JSON.stringify({email,password})
    })
    .then(res=>res.json())
);
module.exports = signin;