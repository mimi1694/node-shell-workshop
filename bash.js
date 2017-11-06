
process.stdout.write('prompt > ');

process.stdin.on('data', function (data) {
  var cmd = data.toString().trim(); 
  pwd(cmd);
  date(cmd);
  //  process.stdout.write(`Can't find command: ${cmd}`);
  
  process.stdout.write('\nprompt > ');
});

let pwd = function(str){
    if (str === 'pwd'){
        process.stdout.write(process.argv[1]);
    }
}

let date = function(str){
    if (str === 'date'){
        var date = new Date();
        process.stdout.write(date.toString());
    }
}