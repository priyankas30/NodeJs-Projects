let priyanka = require ('./person');
let emp = require ('./employee');
 
class Main{

    static main () {
         
        let p = new priyanka();
        let output = p.getname();

        let e = new emp();
        let workers = e.hello();


        console.log(output);
        console.log(workers);


    }
};

Main.main();
