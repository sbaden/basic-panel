
// RECEIVE DATA
function parseObj(obj){
    alert(obj.message);
}

// RETURN DATA
function returnData(){
	return 'Data Returned';
}


//// RELOAD JSX - NOT WORKING ////
// //// Evaluate a file and catch the exception.
// function evalFile(path) {
//     try {
//         var value = $.evalFile(path);
//     } catch (e) {alert("Exception:" + e);}
// }

// //// Evaluate all the files in the given folder 
// function evalFiles(jsxFolderPath) {
//     var folder = new Folder(jsxFolderPath);

//     if (folder.exists) {
//         var jsxFiles = folder.getFiles("*.jsx");

//         for (var i = 0; i < jsxFiles.length; i++) {
//             var jsxFile = jsxFiles[i];
//             evalFile(jsxFile);
//         }
//     }
// }

