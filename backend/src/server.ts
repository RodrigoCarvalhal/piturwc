import app from './app';
import database from './databse';

database.sync();
console.log('Database runnig at 3306');

app.listen(3031);
console.log('Server running at 3031');