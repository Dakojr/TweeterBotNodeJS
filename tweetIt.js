exports.tweetit = function tweetIt(txt){
  var Twit = require('Twit');

  var config = require ('./config');

  var T = new Twit(config);

  var tweet = {
    status: txt
  }

  T.post('statuses/update',tweet , tweeted)

  function tweeted(err, data, response) {
    if (err) {
      console.log("Something it's wrong !");
    }else {
      console.log("Work");
    }
  }
}
