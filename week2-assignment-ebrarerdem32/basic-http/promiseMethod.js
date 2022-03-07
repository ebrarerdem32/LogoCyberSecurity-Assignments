const getValue = () =>
{
    return new Promise ((resolve, reject) =>
    {
        var status = true;
        if(status)
        {
            //Olumlu ise
            resolve ("Veriler getirildi");
        }
        else
        {
            //Olumsuz ise
            reject("Verilerde hata var");
        }
    }); 
}
getValue().then(result =>
    {
    //"Veriler getirildi" yazar
    console.log (result);
    })
.catch(err => 
    {
    //"Verilerde hata var" yazar
    console.log (err);
    })
.finally (fin =>
    {
        //Bu bolum ister resolve ister reject calissin yinede gelir.
        console.log ("her türlü çalışırım");
    })


