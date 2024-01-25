const express = require("express"); 
const users = require("./MOCK_DATA.json")

const app = express();  
const PORT = 8000; 

app.listen(PORT, ()=>{
    console.log(`Server running on the port ${PORT}`); 
});

app.get('/', (req,res)=>{
    return res.send("Welocome to the MOCK API Server"); 
}); 

app.get('/api/users',(req, res)=>{
    res.json(users);
});

app.get('/api/users/:id', (req,res)=>{
    const id = Number(req.params.id);
    const user = users.find((user)=>user.id===id); 
    return res.json((user))
});


