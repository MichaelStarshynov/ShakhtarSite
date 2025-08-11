// Заголовок сайта
const h1 = document.createElement('h1');
h1.textContent = "Шахтар";
document.body.appendChild(h1);

// Навигация
const nav = document.createElement('div');
nav.id = 'nav';
document.body.appendChild(nav);

// Контент
const content = document.createElement('div');
content.id = 'content';
document.body.appendChild(content);

// Страницы сайта
const pages = {
  Головна: {
    title: 'Ласкаво просимо на фан сайт Шахтар!',
    text: ` <div style="text-align:center;">
      <h3 style="color:#e65100;">🔥 Шахтар — це більше ніж футбол</h3>
      <p style="font-size:18px;">Це пристрасть, боротьба, перемоги та єдність. Ми — гірники, ми — сила!</p>
      <p><strong>Приєднуйтесь до нас, слідкуйте за матчами, купуйте квитки та підтримуйте команду!</strong></p>
      <button onclick="showPage('Квітки')" class="shop-btn">🎟️ Замовити квитки</button>
      <button onclick="showPage('Новини')" class="shop-btn">📰 Читати новини</button>
      <button onclick="showPage('Команда')" class="shop-btn">👥 Команда</button>
      <img src="https://shakhtar.com/-/media/fcsd/players/slider_2024_25_2/1250_800_25_1.jpg" style="max-width:100%; border-radius:10px; margin:20px 0;">
    </div>`
  },
  Новини: { title: `Новини нашого клубу` },
  Клуб: { title: `Клуб - Шахтар Донецьк`,
      text: `
      <h3>Шахтар — це більше ніж клуб. Це емоції, пристрасть та перемоги.</h3>
    <p>Футбольний клуб «Шахтар» заснований у 1936 році. За свою історію він став одним із найтитулованіших клубів України.</p>
    
    <h4>🏆 Досягнення:</h4>
    <ul>
      <li>14x Чемпіон України</li>
      <li>13x Володар Кубка України</li>
      <li>9x Володар Суперкубка України</li>
      <li>1x Володар Кубка УЄФА (2009)</li>
    </ul>

    <h4>🏟️ Домашній стадіон:</h4>
    <p>«Арена Львів» — сучасний стадіон з атмосферою справжнього футболу. Місткість: 34 915 глядачів.</p>
    <img src="https://upload.wikimedia.org/wikipedia/ru/6/68/Lviv_Arena_Lviv_15.JPG" alt="Домашня арена Шахтаря: Арена Львів"style="max-width:300px;">

    <h4>Рекорди:</h4>
    <ul>
      <li>Найкращий бомбардир: Луїс Адріано - 128 голів</li>
      <li>Найкращин ассистент: Даріо Срна - 89 ассистів</li>
      <li>Найбільше матчів за клуб: Даріо Срна - 492 матча</li>
      <li>Наймолодший дебютант — Георгій Судаков (18 років)</li>
      <li>Найдорожчий трансфер — Алекс Тейшейра → Jiangsu Suning за €50 млн</li>
      <li>Найтитулованіший тренер — Мірча Луческу</li>

    </ul>
            `
  },
  Команда: { title: `Команда` },
  Матчі: { title: `Матчі` },
  Квітки: {
    title: `Купити квітки`,
    text: `Квітки можна купити <a href="https://tickets.shakhtar.com/" target="_blank">тут</a>.<br><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReVDgvWW2ZjnAG5b-EV_JWxg1cgHvDxt3zKw&s" style="max-width:300px;">`
  },
  Магазин: {
    title: `Купити атрибутику`,
    text: `Атрибутику Шахтаря можна придбати <a href="https://shop.shakhtar.com/ru/" target="_blank">тут</a>.<img src="https://shakhtar.com/uk-ua/fans/fan-clubs/~/media/6e35b8002727401582252a8b1ca0eb5c.ashx" style="max-width:300px;">`
  },
  Телеграм: {
    title: `Телеграм-канал`,
    text: `<p>Підписуйтесь на наш <a href="https://web.telegram.org/a/#-1002610472309" target="_blank">телеграм-канал</a> для більше новин.</p>
    <img src="https://ems.xsport.ua/sites/default/files/2025-04/%D0%A1%D1%83%D0%B4%D0%B0%D0%BA%D0%BE%D0%B2%20250425.jpg">`
  }
};

// Создаем кнопки навигации
for (const key in pages) {
  const btn = document.createElement('button');
  btn.textContent = key;
  btn.className = 'nav-btn';
  btn.onclick = () => showPage(key);
  nav.appendChild(btn);
}

// Показ страницы
function showPage(pageKey) {
  const page = pages[pageKey];
  if (!page) return;

  content.innerHTML = '';

  if (pageKey === 'Команда') {
    showTeam();
    return;
  }
  if (pageKey === 'Новини') {
    showNews();
    return;
  }
  if (pageKey === 'Матчі') {
    showMatches();
    return;
  }

  const titleElem = document.createElement('h2');
  titleElem.textContent = page.title;
  content.appendChild(titleElem);

  if (page.text) {
    const textElem = document.createElement('div');
    textElem.innerHTML = page.text;
    content.appendChild(textElem);
  }
}

// Показ команды с фото
function showTeam() {
  // Заголовок
  const title = document.createElement('h2');
  title.textContent = 'Гравці';
  content.appendChild(title);

  // Игроки
  const playersList = document.createElement('div');
  playersList.className = 'players-list';
  window.team.forEach(player => {
    const card = document.createElement('div');
    card.className = 'player-card';

    card.innerHTML = `
      <img src="${player.photo}" alt="${player.name}" class="player-photo" />
      <p><strong>#${player.number} ${player.name}</strong></p>
      <p>${player.position}</p>
      <p>Вік: ${player.age}</p>
      <p>Національність: ${player.nationality}</p>
    `;

    playersList.appendChild(card);
  });
  content.appendChild(playersList);

  // Тренеры
  const coachesTitle = document.createElement('h3');
  coachesTitle.textContent = 'Тренерський штаб';
  content.appendChild(coachesTitle);

  const coachesList = document.createElement('div');
  coachesList.className = 'coaches-list';
  window.coaches.forEach(coach => {
    const card = document.createElement('div');
    card.className = 'coach-card';

    card.innerHTML = `
      <img src="${coach.photo}" alt="${coach.name}" class="coach-photo" />
      <p><strong>${coach.coach}</strong></p>
      <p>${coach.name}</p>
      <p>Вік: ${coach.age}</p>
      <p>Національність: ${coach.nationality}</p>
    `;

    coachesList.appendChild(card);
  });
  content.appendChild(coachesList);
}
function showMatches() {
  content.innerHTML = '<h2>Матчі</h2>';

  const grid = document.createElement('div');
  grid.className = 'matches-grid';

  if (!window.matches || window.matches.length === 0) {
    grid.innerHTML = '<p>Матчів поки немає.</p>';
    content.appendChild(grid);
    return;
  }

  window.matches.forEach(match => {
    const card = document.createElement('div');
    card.className = 'match-card';

    card.innerHTML = `
      <p><strong>📅 Дата:</strong> ${match.date}</p>
      <p><strong>⚔️ Суперник:</strong> ${match.opponent}</p>
      <p><strong>🕒 Час:</strong> ${match.time}</p>
      <p><strong>🎯 Рахунок:</strong> ${match.score}</p>
      <p><strong>📍 Місце:</strong> ${match.place}</p>
    `;

    grid.appendChild(card);
  });

  content.appendChild(grid);
}



// Новости
function showNews() {
  content.innerHTML = '<h2>Новини</h2>';

  const grid = document.createElement('div');
  grid.className = 'news-grid';

  // Сортируем новости по дате (от новых к старым)
  const sortedNews = [...window.news].sort((a, b) => new Date(b.date) - new Date(a.date));

  sortedNews.forEach(item => {
    const preview = document.createElement('div');
    preview.className = 'news-card';
    preview.onclick = () => showFullNews(item.id);

    const firstSentence = item.text.split('.')[0] + '.';

    preview.innerHTML = `
      <h3>${item.title}</h3>
      <p>${firstSentence}</p>
    `;

    grid.appendChild(preview);
  });

  content.appendChild(grid);
}

function showFullNews(id) {
  const item = window.news.find(n => n.id === id);
  content.innerHTML = '';

  if (!item) {
    content.innerHTML = '<p>Новину не знайдено.</p>';
    return;
  }

  const backBtn = document.createElement('button');
  backBtn.textContent = '← Назад';
  backBtn.className = 'back-btn';
  backBtn.onclick = showNews;
  content.appendChild(backBtn);

  const title = document.createElement('h2');
  title.textContent = item.title;
  content.appendChild(title);

  if (item.image) {
    const img = document.createElement('img');
    img.src = item.image;
    img.alt = item.title;
    img.style.maxWidth = '100%';
    img.style.borderRadius = '10px';
    img.style.margin = '20px 0';
    content.appendChild(img);
  }

  const fullText = document.createElement('div');
  fullText.innerHTML = item.text;
  content.appendChild(fullText);
}



// Запуск - показываем главную страницу
showPage('Головна');
