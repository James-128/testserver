const notFound = (res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('404 was found');
}

export default notFound