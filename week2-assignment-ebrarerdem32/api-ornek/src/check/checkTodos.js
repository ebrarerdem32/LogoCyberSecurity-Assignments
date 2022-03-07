const todos = require ("../data/todos");//bu dizindeki data yı kullanır
getAllTodos = () =>
{
    return todos;
}
getTodosByUserID= (userId) =>
{
    return todos.filter (f=> f.userId == userId);//userID'si ne isteniyorsa onu filtreler
}
module.exports={getAllTodos,getTodosByUserID};//bu fonksiyonları başka modülde kullanabilmemiz export ederiz