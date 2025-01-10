const fs = require('fs');


//==========================================================================
//------------------------------- make directory ---------------------------


// fs.mkdir('myDirectory1', (err) => {
//     if (err) {
//         console.error('Error creating directory:', err);
//     } else {
//         console.log('Directory created successfully!');
//     }
// });



// ==========================================================================
//------------------------------ write file ---------------------------------

// fs.writeFile('./myDirectory/example.txt', 'Hello, world!', (err) => {
//     if (err) {
//         console.log('Error writing to file:', err);
//     } else {
//         console.log('File written successfully!');
//     }
// });



//==========================================================================
//------------------------------- Read file --------------------------------

// fs.readFile('./myDirectory/example.txt', 'utf8', (err, data) => {
//     if (err) {
//         console.error('Error reading file:', err);
//     } else {
//         console.log('File content:', data);
//     }
// });


//========================================================================
//------------------------ unlink for delete file ------------------------

// fs.unlink('example.txt', (err) => {
//     if (err) console.log(err);
//     console.log('file was deleted');
//   }); 

//=======================================================================
//------------------------ rmdir for delete folder ----------------------

// fs.rmdir("myDirectory1", function(err){
//     if(err) console.log(err);
//     else console.log("folder was deleted");
    
// })