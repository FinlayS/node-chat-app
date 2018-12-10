var expect = require('expect');
var {generateMessage, generateLocationMessage} = require('./message');


describe('generateMessage', () => {
    it('should generate correct message object', () => {
        var from = 'fin';
        var text = 'bob is having a birthday bash';
        var message = generateMessage(from, text);

        expect(message).toInclude({from, text});
        expect(message.createdAt).toBeA('number')
    });
});

describe('generatelocationMessage', () => {
    it('should generate correct location object', () => {
        var from = 'fin';
        var lat = 333.3;
        var lon = 111.1;
        var url = 'https://www.google.com/maps?q=333.3,111.1'
        var message = generateLocationMessage(from, lat, lon)

        expect(message).toInclude({ from });
        expect(message.url).toEqual(url)
        expect(message.createdAt).toBeA('number')
    });
});