//console.log(process);
//console.log(Object.keys(process))

// process.stdout.write('prompt > ');

// process.stdin.on('data', function (data){
//     var cmd = data.toString().trim();

//     process.stdout.write('you typed: ', + cmd);
//     process.stdout.write('\nprompt > ');
// })

// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  var cmd = data.toString().trim(); // remove the newline
<<<<<<< HEAD

  
  process.stdout.write('You typed: ' + cmd);
  process.stdout.write('\nprompt > ');

});
=======
  if (cmd === 'pwd'){
    process.stdout.write(process.argv[1]);
  } else if (cmd === 'date'){
    var date = new Date(20);
    process.stdout.write(date);
  } else {
    process.stdout.write(`Can't find command: ${cmd}`);
  }
  process.stdout.write('\nprompt > ');
});
>>>>>>> c6253c9012f6dd4490f5105e9cd31296d4f32b22
