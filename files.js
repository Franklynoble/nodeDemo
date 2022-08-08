const fs = require('fs');  
// 
//reading files
// 
// fs.readFile('./docs/blog1.txt', (err, data) => {
// 
     // if (err) {
          // console.log(err);
     // }
     // console.log(data.toString()); // read data from  a file
// });
// 
// console.log('last  line');



//writing files 

//  fs.writeFile('./docs/blog1.txt','hello, world', () => {
     // console.log('file was written');
//  });

//directories 
if (!fs.existsSync('./assets')) {
fs.mkdir('./assets', (err) => {
     if(err) {
          console.log(err);
     }
     console.log('folder created');

});
}else {
     //deleting directories
     fs.rmdir('./assets', (err) => {
          if (err) {
               console.log('error')
          }
          console.log('folder deleted');
     });
}


//deleting files

if (fs.existsSync('./docs/deletme.txt')) {

     fs.unlink('./docs/deletme.txt',(err) => {
          if(err) {
               console.log(err)
          }
          console.log('file deleted');
     })
}

