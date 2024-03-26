const express=require('express');

const app=express();

const data = {
    cars:  ['Car 1', 'Ferrari', 'Car 3'],
    books: ['Book 1', 'Book 2', 'Book 3'],
    cities: ['New York', 'Sydney', 'Ohrid']
}
app.get('/cars',(req,res)=>{
    res.json(data.cars);
});

app.get('/books',(req,res)=>{
    res.json(data.books);
});

app.get('/cities',(req,res)=>{
    res.json(data.cities);
});

app.listen(5000,()=>{
    console.log('it is created');
});