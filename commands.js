var exports = module.exports = {};
var fs = require('fs');

exports.pwd = function(file){
    process.stdout.write(process.argv[1]);
};

exports.date = function(file){

    var date = new Date();
    process.stdout.write(date.toString());

};

exports.ls = function(file){
    fs.readdir('.', function(err, files) {
        if (err) throw err;
        files.forEach(function(file) {
          process.stdout.write(file.toString() + "\n");
      });
 });

};

exports.echo = function(file){
    process.stdout.write(file);
};

exports.cat = function(file){
  fs.readFile('./'+file, function(err, data){
    if (err) throw err;
      process.stdout.write(data);
  });
};

exports.head = function(file){
  fs.readFile('./'+file, function(err, data){
      var lineCounter = 0;
      var arrayOfFile = data.toString().trim().split('\n');
    if (err) throw err;
    process.stdout.write(arrayOfFile.slice(0,6).join('\n'));
    //   process.stdout.write(data);
  });
};

