import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallerySection = document.querySelector(".gallery");

gallerySection.addEventListener('click', onClick);

const makeGalleryContainerMarkup = galleryItems.map((image) => {
    const { preview, original, description } = image;
    return `
        <li class="gallery__item">
            <a class="gallery__item" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}" 
                    alt="${description}"
                />
            </a>
        </li>`;
}).join("");

gallerySection.insertAdjacentHTML("afterbegin", makeGalleryContainerMarkup);

function onClick(event) {
    if (event.target.nodeName !== 'IMG') {
        return;
    }
    event.preventDefault();
    var lightbox = new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: 250, });
}

console.log(galleryItems);
