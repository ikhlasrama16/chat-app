const express = require('express');
const path = require('path')
const app = express();
const PORT = 4000;
const server = app.listen(PORT, () => console.log(`server is running on port ${PORT}`));

app.use(express.static(path.join(__dirname, 'public')));