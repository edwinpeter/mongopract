const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
	if (err){
		console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');

	// db.collection('Todos').find({completed: true}).toArray().then((docs)=>{
	// 	console.log('Todos');
	// 	console.log(JSON.stringify(docs, undefined, 2));
	// }, (err)=>{
	// 	console.log('Unable to fetch', err);
	// });


	db.collection('Todos').find({
		_id: new ObjectID('59d94da51d9e6e87b585a483')

	}).toArray().then((docs)=>{
		console.log('Todos');
		console.log(JSON.stringify(docs, undefined, 2));
	}, (err)=>{
		console.log('Unable to fetch', err);
	});

	db.collection('Todos').find().count().then((count)=>{
		console.log('Todos');
		console.log(`Counts: ${count}`);
	}, (err)=>{
		console.log('Unable to fetch', err);
	});

	db.collection('Users').find({
		name: 'Edwin'
	}).toArray().then((docs)=>{
		console.log('Todos');
		console.log(JSON.stringify(docs, undefined,2));
	}, (err)=>{
		console.log('Unable to fetch', err);
	});

	//	db.close();

});