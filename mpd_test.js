var mpd = require('mpd'),
    cmd = mpd.cmd
var client = mpd.connect({
  port: 6600,
  host: '192.168.178.57',
});
client.on('ready', function() {
  console.log("ready");
	client.sendCommand("next", function(err, msg) {
	  if (err) throw err;
	  console.log(msg);
	});
});
client.on('system', function(name) {
  console.log("update", name);
});
client.on('system-player', function() {
  client.sendCommand(cmd("status", []), function(err, msg) {
    if (err) throw err;
    console.log(msg);
  });
});
