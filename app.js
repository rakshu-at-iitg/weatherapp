//we will see here to get our data from apis

const express=require("express");

const app=express();

const https=require("https");



app.get("/",(req,res)=>{
    const url="https://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=0647e443b096dfee1024eaa5a98754b1"
    
https.get(url,(response)=>{
    console.log(response.statusCode);
    response.on("data",(data)=>{
        console.log(data)  ;

        const weatherdata=JSON.parse(data);
        // console.log(weatherdata)
        const temp=parseFloat(weatherdata.main.temp);
        console.log(temp);
        const wthr=weatherdata.weather.description;
        const ic=weatherdata.weather.icon;
        const imageurl="http://openweathermap.org/img/wn/"+ic+ "@2x.png"
        
        res.write("<h1>Temperature in Delhi is "+(temp-273)+" deg  </h1>")
        res.write("this is the weather condition "+wthr);
        // req.write("<img src="+imageurl+">");
        res.send();

    })

})



    // res.send("papa hu bete")
})




app.listen(3000,()=>{
    console.log("server is running on port 3000");
})