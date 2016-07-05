var FirebaseServer = require('firebase-server'),
    databaseData = require('./src/app/database.data.json');

new FirebaseServer(5000, 'localhost.firebaseio.test', databaseData);
