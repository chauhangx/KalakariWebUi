// API URL and userEmail fetched from localStorage
const apiUrl = "https://localhost:44339/api/WebCustomization/GetByUserEmail";
const userEmail = localStorage.getItem("email");

// Function to fetch data from the API and populate the page
async function fetchDataAndPopulate() {
    try {
        // Fetch data from the API
        const response = await fetch(`${apiUrl}?userEmail=${encodeURIComponent(userEmail)}`);

        if (!response.ok) {
            throw new Error(`Failed to fetch data: ${response.status} ${response.statusText}`);
        }

        // Parse the response JSON
        const data = await response.json();

        // Populate the page with the fetched data
        document.querySelector('.site-title').textContent = data.header || "Default Title";  // Header title
        document.querySelector('.post-title').textContent = data.topic || "Default Topic";   // Blog post title
        document.querySelector('#author-name').textContent = data.author || "Default Author"; // Author name
        document.querySelector('#post-date').textContent = data.date || "Default Date";     // Post date
        document.querySelector('#post-image').src = data.image || "default-image-url.jpg";  // Post image
        document.querySelector('#post-content').textContent = data.content || "Default Content"; // Blog post content
        document.querySelector('.footer-text').textContent = data.footer || "Default Footer"; // Footer content

    } catch (error) {
        console.error("Error populating data:", error);
    }
}

// Call the function when the page is loaded
window.onload = fetchDataAndPopulate;
