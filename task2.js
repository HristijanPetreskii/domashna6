const express=require('express');

const app=express();

const data = {
    cars:  ['Car 1', 'Ferrari', 'Car 3'],
    books: ['Book 1', 'Book 2', 'Book 3'],
    cities: ['New York', 'Sydney', 'Ohrid']
}

app.get('/cars',(req,res)=>{
    const {query} = req.query;
    if(query >= 0 && query < data.cars.length){
        res.json(data.cars[query]);
    }else{
        res.status(404).json({ error: 'Car not found' });
    }
});

app.get('/books',(req,res)=>{
    const {query}=req.query;
    if(query >= 0 && query < data.books.length){
        res.json(data.books[query]);
    }else{
        res.status(404).json({ error: 'Book not found' });
    }
});

app.get('/cities',(req,res)=>{
    const {query}=req.query;
    if(query >= 0 && query < data.cities.length){
        res.json(data.cities[query]);
    }else{
        res.status(404).json({ error: 'City not found' });
    }
});

app.listen(6000,()=>{
    console.log("success");
})


//localhost:6000/cars?query=0