/*
 * @Author: daiwei
 * @since: 2020-04-03 13:42:46
 * @lastTime: 2020-04-03 15:26:34
 * @LastAuthor: Do not edit
 * @FilePath: /mock-test/server/server.js
 * @message: 
 */
const express = require('express')
const router = express.Router();
const app = express();
const {initApi} = require('./api');
app.use(express.static(__dirname));
initApi(router);
app.use(router);
const port = 4010;
app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port} Ctrl+C to stop`)
})