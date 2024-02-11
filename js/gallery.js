const images = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

const containerGalleryEl = document.querySelector('.gallery');
containerGalleryEl.innerHTML = createGalleryMarkup(images);

function createGalleryMarkup(images) {
  return images.map(({ preview, original, description }) => `
  <li class="gallery-item">
  <a class="gallery-link" href="${original}">
    <img
      class="gallery-image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>
  `).join("");
}

let instance;

containerGalleryEl.addEventListener('click', (event) => {
  event.preventDefault();
  if (event.target === event.currentTarget) {
    return;
  }

instance = basicLightbox.create(
  `<div>
    <img width="1112"
    height="640"
    src="${event.target.dataset.source}"
    alt="${event.target.alt}">
  </div>`
  );
  instance.show();

window.addEventListener('keyup', ({ code }) => {
  if (code !== 'Escape') {
    return;
  }
  instance.close();
  });

});

// const containerGalleryEl = document.querySelector('.gallery');

// function createGalleryMarkup({ preview, description, original }) {
//   const markup =
//   `<li class="gallery-item">
//   <a class="gallery-link" href="${original}" onclick="event.preventDefault();">
//     <img
//       class="gallery-image"
//       src="${preview}"
//       data-source="${original}"
//       alt="${description}"
//     />
//   </a>
// </li>`
//   return markup;
// }

// let markup = "";

// for (let image of images) {
//   markup += createGalleryMarkup(image);
// }

// containerGalleryEl.innerHTML = markup;

// containerGalleryEl.addEventListener('click', (event) => {
//   if (event.target === event.currentTarget) {
//     return;
//   }
  
//   const imageBig = event.target.closest('.gallery-item');
//   console.log('Click', imageBig);
// });

// let instance;

// containerGalleryEl.addEventListener('click', function (event) {
//   event.preventDefault();
//   if (event.target === event.currentTarget) {
//     return;
//   }
//   instance = basicLightbox.create(
//     `<div>
//       <img width="1112"
//       height="640"
//       src="${event.target.src}"
//       alt="${event.target.alt}">
//     </div>`
//   );
//   instance.show();
// });

// containerGalleryEl.addEventListener('keyup', ({ code }) => {
//   if (code !== 'Escape') {
//     return;
//   }
//   instance.close();
// });




// ❌ 1. Завдання вирішено неправильно

// Добре виконані моменти:

// Гарне використання шаблонних літералів: функції createGalleryMarkup та цикл створення markup ефективно використовують шаблонні
// літерали для створення HTML-рядків на основі масиву images.

// Структурований та зрозумілий код: код розбитий на функції та структурований таким чином, що легко зрозуміти логіку та
// послідовність дій.

// Описові назви змінних: змінні, такі як containerGalleryEl та imageBig, є описовими та дають чітке розуміння того,
// що вони представляють.

// Критичні помилки:

// Створення модального вікна: модальне вікно правильно створюється за допомогою методу basicLightbox.create(),
// коли натискається на елемент галереї. Однак атрибут src великого зображення має бути отримано з атрибуту data-source,
// а не з атрибуту src натиснутого зображення. Це потрібно змінити, щоб задовольнити вимоги завдання.

// Обробник подій для клавіатурних подій: наразі обробник подій для клавіатури прив'язано до containerGalleryEl,
// замість глобального об'єкту window або document. Це означає, що він не буде виявляти натискання клавіш, якщо контейнер галереї
// не у фокусі, що малоймовірно. Він повинен слухати події натискання клавіш на більш глобальному рівні, щоб коректно працювати.

// Сфера дії та розміщення обробника подій: більше того, обробник подій для клавіатурних подій додано, але ніколи не видаляється,
// що може призвести до непотрібно активних обробників подій, коли модальне вікно не видиме. Він повинен слухати тільки тоді,
// коли модальне вікно відкрите.

// Обробник подій для закриття модального вікна: модальне вікно має закриватися за допомогою клавіші Escape, проте обробник
// перевіряє події 'keyup', серед яких 'Escape' не обробляється правильно, оскільки випадки, коли натискається Escape,
// ймовірніше використовують 'keydown'. Також немає перевірки, чи модальне вікно насправді показане перед спробою його закриття.

// Поліпшення:

// Неслідкуваність у обробці подій: обробка подій для запобігання стандартній поведінці на якірних тегах розкидана по всьому коду.
// Її можна було б впорядкувати, прикріпивши один обробник подій до контейнера галереї для обробки кліків на якірних тегах.

// Організація службових функцій: ви могли б організувати createGalleryMarkup як окрему повторно використовувану службову функцію
// поза основним блоком логіки, щоб покращити загальну організацію коду та розділення відповідальності.

// Завдання не було прийняте через критичні помилки, які потрібно виправити. Будь ласка, врахуйте наданий зворотний зв'язок і
// зробіть необхідні корекції, зокрема переконайтеся, що велике зображення відображається правильно, а функціональність закриття
// модального вікна за допомогою клавіатури правильно реалізована з обробниками подій, які додаються та видаляються у відповідні часи.

// Як тільки ці проблеми будуть вирішені та код працюватиме згідно з вимогами завдання, він буде готовий до прийняття.
