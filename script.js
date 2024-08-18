window.onload = function() {
    let button = document.getElementById("calculate");
    button.addEventListener("click", calculateLove);
}

function calculateLove() {
    let yourName = document.getElementById("your-name").value;
    let crushName = document.getElementById("crush-name").value;

    if (yourName != "" && crushName != "") {
        let targetPercentage = Math.floor(Math.random() * 101); 
        let currentPercentage = 0;
        const speed = 30; 

        document.getElementById("result-message").innerText = "Your love score is";
        document.getElementById("result-percentage").innerText = currentPercentage.toString() + "%";

        const updatePercentage = () => {
            if (currentPercentage < targetPercentage) {
                currentPercentage++;
                document.getElementById("result-percentage").innerText = currentPercentage.toString() + "%";
            } else {
                clearInterval(intervalId); 
            }
        };

        const intervalId = setInterval(updatePercentage, speed);
    }
}


// document.addEventListener('DOMContentLoaded', () => {
//     document.getElementById('start').addEventListener('click', () => {
//         fetch('index.html') 
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok');
//                 }
//                 return response.text();
//             })
//             .then(data => {
//                 document.getElementById('content-container').innerHTML = data;
                
//                 document.querySelector('.welcome-background').style.display = 'none';
//             })
//             .catch(error => {
//                 console.error('There was a problem with the fetch operation:', error);
//             });
//     });
// });



