const express= require ("express");
/* Burada modül modül çalışmamız gerektiğinden json'ları filter ettiğimiz kodlarıda ayrı bir klasör olan
 check'in içine koyduk. O yüzden bu sayfada tanımlamamız gerek.*/
const checkPosts = require ("./src/check/checkPosts");
const checkUsers = require ("./src/check/checkUsers");
const checkTodos = require ("./src/check/checkTodos");

const app = express();
app.get("/posts", (req,res)=>{
    // endpoint'i /posts ise tüm postları getirir.
    var posts = checkPosts.getAllPosts();
    res.send(posts);
});

app.get("/posts/:postID", (req,res) =>
{
    // endpoint'te bir route tanımlaması varsa o tanımlamanın olduğu postu getirir.
    var post = checkPosts.getPostByID(req.params.postID);
    res.send(post);
});

app.get("/users", (req,res)=>
{
    // Tüm users'ları getirir.
    var users = checkUsers.getAllUsers ();
    res.send(users);
});

app.get("/users/:userId", (req,res)=>
{
    // endpoint'te bir route tanımlaması varsa o tanımlamanın olduğu postu getirir.
    var user= checkUsers.getUsersByID (req.params.userId);
    res.send(user);
});

app.get("/todos", (req,res)=>{
    var todos;
    // Query string tanımlı ise todos'ların userID'sine göre bilgileri getirir.
    if(req.query.userId)
    {
        todos = checkTodos.getTodosByUserID(req.query.userId);
    }
    else
    {
        // Yoksa todos'ların hepsini getirir.
        todos=checkTodos.getAllTodos();
        
    }
    res.send(todos);
});
app.listen(5500);//5500 nolu porttan yayın yapar.
