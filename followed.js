var Twit = require('Twit');

var config = require ('./config');

var T = new Twit(config);

var tweetIt = require('./tweetIt');

var stream = T.stream('user');

stream.on('follow', followede);

function followede(eventMsg) {
  console.log("Follow Event !");
  var name = eventMsg.source.name;
  var screenName = eventMsg.source.screen_name;
  tweetIt.tweetit('@' + screenName + " Thanks for the follow");
}
