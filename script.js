// script.js

function createTicket() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let issue = document.getElementById("issue").value.toLowerCase();

    if (name === "" || email === "" || issue === "") {
        alert("Please fill all fields!");
        return;
    }

    let category = "General Inquiry";
    let priority = "Low";

    // AI-based ticket classification
    if (issue.includes("payment") || issue.includes("refund")) {
        category = "Billing Support";
        priority = "High";
    }
    else if (issue.includes("login") || issue.includes("password")) {
        category = "Account Support";
        priority = "Medium";
    }
    else if (issue.includes("error") || issue.includes("bug")) {
        category = "Technical Support";
        priority = "High";
    }
    else if (issue.includes("order") || issue.includes("delivery")) {
        category = "Order Support";
        priority = "Medium";
    }

    // Generate Ticket ID
    let ticketId = "TKT" + Math.floor(10000 + Math.random() * 90000);

    // Display ticket details
    document.getElementById("ticket").style.display = "block";
    document.getElementById("ticketId").innerText = ticketId;
    document.getElementById("customerName").innerText = name;
    document.getElementById("customerEmail").innerText = email;
    document.getElementById("category").innerText = category;

    let priorityElement = document.getElementById("priority");
    priorityElement.innerText = priority;

    if (priority === "High") {
        priorityElement.className = "high";
    } else if (priority === "Medium") {
        priorityElement.className = "medium";
    } else {
        priorityElement.className = "low";
    }
}
