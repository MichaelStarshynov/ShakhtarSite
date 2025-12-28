// Заголовок сайта
const h1 = document.createElement('h1');
h1.textContent = "ФК Полісся Житомир";
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
    title: 'Вітаємо вас на сайті ФК Полісся Житомир',
    text: ` <div style="text-align:center;">
      <h3 style="color:#e65100;">🔥Полісся - це більше ніж футбол</h3>
      <p style="font-size:18px;">Це пристрасть, боротьба, перемоги та емоції. Ми - Полісся, Ми - Сила!</p>
      <p><strong>Приєднуйтесь до нас, слідкуйте за матчамі, купуйте квитки та підтримуйте команду!</strong></p>
      <p>❗ Цей сайт не є офіційним сайтом Полісся.</p>
      <button onclick="showPage('Квитки')" class="shop-btn">🎟️ Купити квитки на матч!</button>
      <button onclick="showPage('Новини')" class="shop-btn">📰 Читайте новини</button>
      <button onclick="showPage('Команда')" class="shop-btn">👥 Команда</button>
      <img src="https://polissya.shop/wp-content/uploads/2024/08/72475b160d-logo-site.jpg"
     style="max-width:100%; border-radius:10px; margin:20px auto; display:block;">
    </div>`
  },
  Новини: { title: `Новини Полісся` },
  Клуб: { 
  title: `Клуб - ФК Полісся Житомир`,
  text: `
  <h3>ФК «Полісся» Житомир — це сучасний український футбольний клуб, що швидко розвивається та уособлює амбіції, прогрес і нову футбольну культуру України.</h3>
  <p>Футбольний клуб «Полісся» було відроджено у 2016 році. За короткий час клуб пройшов шлях від аматорського рівня до Української Премʼєр-ліги, ставши одним із найцікавіших проєктів українського футболу.</p>
  
  <h4>🏆 Досягнення:</h4>
  <ul>
    <li>Вихід до Української Премʼєр-ліги</li>
    <li>Учасник УПЛ</li>
    <li>Стабільний клуб в еліті українського футболу</li>
  </ul>

  <h4>🏟️ Домашній стадіон:</h4>
  <p>Центральний стадіон Житомира — домашня арена ФК «Полісся». Стадіон є футбольним серцем міста та важливим символом відродження професійного футболу в регіоні.</p>
  <img src="https://static.ua-football.com/img/upload/22/2c17ab.jpeg"
       alt="Домашній стадіон ФК Полісся Житомир"
       style="max-width:300px; border-radius:10px; display:block; margin:20px auto;"
       title="Центральний стадіон Житомира">

  <h4>Рекорди та ключові постаті:</h4>
  <ul>
    <li>Період найбільшого зростання: 2022–дотепер</li>
    <li>Ключова фігура розвитку клубу: керівництво та інвестиційний проєкт</li>
    <li>Філософія клубу: сучасний футбол, дисципліна та довгострокова стратегія</li>
  </ul>

  <h3>Логотип клубу:</h3>
  <img src="https://polissya.shop/wp-content/uploads/2024/08/72475b160d-logo-site.jpg"
       title="Логотип ФК Полісся Житомир"
       style="max-width:300px; border-radius:10px; display:block; margin:20px auto;">
`
},

Історія: {
  title: `Історія ФК «Полісся» Житомир`,
  text: `
    <br>
    <img src="https://football24.ua/resources/photos/news/202511/913282.jpg?v=202511195529&q=85&output=webp"
         style="max-width:100%; border-radius:10px; display:block; margin:20px auto;">
    <br>

    <p>ФК «Полісся» Житомир — футбольний клуб із багатою регіональною традицією та сучасною філософією розвитку. Футбол у Житомирі має глибоке коріння, а бренд «Полісся» став символом відродження професійного футболу в регіоні.</p>

    <h4>Початок та відродження</h4>
    <p>Сучасний ФК «Полісся» був відроджений у 2016 році. Клуб розпочав шлях із нижчих дивізіонів, поступово вибудовуючи структуру, інфраструктуру та команду з чітким баченням майбутнього.</p>

    <h4>Шлях до професіонального футболу</h4>
    <p>У перші роки існування «Полісся» стабільно прогресувало, здобуваючи досвід у Другій та Першій лігах України. Команда зарекомендувала себе як організований і дисциплінований колектив із серйозними амбіціями.</p>

    <h4>Вихід до Української Премʼєр-ліги</h4>
    <p>Ключовим моментом в історії клубу став вихід до Української Премʼєр-ліги. Цей успіх став результатом системної роботи керівництва, тренерського штабу та гравців.</p>

    <h4>Домашня арена</h4>
    <p>Домашні матчі ФК «Полісся» проводить на Центральному стадіоні Житомира. Арена є важливим елементом футбольної культури міста та місцем, де формується зв’язок між командою і вболівальниками.</p>
    <img class="history-picture"
         src="https://novyny.live/cdn-cgi/imagedelivery/4_JwVYxosZqzJ7gIDJgTLA/4f840f8a-9880-4a9f-c566-47a41af49e00/16x9"
         title="Центральний стадіон Житомира">

    <h4>Сучасний етап</h4>
    <p>У Премʼєр-лізі «Полісся» позиціонує себе як сучасний, амбітний клуб із довгостроковою стратегією. Команда робить акцент на організовану гру, фізичну готовність та поступовий розвиток.</p>

    <h4>Філософія та цінності</h4>
    <p>ФК «Полісся» поєднує повагу до регіональної ідентичності з прагненням відповідати європейським стандартам. Клуб розвиває інфраструктуру, працює над іміджем і будує міцний фундамент на майбутнє.</p>

    <h4>Майбутнє клубу</h4>
    <p>Сьогодні ФК «Полісся» Житомир — це клуб на етапі активного зростання. Його мета — стабільність в УПЛ, боротьба за високі позиції та формування впізнаваного футбольного бренду України.</p>
  `,
},


  Команда: { title: `Team` },
  Матчі: { 
    title: `Матчі`, 
    text:  `<p>Місце в УПЛ: 2 місце</p><p>Місце в Кубку України: виліт в 3 колі</p>`

  },
Таблиця: {
  title: 'Таблиця',
  text: `
  <h4>УПЛ</h4>
    <table class="league-table">
      <thead>
        <tr>
          <th>М</th>
          <th>КОМАНДА</th>
          <th>И</th>
          <th>В</th>
          <th>Н</th>
          <th>П</th>
          <th>З</th>
          <th>П</th>
          <th>О</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>1</td>
          <td class="team">ЛНЗ Черкаси</td>
          <td>16</td>
          <td>11</td>
          <td>2</td>
          <td>3</td>
          <td>20</td>
          <td>8</td>
          <td>35</td>
        </tr>

        <tr>
          <td>2</td>
          <td class="team">Шахтар Донецьк</td>
          <td>16</td>
          <td>10</td>
          <td>5</td>
          <td>1</td>
          <td>42</td>
          <td>12</td>
          <td>35</td>
        </tr>

        <tr class="highlight-polissya">
          <td>3</td>
          <td class="team">Полісся Житомир</td>
          <td>16</td>
          <td>9</td>
          <td>3</td>
          <td>4</td>
          <td>25</td>
          <td>11</td>
          <td>30</td>
        </tr>

         <tr>
          <td>4</td>
          <td class="team">Динамо Київ</td>
          <td>16</td>
          <td>7</td>
          <td>5</td>
          <td>4</td>
          <td>35</td>
          <td>21</td>
          <td>26</td>
        </tr>

         <tr>
          <td>5</td>
          <td class="team">Кривбас</td>
          <td>16</td>
          <td>7</td>
          <td>5</td>
          <td>4</td>
          <td>28</td>
          <td>24</td>
          <td>26</td>
        </tr>

     <tr>
          <td>6</td>
          <td class="team">Колос Ковалівка</td>
          <td>16</td>
          <td>6</td>
          <td>7</td>
          <td>3</td>
          <td>17</td>
          <td>13</td>
          <td>25</td>
        </tr>

           <tr>
          <td>7</td>
          <td class="team">Металіст 1925</td>
          <td>15</td>
          <td>6</td>
          <td>6</td>
          <td>3</td>
          <td>18</td>
          <td>12</td>
          <td>24</td>
        </tr>

           <tr>
          <td>8</td>
          <td class="team">Зоря Луганьск</td>
          <td>16</td>
          <td>6</td>
          <td>5</td>
          <td>5</td>
          <td>19</td>
          <td>18</td>
          <td>23</td>
        </tr>

            <tr>
          <td>9</td>
          <td class="team">Карпати Львів</td>
          <td>16</td>
          <td>4</td>
          <td>7</td>
          <td>5</td>
          <td>20</td>
          <td>21</td>
          <td>19</td>
        </tr>
  
         <tr>
          <td>10</td>
          <td class="team">Рух Львів</td>
          <td>16</td>
          <td>6</td>
          <td>1</td>
          <td>9</td>
          <td>15</td>
          <td>23</td>
          <td>19</td>
        </tr>
 
         <tr>
          <td>11</td>
          <td class="team">Верес Рівне</td>
          <td>15</td>
          <td>4</td>
          <td>6</td>
          <td>5</td>
          <td>13</td>
          <td>17</td>
          <td>18</td>
        </tr>

         <tr>
          <td>12</td>
          <td class="team">Оболонь Київ</td>
          <td>16</td>
          <td>4</td>
          <td>5</td>
          <td>7</td>
          <td>12</td>
          <td>27</td>
          <td>17</td>
        </tr>

         <tr>
          <td>13</td>
          <td class="team">Кудрівка</td>
          <td>16</td>
          <td>4</td>
          <td>3</td>
          <td>9</td>
          <td>19</td>
          <td>30</td>
          <td>15</td>
        </tr>

         <tr>
          <td>14</td>
          <td class="team">Епіцентр</td>
          <td>16</td>
          <td>7</td>
          <td>5</td>
          <td>4</td>
          <td>18</td>
          <td>27</td>
          <td>14</td>
        </tr>

         <tr>
          <td>15</td>
          <td class="team">Олександрія</td>
          <td>16</td>
          <td>2</td>
          <td>5</td>
          <td>9</td>
          <td>14</td>
          <td>28</td>
          <td>11</td>
        </tr>

         <tr>
          <td>16</td>
          <td class="team">Полтава</td>
          <td>16</td>
          <td>2</td>
          <td>3</td>
          <td>11</td>
          <td>14</td>
          <td>38</td>
          <td>9</td>
        </tr>

      </tbody>
    </table>
  `
},

  Квитки: {
    title: `Купити квітки`,
    text: `Квитки на матч можно купити <a href="https://kasa.com.ua/zhitomir" target="_blank">тут</a>.<br><img src="https://i.postimg.cc/yYDJWGVv/593ba29f-43fb-4a04-8242-2466c77b0135.jpg">`
  },
  Магазин: {
    title: `Магазин`,
    text: `Магазин Шахтаря можно знайти <a href="https://polissya.shop/" target="_blank">тут</a>.<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZm9tVdxb766BFW0UAh3U_NgXPiQ_r539qtA&s">`
  },
  Телеграм: {
    title: `Телеграм Канал`,
    text: `<p>Підпісуйтесь на наш <a href="https://t.me/PolyssiaZhytomyr" target="_blank">Телеграм канал</a> заради більше новин.</p>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLSLWWMSGe2UJCS1-qXD9Y_Su4ys5zgYaqTg&s" >`
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



// Функція інформації гравців 

function showPlayerDetails(player) {
  content.innerHTML = ''; // очищаємо контент

  const backBtn = document.createElement('button');
  backBtn.textContent = '← Повернутися';
  backBtn.className = 'back-btn';
  backBtn.onclick = showTeam;
  content.appendChild(backBtn);

  const title = document.createElement('h2');
  title.textContent = `${player.name}`;
  content.appendChild(title);

  const img = document.createElement('img');
  img.src = player.photo;
  img.alt = player.name;
  img.className = 'player-photo-large';
  img.style.maxWidth = '250px';
  img.style.borderRadius = '15px';
  img.style.display = 'block';
  img.style.margin = '20px auto';
  content.appendChild(img);

  const info = document.createElement('div');
  info.className = 'player-info';
  info.innerHTML = `
    <p><strong>Номер:</strong> ${player.number}</p>
    <p><strong>Позіція:</strong> ${player.position}</p>
    <p><strong>Вік:</strong> ${player.age}</p>
    <p><strong>Національність:</strong> ${player.nationality}</p>
    <h4>Статистика:</h4>
    <p>⚽ <strong>Голи:</strong> ${player.goals || "0"}</p>
    <p>👟 <strong>Передачі:</strong> ${player.assist || "0"}</p>
    <p>🏟️ <strong>Матчі:</strong> ${player.matches || "0"}</p>
  `;
  content.appendChild(info);
}


// Показ команды с разделами по позициям + тренеры
function showTeam() {
  content.innerHTML = ''; // очищаем перед выводом

  const title = document.createElement('h2');
  title.textContent = 'Команда';
  content.appendChild(title);

  // Категории игроков
  const groups = {
    'Воротарі': ['GK', 'Воротар'],
    'Захистники': ['DF', 'Захистник',],
    'Півзахісники': ['MF', 'Півзахисник'],
    'Нападники': ['FW', 'Нападник',]
  };

  // Перебор категорий
  for (const groupName in groups) {
    const groupTitle = document.createElement('h3');
    groupTitle.textContent = groupName;
    content.appendChild(groupTitle);

    const groupList = document.createElement('div');
    groupList.className = 'players-list';

    window.team
      .filter(player => groups[groupName].some(pos => player.position.includes(pos)))
      .forEach(player => {
        const card = document.createElement('div');
        card.className = 'player-card';

        card.innerHTML = `
          <img src="${player.photo}" alt="${player.name}" class="player-photo" />
          <p><strong>#${player.number} ${player.name}</strong></p>
          <p>${player.position}</p>
        `;

        card.onclick = () => showPlayerDetails(player);
groupList.appendChild(card);

      });

    if (groupList.children.length > 0) {
      content.appendChild(groupList);
    }
  }

  // ---- Тренеры ----
  if (window.coaches && window.coaches.length > 0) {
    const coachesTitle = document.createElement('h3');
    coachesTitle.textContent = 'Тренери';
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
        <p><strong>Національність:</strong> ${coach.nationality}</p>

      `;

      coachesList.appendChild(card);
    });

    content.appendChild(coachesList);
  }
}

 
function showMatches() {
  content.innerHTML = '<h2>Матчі</h2>';

  // берем текст из pages
  const info = document.createElement('div');
  info.innerHTML = pages['Матчі'].text;
  content.appendChild(info);

  const grid = document.createElement('div');
  grid.className = 'matches-grid';

  if (!window.matches || window.matches.length === 0) {
    grid.innerHTML = '<p>Матчів ще нема</p>';
    content.appendChild(grid);
    return;
  }

  window.matches.forEach(match => {
    const card = document.createElement('div');
    card.className = 'match-card';

    card.innerHTML = `
      <p><strong>📅 Дата:</strong> ${match.date}</p>
      <p><strong>⚔️ Суперник:</strong> ${match.opponent}</p>
      <p><strong>🕒 Час (УКР):</strong> ${match.time || "Час ще не відомо"}</p>
      <p><strong>🎯 Рахунок:</strong> ${match.score || "Матч ще не був зіграний"}</p>
      <p><strong>📍 Місце: </strong> ${match.place}</p>
      <p><strong>🏆 Турнір:</strong> ${match.competition}</p>
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

  // Сортируем новости: сначала закрепленные, потом остальные, внутри по дате
  const sortedNews = [...window.news].sort((a, b) => {
    if (a.pinned && !b.pinned) return -1;
    if (!a.pinned && b.pinned) return 1;
    return new Date(b.date) - new Date(a.date); // по дате внутри групп
  });

  sortedNews.forEach(item => {
    const preview = document.createElement('div');
    preview.className = 'news-card';
    preview.onclick = () => showFullNews(item.id);

    preview.innerHTML = `
      <h3>${item.title}</h3>
      <p style="color: white;">${item.datum}</p>
      ${item.pinned ? '<p style="color: orangered;">📌 Закріплено</p>' : ''}
    `;

    grid.appendChild(preview);
  });

  content.appendChild(grid);
}

function showFullNews(id) {
  const item = window.news.find(n => n.id === id);
  content.innerHTML = '';

  if (!item) {
    content.innerHTML = '<p>There is no news</p>';
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
    img.style.margin = '20px auto';
    img.style.display = 'block';
    content.appendChild(img);
  }

  const fullText = document.createElement('div');
  fullText.innerHTML = item.text;
  content.appendChild(fullText);
}




// Запуск - показываем главную страницу
showPage('Головна');
