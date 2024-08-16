document.addEventListener('DOMContentLoaded', function () {
    const yesBtn = document.querySelector('.yes-btn');
    const noBtn = document.querySelector('.no-btn');

    // Asignar función de clic al botón "Sí"
    yesBtn.addEventListener('click', function() {
        alert("El Ari que hiciste al viejo Mac miller, cuidate Mey Castro.(no tengo oficio en estos momentos sinceramente)");
    });

    // Asignar evento de movimiento al botón "No"
    noBtn.addEventListener('mouseover', function() {
        moveButton(noBtn);
    });

    function moveButton(button) {
        const rect = button.getBoundingClientRect(); // Obtener el rectángulo del botón
        const maxX = window.innerWidth - rect.width; // Calcular el máximo de X
        const maxY = window.innerHeight - rect.height; // Calcular el máximo de Y

        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);

        button.style.left = randomX + 'px';
        button.style.top = randomY + 'px';
    }
});