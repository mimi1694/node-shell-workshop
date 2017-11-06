var commands = require('./commands.js');

process.stdout.write('prompt > ');

process.stdin.on('data', function (data) {
  var cmd = data.toString().trim();
  commands.pwd(cmd);
  commands.date(cmd);
  //  process.stdout.write(`Can't find command: ${cmd}`);

  process.stdout.write('\nprompt > ');
});

