const http = require('http');


let homeCounter = 0;
let aboutCounter = 0;

const server = http.createServer((req, res) => {
    console.log('Запрос получен');
    
    if (req.url === '/') {
       
        homeCounter++;
        res.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'});
        res.end(`<p>Главная страница</p>
                 <p>Эту страницу посетили: ${homeCounter} раз(а)</p>
                 <a href="/about">Перейти на страницу обо мне!</a>`);
    } 
    else if (req.url === '/about') {
        
        aboutCounter++;
        res.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'});
        res.end(`<p>Страница обо мне</p>
                 <p>Эту страницу посетили: ${aboutCounter} раз(а)</p>
                 <a href="/">Перейти на главную страницу!</a>`);
    } 
    else {
        
        res.writeHead(404, {'Content-Type': 'text/html; charset=UTF-8'});
        res.end('<h1>Страница 404: не найдено</h1>');
    }
});

const port = '3000';
server.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});



