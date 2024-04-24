import express from "express";
import axios from "axios";

const app = express();
const port =  3000;
const APIkey = "80daaff515be010f9301e8804b9c3814";

app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

 app.get("/", async(req, res) => {
    res.render("index.ejs");
 })
 app.post("/cityTemp", async(req, res) => {
    const cityName = req.body.cityName;
    try {
        const result = await axios.get( `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIkey}&units=metric`);
        const weatherInfo = result.data;
        res.render("index.ejs", { weatherInfo });
        console.log(weatherInfo);
    } catch (error) {
        console.error(`Error: ${error}`);
    } 
 })

 app.listen(port, () =>{
    console.log(`Server listening on port ${port}.`);
 })