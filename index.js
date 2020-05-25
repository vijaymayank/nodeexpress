const http=require('http')
const express=require('express')
//const morgan=require('')
const bodyParser = require('body-parser');
const morgan = require('morgan');
const dishRouter=require('./routes/dishRouter')
const promoRouter=require('./routes/promoRouter');
const leaderRouter=require('./routes/leaderRouter');


const hostname='localhost';
const port=3000;

const app=express();
app.use(morgan('dev'));
app.use(bodyParser.json());

//app.use(express.static( __dirname+'/private'));


app.use('/dishes',dishRouter);
app.use('/promotions',promoRouter);
app.use('/leaders',leaderRouter);

const createServer=http.createServer(app);

createServer.listen(port,hostname,()=>{
    console.log(`server running at http://${hostname}:${port}`);
});



// app.all('/dishes', (req,res,next) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   next();
// });


// app.route('/dishes')
// .get((req,res,next) => {
//     res.end('Will send all the dishes to you!');
// })

// .post( (req, res, next) => {
//  res.end('Will add the dish: ' + req.body.name + ' with details: ' + req.body.description);
// })

// .put( (req, res, next) => {
//   res.statusCode = 403;
//   res.end('PUT operation not supported on /dishes');
// })
 
// .delete( (req, res, next) => {
//     res.end('Deleting all dishes');
// });




// app.get('/dishes/:dishId', (req,res,next) => {
//     res.end('Will send details of the dish: ' + req.params.dishId +' to you!');
// });

// app.post('/dishes/:dishId', (req, res, next) => {
//   res.statusCode = 403;
//   res.end('POST operation not supported on /dishes/'+ req.params.dishId);
// });

// app.put('/dishes/:dishId', (req, res, next) => {
//   res.write('Updating the dish: ' + req.params.dishId + '\n');
//   res.end('Will update the dish: ' + req.body.name + 
//         ' with details: ' + req.body.description);
// });

// app.delete('/dishes/:dishId', (req, res, next) => {
//     res.end('Deleting dish: ' + req.params.dishId);
// });


// app.use((req,res,next)=>{
//     console.log("using express");
//     res.statusCode=200;
//     //res.setHeader=('Contentype','text/html');
    
    
//     res.write("<html>  <Head>  </Head><body>  <h1> i am mayank and you are at right place</h1> </body></html>");
//     res.write("he");
    
    
//     res.end("<html>  <Head>  </Head><body>  <h1> i am mayank and you are at right place</h1> </body></html>");


    
// });










/////////////////////



///////////////////

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