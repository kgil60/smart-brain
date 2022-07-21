const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// const sequelize = require('./config/connection');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.resolve(__dirname, '../client/build')));

// sequelize.sync({ force: false }).then(() => {
//     app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
// })

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));