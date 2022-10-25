// Add imports above this line
import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css'
import { galleryItems } from './gallery-items';
// Change code below this line
const refs = {
    gallery: document.querySelector('.gallery'),
};
const { gallery} = refs;
const galleryItemsRefs = galleryItems.map(({preview, original, description}) => `
    <a class="gallery__item" href="${original}">
        <img
        class="gallery__image"
        src="${preview}" 
        alt="${description}"
        data-source="${original}"
    />
    </a>
 `)
    .join('');
// console.log(galleryItemsRefs)
gallery.innerHTML = galleryItemsRefs;

let galleryNew = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });