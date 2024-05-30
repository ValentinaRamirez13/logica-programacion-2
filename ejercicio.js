function convert() {
    let fromExercise = document.getElementById("fromExercise").value;
    let toExercise = document.getElementById("toExercise").value;
    let temperature = parseFloat(document.getElementById("temperature").value);
    
    let convertValue;
    let result;
  
    switch (fromExercise){
        case "C":
            if (toExercise === "F"){
                convertValue = (temperature * 9/5) + 32;
                result = "F";
            }else if (toExercise === "K"){
                convertValue = (temperature + 273.15);
                result = "K";
            }else{
                convertValue = temperature;
                result = "C";
            }
            break;

        case "F":
            if (toExercise === "C"){
                convertValue = (temperature - 32) * 5/9;
                result = "C";
            }else if (toExercise === "K"){
                convertValue = (temperature - 32) * 5/9 + 273.15;
                result = "K";
            }else{
                convertValue = temperature;
                result = "F";
                }
            break;
            
        case "K":
            if (toExercise === "C"){
                convertValue = (temperature - 273.15);
                result = "C";
            }else if (toExercise === "F"){
                convertValue = (temperature - 273.15) * 9/5 + 32;
                result = "F";
            }else{
                convertValue = temperature;
                result = "K";
                }
            break;         
    }
    document.getElementById("result").value = convertValue.toFixed(2) + " " + result;
    }