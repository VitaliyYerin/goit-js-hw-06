const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryItems = document.querySelector('.gallery');
galleryItems.insertAdjacentHTML("afterbegin", images
    .map(el => `<li><img src=${el.url} alt="${el.alt}"></li>`).join('')
);

const style = document.createElement('style');
style.type = 'text/css';
style.innerHTML =  '.gallery { display: flex; padding: 0; list-style: none;}' + ' li {width: 33.333%;}' + ' img{width:  100%; height: 100%; object-fit: cover;}';
document.querySelector('head').append(style);
