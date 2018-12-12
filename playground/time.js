var moment = require('moment')

// Jan 1st 1970 00:00:00

// var date = new Date();
// console.log('month', date.getMonth());

// var date = moment();
// date.add(1, 'month')
// console.log(date.format('Do MMM YY- HH:MM'))


var ts = moment().valueOf()
console.log('ts', ts)

var date = moment(ts);
console.log(date.format('DD/MM/YYYY - h:mm a'))
