
import io from 'socket.io-client';
const socket = io.connect('/');

export default function(store) {
	socket.on('insert', (message) => {
		console.log('inserted');
		store.dispatch({
			type: 'insert',
			message: message
		});
	});
}
