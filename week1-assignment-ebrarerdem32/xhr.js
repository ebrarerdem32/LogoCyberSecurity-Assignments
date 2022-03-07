let req = new XMLHttpRequest();
req.open("GET", "https://jsonplaceholder.typicode.com/users");
req.onload = () => {
    console.log(JSON.parse(req.response));
}
req.send();