
  // Mostrar la sección "developer" al cargar la página
  window.onload = function () {
    showSection('developer');
  };

  function showSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => section.style.display = 'none');

    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
      selectedSection.style.display = 'block';
    }

    const defaultContent = document.getElementById('defaultContent');
    if (defaultContent) {
      defaultContent.style.display = 'none';
    }
  }


