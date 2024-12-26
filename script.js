// Function to display the content based on the tab clicked
function showTab(tabName) {
    // Hide all sections
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.style.display = 'none');

    // Remove active class from all navigation links
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => link.classList.remove('active'));

    // Show the clicked tab
    const activeTab = document.getElementById(tabName);
    activeTab.style.display = 'block';

    // Add active class to the clicked navigation link
    const activeLink = document.querySelector(`nav ul li a[onclick="showTab('${tabName}')"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
}

// Display Home tab by default
showTab('home');
