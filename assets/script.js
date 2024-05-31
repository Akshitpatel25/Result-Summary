// Fetch the JSON file
fetch('data.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json(); // Parse the JSON from the response
    })
    .then(data => {
        document.querySelector(".data1_data").innerHTML = data[0].category;
        document.querySelector(".outof_data1").innerHTML = data[0].score;

        document.querySelector(".data2_data").innerHTML = data[1].category;
        document.querySelector(".outof_data2").innerHTML = data[1].score;

        document.querySelector(".data3_data").innerHTML = data[2].category;
        document.querySelector(".outof_data3").innerHTML = data[2].score;

        document.querySelector(".data4_data").innerHTML = data[3].category;
        document.querySelector(".outof_data4").innerHTML = data[3].score;
    })
    .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
    });



