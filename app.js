var SerialPort = require("serialport");
const parsers = SerialPort.parsers;

const parser = new parsers.Readline({
    delimiter: '\r\n'
});

//Path will be different for you.
const port = new SerialPort('/dev/tty-usbserial1', function (err) {
    baudRate: 9600
    if (err) {
        return console.log('Error: ', err.message)
    }

})


port.pipe(parser);

parser.on('data', function(data){
    console.log(data);
});
