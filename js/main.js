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




        // TEMP BUTTON FOR DEV: RELOADS EXTENTION PANEL
        $('#btn_reload').on('click', function(){
            location.reload();
        });
    }
});
    
