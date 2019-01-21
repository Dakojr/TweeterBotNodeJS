//-->get() = Search ?
//--> post() = Tweeting !
//--> stream() = @mention

// var followed = require('./followed');
//
// followed.txtfollowed();

// setInterval(tweetIt, 1000*60);

var i = 0;

function TheTweet() {
  var tweetIt = require('./tweetIt');

  var myData = require('./data');

  //tweetIt.tweetit("What the fac?");

  tweetIt.tweetit(myData.myData[i]);
  i++;
  console.log(i);
}

//TheTweet();
setInterval(TheTweet, 1000 * 10);