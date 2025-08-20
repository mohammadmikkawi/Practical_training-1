let inputField=document.getElementById(
    "weatherInput"
)

let Button=document.getElementById(
    "weatherButton"
)

let view=document.getElementById(
    "viewData"
)
Button.addEventListener( "click",()=>{
let text=inputField.value.trim()//the name of city
    if(!text){
        alert("enter a city name")
        return;
    }

    let api = `http://api.weatherapi.com/v1/current.json?key=0be80126fb994450800120253251908&q=${text}`;
 console.log(api)

    fetch(api ).then(response=>response.json())
        .then(data=>{
if(data.error){
    alert("City Not Found")
}

let cityname=data.location.name
                let temp=data.current.temp_c;
let humidity=data.current.humidity
            let description=data.current.condition.text

            view.innerHTML=`
                <ul>
                    <li><strong>City:</strong>${cityname}</li>
                    <li>Temperature:${temp}</li>
                    <li> Humidity:${humidity} </li>
                    <li>  Condition:${description}</li>
                </ul>
        `;
            })
        .catch(error=>console.error("error fetching",error))
});