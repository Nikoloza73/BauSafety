
const videos = [
  '0-02-0b-0840ae4820453ece9b514b4ab5c8d750eaa1b55cfff08b71872689db1f4e6852_407032fdf2b00321.mp4',
  '0-02-0b-cca0c6f6dc79dcf2ccfccf13b6625dfac916f6a55d73641d65b9404c64c41734_4d4ff21666e5c6b8 (2).mp4',
  'bausafety video.mp4',
  'saswavlo centri.mp4',
  'პრაქტიკული უნიქსში.mp4',
  'სერტიფიკატების გადაცემა.mp4',
];



const photos = [
    'bausafety_pictures/0V6A0925.JPG',
  'bausafety_pictures/0V6A0926.JPG',
  'bausafety_pictures/0V6A0927.JPG',
  'bausafety_pictures/0V6A0928.JPG',
  'bausafety_pictures/0V6A0929.JPG',
  'bausafety_pictures/0V6A0930.JPG',
  'bausafety_pictures/0V6A0931.JPG',
  'bausafety_pictures/0V6A0932.JPG',
  'bausafety_pictures/1 gverdi.jpg',
  'bausafety_pictures/276321063_2807105446261147_4180303261278876039_n.jpg',
  'bausafety_pictures/56232932_2024949651143401_798052825367052288_n.jpg',
  'bausafety_pictures/56356607_2028710467433986_7880869889823473664_n.jpg',
  'bausafety_pictures/56795556_2028710224100677_708116854433906688_n.jpg',
  'bausafety_pictures/58380471_2039904612981238_5934383006104944640_n (1).jpg',
  'bausafety_pictures/58719878_2039904149647951_8899983221626765312_n.jpg',
  'bausafety_pictures/65859936_2083709875267378_6292729947429535744_n.jpg',
  'bausafety_pictures/66004825_2083710158600683_9051115720544354304_n.jpg',
  'bausafety_pictures/83339042_2245563362415361_7802076567294705664_n.jpg',
  'bausafety_pictures/IMG_20190330_115426.jpg',
  'bausafety_pictures/IMG_20190330_115852.jpg',
  'bausafety_pictures/IMG_20190330_120143.jpg',
  'bausafety_pictures/IMG_20190330_120535.jpg',
  'bausafety_pictures/IMG_20190330_121153.jpg',
  'bausafety_pictures/IMG_20190330_121257.jpg',
  'bausafety_pictures/IMG_20190330_121706.jpg',
  'bausafety_pictures/IMG_20190330_122125.jpg',
  'bausafety_pictures/IMG_20190330_122457.jpg',
  'bausafety_pictures/IMG_20190330_122512.jpg',
  'bausafety_pictures/IMG_20200211_190039.jpg',
  'bausafety_pictures/IMG_20200211_190220.jpg',
  'bausafety_pictures/IMG_4727.JPG',
  'bausafety_pictures/IMG_4728.JPG',
  'bausafety_pictures/IMG_4730.JPG',
  'bausafety_pictures/IMG_4733.JPG',
  'bausafety_pictures/IMG_4735.JPG',
  'bausafety_pictures/IMG_4736.JPG',
  'bausafety_pictures/IMG_4737.JPG',
  'bausafety_pictures/IMG_4738.JPG',
  'bausafety_pictures/IMG_4740.JPG',
  'bausafety_pictures/IMG_4741.JPG',
  'bausafety_pictures/IMG_4742.JPG',
  'bausafety_pictures/IMG_4743.JPG',
  'bausafety_pictures/IMG_4744.JPG',
  'bausafety_pictures/IMG_4745.JPG',
  'bausafety_pictures/IMG_4746.JPG',
  'bausafety_pictures/IMG_4747.JPG',
  'bausafety_pictures/IMG_4748.JPG',
  'bausafety_pictures/viber_image_2022-05-12_20-53-19-044.jpg',
  'bausafety_pictures/viber_image_2022-05-12_20-53-44-070 - Copy.jpg',
  'bausafety_pictures/viber_image_2022-05-12_20-53-44-070.jpg',
  'bausafety_pictures/viber_image_2022-05-12_20-57-43-392 - Copy.jpg',
  'bausafety_pictures/viber_image_2022-05-12_20-57-43-392.jpg',
  'bausafety_pictures/viber_image_2022-05-12_20-59-11-656.jpg',
];


document.addEventListener('DOMContentLoaded', function() {
  const grid = document.querySelector('#page-industries .gallery-grid');
  if (!grid) return;

  videos.forEach((filename) => {
    const item = document.createElement('div');
    item.className = 'gallery-item';
    item.innerHTML = `
      <video controls preload="metadata">
        <source src="${filename}" type="video/mp4">
      </video>
      <div class="gallery-caption">${filename}</div>
    `;
    grid.appendChild(item);
  });
  
  photos.forEach((filename) => {
    const item = document.createElement('div');
    item.className = 'gallery-item';
    item.innerHTML = `
      <img src="${filename}" alt="Site photo" loading="lazy">
      <div class="gallery-caption">${filename}</div>
    `;
    grid.appendChild(item);
  });
});