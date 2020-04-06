/*
 * @Author: daiwei
 * @since: 2020-04-06 13:06:34
 * @lastTime: 2020-04-06 13:54:47
 * @LastAuthor: Do not edit
 * @FilePath: /mock-test/entity/User.js
 * @message: User
 */

 exports.User =  {
     name: {
         type: 'string',default: '@cname',require: true, //随机生成中文名称
     },
     age: {
         type: 'number',require: true,range:'1-100',default: 100
     },
     sex: {
         type: 'string',default: ['男',"女"],require: true,range:'1'
     },
     phone: {
         type: 'number',require: false, range:'1',default: ['17878765219','18878765219'],
     }
 }