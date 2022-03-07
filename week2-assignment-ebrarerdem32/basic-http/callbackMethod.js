//Callback Method
const getValues=(callback) =>
{
    var status = true;
    if (status)
    {
        //Status "true" iken bu satır aktif olur.
        callback (undefined, "Method calisti");
    }
    else
    {
         //Status "false" iken bu satır aktif olur.
        callback ("veri getirilemedi" , undefined);
    }
    
};

getValues ((err,data) =>
{
    if(err)
    {
        // "Veri getirilemedi" yazar
        console.log (err);
    }
    else
    {
       //"Method calisti" yazar
       console.log (data);
    }
});