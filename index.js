const app = require('./src/server');

async function init(){

    await app.listen(app.get('port'),()=>{
        console.log(`Server on port ${app.get('port')} on`);
    })

}

init();