// Simulated data for testing (random values assigned)
const data = {
    header: "My Professional Blog",
    topic: "The Future of Web Development",
    author: "Jane Doe",
    date: "November 30, 2024",
    image: "", // Placeholder image URL
    content: "Web development is rapidly evolving, with new technologies, frameworks, and tools emerging every day. As developers, it’s important to stay updated on the latest trends and best practices. This article discusses some of the most exciting advancements in web development, such as serverless architecture, progressive web apps, and modern JavaScript frameworks like React and Vue.",
    footer: "© 2024 My Professional Blog. All rights reserved."
};

//https://drive.google.com/uc?export=view&id=1E1yht9cPbeorO_obyXGyvyJebzwPwveH
// Function to populate the page with the simulated data
function populateData() {
    document.querySelector('.site-title').textContent = data.header;  // Header title
    document.querySelector('.post-title').textContent = data.topic;   // Blog post title
    document.querySelector('#author-name').textContent = data.author; // Author name
    document.querySelector('#post-date').textContent = data.date;     // Post date
    document.querySelector('#post-image').src = data.image;           // Post image
    document.querySelector('#post-content').textContent = data.content; // Blog post content
    document.querySelector('.footer-text').textContent = data.footer; // Footer content
}

// Call the populateData function when the page is loaded
window.onload = populateData;
