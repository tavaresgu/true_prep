document.addEventListener("DOMContentLoaded", () => {
    const toggleMenuButton = document.getElementById("toggleMenu");
    const sidebar = document.getElementById("sidebar");

    // Alterna o menu ao clicar no botão
    toggleMenuButton.addEventListener("click", () => {
        sidebar.classList.toggle("open");
    });

    // Fecha o menu ao clicar fora dele
    document.addEventListener("click", (event) => {
        const isClickInsideMenu = sidebar.contains(event.target);
        const isClickToggleButton = toggleMenuButton.contains(event.target);

        // Se o clique não for no menu nem no botão, fecha o menu
        if (!isClickInsideMenu && !isClickToggleButton) {
            sidebar.classList.remove("open");
        }
    });
});
