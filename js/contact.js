document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");

    contactForm.addEventListener("submit", async function (event) {
        event.preventDefault(); // Prevent default form submission

        // Collect form data
        const formData = {
            name: contactForm.name.value.trim(),
            email: contactForm.email.value.trim(),
            subject: contactForm.subject.value.trim(),
            message: contactForm.message.value.trim(),
        };

        // API endpoint
        const apiUrl = "https://tedx-0brl.onrender.com/submit/";

        try {
            const response = await fetch(apiUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            // Check if request was successful
            if (!response.ok) {
                const errorData = await response.json();
                console.error("API Error Response:", errorData);
                alert("Error: " + (errorData.message || "Something went wrong"));
                return;
            }

            const responseData = await response.json();
            console.log("API Success Response:", responseData);

            alert("Message sent successfully!");
            contactForm.reset();
        } catch (error) {
            console.error("Fetch Error:", error);
            alert("Failed to send message. Please try again.");
        }
    });
});
