const bodyParser = require('body-parser');
const express = require('express');
var routes = require("./routes.js");
const cors = require('cors');

const app = express();

app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

/* ---------------------------------------------------------------- */
/* ------------------- Route handler registration ----------------- */
/* ---------------------------------------------------------------- */

/* ---- (Dashboard) ---- */
// The route localhost:8081/people is registered to the function
// routes.getAllPeople, specified in routes.js.
app.get('/people', routes.getAllPeople);

/* ---- Part 2 (FindPrizerss) ---- */
// TODO: (2) - Add route '/Prizerss/:login' for the functionality of FindPrizerss page 
app.get('/prizers/:category', routes.getPrizers); // Hint: Replace () => {} with the appropriate route handler in routes.js.


app.listen(8081, () => {
	console.log(`Server listening on PORT 8081`);
});