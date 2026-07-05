document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("loanForm");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const amount = document.getElementById("amount").value;

    const data = {
      name,
      phone,
      amount
    };

    try {
      const response = await fetch("/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (result.success) {
        alert("Application sent successfully!");
        form.reset();
      } else {
        alert("Failed to send application.");
      }

    } catch (error) {
      alert("Error sending application.");
      console.error(error);
    }
  });

});
