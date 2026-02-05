// MUSIC CONTROL START
// 1. Buat objek audio
// PASTIKAN: nama file 'lagu-kelas.mp3' sama persis dengan yang di folder (cek huruf besar/kecil)
const audio = new Audio("lagu-kelas.mp3"); 
audio.loop = true;

const playPauseBtn = document.getElementById("playPauseBtn");
const musicIcon = document.getElementById("musicIcon");

// 2. Cek apakah file lagu ketemu atau tidak
audio.onerror = function() {
    console.error("Waduh, lagu nggak ketemu! Cek nama filenya di folder.");
    alert("File lagu-kelas.mp3 tidak ditemukan di folder!");
};

// 3. Fungsi Play/Pause
function toggleMusic() {
    if (audio.paused) {
        audio.play().then(() => {
            musicIcon.classList.replace("fa-music", "fa-pause");
        }).catch(err => {
            console.log("Klik layar dulu baru musik bisa jalan");
        });
    } else {
        audio.pause();
        musicIcon.classList.replace("fa-pause", "fa-music");
    }
}

// 4. OTOMATIS: Jalan saat klik pertama di layar
document.addEventListener('click', function() {
    if (audio.paused) {
        audio.play().then(() => {
            musicIcon.classList.replace("fa-music", "fa-pause");
        });
    }
}, { once: true });

// 5. MANUAL: Klik tombol
if (playPauseBtn) {
    playPauseBtn.addEventListener("click", function(e) {
        e.stopPropagation();
        toggleMusic();
    });
}
// MUSIC CONTROL END

// TYPING TEXT START
const textElement = document.getElementById("typing-text");
const phrases = ["Solidarity.", "Family.", "XII-L Community.", "Future Leaders."];
let phraseIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < phrases[phraseIndex].length) {
        textElement.textContent += phrases[phraseIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100);
    } else {
        setTimeout(erase, 2000);
    }
}

function erase() {
    if (charIndex > 0) {
        textElement.textContent = phrases[phraseIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 50);
    } else {
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(type, 500);
    }
}

document.addEventListener("DOMContentLoaded", type);
// TYPING TEXT END


// COUNTDOWN START
function updateCountdown() {
    // Karena sekarang tahun 2026, kita set ke Mei 2026
    const targetDate = new Date("april 18, 2026 08:00:00").getTime();
    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const el = document.getElementById("countdown-float");
    if (el) {
        if (distance < 0) {
            el.innerHTML = "LULUS! 🎉";
        } else {
            // Format simpel agar tidak kepanjangan di box melayang
            el.innerHTML = `${days}d ${hours}h ${minutes}m`;
        }
    }
}
setInterval(updateCountdown, 1000);
updateCountdown();
// COUNTDOWN END