var path = require('path') 

var express = require('express')  
var bodyParser = require('body-parser') 

global.passwordHash = require('password-hash');

global.config = {
  "lang": "en",
  "langFile": path.join(__dirname,'/app_server/messages/i18n.json')
}
global.i18n_module = require('i18n-nodejs');
 

var StateMachine = require('javascript-state-machine');

var app = express()
var ejsLayout = require('express-ejs-layouts')
 
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'/app_server/views/site')); 
app.set('layout', path.join(__dirname,'/app_server/views/layouts'));
 

app.use(ejsLayout)
app.use('/public', express.static(path.join(__dirname,'public'))); 
app.use(bodyParser.urlencoded({ extended: false })) 
 
require('./app_server/routes/routeManager')(app)

 
 
/*var fsm = new StateMachine({
    init: 'solid',
    transitions: [
      { name: 'melt',     from: 'solid',  to: 'liquid' },
      { name: 'freeze',   from: 'liquid', to: 'solid'  },
      { name: 'vaporize', from: 'liquid', to: 'gas'    },
      { name: 'condense', from: 'gas',    to: 'liquid' }
    ],
    methods: {
      onMelt:     function() { console.log('I melted')    },
      onFreeze:   function() { console.log('I froze')     },
      onVaporize: function() { console.log('I vaporized') },
      onCondense: function() { console.log('I condensed') }
    }
  });
  fsm.melt();
  fsm.vaporize();
  console.log(fsm.can('condense'));*/

 
app.listen(8880);  