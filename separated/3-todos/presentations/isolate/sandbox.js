import { init } from './src/init.js';

debugger;

const app = await init();

app.showList();

app.add('food');

app.add('water');

app.showList();
