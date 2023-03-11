import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallerySection = document.querySelector(".gallery");

gallerySection.addEventListener('click', onClick);

let currentBasicLightbox = null;

const makeGalleryContainerMarkup = galleryItems.map((image) => {
    const { preview, original, description } = image;
    return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </div>`;
}).join("");

gallerySection.insertAdjacentHTML("afterbegin", makeGalleryContainerMarkup);

function onClick(event) {
    if (event.target.nodeName !== 'IMG') {
        return;
    }
    event.preventDefault();
    currentBasicLightbox = basicLightbox.create(`
		<img width="1400" height="900" src="${event.target.dataset.source}">
	`)
    currentBasicLightbox.show();
    document.addEventListener('keydown', onEscPressed);
}

function onEscPressed(event) {
    if (event.code === "Escape") {
        currentBasicLightbox.close();
        document.removeEventListener("keydown", onEscPressed);
    }
}