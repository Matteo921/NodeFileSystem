// var fs = require('fs');
// var StatMode = require('stat-mode');

// fs.stat('./cat.jpeg', function(err, stats) {
//     var statMode = new StatMode(stats);
//     // console.log(statMode.toString());
// });
// var fs = require('fs');
// var colors = require('colors');

// fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
//     console.log('Dane przed zapisem!'.blue);
//     console.log(data);
//     fs.appendFile('./tekst.txt', 'A tak wyglądają po zapisie!', function(err) {
//         if (err) throw err;
//         console.log('Zapisano!'.blue);
//         fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
//             console.log('Dane po zapisie'.blue)
//             console.log(data);
//         });
//     });
// });

var fs = require('fs');
var color = require('colors');

fs.readdir('.', function(err, data) {
    console.log('Odczyt katalogu:'.blue);
    console.log(data);
    fs.writeFile('./file.txt', data, function(err) {
        if (err) throw err;
        console.log('Zapisano'.red);
    });
});  