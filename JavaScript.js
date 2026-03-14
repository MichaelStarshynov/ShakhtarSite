// Заголовок сайта
const h1 = document.createElement('h1');
h1.textContent = "ФК Полісся Житомир";
document.body.appendChild(h1);

// Навигация
const nav = document.createElement('div');
nav.id = 'nav';
nav.style.display = 'flex';
nav.style.alignItems = 'center';
nav.style.gap = '20px';
document.body.appendChild(nav);

// Контент
const content = document.createElement('div');
content.id = 'content';
document.body.appendChild(content);
nav.style.position = 'relative';


// Страницы сайта
const pages = {
  Головна: {
    title: 'Вітаємо вас на сайті ФК Полісся Житомир',
    text: ` <div style="text-align:center;">
      <h3 style="color:green;">🔥Полісся - це більше ніж футбол</h3>
      <p style="font-size:18px;">Це пристрасть, боротьба, перемоги та емоції. Ми - Полісся, Ми - Сила!</p>
      <p><strong>Приєднуйтесь до нас, слідкуйте за матчамі, купуйте квитки та підтримуйте команду!</strong></p>
      <p>❗ Цей сайт не є офіційним сайтом Полісся.</p>
      <button onclick="showPage('Квитки')" class="shop-btn">🎟️ Купити квитки на матч!</button>
      <button onclick="showPage('Новини')" class="shop-btn">📰 Читайте новини</button>
      <button onclick="showPage('Команда')" class="shop-btn">👥 Команда</button>
      <img src="https://www.zhitomir.info/f/images/2025/12/19/232038/172b9ecb6b35e89a97ace6121e774d35_preview_w440_h290.jpg"
     style="max-width:100%; border-radius:10px; margin:20px auto; display:block;">
    </div>`
  },
  Новини: { title: `Новини Полісся` },
  Клуб: {
  title: `Клуб - ФК Полісся`,
  text: `
  <h3>ФК «Полісся» Житомир — амбітний український футбольний клуб, який стрімко розвивається та представляє місто Житомир у вищому дивізіоні українського футболу.</h3>

  <p>Футбольний клуб «Полісся» було засновано у 1959 році. Після відродження клубу у 2016 році команда почала активно розвиватися, залучати нових гравців та боротися за високі місця в українському футболі.</p>

  <h4>🏆 Досягнення:</h4>
  <ul>
    <li>Переможці Winter Cup 2022</li>
    <li>Чемпіон Першої ліги України — 2022/23</li>
    <li>Вихід до Української Прем'єр-ліги — 2023/24</li>
  </ul>

  <h4>Клуб сьогодні:</h4>
  <ul>
    <li>Місто: Житомир</li>
    <li>Стадіон: Центральний стадіон Житомира</li>
    <li>Головний тренер: Руслан Ротань</li>
    <li>Клуб активно розвиває інфраструктуру та академію</li>
    <li>Амбіція клубу — боротьба за єврокубки</li>
  </ul>
  `
},
Інфраструктура: {
  text: `
  <h2>Центральний стадіон Полісся</h2>
  <p>Домашній стадіон ФК Полісся - Центральний стадіон - був відкритий у 1951 році. У 2025 році була реконструія. Наразі Полісся грає тут своі домашні матчі.</p>
  <h4>Місткість та характеристики:</h4>
  <ul>
  <li>Місткість: 5 928 глядачів</li>
  <li>Тип поля: натуральне поле</li>
  <li>Розтошування: Житомир, Україна</li>
  <li>Рік видкриття: 1951</li>
  </ul>

  <img src="https://upl.ua/glide/uploads/2307/l_FdVHVcNuroOYoqpfuzFyL3wGvrYu2Z.jpg?w=1024&h=1024&fit=contain&s=42668e3ec06d202ff49de003d8353415" style="width:550px;">

  <br>

  <h2>Тренерувальна база</h2>
  <p>Тренерувальна база Полісся - одна із найсучасніших в України. Була відкрита в 2023 році.</p>
  <h4>Характеристики</h4>
  <ul>
  <li>Кількість полів: 5</li>
  <li>Тип поля: 2 гибридні, 3 натуральні</li>
  <li>Розтошування: Житомир, Україна</li>
  <li>Рік видкриття: 2023</li>
  </ul>

  <img src="https://pictures.ua.tribuna.com/image/46025122-d3ac-48b8-80d1-6060115219d9" style="width^550px;">
  `
},
Історія: {
  title: `Історія ФК «Полісся» Житомир`,
  text: `
    <br>
    <img src="https://sportbusiness.media/wp-content/uploads/2025/07/photo_2025-07-02_15-21-15.jpg"
         style="max-width:100%; border-radius:10px; display:block; margin:20px auto;">
    <br>

    <p>ФК «Полісся» Житомир — футбольний клуб із багатою історією, який представляє місто Житомир та весь регіон Полісся. Команда пройшла шлях від радянського футболу до сучасної Української Прем'єр-ліги.</p>

    <h4>Заснування клубу</h4>
    <p>Футбольний клуб «Полісся» було засновано у 1959 році. Команда представляла Житомир у різних футбольних лігах СРСР та поступово здобувала популярність серед місцевих уболівальників.</p>

    <h4>Виступи у незалежній Україні</h4>
    <p>Після проголошення незалежності України клуб продовжив виступи у національних чемпіонатах. «Полісся» стало важливою частиною футбольного життя Житомира та регіону.</p>

    <h4>Складні роки та відродження</h4>
    <p>У 2000-х роках клуб переживав складні часи і певний період не виступав на професійному рівні. У 2016 році футбольну команду було відроджено, після чого розпочався новий етап розвитку клубу.</p>

    <h4>Повернення до великого футболу</h4>
    <p>Після відродження клуб почав швидко розвиватися, зміцнювати склад і покращувати інфраструктуру. У сезоні 2022/23 «Полісся» стало чемпіоном Першої ліги України та вперше в історії вийшло до Української Прем'єр-ліги.</p>

    <h4>Домашня арена</h4>
    <p>Домашнім стадіоном клубу є Центральний стадіон у Житомирі. Після реконструкції він став сучасною футбольною ареною, де проходять матчі національного чемпіонату.</p>

    <img class="history-picture"
         src="https://cdn4.suspilne.media/images/resize/794x1.5/ed79720717fb10ef.jpg"
         title="Центральний стадіон Житомира">

    <h4>Сучасний етап</h4>
    <p>Сьогодні «Полісся» активно розвивається, залучає нових гравців та ставить перед собою амбітні цілі — закріпитися серед найкращих клубів України та боротися за участь у європейських турнірах.</p>

    <h4>Майбутнє клубу</h4>
    <p>Клуб прагне розвивати молодих футболістів, покращувати інфраструктуру та представляти Житомир на найвищому рівні українського футболу.</p>
  `,
},
Логотип: {
  title: `Logo`,
text: `<h3>Логотип клубу:</h3> <img src="https://upload.wikimedia.org/wikipedia/uk/thumb/c/c8/FC_Polissya_Zhytomyr_logo.svg/250px-FC_Polissya_Zhytomyr_logo.svg.png"      title="Логотип ФК Полісся Житомир"      style="max-width:300px; border-radius:10px; display:block; margin:20px auto;">`},
  Команда: { title: `Team` },
  Матчі: { 
    title: `Матчі`, 
    text:  `<p>Місце в УПЛ: 3 місце</p><p>Місце в Кубку України: виліт в 1/16 фіналу</p><p>Місце в Лізі Конференцій: виліт в 3 кваліфікаційному єтапі.</p>`
  },
   Тренери: { title: `Coaches` },
   Легенди: { title: `Legends` },
Таблиця: {
  title: 'Таблиця',
  text: `
  <h4>УПЛ</h4>
  <div class="table-wrapper">
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
          <td class="team">Шахтар Донецьк</td>
          <td>19</td>
          <td>13</td>
          <td>5</td>
          <td>1</td>
          <td>47</td>
          <td>12</td>
          <td>44</td>
        </tr>

         <tr>
          <td>2</td>
          <td class="team">ЛНЗ Черкаси</td>
          <td>19</td>
          <td>11</td>
          <td>3</td>
          <td>5</td>
          <td>32</td>
          <td>14</td>
          <td>41</td>
        </tr>

        <tr class="highlight-shakhtar">
          <td>3</td>
          <td class="team">Полісся Житомир</td>
          <td>19</td>
          <td>11</td>
          <td>3</td>
          <td>5</td>
          <td>32</td>
          <td>14</td>
          <td>36</td>
        </tr>

         <tr>
          <td>4</td>
          <td class="team">Динамо Київ</td>
          <td>19</td>
          <td>10</td>
          <td>5</td>
          <td>4</td>
          <td>42</td>
          <td>22</td>
          <td>35</td>
        </tr>

   <tr>
          <td>5</td>
          <td class="team">Металіст 1925</td>
          <td>18</td>
          <td>8</td>
          <td>7</td>
          <td>3</td>
          <td>22</td>
          <td>12</td>
          <td>31</td>
        </tr>

         <tr>
          <td>6</td>
          <td class="team">Кривбас</td>
          <td>19</td>
          <td>8</td>
          <td>7</td>
          <td>4</td>
          <td>31</td>
          <td>25</td>
          <td>31</td>
        </tr>


     <tr>
          <td>7</td>
          <td class="team">Колос Ковалівка</td>
          <td>19</td>
          <td>7</td>
          <td>7</td>
          <td>5</td>
          <td>18</td>
          <td>19</td>
          <td>28</td>
        </tr>

        

           <tr>
          <td>8</td>
          <td class="team">Зоря Луганьск</td>
          <td>19</td>
          <td>7</td>
          <td>6</td>
          <td>6</td>
          <td>26</td>
          <td>23</td>
          <td>27</td>
        </tr>

  <tr>
          <td>9</td>
          <td class="team">Верес Рівне</td>
          <td>18</td>
          <td>5</td>
          <td>6</td>
          <td>7</td>
          <td>16</td>
          <td>21</td>
          <td>21</td>
        </tr>
        
<tr>
          <td>10</td>
          <td class="team">Оболонь Київ</td>
          <td>18</td>
          <td>5</td>
          <td>6</td>
          <td>7</td>
          <td>13</td>
          <td>27</td>
          <td>21</td>
        </tr>


        <tr>
          <td>11</td>
          <td class="team">Карпати Львів</td>
          <td>19</td>
          <td>4</td>
          <td>8</td>
          <td>7</td>
          <td>21</td>
          <td>26</td>
          <td>20</td>
        </tr>
        
         <tr>
          <td>12</td>
          <td class="team">Кудрівка</td>
          <td>19</td>
          <td>5</td>
          <td>5</td>
          <td>9</td>
          <td>24</td>
          <td>33</td>
          <td>20</td>
        </tr>

        <tr>
          <td>13</td>
          <td class="team">Рух Львів</td>
          <td>18</td>
          <td>6</td>
          <td>1</td>
          <td>12</td>
          <td>15</td>
          <td>28</td>
          <td>19</td>
        </tr>


         <tr>
          <td>14</td>
          <td class="team">Епіцентр</td>
          <td>19</td>
          <td>5</td>
          <td>2</td>
          <td>12</td>
          <td>22</td>
          <td>33</td>
          <td>17</td>
        </tr>

         <tr>
          <td>15</td>
          <td class="team">Олександрія</td>
          <td>18</td>
          <td>2</td>
          <td>5</td>
          <td>11</td>
          <td>14</td>
          <td>30</td>
          <td>11</td>
        </tr>

         <tr>
          <td>16</td>
          <td class="team">Полтава</td>
          <td>19</td>
          <td>2</td>
          <td>3</td>
          <td>14</td>
          <td>16</td>
          <td>47</td>
          <td>9</td>
        </tr>

      </tbody>
    </table>
    </div>
  `
},
  Квитки: {
    title: `Купити квітки`,
    text: `Квитки на матч можно купити <a href="https://kasa.com.ua/zhitomir" target="_blank">тут</a>.<br><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtxZW1VyO70MIsVjpvm9gBQRE10eIq1vxweg&s">`
  },
  Магазин: {
    title: `Магазин`,
    text: `Магазин Полісся можно знайти <a href="https://shop.polissyafc.com/" target="_blank">тут</a>.<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4X1W75Yb1wmV63EM3MkGEsTKnLeQlBbYPxg&s">`
  },
  Телеграм: {
    title: `Телеграм Канал`,
    text: `<p>Підпісуйтесь на наш <a href="https://t.me/PolissyaZhytomyr" target="_blank">Телеграм канал</a> заради більше новин.</p>
    <img src="https://static.kyivpost.com/storage/2025/04/06/b6393cd6e077e6acb25fa41f14fee807.jpeg?w=1280&f=webp" >`
  },
  Менеджмент: {
    title: "Менеджмент",
  },
  Результати: {
    title: "Результати",
  },
  Трофеї: {
    title: "Трофеї",
    text: '<img style="width:600px;" src="https://cdn4.suspilne.media/images/8a94544538a0511f.png"><h4>Одноразовий переможець Першої Ліги.</h4><br><img style="width:600px;" src="https://ukrfootball.ua/wp-content/uploads/Drugoe/polissyawinner.webp"><h4>Одноразовий чемпіон Winter Cup.</h4>',
  }

  
};

const menuGroups = {
  'Головна': [],
  'Клуб': ['Історія', 'Інфраструктура', 'Логотип', 'Менеджмент', 'Трофеї'],
  'Матчі': ['Таблиця', 'Результати'],
  'Магазин': ['Квитки'],
  'Команда': ['Тренери',],
  'Телеграм': [],
  
};


// Результати
function showResults() {
  content.innerHTML = '<h2>Результати матчів</h2>';

  const grid = document.createElement('div');
  grid.className = 'matches-grid';

  if (!window.results || window.results.length === 0) {
    grid.innerHTML = '<p>Результатів ще нема</p>';
    content.appendChild(grid);
    return;
  }

  window.results.forEach(match => {
    const card = document.createElement('div');
    card.className = 'match-card';

    card.innerHTML = `
      <p><strong>📅 Дата:</strong> ${match.date}</p>
      <p><strong>⚔️ Суперник:</strong> ${match.opponent}</p>
      <p><strong>🎯 Рахунок:</strong> ${match.score}</p>
      <p><strong>📍 Місце:</strong> ${match.place}</p>
      <p><strong>🏆 Турнір:</strong> ${match.competition}</p>
    `;

    grid.appendChild(card);
  });

  content.appendChild(grid);
}



// Создаем кнопки навигации + dropdown
// всі підсторінки з dropdown
const subPages = Object.values(menuGroups).flat();

for (const key in pages) {

  // ❌ не створюємо кнопку, якщо це підсторінка
  if (subPages.includes(key)) continue;


  const navItem = document.createElement('div');
  navItem.className = 'nav-item';

  const btn = document.createElement('button');
  btn.textContent = key;
  btn.className = 'nav-btn';

  btn.onclick = () => {
    document.querySelectorAll('.nav-btn')
      .forEach(b => b.classList.remove('active'));

    btn.classList.add('active');
    showPage(key);
  };

  navItem.appendChild(btn);

  // 🔽 dropdown як у Металіста
  // 🔽 dropdown як у Металіста
if (menuGroups[key]) {
  const dropdown = document.createElement('div');
  dropdown.className = 'dropdown';

  // Додаємо головну кнопку в підменю
  const mainItem = document.createElement('div');
  mainItem.className = 'dropdown-item';
  mainItem.textContent = key;
  mainItem.onclick = () => showPage(key);
  dropdown.appendChild(mainItem); // або dropdown.prepend(mainItem) якщо хочеш першою

  menuGroups[key].forEach(subPage => {
    const item = document.createElement('div');
    item.className = 'dropdown-item';
    item.textContent = subPage;

    item.onclick = () => showPage(subPage);

    dropdown.appendChild(item);
  });

  navItem.appendChild(dropdown);
  nav.appendChild(navItem);
}
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
 if (pageKey === 'Тренери') {
    showCoaches(); 
    return;
  }
   if (pageKey === 'Легенди') {
    showLegends(); 
    return;
  }
  if (pageKey === 'Менеджмент') {
    showManagment(); 
    return;
  }
  if (pageKey === 'Результати') {
  showResults();
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

// легенди
function showLegends() {
  content.innerHTML = '';

  const title = document.createElement('h2');
  title.textContent = 'Легенди ФК Шахтар';
  content.appendChild(title);

  const container = document.createElement('div');
  container.className = 'legends-container';

  window.legends.forEach(legend => {
    const card = document.createElement("div");
    card.className = "legend-card";

    card.innerHTML = `
      <img src="${legend.photo}" alt="${legend.name}">
      <h3>${legend.name}</h3>

      <p><strong>Національність:</strong> ${legend.nationality}</p>
      <p><strong>Вік:</strong> ${legend.age}</p>
      <p><strong>Позиція:</strong> ${legend.position}</p>

      <div class="legend-stats">
        <span>🏟️ ${legend.matches}</span>
        <span>⚽ ${legend.goals}</span>
        <span>🎯 ${legend.assist}</span>
      </div>
    `;

    container.appendChild(card);
  });

  content.appendChild(container);
}
// менеджмент
function showManagment() {
  content.innerHTML = '';

  const title = document.createElement('h2');
  title.textContent = 'Менеджмент ФК Шахтар';
  content.appendChild(title);

  const container = document.createElement('div');
  container.className = 'legends-container';

  window.managment.forEach(person => {
    const card = document.createElement('div');
    card.className = 'legend-card';

    card.innerHTML = `
      <img src="${person.photo}" alt="${person.name}">
      <h3>${person.name}</h3>
      <p><strong>Роль:</strong> ${person.role}</p>
      <p><strong>Національність:</strong> ${person.nationality}</p>
      <p><strong>Вік:</strong> ${person.age}</p>
    `;

    container.appendChild(card);
  });

  content.appendChild(container);
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
}
  // ---- Тренеры ----
 function showCoaches () {

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
      ${item.pinned ? '<p style="color: green;">📌 Закріплено</p>' : ''}
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
