var commands = require('./commands.js');

process.stdout.write('prompt > ');

process.stdin.on('data', function (data) {
  var cmdArray = data.toString().trim().split(' ');
  var command = cmdArray[0];
  var args = cmdArray.slice(1).join(' ');

  if (command === 'pwd'){
    commands.pwd();
  }
  if (command === 'date'){
    commands.date();
  }
  if (command === 'ls'){
    commands['ls']();
  }
  if(command==='echo'){
    commands['echo'](args);
  }
  process.stdout.write('\nprompt > ');
});

