
var google = require('googleapis');
var auth = require('./googleauth');

module.exports = {
    getClient: auth(google.calendar, 'v3', ['https://www.googleapis.com/auth/calendar',
    'https://mail.google.com/',
    'https://www.googleapis.com/auth/gmail.modify',
    'https://www.googleapis.com/auth/gmail.compose',
    'https://www.googleapis.com/auth/gmail.send'], Wrapper)
};

function Wrapper(client) {
  this.client = client;
};

Wrapper.prototype.quickAdd = function(id, text, cb) {
    this.client.events.quickAdd({
        calendarId: id,
        text: text
    }, cb);
};

//Wrapper.prototype.getItems = function(id, query, min, max, cb) {
Wrapper.prototype.getItems = function(id, min, max, cb) {
    this.client.events.list({
        calendarId: id,
        //q: "aaa",
        timeMin: min,
        timeMax: max,
        //maxResults : 7
        orderBy : "startTime",
        singleEvents : true
    }, cb);
};
