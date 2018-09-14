$(document).ready(function(){
    'use strict';
    alert('JS connected');

    var csInterface = new CSInterface();


    window.onload = function(){
        // PASS OBJECT TO JSX FOR EVALUATION
        var profileObj = {
            message: "ExendScript connected"
        }

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
            // var appName = csInterface.hostEnvironment.appName;
            // var extensionPath = csInterface.getSystemPath(SystemPath.EXTENSION);
            // var extensionRootGeneral = extensionPath + '/jsx/';  // load general JSX script independent of appName
            // csInterface.evalScript('evalFiles("' + extensionRootGeneral + '")');
        
            // var extensionRootApp = extensionPath + '/jsx/' + appName + '/';  // load JSX scripts based on appName
            // csInterface.evalScript('evalFiles("' + extensionRootApp + '")');
        });
    }
});
    
