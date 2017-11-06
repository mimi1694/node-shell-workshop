var exports = module.exports = {};
//   pwd: function(str){
//     if (str === 'pwd'){
//         process.stdout.write(process.argv[1]);
//     }
//   },
//   date: function(str){
//     if (str === 'date'){
//         var date = new Date();
//         process.stdout.write(date.toString());
//     }
//   }
// };

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
