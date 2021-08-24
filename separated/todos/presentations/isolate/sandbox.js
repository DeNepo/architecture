import { init } from './src/init.js';

const app = await init();

app.showList();

app.add('food');

app.add('water');

app.showList();
