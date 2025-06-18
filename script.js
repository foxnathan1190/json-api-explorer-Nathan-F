// so much empty

const fetchButton = document.getElementById("fetchButton");
fetchButton.addEventListener("click", fetchPosts);

function fetchPosts() {
    fetch("https://jsonplaceholder.typicode.com/posts").then(function(response) {

        return response.json();
    }).then(function(json) {
        console.log(json); // log endpoint
        displayPosts(json);
    });
}


function displayPosts(json) {
    const postList = document.getElementById("postList");
    postList.innerHTML = "";
    for (let post of json) {
        postList.innerHTML += `<strong>${post.title}</strong> <br> <em>${post.body}</em><br><br>`;
    }
}

const titleInput = document.getElementById("titleInput");
const bodyInput = document.getElementById("bodyInput");
const formSuccess = document.getElementById("formSuccess");
const submitButton = document.querySelector(`button[type="submit"]`);

submitButton.addEventListener("click", submitPost)

function submitPost(event) {
    event.preventDefault();
    
    let newPost = {
        // userId: null,
        // id: null,
        title: titleInput.value,
        post: bodyInput.value
    }

    const apiURL = 'https://jsonplaceholder.typicode.com/posts';
    const dataObject = newPost;

    fetch(apiURL, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(dataObject),
    })
    .then(response => response.json()) // Parse the JSON response
    .then(data => {
        formSuccess.innerHTML = `Form Submitted! ${JSON.stringify(data)}`;
        console.log(data);
    }) // Handle the parsed data
    .catch(error => console.error('Error:', error)); // Handle any errors
}