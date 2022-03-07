const users = require ("../data/users"); //bu dizindeki data yı kullanır
getAllUsers = () =>
{
    return users;
}
getUsersByID = (userId) =>
{
    return users.filter (f=> f.id == userId);// istenen ne ise onu filtreler
}
module.exports={getAllUsers,getUsersByID};//bu fonksiyonları başka modülde kullanabilmemiz export ederiz