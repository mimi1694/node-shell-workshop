var commands = require('./commands.js');

process.stdout.write('prompt > ');

process.stdin.on('data', function (data) {
  var cmdArray = data.toString().trim().split(' ');
  var command = cmdArray[0];
  var args = cmdArray.slice(1).join(' ').trim();

  if (command === 'pwd'){
    commands.pwd();
  }
  if (command === 'date'){
    commands.date();
  }
  if (command === 'ls'){
    commands['ls']();
  }
  if (command ==='echo'){
    commands['echo'](args);
  }
  if (command === 'cat'){
    commands['cat'](args);
  }
  if (command === 'head'){
    commands['head'](args);
  }
  if (command === 'tail'){
    commands['tail'](args);
  }
  if(command === 'sort'){
    commands['sort'](args);
  }
  if(command === 'wc'){
    commands['wc'](args);
  }
  if(command === 'uniq'){
    commands['uniq'](args);
  }
  process.stdout.write('\nprompt > ');
});

