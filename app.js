import * as fs from 'fs'
import * as http from 'http'
import { files } from './functions/index.js'

http.createServer((req,res) => {
    switch(req.url){
        case '/fileupload':
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
            res.write('<input type="file" name="filetoupload"><br>');
            res.write('<input type="submit">');
            res.write('</form>');
            res.end()
        break
        case '/append':
            files.createFile()
            res.write("arquivo salvo com sucesso!")
            res.end()
        break
        default:
            fs.readFile('public/html/home.html', function(err, data) {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write(data);
                return res.end();
            });
        break
    }
}).listen(8080)