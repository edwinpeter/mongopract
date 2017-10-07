//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
	if (err){
		console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');

	db.collection('Todos').insertOne({
		name: 'lala',
		email:'asd'
	},(err, result)=>{
		if (err){
			return console.log('Unable to insert todo', err);
		}

		console.log(JSON.stringify(result.ops, undefined, 2));
	});

	db.collection('Users').insertOne({
		name: 'Edwin',
		age: 27,
		location: 'SG'
	},(err, result)=>{
		if (err){
			return console.log('Unable to insert todo', err);
		}

		console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
	});

	db.close();


	/* Destructuring collection
	
	var user = {name: 'Edwin', age: 25};
	var {name} = user;
	console.log(name);

	// name becomes a variable
	*/
});