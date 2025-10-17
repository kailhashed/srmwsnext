const express = require('express');
const app = express();
const port = 3001;
app.get('/', (req, res) => {
    res.send('Hello World');
});
app.get('/add', (req, res)=> {
    const {a, b} = req.query;
    const sum = Number(a) + Number(b);
    res.send(`The sum of ${a} and ${b} is ${sum}`);
});

app.get('/divide', (req, res)=> {
        const {a, b} = req.query;    
        if (Number(b) == 0) {
res.send(`Divisor is zero please change it now`);
        }
        else{
        const quotient = Number(a) / Number(b);
        const remainder = Number(a) % Number(b);
        res.send(`The quotient of ${a} and ${b} is ${quotient} and the remainder is ${remainder}`);
    }
    console.log(`Server is running on port ${port}`);
});
app.listen(port,()=>{
    console.log (`Server running on ${port}`);
}) 