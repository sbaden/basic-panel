$(document).ready(function(){
    'use strict';
    alert('JS connected');

    let csInterface = new CSInterface();


    window.onload = function(){
        
        let profileObj = {
            message: "ExendScript connected"
        }
        
        // PASS OBJECT TO JSX FOR EVALUATION
        csInterface.evalScript('parseObj(' + JSON.stringify(profileObj) + ')');


        $('#btn-receiveJSX').on('click', function(){
            csInterface.evalScript('returnData()', 
                function(result){
                    alert(result);
                }
            );     
        });




        //// TEMP BUTTON FOR DEV: RELOADS EXTENTION PANEL
        $('#btn_reload').on('click', function(){
            location.reload();

            //// RELOAD JSX - NOT WORKING ////
            // let appName = csInterface.hostEnvironment.appName;
            // let extensionPath = csInterface.getSystemPath(SystemPath.EXTENSION);
            // let extensionRootGeneral = extensionPath + '/jsx/';  // load general JSX script independent of appName
            // csInterface.evalScript('evalFiles("' + extensionRootGeneral + '")');
        
            // let extensionRootApp = extensionPath + '/jsx/' + appName + '/';  // load JSX scripts based on appName
            // csInterface.evalScript('evalFiles("' + extensionRootApp + '")');
        });
    }
});
    
