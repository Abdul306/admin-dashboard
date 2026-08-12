// Sidebar toggle
const menuToggle = document.getElementById("menuToggle");
const sidebar = document.getElementById("sidebar");

menuToggle.addEventListener("click", () => {
    sidebar.classList.toggle("active");
});


// Dashboard statistics
const statNumbers = document.querySelectorAll(".stat-number");

statNumbers.forEach(stat => {
    const target = parseInt(stat.textContent);
    let count = 0;

    const updateNumber = () => {
        if (count < target) {
            count++;
            stat.textContent = count;
            setTimeout(updateNumber, 30);
        } else {
            stat.textContent = target;
        }
    };

    updateNumber();
});


// Simple notification
const notificationButton = document.getElementById("notificationBtn");

if (notificationButton) {
    notificationButton.addEventListener("click", () => {
        alert("You have no new notifications.");
    });
});


// Search functionality
const searchInput = document.getElementById("searchInput");

if (searchInput) {
    searchInput.addEventListener("input", () => {
        const searchValue = searchInput.value.toLowerCase();
        const rows = document.querySelectorAll("tbody tr");

        rows.forEach(row => {
            row.style.display = row.textContent
                .toLowerCase()
                .includes(searchValue)
                ? ""
                : "none";
        });
    });
}
