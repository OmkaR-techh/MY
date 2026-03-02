document.getElementById("dataForm").addEventListener("submit", async function(e) {
    e.preventDefault();

    const data = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        age: document.getElementById("age").value
    };

    try {
        const response = await fetch("/save", {  // ✅ relative URL
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();
        document.getElementById("message").innerText = result.message;

        // Reset form after submission
        document.getElementById("dataForm").reset();
    } catch (error) {
        console.error(error);
        document.getElementById("message").innerText = "Error saving data!";
    }
});
