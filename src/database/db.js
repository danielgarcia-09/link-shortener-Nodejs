const mysql = require('mysql');
module.exports = ()=>{
    return mysql.createConnection({
        host: "y5s2h87f6ur56vae.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        user: "t4i7rt6hg2g4g26g",
        password: "ck4k0k0vksvp3eik",
        database:"u96jt3cmx3wbs3j7"
    })
}