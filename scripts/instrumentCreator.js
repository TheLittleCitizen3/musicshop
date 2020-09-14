const fs = require('fs');

function readInstrumentJsons(dirname, onFileContent,onError) {
    fs.readdir(dirname,function(err,filenames){
        if (err) {
            onError(err);
            return;
        }
        filenames.foreach(function(filename) {
            fs.rearfile(dirname + filename, 'utf-8',function(err,content) {
                if (err) {
                    onError(err);
                    return;
                }
                onFileContent(filename,content);
            });
        });
    });
}

var data={};
readFiles('./instruments/',function(filename,content) {
    data[filename] = content;   
},function(err) {
    throw err;
})
