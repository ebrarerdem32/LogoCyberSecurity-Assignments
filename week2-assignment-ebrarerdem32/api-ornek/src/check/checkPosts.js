const posts= require ("../data/posts");//bu dizindeki data yı kullanır
getAllPosts = () => {return posts;}

getPostByID =(postID) =>
{
    return posts.filter(f=>f.id == postID);//istenen ne ise onu filtreler

}
module.exports ={getAllPosts,getPostByID};//bu fonksiyonları başka modülde kullanabilmemiz export ederiz