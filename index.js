// Write your code here!
// Task 2: Display Posts Function
function displayPosts(posts) {
    const ul = document.getElementById('post-list');

    // Clear existing content if any
    ul.innerHTML = '';

// Loop through the posts list
posts.forEach(post => {
    // Create elements
    const li = document.createElement('li');
    const h1 = document.createElement('h1');
    const p = document.createElement('p');

    // Set content
    h1.textContent = post.title;
    p.textContent = post.body;

    // Append structure
    li.appendChild(h1);
    li.appendChild(p);
    ul.appendChild(li);
});
}

// Task 2: Refactor with Async/Await
async function fetchAndRenderPosts() {
    const url = 'https://jsonplaceholder.typicode.com/posts';

try {
    const response = await fetch(url);
    
    // Check if the response is successful
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const posts = await response.json();
    
    // Task 2: Call displayPosts function after fetch
    displayPosts(posts);
    
    console.log("Posts successfully loaded and displayed.");
} catch (error) {
    // Task 3: Error handling
    console.error("Failed to fetch posts:", error.message);
    
    const ul = document.getElementById('post-list');
    ul.innerHTML = `<li>Error loading posts. Please try again later.</li>`;
}
}

// Initialize the application
fetchAndRenderPosts();

