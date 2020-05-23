const http=require('http')
const express=require('express')

const hostname='localhost';
const port=3000;

const app=express();

app.use((req,res,next)=>{
    console.log("using express");
    res.statusCode=200;
    //res.setHeader=('Contentype','text/html');
    res.write("he");
    res.write("<html>  <Head>  </Head><body>  <h1> i am mayank and you are at right place</h1> </body></html>");
    
    
    res.end("<html>  <Head>  </Head><body>  <h1> i am mayank and you are at right place</h1> </body></html>");
    
});


const createServer=http.createServer(app);

createServer.listen(port,hostname,()=>{
    console.log(`server running at http://${hostname}:${port}`);
});
