var drawOne = function(tweet){
  var tweetStream = $("#tweetStream");
  //tweetStream.html("")

  console.log(tweet);
  tweetStream.append("<div class='tweetContainer'><div class='tweetHead'><div class='twitterUsername'>"+tweet.user+"</div><div class = 'tweetTime'>"+tweet.created_at+"</div></div><div class='tweetMessage'>"+tweet.message+"</div></div></div>")
  
}

var updateFeed = function(){
  setInterval(relayTweets, 1000);
};  

var currentTweet = 0;
var relayTweets = function(){
  drawOne(window.streams.home[currentTweet]);
  currentTweet++;
}

setTimeout(updateFeed, 2000);


