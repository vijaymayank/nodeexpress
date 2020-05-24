const http=require('http')
const express=require('express')
//const morgan=require('')

const hostname='localhost';
const port=3000;

const app=express();


const morgan = require('morgan');



//app.use(morgan('dev'));
console.log(__dirname + '/private/index.html');
console.log(__dirname);




app.use(express.static( __dirname+'/private'));
var filepath='./private/index.html';
console.log(filepath);




app.use((req,res,next)=>{
    console.log("using express");
    res.statusCode=200;
    //res.setHeader=('Contentype','text/html');
    
    
    res.write("<html>  <Head>  </Head><body>  <h1> i am mayank and you are at right place</h1> </body></html>");
    res.write("he");
    
    
    res.end("<html>  <Head>  </Head><body>  <h1> i am mayank and you are at right place</h1> </body></html>");


    
});


const createServer=http.createServer(app);

createServer.listen(port,hostname,()=>{
    console.log(`server running at http://${hostname}:${port}`);
});

// var http = require('http'),
//     fs = require('fs');

// const hostname = 'localhost';
// const port = 3000;
// var filepath='./private/index.html';

// const html=fs.readFile(filepath, function (err, html) {
//     if (err) {
//         throw err; 
//     }
//         http.createServer(function(request, response) {  
//         response.writeHeader(200, {"Content-Type": "text/html;charset=utf-8"});  
//         response.write('may i come in213375u@#$$&*(^^%&{}}: vdrg');
//         //response.write();  
//         response.end(html);  
//     }).listen(port, hostname, () => {
//             console.log(`Server running at http://${hostname}:${port}/`);
//         })
// }); 