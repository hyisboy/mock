/*
 * @Author: daiwei
 * @since: 2020-04-06 13:22:02
 * @lastTime: 2020-04-06 13:52:18
 * @LastAuthor: Do not edit
 * @FilePath: /mock-test/mock/genneration-user-mock.js
 * @message: 
 */

const {
    mock
} = require('mockjs');
const {User} = require('../entity/User');
exports.getUser = function () {
    let options = {};
    Object.keys(User).forEach(key => {
        let _val = User[key],
            _property_name = key,
            _property_options = _val.range,
            _property_value = _val.default,
            _property_unit_key = '';
        if (_val.range) { 
            _property_unit_key = _property_name + '|' + _property_options; 
        }else{
            _property_unit_key = _property_name;
        }
        if(_val.default)
        options[`${_property_unit_key}`] = _property_value;
    })
    return mock(options);
}