//Updates driver information to all socket clients
function updateDriverInfo() {   //colorcode needs to be implemented properly
	const driverData = JSON.parse(localStorage.getItem('driverData'));
	socket.broadcast.emit('updateDriverData',driverData);
	console.log('updated Driver data');
	//Driver object
	socket.emit('updateDriverInfo',{ id: driverID, occupiedSeats: occupiedseats, colorCode: colorCode });
}


//function to get USER data
	// let endpoint = `http:\\vts_backend`;
	// $.ajax({
	// 	url: endpoint,
	// 	method: 'GET',
	// 	data: 'json',
	// 	error: function (err) {
	// 		alert("Something went wrong, please try again.");
	// 	},
	// 	success: function (res) {
	// 		return res;
	// 	}
	// });
	socket.on('getUserInfo',(response)=>{allUsers=response;
	console.log(allUsers);});
