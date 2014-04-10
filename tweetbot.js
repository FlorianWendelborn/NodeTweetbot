/* Tweetbot by FlorianWendelborn */

/* basics */
var twit = require('twit');
var config = JSON.parse(require('fs').readFileSync('./config.json'));
var twitter = new twit(config);

var stream = twitter.stream('user');
stream.on('tweet', function (tweet) {
	if (tweet.user.screen_name != 'NodeTweetbot') {
		console.log(JSON.stringify(tweet.text));
		switch (tweet.text) {
			case '@NodeTweetbot what\'s time is it?':
				var status = '@' + tweet.user.screen_name + ' ' + new Date().getHours() + ':' + new Date().getMinutes();
			break;
			default:
				var status = '@' + tweet.user.screen_name + ' I don\'t know yet.';
		}
		twitter.post('statuses/update', {status: status }, function (err, reply) {
			console.error(err);
			console.log(reply);
		});
	}
});