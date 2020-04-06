/*
 * @Author: daiwei
 * @since: 2020-04-03 15:23:44
 * @lastTime: 2020-04-06 13:53:16
 * @LastAuthor: Do not edit
 * @FilePath: /mock-test/server/api.js
 * @message: 
 */
const {Users,getItems, getAge,getSex,unit} = require('../mock/mock');
const {getUser} = require('../mock/genneration-user-mock');
exports.initApi = function (router) {
    router.get('/getMock', (req, res) => {
        res.json(Users);
    })
    router.get('/geUsers', (req, res) => {
        res.json(getItems());
    })
    router.get('/getUser', (req, res) => {
        res.json(getUser());
    })
    router.get('/getAge', (req, res) =>     {
        res.json(getAge());
    })
    router.get('/getSex', (req, res) => {
        res.json(getSex());
    })
    router.get('/unit', (req, res) => {
        res.json(unit());
    })
}