var smartglass = require('xbox-smartglass-core-node');



function PowerOnConsole(console){
    smartglass().powerOn({live_id: console.live_id, tries: 5, ip: console.remote.address});
}

function PowerOffConsole(sgClient){
    sgClient.powerOff();
}

module.exports = { PowerOffConsole, PowerOnConsole }