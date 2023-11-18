let postsData = [];

let currentUser;

// Page navigation
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("home").addEventListener("click", loadHomePage);
    document.getElementById("dashboard").addEventListener("click", loadDashboard);
    document.getElementById("logout").addEventListener("click", logout);

    loadHomePage();
});

function loadHomePage() {
    document.getElementById("main-content").innerHTML = "<h2>Home Page</h2>";
}

function loadDashboard() {
    let dashboardContent = "<h2>Dashboard</h2>";

    postsData.forEach(post => {
        dashboardContent += `<div>
                                <h3>${post.title}</h3>
                                <p>${post.contents}</p>
                              </div>`;
    });

    dashboardContent += `<h3>Add New Post</h3>
                        <form id="addPostForm">
                            <label for="postTitle">Title:</label>
                            <input type="text" id="postTitle" required>
                            
                            <label for="postContents">Contents:</label>
                            <textarea id="postContents" required></textarea>
                            
                            <button type="button" onclick="createPost()">Create Post</button>
                        </form>`;

    document.getElementById("main-content").innerHTML = dashboardContent;
}

function createPost() {
    const title = document.getElementById("postTitle").value;
    const contents = document.getElementById("postContents").value;

    if (title && contents) {
        const newPost = {
            id: generateUniqueId(),
            title: title,
            contents: contents,
        };

        postsData.push(newPost);
        loadDashboard();
    }
}

function logout() {
    alert("Logout clicked");
}

function generateUniqueId() {
    return Math.floor(Math.random() * 1000000);
}
