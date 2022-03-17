

module.exports = (req,res,next) => {
//akan menampilakan data yang telah disaring oleh body parser
console.log("METHOD",req.method);
console.log("URL",req.path);
console.log("Header",req.headers)

next();
}