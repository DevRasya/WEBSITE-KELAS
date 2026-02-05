document.addEventListener("DOMContentLoaded", function() {
    const wrapper = document.getElementById('gallery-wrapper');
    const totalFoto = 60; // Sesuaikan jumlah foto terakhirmu
    const totalVideo = 19; 

    if (wrapper) {
        // --- BAGIAN VIDEO ---
        for (let j = 1; j <= totalVideo; j++) {
            const div = document.createElement('div');
            div.className = 'gallery-item position-relative';

            const video = document.createElement('video');
            video.src = `kenangan/v (${j}).mp4`; 
            video.className = 'w-100 h-100';
            video.style.objectFit = 'cover';
            video.muted = true;
            video.loop = true;
            video.playsInline = true; // Penting untuk HP
            video.setAttribute('loading', 'lazy');

            // Preview saat hover
            div.onmouseenter = () => video.play();
            div.onmouseleave = () => video.pause();

            // Klik untuk perbesar
            div.onclick = function() {
                openVideoModal(video.src);
            };

            const icon = document.createElement('div');
            icon.innerHTML = '<i class="fas fa-play text-white opacity-75"></i>';
            icon.style.cssText = "position:absolute; top:50%; left:50%; transform:translate(-50%,-50%); pointer-events:none;";

            div.appendChild(video);
            div.appendChild(icon);
            wrapper.appendChild(div);
        }

        // --- BAGIAN FOTO ---
        for (let i = 1; i <= totalFoto; i++) {
            const div = document.createElement('div');
            div.className = 'gallery-item';

            const img = document.createElement('img');
            img.src = `kenangan/w (${i}).jpeg`; 
            img.setAttribute('loading', 'lazy');
            img.className = 'w-100 h-100';
            img.style.objectFit = 'cover';
            
            div.onclick = function() {
                openModal(img.src);
            };

            div.appendChild(img);
            wrapper.appendChild(div);
        }
    }
});
// MODAL FUNCTION START
function openModal(src) {
    const modalBody = document.querySelector('#imageModal .modal-body');
    modalBody.innerHTML = `<img src="${src}">`; // Tanpa class aneh-aneh
    var myModal = new bootstrap.Modal(document.getElementById('imageModal'));
    myModal.show();
}

function openVideoModal(src) {
    const modalBody = document.querySelector('#imageModal .modal-body');
    modalBody.innerHTML = `<video src="${src}" controls autoplay></video>`;
    var myModal = new bootstrap.Modal(document.getElementById('imageModal'));
    myModal.show();
}