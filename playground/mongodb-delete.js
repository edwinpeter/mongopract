const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
	if (err){
		console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');

	//Delete Many

	db.collection('Todos').deleteMany({
		text: "Eat Lunch"
	}).then((result)=>{
		console.log(result);
	});

	//Delete One
	db.collection('Todos').deleteOne({
		text: "Lunch"
	}).then((result)=>{
		console.log(result);
	});

	//Find one and delete
	db.collection('Todos').findOneAndDelete({
		name: "lala"
	}).then((result)=>{
		console.log(result);
	});

	//Challenge!
	db.collection('Users').deleteMany({
		name: 'Edwin'
	});

	db.collection('Users').findOneAndDelete({
		name: 'Edwin Peter'
	}).then((results)=>{
		console.log(JSON.stringify(results, undefined,2));
	});
	//End Challenge


	db.close();
});