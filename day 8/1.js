import fs from "fs";

const filepath="./1.txt";

fs.readFile(filepath,"utf-8",(err,data)=>{
    if(err){
        console.error(err);
        return;
    }
    console.log('file data :',data)
})