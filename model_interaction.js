document.addEventListener("DOMContentLoaded", () => {
    const projectBoxes = document.querySelectorAll(".project-box");
    const modals = document.querySelectorAll(".modal");
    const closeButtons = document.querySelectorAll(".close");

    // Open modal on project box click
    projectBoxes.forEach((box) => {
        box.addEventListener("click", () => {
            const modalId = box.getAttribute("data-modal");
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.style.display = "flex"; // Show the modal
                setTimeout(() => modal.classList.add("show"), 10); // Add "show" class with slight delay
            }
        });
    });

    // Close modal on close button click
    closeButtons.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            const modal = e.target.closest(".modal");
            if (modal) {
                modal.classList.remove("show"); // Remove "show" class for transition
                setTimeout(() => {
                    modal.style.display = "none"; // Hide modal after transition
                }, 300); // Match transition duration
            }
        });
    });

    // Close modal when clicking outside the modal content
    window.addEventListener("click", (e) => {
        if (e.target.classList.contains("modal")) {
            const modal = e.target;
            modal.classList.remove("show");
            setTimeout(() => {
                modal.style.display = "none";
            }, 300);
        }
    });
});
