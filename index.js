import express from 'express';
import 'dotenv/config'

const app = express();


app.get("/hero", (req, res) => {
    res.send("Hello, World!");  
})
// const port = 4000
app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`)
}
)