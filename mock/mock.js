/*
 * @Author: daiwei
 * @since: 2020-04-03 13:35:09
 * @lastTime: 2020-04-04 21:56:20
 * @LastAuthor: Do not edit
 * @FilePath: /mock-test/mock/mock.js
 * @message: 
 */
const {
    mock
} = require('mockjs');
exports.Users = mock({
    'username|1-10': 'dasd',
    'age|1-10': 23312
})
exports.getItems = function () {
    return mock({
        'user|1-10': [{
            'name|1-10': '张三',
            'age|1-10': 10
        }]
    })
}
exports.getAge = function () {
    return mock({
        'age|20-100': 100, // 返回 20-100 之间的年龄
    })
}
exports.getSex = function () {
    return mock({
        'sex|1': ['男','女','动物'], // 随机返回 男 和 女， 概率 男 为 1/2
    })
}
/**
 * demo
 */
// 从一个数组当中任取一个 数值
let options;
options = {
    'num|1': [1, 10, 100, 1000]
}
// 从数组中按照顺序取出一个值
options = {
    'nums|+1': ['男','女']
}
// 输入一个数组, 以 数组值为单位，会随机增加 1-5 倍 的
options = {
    'nums|5': [1, 10, 100, 1000]
}
exports.unit = function () {
    return mock(options);
}
