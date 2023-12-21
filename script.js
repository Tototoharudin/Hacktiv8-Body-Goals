const form = document.querySelector("#form-data")

let count = 0
let string = ''


form.addEventListener("submit", function(e){
        e.preventDefault()
        
        const InputKelamin =  document.querySelector("#kelamin")
        const kelamin = InputKelamin.value

        const Inputheight = document.querySelector("#height")
        const height = Inputheight.value
       
        const Inputweight = document.querySelector("#weight")
        const weight = Inputweight.value

        const InputTensiAtas = document.querySelector("#bloodPressureatas")
        const bloodPressure = InputTensiAtas.value

        const InputGulaDarah = document.querySelector("#bloodSugar")
        const gulaDarah = InputGulaDarah.value

        const InputOlahRaga = document.querySelector("#exerciseFrequency")
        const inputValueForOlahraga = InputOlahRaga.value;

        const InputRokok = document.querySelector("#smoking")
        const inputMerokok = InputRokok.value;
  
        //

        const InputAlkohol = document.querySelector("#alcohol")
        const inputAlkohol = InputAlkohol.value;
        // 

        const InputJamTidur = document.querySelector("#sleepDuration")
        const inputJamTidur = InputJamTidur.value


        console.log (kelamin, height, weight,  bloodPressure, "<< blood pressure atas |", gulaDarah, "<< gula Darah |")

        // ALL CONDITIONS
        

        let idealWeightAtasForMen = (height - 100) * 0.05 + (height - weight) 
        let idealWeightBawahForMen = (height - 100) * 0.05 - (height - weight) 

        let idealWeightAtasForWomen = (height - 110) * 0.05 + (height - weight) 
        let idealWeightBawahForWomen = (height - 110) * 0.05 - (height - weight) 

        //let slightlyOverweightForMen = (height - 100) * 0.1 + (height - weight) 
        //let slightlyUnderweightForMen = (height - 100) * 0.1 - (height - weight) 
        
        if (kelamin === "laki-laki"){

                if((height - weight) < idealWeightAtasForMen && (height - weight) > idealWeightBawahForMen ){
                        
                    string += (`Untuk seorang laki-laki, beratmu ideal di ${height - 100}kg. `)
                 }

                if((height - weight) > idealWeightAtasForMen){
                    count += 1
                    string += (`Untuk seorang laki-laki, beratmu "OVERWEIGHT". Berat ideal mu di ${height - 100}kg. `)
                }

                if((height - weight) < idealWeightBawahForMen){
                    count += 1
                    string += (`Untuk seorang laki-laki, beratmu "UNDERWEIGHT". Berat ideal mu di ${height - 100}kg. `)
                }
        }

        if (kelamin === "perempuan"){

            if((height - weight) < idealWeightAtasForWomen && (height - weight) > idealWeightBawahForWomen ){
                    
                string += (`Untuk seorang perempuan, beratmu ideal di ${height - 100}kg. `)
            }

            if((height - weight) > idealWeightAtasForWomen){
                count += 1
                string += (`Untuk seorang perempuan, beratmu "OVERWEIGHT". Berat ideal mu di ${height - 100}kg. `)
            }

            if((height - weight) < idealWeightBawahForWomen){
                count += 1
                string += (`Untuk seorang perempuan, beratmu "UNDERWEIGHT". Berat ideal mu di ${height - 100}kg. `)
            }
        }



        // cek point utk tensi
            
        if (bloodPressure > 114 && bloodPressure < 125 ){
            
            string += (`Tekanan darah anda baik dan normal! `)
        }


        if (bloodPressure > 125 && bloodPressure < 140 ){
            count +=1
            string += (`Status hipertensi anda: Stadium 1! `)
        }

        if (bloodPressure >= 140 && bloodPressure < 180 ){
            count +=2
            string += (`Status hipertensi anda: Stadium 2!! `)
        }

        if (bloodPressure >= 180 ){
            count +=3
            string += (`Status hipertensi anda: Kritis !!! `)
        }


        // cek point utk gula


        if (gulaDarah < 100){
        
            string += (`Gula darah anda normal di ${gulaDarah}. `)
        }

        if (gulaDarah >= 100 && gulaDarah <= 125){
            count +=1
            string += (`Anda masuk golongan Prediabetes, dengan gula darah ${gulaDarah}. `)
        }

        if (gulaDarah > 125){
            count +=2
            string += (`Anda masuk golongan Severe Diabetes, dengan gula darah ${gulaDarah}. `)
        }


        // cek point utk olahraga

        if (inputValueForOlahraga === "0"){
            
            string += (`Anda berolahraga 3 kali seminggu - GOOD! `)
          }

          
        if (inputValueForOlahraga === "1"){
          count+=1
          string += (`Anda berolahraga 2 kali seminggu - Ideal nya adalah 3 kali seminggu! `)
        }


        if (inputValueForOlahraga === "2"){
            count+=2
            string += (`Anda berolahraga 1 kali seminggu - Sangat Kurang! 3 kali seminggu baru ideal! `)
          }
  

          if (inputValueForOlahraga === "3"){
            count+=3
            string += (`Anda tidak berolahraga sama sekali dalam seminggu - Ayo mulai berolahraga sekarang! `)
          }
  


        // cek point utk rokok

          if (inputMerokok === "0") {
            string +=  (`Anda bukanlah seorang perokok. `)
          }

          if (inputMerokok === "1") {
            count +=1
            string +=  (`Anda merokok < 20 batang per hari. `)
          }
    
          if (inputMerokok === "2") {
            count +=2
            string +=  (`Anda merokok > 20 batang per hari. `)
        }
     
        
        
        // cek point utk alkohol

            if (inputAlkohol === "0" ){
                string +=  (`Anda tidak mengkonsumsi alkohol. `)
            }

            if (inputAlkohol === "1" ){
                count += 1
                string +=  (`Anda adalah seorang peminum. `)
            }



        // cek point utk jam tidur

            if(inputJamTidur === "0"){
                string +=  (`Anda beristirahat cukup, diantara 7 - 9 jam per hari. `)
            }

            if(inputJamTidur === "1"){
                count += 1
                string +=  (`Anda beristirahat kurang, diantara 4 - 7 jam per hari. Anda direkomendasi kan untuk istirahat selama 7-9 jam per hari. `)
            }

            if(inputJamTidur === "2"){
                count += 2
                string +=  (`Anda beristirahat kurang, dibawah 4 jam per hari. Anda direkomendasi kan untuk istirahat selama 7-9 jam per hari. `)
            }

        console.log(count);
        console.log(string);





       localStorage.setItem('count', count)
       localStorage.setItem('string', string)
       e.target.reset(
      
       )

})


var submitButton = document.getElementById('submit');

// Add a click event listener to the button
submitButton.addEventListener('click', function() {
    // Code to execute when the button is clicked
    //alert("Button clicked! You can add your logic here.");

    const formElements = form.elements;
    let isFormValid = true;
  
    for (let i = 0; i < formElements.length - 1; i++) {
        if (formElements[i].type !== "submit" && formElements[i].value === "") {
            isFormValid = false;
            alert("Please fill in all fields before submitting.");
            break;
        }
    }
  
    if (!isFormValid) {
        return;
    }

    window.location.href = 'index3.html';


})
