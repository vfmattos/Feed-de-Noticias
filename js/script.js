function Postar(){

    var username = document.querySelector(".username").value
    var post = document.querySelector(".post").value
    const postArea = document.getElementById("posts-container")

    if(username.trim() !== '' && post.trim() !== ''){

        const newPost = document.createElement("div");
        newPost.setAttribute('class', 'new-post');

        newPost.innerHTML = `<strong>${username}</strong> <p>${post}</p>`;

        postArea.appendChild(newPost);

        document.querySelector(".username").value = ' ';
        document.querySelector(".post").value = ' ';
    }
}