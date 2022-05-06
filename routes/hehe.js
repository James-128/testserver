const hehe = (res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Goodbye World');
}


export default hehe