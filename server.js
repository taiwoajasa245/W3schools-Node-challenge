var http = require('http'); 
var fs = require('fs'); 


const server = http.createServer( (req, res) => { 
  console.log("successfully"); 

  res.setHeader('Content-Type', 'text/html'); 

  let path = ""; 

  switch (req.url) {
    case '/':
      path += "./index.html"
      break;
  
    default:
      path += "404.html"
      break;
  }; 

  fs.readFile(path, (err, data) => { 
    if(err){ 
      console.error(err);
    } 
    res.end(data)
  }); 


}); 

server.listen(8080, () => { 
  console.log('listening for request on port 8080');
})

