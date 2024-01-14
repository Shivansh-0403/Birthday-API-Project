// import axios from "axios";

// async function message() {
// try {
//         const result = await axios.get("https://api.api-ninjas.com/v1/quotes?category=birthday", {headers: {
//         'X-Api-Key': 'nIXqkxGINBkbIv3o1N3fiQ==97fIZV1vlr0dQ3yJ'
//     }})

//     // const result = await axios.get(API_URL + "/secrets/" + searchId, config);
//     console.log(result);
//     res.render("index.ejs", { content: JSON.stringify(result.data) });
// } catch (error) {
//     res.render("index.ejs", { content: JSON.stringify(error.response.data) });
// }
// }

// document.getElementById('main-card').addEventListener('click', function() {
//     sendPostRequest();
// });

//   function sendPostRequest() {
//     const url = 'http://localhost:3000/api/post'; // Adjust the URL based on your backend server

//     // const data = {
//     //   key1: 'value1',
//     //   key2: 'value2'
//     //   // Add more key-value pairs as needed
//     // };

//     fetch(url, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         // Add any additional headers if needed
//       },
//     //   body: JSON.stringify(data),
//     })
//     .then(response => response.json())
//     .then(() => {
//       console.log('Success:');
//       // Handle the response data as needed
//     })
//     .catch(error => {
//       console.error('Error:', error);
//       // Handle errors
//     });
// }
// nIXqkxGINBkbIv3o1N3fiQ==97fIZV1vlr0dQ3yJ
//


// document.getElementById("main-card").addEventListener("click", () => {
//     var category = 'birthday'
//     $.ajax({
//         method: 'GET',
//         url: 'https://api.api-ninjas.com/v1/quotes?category=' + category,
//         headers: { 'X-Api-Key': 'nIXqkxGINBkbIv3o1N3fiQ==97fIZV1vlr0dQ3yJ'},
//         contentType: 'application/json',
//         success: function(result) {
//             console.log(result);
//         },
//         error: function ajaxError(jqXHR) {
//             console.error('Error: ', jqXHR.responseText);
//         }
//     });
// })

// import axios from "axios";

function turnPage() {
    const notebook = document.getElementById('notebook');
    const page1 = document.getElementById('page1');
    const page2 = document.getElementById('page2');

    // Trigger the page-turn animation
    page1.style.transform = 'rotateY(-180deg)';
    document.getElementById('form').style.transform = 'rotateY(180deg)';

    // After the animation, hide the first page and show the second page
    setTimeout(() => {
        document.getElementById('form').display = 'none';
        page1.style.display = 'none';
        page2.style.display = 'block';
    }, 1000); // Adjust the timeout value based on the transition duration



    // async function message(){
    //     try {
    //         const result = await axios.get("https://api.api-ninjas.com/v1/quotes?category=friendship", {
    //             headers: {
    //                 'X-Api-Key': 'nIXqkxGINBkbIv3o1N3fiQ==97fIZV1vlr0dQ3yJ'
    //             }
    //         })

    //         // const result = await axios.get(API_URL + "/secrets/" + searchId, config);
    //         console.log(result);
    //         // res.render("index.ejs", { content: JSON.stringify(result.data) });
    //     } catch (error) {
    //         // res.render("index.ejs", { content: JSON.stringify(error.response.data) });
    //         console.log(error);
    //     }
    // }
    // message();

    // var category = 'birthday'
    // $.ajax({
    //     method: 'GET',
    //     url: 'https://api.api-ninjas.com/v1/quotes?category=' + category,
    //     headers: { 'X-Api-Key': 'nIXqkxGINBkbIv3o1N3fiQ==97fIZV1vlr0dQ3yJ'},
    //     contentType: 'application/json',
    //     success: function(result) {
    //         console.log(result);
    //     },
    //     error: function ajaxError(jqXHR) {
    //         console.error('Error: ', jqXHR.responseText);
    //     }
    // });

}