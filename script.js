/* =========================
   SIDEBAR
========================= */

const menuToggle = document.getElementById("menuToggle");
const closeSidebar = document.getElementById("closeSidebar");
const sidebar = document.getElementById("sidebar");
const sidebarOverlay = document.getElementById("sidebarOverlay");

if (menuToggle) {
    menuToggle.addEventListener("click", () => {
        sidebar.classList.add("active");
        sidebarOverlay.classList.add("active");
    });
}

if (closeSidebar) {
    closeSidebar.addEventListener("click", () => {
        sidebar.classList.remove("active");
        sidebarOverlay.classList.remove("active");
    });
}

if (sidebarOverlay) {
    sidebarOverlay.addEventListener("click", () => {
        sidebar.classList.remove("active");
        sidebarOverlay.classList.remove("active");
    });
}


/* =========================
   SIDEBAR NAVIGATION
========================= */

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.forEach(item => {
            item.classList.remove("active");
        });

        link.classList.add("active");

        if (window.innerWidth <= 800) {
            sidebar.classList.remove("active");
            sidebarOverlay.classList.remove("active");
        }
    });

});


/* =========================
   DARK MODE
========================= */

const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {

    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            themeToggle.textContent = "☀️";
            themeToggle.title = "Switch to light mode";
        } else {
            themeToggle.textContent = "🌙";
            themeToggle.title = "Switch to dark mode";
        }

    });

}


/* =========================
   NOTIFICATIONS
========================= */

const notificationButton =
    document.querySelector(".icon-button[title='Notifications']");

if (notificationButton) {

    notificationButton.addEventListener("click", () => {

        alert("You have 3 recent notifications.");

    });

}


/* =========================
   CHART FILTER
========================= */

const chartFilter = document.getElementById("chartFilter");
const bars = document.querySelectorAll(".bar");

if (chartFilter) {

    chartFilter.addEventListener("change", () => {

        let values;

        if (chartFilter.value === "weekly") {

            values = [60, 75, 45, 85, 70, 90, 80];

        } else if (chartFilter.value === "yearly") {

            values = [40, 55, 70, 65, 80, 75, 95];

        } else {

            values = [45, 65, 55, 75, 60, 85, 95];

        }

        bars.forEach((bar, index) => {

            if (values[index] !== undefined) {
                bar.style.height = values[index] + "%";
            }

        });

    });

}


/* =========================
   VIEW ALL ORDERS
========================= */

const viewAllButton = document.querySelector(".view-all");

if (viewAllButton) {

    viewAllButton.addEventListener("click", () => {

        alert("All orders are currently displayed in the dashboard.");

    });

}


/* =========================
   SETTINGS NOTIFICATIONS
========================= */

const switches = document.querySelectorAll(".switch input");

switches.forEach(toggle => {

    toggle.addEventListener("change", () => {

        if (toggle.checked) {
            console.log("Setting enabled");
        } else {
            console.log("Setting disabled");
        }

    });

});


/* =========================
   RESPONSIVE SIDEBAR
========================= */

window.addEventListener("resize", () => {

    if (window.innerWidth > 800) {

        sidebar.classList.remove("active");
        sidebarOverlay.classList.remove("active");

    }

});
