import React from 'react';
const API = "https://api.openweathermap.org/data/2.5/weather?q=stockholm,se&APPID=f8384513fad5f91ea04d07a2cbf916ec";

class GetTempAPI extends React.Component {

    state = {} // deklarerar en tom state objekt 

    componentDidMount() { // react live cycle metod som körs när varje gång den specifika componenten renderas i domen
     
        fetch(API) // hämtar API:et från adressen 
          .then(res => res.json())  // man får ett json objekt som man konverterar till en string
          .then(json => {          // man går igenom json filen med en arrow function 
              console.log(json);   // kollar i webbläsaren för att se vad för info man har hämtat
              let { main: { temp }, sys: {country }} = json;   //Destructuring här hämtar man specifika keysen i objektet som man vill ha
            this.setState({rTemp: (Math.floor(temp - 273.15))})  // här lägger man in key:et i state objektet 
                                                             // plus en matematiskt formel för att konvertera kelvin till celsius
            this.setState({rCountry: country})  // Hämtar dessutom vilket land jag bor i vilket är SE och läggs in i state
            
        })
    }

    render()  /* Är funktionen för att något ska skrivas ut */
    {
        return(  // innehållet som ska skrivas ut
         <div>              
            <p>It's {this.state.rTemp ? this.state.rTemp : '0'}° degrees outside Edward </p>  {/* här render man state med rTemp = realtemp med en ternary operator */}
            <p>I live in {this.state.rCountry ? this.state.rCountry : 'none'}</p>  {/* här renderar jag rCountry ifrån state med en ternary operator */}
         </div>
        );
    }
   
   };
   
   export default GetTempAPI;  // det är för att man ska kunna importera till en annan component