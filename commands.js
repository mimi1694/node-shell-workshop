var exports = module.exports = {};
var fs = require('fs');

exports.pwd = function(str){
    if (str === 'pwd'){
        process.stdout.write(process.argv[1]);
    }
};

exports.date = function(str){
    if (str === 'date'){
        var date = new Date();
        process.stdout.write(date.toString());
    }
};

exports.ls = function(str){
 if (str === 'ls'){
    fs.readdir('.', function(err, files) {
        if (err) throw err;
        files.forEach(function(file) {
          process.stdout.write(file.toString() + "\n");
      });
 });
}
};
