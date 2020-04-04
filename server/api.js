/*
 * @Author: daiwei
 * @since: 2020-04-03 15:23:44
 * @lastTime: 2020-04-03 18:16:36
 * @LastAuthor: Do not edit
 * @FilePath: /mock-test/server/api.js
 * @message: 
 */
const {Users,getItems, getAge,getAges,unit} = require('../mock/mock');


exports.initApi = function (router) {
    router.get('/getMock', (req, res) => {
        res.json(Users);
    })
    router.get('/geUsers', (req, res) => {
        res.json(getItems());
    })
    router.get('/getAge', (req, res) =>     {
        res.json(getAge());
    })
    router.get('/getAges', (req, res) => {
        res.json(getAges());
    })
    router.get('/unit', (req, res) => {
        res.json(unit());
    })
}