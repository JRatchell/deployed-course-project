const mongoose = require('mongoose');
main().catch(err => console.log(err));
async function main(){
//await mongoose.connect('mongodb://127.0.0.1:27017/codeSquadComics');
    //await mongoose.connect(process.env,DB_URL);
    //Come back when mongodb is a real app that you have access to on your computer
    console.log("This is working")
}