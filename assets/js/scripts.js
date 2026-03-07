document.addEventListener('DOMContentLoaded', function () {

  const hamburger = document.querySelector('.hamburger');
  const menu = document.querySelector('.navbar-menu');

  if (hamburger && menu) {
    hamburger.addEventListener('click', function () {
      menu.classList.toggle('active');
    });
  }

  const dropButtons = document.querySelectorAll('.dropbtn');

  dropButtons.forEach(function (button) {
    button.addEventListener('click', function (event) {

      // ONLY apply click behavior on mobile
      if (window.innerWidth <= 768) {
        event.preventDefault();
        event.stopPropagation();

        const parentDropdown = button.closest('.dropdown');

        document.querySelectorAll('.dropdown').forEach(function (dropdown) {
          if (dropdown !== parentDropdown) {
            dropdown.classList.remove('active');
          }
        });

        parentDropdown.classList.toggle('active');
      }

      // On desktop, allow normal behavior
    });
  });

  // Close dropdowns when clicking outside (mobile only)
  document.addEventListener('click', function () {
    if (window.innerWidth <= 768) {
      document.querySelectorAll('.dropdown').forEach(function (dropdown) {
        dropdown.classList.remove('active');
      });
    }
  });

});
// Update year in footer
    document.getElementById("year").textContent = new Date().getFullYear();

