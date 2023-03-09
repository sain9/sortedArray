const express =  require('express');
const app  = new express();

const PORT = 9000;

app.get("/", async(req,res) => {

    let temp = [5,9,3,7,2,6];
    let sortedTemp = [...temp];
    
    sortedTemp.sort()
    console.log( `Temp : ${temp} \nsortedTemp : ${sortedTemp}`);
    try {
        res.send(
                       `Temp : ${temp} 
                        sortedTemp : ${sortedTemp}`
                    );
    } catch (error) {
        console.log("Error occured : ",error);
    }
  
})

app.listen( PORT, async() => {
    try {
        console.log(`App running on Port ${PORT}  `);
    } catch (error) {
        console.log("Error running : ",error);
    }
});