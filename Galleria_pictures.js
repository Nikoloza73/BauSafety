const photos = [
    '0V6A0925.JPG',
  '0V6A0926.JPG',
  '0V6A0927.JPG',
  '0V6A0928.JPG',
  '0V6A0929.JPG',
  '0V6A0930.JPG',
  '0V6A0931.JPG',
  '0V6A0932.JPG',
  '1 gverdi.jpg',
  '276321063_2807105446261147_4180303261278876039_n.jpg',
  '56232932_2024949651143401_798052825367052288_n.jpg',
  '56356607_2028710467433986_7880869889823473664_n.jpg',
  '56795556_2028710224100677_708116854433906688_n.jpg',
  '58380471_2039904612981238_5934383006104944640_n (1).jpg',
  '58719878_2039904149647951_8899983221626765312_n.jpg',
  '65859936_2083709875267378_6292729947429535744_n.jpg',
  '66004825_2083710158600683_9051115720544354304_n.jpg',
  '83339042_2245563362415361_7802076567294705664_n.jpg',
  'IMG_20190330_115426.jpg',
  'IMG_20190330_115852.jpg',
  'IMG_20190330_120143.jpg',
  'IMG_20190330_120535.jpg',
  'IMG_20190330_121153.jpg',
  'IMG_20190330_121257.jpg',
  'IMG_20190330_121706.jpg',
  'IMG_20190330_122125.jpg',
  'IMG_20190330_122457.jpg',
  'IMG_20190330_122512.jpg',
  'IMG_20200211_190039.jpg',
  'IMG_20200211_190220.jpg',
  'IMG_4727.JPG',
  'IMG_4728.JPG',
  'IMG_4730.JPG',
  'IMG_4733.JPG',
  'IMG_4735.JPG',
  'IMG_4736.JPG',
  'IMG_4737.JPG',
  'IMG_4738.JPG',
  'IMG_4740.JPG',
  'IMG_4741.JPG',
  'IMG_4742.JPG',
  'IMG_4743.JPG',
  'IMG_4744.JPG',
  'IMG_4745.JPG',
  'IMG_4746.JPG',
  'IMG_4747.JPG',
  'IMG_4748.JPG',
  'viber_image_2022-05-12_20-53-19-044.jpg',
  'viber_image_2022-05-12_20-53-44-070 - Copy.jpg',
  'viber_image_2022-05-12_20-53-44-070.jpg',
  'viber_image_2022-05-12_20-57-43-392 - Copy.jpg',
  'viber_image_2022-05-12_20-57-43-392.jpg',
  'viber_image_2022-05-12_20-59-11-656.jpg',
];

const grid = document.querySelector('.gallery-grid');

photos.forEach((filename) => {
  const item = document.createElement('div');
  item.className = 'gallery-item';
  item.innerHTML = `
    <img src="${filename}" alt="Site photo" loading="lazy">
    <div class="gallery-caption">${filename}</div>
  `;
  grid.appendChild(item);
});