let currentImageIndex = 0 ; //index de l'image actuellement affichée
let galleryImages = [] ; // Tableau contenant les images de la galerie

function toggleDetails(element) {
    const details = element.parentElement.nextElementSibling;
    const isVisible = details.style.display === "block";

    details.style.display = isVisible ? "none" : "block";

    element.textContent = isVisible? "+" :"-";

    element.classList.toggle("open", !isVisible);
}

function openModal(src) {
    // Récupérer toutes les images visibles dans la galerie
    galleryImages = Array.from(document.querySelectorAll(".contexte-image-item"));
     // Trouver l'index de l'image cliquée
    currentImageIndex = galleryImages.findIndex(img => img.src === src);
    document.getElementById("modalImage").src = src; // Définit l'image source
    document.getElementById("imageModal").style.display = "flex"; // Affiche la modal
}

function closeModal() {
    document.getElementById("imageModal").style.display = "none"; // Cache la modal
} 

// Fonction pour naviguer entre les images (via flèches)
function changeImage(direction) {
    // Calculer le nouvel index, en bouclant si nécessaire
    currentImageIndex = (currentImageIndex + direction + galleryImages.length) % galleryImages.length;

    // Mettre à jour l'image affichée dans la modal
    const modalImage = document.getElementById("modalImage");
    modalImage.src = galleryImages[currentImageIndex].src;
}