/* Twitterbot by FlorianWendelborn */

/* basics */
var twitter = require('ntwitter');

var twit = new twitter({
	consumer_key:,
	consumer_secret:,
	access_token_key:,
	acess_token_secret:
});

twit.stream('user', {track:'nodejs'}, function (strem) {
	stream.on('data', function (data) {
		console.log(data);
	});
});