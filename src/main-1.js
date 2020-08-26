let Promise = require('bluebird');
let mysql = require("mysql");

 
Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

let readAll = async() => {
    try{
        console.log("hello testing here");
        const Connection = mysql.createConnection({
            host: "127.0.0.1",
            user:"root",
            password:"",
            database:"user",
        });

      await  Connection.connectAsync();
    
      //wriite query here;
      let  sql= "SELECT * FROM student";
        let result= await Connection.queryAsync(sql);


         Connection.end();
        console.log(result);
       return  result;

    }
    catch(err){
        console.log(err);
    }
};
readAll();
