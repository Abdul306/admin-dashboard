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

/* =========================
   NOTIFICATION DROPDOWN
========================= */

const notificationButton =
    document.getElementById("notificationBtn");

const notificationDropdown =
    document.getElementById("notificationDropdown");

const markRead =
    document.getElementById("markRead");

const notificationDot =
    document.querySelector(".notification-dot");


if (notificationButton && notificationDropdown) {

    notificationButton.addEventListener("click", (event) => {

        event.stopPropagation();

        notificationDropdown.classList.toggle("active");

    });

}


/* Close notification when clicking outside */

document.addEventListener("click", (event) => {

    if (
        notificationDropdown &&
        !notificationDropdown.contains(event.target) &&
        !notificationButton.contains(event.target)
    ) {

        notificationDropdown.classList.remove("active");

    }

});


/* Mark notifications as read */

if (markRead) {

    markRead.addEventListener("click", () => {

        if (notificationDot) {
            notificationDot.style.display = "none";
        }

        const notificationCount =
            document.querySelector(".notification-header span");

        if (notificationCount) {
            notificationCount.textContent = "All notifications read";
        }

        markRead.textContent = "Done";

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

/* =========================
   ORDER SEARCH
========================= */

const orderSearch = document.getElementById("orderSearch");

if (orderSearch) {

    orderSearch.addEventListener("input", () => {

        const searchValue = orderSearch.value.toLowerCase();

        const orderRows = document.querySelectorAll("tbody tr");

        orderRows.forEach(row => {

            const rowText = row.textContent.toLowerCase();

            if (rowText.includes(searchValue)) {
                row.style.display = "";
            } else {
                row.style.display = "none";
            }

        });

    });

}

/* =========================
   ANIMATED STATISTICS
========================= */

const statNumbers = document.querySelectorAll(".stat-number");

statNumbers.forEach(stat => {

    const target = Number(stat.dataset.target);

    let current = 0;

    const duration = 1500;

    const increment = target / (duration / 20);

    const updateNumber = () => {

        current += increment;

        if (current < target) {

            if (target === 1250000) {
                stat.textContent =
                    "₦" + Math.floor(current).toLocaleString();
            } else {
                stat.textContent =
                    Math.floor(current).toLocaleString();
            }

            setTimeout(updateNumber, 20);

        } else {

            if (target === 1250000) {
                stat.textContent =
                    "₦" + target.toLocaleString();
            } else {
                stat.textContent =
                    target.toLocaleString();
            }

        }

    };

    updateNumber();

});
