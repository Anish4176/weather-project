const submitbtn = document.getElementById('submitbtn');
const cityname = document.getElementById('cityname');
const output3 = document.getElementById('output3');
const temp_real_val = document.getElementById('temp_real_val');
const tempstatus = document.getElementById('tempstatus');
const datahide = document.querySelector('.output2');



const getinfo = async (event) => {
    event.preventDefault();  //to stop form page to reload

    const cityvalue = cityname.value;

    if (cityvalue == "") {      // handling empty searches
        output3.innerHTML = `Please enter a city name`;
        datahide.classList.add('data_hide');
    }

    else {
        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityvalue}&units=metric&appid=18404aa708c7ae9efccfdf060bf4d941`;

            const response = await fetch(url);
            const data = await response.json();
            const arrdata = [data];
            output3.innerHTML = `${arrdata[0].name}, ${arrdata[0].sys.country}`
            temp_real_val.innerHTML = arrdata[0].main.temp;
            // tempstatus.innerHTML=arrdata[0].weather[0].main;
            const icon = arrdata[0].weather[0].main;
            

            //condition to check sunny or cloudy
            console.log(icon);
            if (icon == "Clouds") {
                tempstatus.innerHTML = "<i class='fa-solid fa-cloud fa-beat'style='color:#87CEEB'></i>"
            }
            else if (icon == "Clear") {
                tempstatus.innerHTML = "<i class='fa-solid fa-sun fa-beat' style='color:#eccc68;'></i>";
            }
            else if (icon == "Rainy") {
                tempstatus.innerHTML = "<i class='fa-solid fa-cloud-rain' style='color:#87CEEB'></i>";
            }
            else if (icon == "Mist") {
                tempstatus.innerHTML = "<i class='fa-solid fa-cloud fa-beat'style='color:#87CEEB'></i>"
            }
            else {
                tempstatus.innerHTML = "<i class='fa-solid fa-sun fa-beat'style='color:#eccc68;'></i>";
            }

            datahide.classList.remove('data_hide');

        } catch {
            output3.innerHTML = `Please enter city name properly`;
            datahide.classList.add('data_hide');
        }

    }

}

submitbtn.addEventListener('click', getinfo);