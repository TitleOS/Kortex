var smartglass = require('xbox-smartglass-core-node');


function InitSmartGlassClient(consoleip){

    return smartglass().connect(consoleip);
}


function GetFirstConsole(){
    const firstconsole;
    smartglass().discovery().then(function(foundconsoles){
        firstconsole = foundconsoles[0];
    })
    return firstconsole;
}


module.exports = { InitSmartGlassClient, GetFirstConsole }