const express = require('express')
const app = express();
const PORT = 4000;
const path = require('path');
const server = app.listen(PORT, ()=> console.log(`🗨️ server running on port http://localhost:${PORT}`));

app.use(express.static(path.join(__dirname, 'public')))