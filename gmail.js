
var google = require('googleapis');
var auth = require('./googleauth');


//'https://www.googleapis.com/auth/gmail',

module.exports = {
    getClient: auth(google.gmail, 'v1', 
    ['https://www.googleapis.com/auth/calendar',
     'https://mail.google.com/',
    'https://www.googleapis.com/auth/gmail.modify',
    'https://www.googleapis.com/auth/gmail.compose',
    'https://www.googleapis.com/auth/gmail.send'], Wrapper)
};

function Wrapper(client) {
  this.client = client;
};

Wrapper.prototype.send = function(id, raw, cb) {
    //console.log(id);
    //console.log(raw);
    this.client.users.messages.send({
        userId: id,
        //raw: raw
        field : "raw",
        resource :  {
            raw : raw
        }
        
        //uploadType : "media",
        //uploadType : "multipart",
//        media : {
//            mimeType : "message/rfc822",
//            body : raw
//        },
        //resource : raw
        
//        resource : {
//            raw : raw
//        }
        
        
        
        
    }, cb);
};

