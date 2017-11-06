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

exports.tail = function(file){
    fs.readFile('./'+file, function(err, data){
        var arrayOfFile = data.toString().trim().split('\n');
        if (err) throw err;
        process.stdout.write(arrayOfFile.slice(arrayOfFile.length-5).join('\n'));
      //   process.stdout.write(data);
    });
}

exports.sort = function(file){
    fs.readFile('./'+file, function(err, data){
        var arrayOfFile = data.toString().trim().split('\n');
        if (err) throw err;
        arrayOfFile.sort();
        process.stdout.write(arrayOfFile.slice().join('\n'));
      //   process.stdout.write(data);
    });
}

exports.wc = function(file){
    fs.readFile('./'+file, function(err, data){
        var arrayOfFile = data.toString().trim().split('\n');
        if (err) throw err;
        process.stdout.write(arrayOfFile.length.toString());
      //   process.stdout.write(data);
    });
}

exports.uniq = function(file){
    fs.readFile('./'+file, function(err, data){
        var arrayOfFile = data.toString().trim().split('\n');
        var result = [];
        if (err) throw err;
        for(var i = 0; i<arrayOfFile.length; i++){
            if(arrayOfFile[i-1] && arrayOfFile[i]!==arrayOfFile[i-1]){
                result.push(arrayOfFile[i]);
            }
        }
        process.stdout.write(result.join('\n'));
      //   process.stdout.write(data);
    });
}
