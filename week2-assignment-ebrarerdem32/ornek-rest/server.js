const http= require ("http");
const users= require ("./datas/users.json"); 
const posts= require ("./datas/posts.json");

const server=http.createServer((req,res) =>{
    console.log (`Talep alındı : ${req.url}`)
    if (req.url === "/users")
    {
        // /users istenirse
        res.setHeader("Content-Type" , "application/json");
        res.write(JSON.stringify(users));
        res.end();
    }
    else if(req.url === "/posts")
    { 
        // /posts istenirse
        res.setHeader("Content-Type" , "application/json");
        res.write(JSON.stringify(posts));
        res.end();
    }
    else{
        // ikisi de istenmezse "Yönlendirme hatalı" mesajı yazdıracak.
        res.writeHeader(404, "Content-Type" , "application/json");
        res.end(JSON.stringify({message:"Yönlendirme hatalı"}));
    }
});
const PORT=5500;
server.listen(PORT,()=>console.log(`Server ${PORT} portu üzerinden çalışıyor`));
