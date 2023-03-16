import { galleryItems } from './gallery-items.js';

const gallerySection = document.querySelector(".gallery");

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

const galleryLightBox = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionDelay: 250,
});