 // Get all navbar items and sections
 const navItems = document.querySelectorAll(".navbar-item");
 const sections = document.querySelectorAll(".section-content");

 let activeSection = "default"; // Keeps track of the currently active section

 // Function to activate a section
 function activateSection(targetId) {
     // Remove 'active' from all sections and navbar items
     sections.forEach(section => section.classList.remove("active"));
     navItems.forEach(item => item.classList.remove("active"));

     // Add 'active' to the target section and corresponding navbar item
     document.getElementById(targetId).classList.add("active");
     document.querySelector(`.navbar-item[data-section="${targetId}"]`).classList.add("active");

     // Update the activeSection variable
     activeSection = targetId;
 }

 // Add hover and click event listeners
 navItems.forEach(item => {
     const targetId = item.getAttribute("data-section");

     // Hover event
     item.addEventListener("mouseover", () => {
         activateSection(targetId);
     });

     // Click event
     item.addEventListener("click", () => {
         activateSection(targetId);
     });
 });

 // Optional: Reset to default content when mouse leaves navbar
 document.querySelector(".navbar").addEventListener("mouseleave", () => {
     activateSection(activeSection);
 });

 document.querySelectorAll(".navbar-item").forEach((item) => {
    item.addEventListener("click", (e) => {
        const sectionId = e.currentTarget.dataset.section;
        const section = document.getElementById(sectionId);

        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    });
});


