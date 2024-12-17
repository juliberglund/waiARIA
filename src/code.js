document.addEventListener("DOMContentLoaded", function () {
  // Tillgängligt Modalfönster (Första modalen med div)
  const modal = document.getElementById("accessibleModal");
  const openModalButton = document.getElementById("openModalBtn");
  const closeModalButton = document.getElementById("closeModalBtn");

  // Se till att modalen är stängd när sidan laddas
  modal.setAttribute("aria-hidden", "true"); // Dölja modalen
  modal.style.display = "none"; // Dölj modalen när sidan laddas

  // Växla mellan att öppna och stänga modalen när öppna-knappen klickas
  openModalButton.addEventListener("click", function () {
    const isModalOpen = modal.getAttribute("aria-hidden") === "false"; // Kontrollera om modalen redan är öppen

    if (isModalOpen) {
      // Om modalen är öppen, stäng den
      modal.setAttribute("aria-hidden", "true");
      modal.style.display = "none";
      openModalButton.focus(); // Återställ fokus till öppna-knappen
    } else {
      // Om modalen är stängd, öppna den
      modal.setAttribute("aria-hidden", "false");
      modal.style.display = "block"; // Gör modalen synlig
      closeModalButton.focus(); // Sätt fokus på stäng-knappen
    }
  });
  // Stäng modalen när användaren klickar på stäng-knappen eller trycker ESC
  closeModalButton.addEventListener("click", function () {
    modal.setAttribute("aria-hidden", "true"); // Dölj modalen
    modal.style.display = "none"; // Dölj modalen
    openModalButton.focus(); // Fokusera tillbaka på öppna-knappen
  });

  // Stäng modalen när ESC trycks
  window.addEventListener("keydown", function (event) {
    if (
      event.key === "Escape" &&
      modal.getAttribute("aria-hidden") === "false"
    ) {
      closeModalButton.click(); // Simulera klick på stäng-knappen
    }
  });

  // Tillgängligt Dialog (andra modal med <dialog>)
  const dialog = document.getElementById("accessibleDialog");
  const openDialogButton = document.getElementById("openDialogBtn");
  const closeDialogBtn = document.getElementById("closeDialogBtn");

  // Fokusera på stäng-knappen när dialogen öppnas
  openDialogButton.addEventListener("click", function () {
    dialog.showModal(); // Visa dialogen
    closeDialogBtn.focus(); // Sätt fokus på stäng-knappen i dialogen
  });

  // Stäng dialogen när användaren klickar på stäng-knappen eller trycker ESC
  closeDialogBtn.addEventListener("click", function () {
    dialog.close(); // Stäng dialogen
    openDialogButton.focus(); // Fokusera tillbaka på öppna-knappen
  });

  // Meny: Öppna och stänga meny
  const menuButton = document.getElementById("menuButton");
  const menuContent = document.getElementById("menuContent");

  // Se till att content är stängd när sidan laddas
  menuContent.setAttribute("aria-hidden", "true"); // Dölja content
  menuContent.style.display = "none"; // Dölj content när sidan laddas om

  // Öppna/stäng menyn
  menuButton.addEventListener("click", function () {
    const isMenuOpen = menuContent.getAttribute("aria-hidden") === "false";
    if (isMenuOpen) {
      menuContent.setAttribute("aria-hidden", "true");
      menuButton.setAttribute("aria-expanded", "false");
      menuContent.style.display = "none"; // Dölj menyn
      menuButton.focus(); // Återställ fokus till öppna-knappen
    } else {
      menuContent.setAttribute("aria-hidden", "false");
      menuButton.setAttribute("aria-expanded", "true");
      menuContent.style.display = "block"; // Visa menyn
    }
  });

  // Stäng menyn med ESC
  document.addEventListener("keydown", function (event) {
    if (
      event.key === "Escape" &&
      menuContent.getAttribute("aria-hidden") === "false"
    ) {
      menuContent.setAttribute("aria-hidden", "true");
      menuButton.setAttribute("aria-expanded", "false");
      menuContent.style.display = "none"; // Dölj menyn
      menuButton.focus(); // Återställ fokus till öppna-knappen
    }
  });
});
