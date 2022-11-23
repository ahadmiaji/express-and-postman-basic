//learning express with postman

const app =require('./app') //we listen here port 3000

const port = 3000;

app.listen(port, () => {
    console.log(`server is running at http://localhost:${port}`);
});