require('dotenv').config();
const firstName = process.env.FIRST_NAME
const alias = process.env.ALIAS

 console.log(firstName + alias)



const addFunction = function(a,b){
    console.log(a+b)
}
// addFunction(5,5)

module.exports.addFunction = addFunction