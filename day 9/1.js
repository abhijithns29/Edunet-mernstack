import fs from "fs";
const filepath = "./1.txt";
const content = "Write into file!";

fs.writeFile(filepath,content,'utf-8',(err)=>{
    if (err){
        console.log("Error opening file!",err);
        return;
    }
    console.log("File written succesfully!");
})