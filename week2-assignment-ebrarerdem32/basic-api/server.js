const http= require ("http");
const persons=require("./data.json");

const server=http.createServer((req,res)=>{
console.log(req.url);
req.statusCode =200; // 200 demek islemin basarılı olduğunu request'in alındığını belirtir.
res.setHeader("Content-Type" , "application/json"); // Client'ların server'dan alacağı cevapların türünü belirtir.
res.write(JSON.stringify(persons)); //datadaki json'ı string'e çevirerek yazdırır.
res.end();
});
const PORT= 5500;
server.listen(PORT,() => console.log(`Server ${PORT} portunda çalışıyor.`))