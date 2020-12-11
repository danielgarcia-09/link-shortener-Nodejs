const db = require('../database/db');
const con = db();
const controller = {};


controller.shortLink = (req, res)=>{
    const {link} = req.body;
    const shortLink = link.split('=');
    con.query(`insert into links (linkInitial,shortLink) values ('${link}','${shortLink[1]}')`,(err,data)=>{
        if(err){
            res.status(404).json(err);
        }
        res.status(202).json(`http://shortlink-dan.herokuapp.com/link/${shortLink[1]}`);
    })
    
}
controller.getLink = (req,res)=>{
    const {link} = req.params;
    con.query(`select linkInitial from links where shortLink = '${link}'`,(err,data)=>{
        if(err){
            res.status(404).json(err);
        }
       setTimeout(()=>{
        res.redirect(data[0].linkInitial);
       },5000)
    })
}


module.exports = controller;