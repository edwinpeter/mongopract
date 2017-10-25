const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
	if (err){
		console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');

	//Find one and update
	db.collection('Todos').findOneAndUpdate({
		text : 'walk the dog'
	},{
		$set:{
			completed: true,
			text: 'walk it later'
		}
	},{
		returnOriginal: false
	}).then((result)=>{
		console.log(result);
	});


	db.collection('Todos').findOneAndUpdate({
		name: 'Edwin'
	},{
		$set:{
			title: 'Mr'
		},
		$inc:{
			age: +1
		}
	},{
		returnOriginal:false
	});

	//db.close();
});