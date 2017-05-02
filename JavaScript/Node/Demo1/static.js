/**
 * Created by KrisChan on 01/05/2017.
 * All right reserved.
 */

 //读取文件（文件名‘test.txt’,位于当前目录下）
var fs = require('fs');
fs.readFile('test.txt', 'utf-8', function (err, data){
    if(err){
        console.error(err);
    }
    else{
        console.log(data);
    }
});

//获取文件信息
fs.stat('test.txt', function (err, stat) {
    if (err) {
        console.log(err);
    } else {
        // 是否是文件:
        console.log('isFile: ' + stat.isFile());
        // 是否是目录:
        console.log('isDirectory: ' + stat.isDirectory());
        if (stat.isFile()) {
            // 文件大小:
            console.log('size: ' + stat.size);
            // 创建时间, Date对象:
            console.log('birth time: ' + stat.birthtime);
            // 修改时间, Date对象:
            console.log('modified time: ' + stat.mtime);
        }
    }
});
