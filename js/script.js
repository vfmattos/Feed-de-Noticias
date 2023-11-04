function Postar(){

    const username = document.querySelector(".username").value
    const post = document.querySelector(".post").value
    const postArea = document.getElementById("posts-container")

    const newPost = document.createElement("div");
    newPost.setAttribute('class', 'new-post');

    newPost.innerHTML = `<strong>${username}</strong> <p>${post}</p>`;

    postArea.appendChild(newPost);
}