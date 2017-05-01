/**
 * Created by KrisChan on 01/05/2017.
 * All right reserved.
 */
//读取文件
var fs = require('fs');
fs.readFile('test.txt', 'utf-8', function (err, data){
    if(err){
        console.error(err);
    }
    else{
        console.log(data);
    }
})