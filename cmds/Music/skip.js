exports.data = {
	name: 'Skip',
	description: 'Skips the current song.',
	group: 'Music',
	command: 'skip',
	syntax: 'skip',
	author: 'TRX',
	permissions: 2,
};

exports.func = async (message, args) => {
	const log = require(`${message.client.config.folders.lib}/log.js`)(exports.data.name);
	const serverQueue = message.client.queue.get(message.guild.id);
	if (!message.member.voice.channel) {
		return message.channel.send('You have to be in a voice channel to stop the music!');
	}
	if (!serverQueue) {
		return message.channel.send('There is no song currently playing!');
	}
	serverQueue.connection.dispatcher.end();
};