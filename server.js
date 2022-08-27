    const http = request('http');

    const server = http.createServer((req,res) =>{
        console.log("run request...")
        res.setHeader("Content-Type ", "text/html");
        res.write("<h3>HELLO</h3>");
        res.write("<h2>from Kiet</h2>");
        res.end();
    })


    server.listen(3000, "localhost",()=>{
        console.log("Node.Js server is running on port: 3000");
    })