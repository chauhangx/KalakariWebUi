

document.getElementById("customizationForm").addEventListener("submit", async function (e) {
            e.preventDefault();

            const userEmail = localStorage.getItem("email");
            const header = document.getElementById("header").value;
            const topic = document.getElementById("topic").value;
            const author = document.getElementById("author").value;
            //const date = document.getElementById("date").value;
            const image = document.getElementById("image").value;
            const footer = document.getElementById("footer").value;
            const content = document.getElementById("content").value;
            const isActive = document.getElementById("isActive").checked;

            const payload = {
                userEmail,
                header,
                topic,
                author,
                //date,
                image,
                content,
                isActive,
				footer
            };

            try {
                const response = await fetch("https://localhost:44339/api/WebCustomization/Insert", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(payload)
                });

                if (response.ok) {
                    const result = await response.json();
                    //alert(result.message); // Show success message in an alert
					localStorage.setItem("postViewId",result.newId);
					window.location.href = "postView.html"
                } else {
                    const error = await response.json();
                    alert(`Error: ${error.message || "Failed to save customization."}`);
                }
            } catch (err) {
                console.error("Error:", err);
                alert("An error occurred while saving customization.");
            }
        });
 

