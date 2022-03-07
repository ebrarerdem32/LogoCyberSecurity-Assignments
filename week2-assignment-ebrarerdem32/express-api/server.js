const express = require ("express");
// datas klasörünün içinde olan json dosyalarımızı burada tanıtıyoruz.
const users =require ("./datas/users.json");
const posts =require ("./datas/posts.json");
const app = express();

app.get ("/users" ,(req,res) =>
{
 console.log (req.query);
 if(req.query.id)
 {
     // users'ın query string'i var ise filtrele ve getir.
     //"http://localhost:5500/users/?id=5" diye url girilirse sadece id'si 5 olan kişinin bilgileri gelir.
     var part = users.filter (f => f.id == req.query.id);
     res.send(part);
 }
 else
 {
     // users'ın query string'i yok ise users'ın hepsini getir.
     // "http://localhost:5500/users" ise users'ları getirir.
     res.send(users);
 }
});
 app.get ("/posts/:postID" , (req,res)=>
 {
     //"http://localhost:5500/posts/2" olur ise sadece postID'si 2 olan post gelir.
     console.log (req.params.postID);
     var IDPost= posts.filter (f =>f.id == req.params.postID);
     res.send (IDPost);
 });
 app.get("/posts" , (req,res) =>{
     // "http://localhost:5500/posts" ise tüm postlar gelir
    res.send (posts);
 });

const PORT=5500;
app.listen(PORT);