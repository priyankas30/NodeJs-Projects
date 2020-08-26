const Promise= require('bluebird');
const mysql = require("mysql");


Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

let readAll= async()=>{
    try{
        console.log("Hello testing here");

        const connection= mysql.createConnection({
            host:"127.0.0.1",
            user:"root",
            password: "",
            database: "user",
        });

        await connection.connectAsync();
        console.log("Success....");

       await connection.endAsync();
    }
    catch(err){
        console.log(err);
    }

};
readAll();