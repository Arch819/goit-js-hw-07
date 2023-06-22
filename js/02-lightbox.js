import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');

galleryRef.addEventListener('click', onOpenCloseOriginalImg);


const murkup = galleryItems
  .map(({preview, original, description}) => {
      return `<li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img 
          class="gallery__image" 
          src="${preview}"
          alt="${description}"
        />
      </a>
      </li>`
  })
  .join('');

galleryRef.innerHTML = murkup;


function onOpenCloseOriginalImg(event) {
  const lightbox = new SimpleLightbox('.gallery a', { 
    captionsData: 'alt',
    captionDelay: 250,
  });
  event.preventDefault();
  lightbox.open(event);
}
