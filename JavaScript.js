// Заголовок сайта
const h1 = document.createElement('h1');
h1.textContent = "ФК Шахтар Донецьк";
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
    title: 'Вітаємо вас на сайті ФК Шахтар Донецьк',
    text: ` <div style="text-align:center;">
      <h3 style="color:#e65100;">🔥Шахтар - це більше ніж футбол</h3>
      <p style="font-size:18px;">Це пристрасть, боротьба, перемоги та емоції. Ми - Шахтар, Ми - Сила!</p>
      <p><strong>Приєднуйтесь до нас, слідкуйте за матчамі, купуйте квитки та підтримуйте команду!</strong></p>
      <p>❗ Цей сайт не є офіційним сайтом Шахтаря.</p>
      <button onclick="showPage('Квитки')" class="shop-btn">🎟️ Купити квитки на матч!</button>
      <button onclick="showPage('Новини')" class="shop-btn">📰 Читайте новини</button>
      <button onclick="showPage('Команда')" class="shop-btn">👥 Команда</button>
      <img src="https://shakhtar.com/-/media/fcsd/club/philosophy-and-crest/puma_kit_1641820242.jpg?sc_lang=uk-ua"
     style="max-width:100%; border-radius:10px; margin:20px auto; display:block;">
    </div>`
  },
  Новини: { title: `Новини Шахтаря` },
  Клуб: { 
  title: `Клуб - ФК Шахтар`,
  text: `
  <h3>ФК «Шахтар» Донецьк — легендарний український футбольний клуб, який поєднує багату історію, європейські амбіції та переможний характер.</h3>
<p>Футбольний клуб «Шахтар» засновано у 1936 році. За десятиліття існування клуб став одним із символів українського спорту, здобувши десятки національних трофеїв та міжнародне визнання.</p>

<h4>🏆 Трофеї та титули:</h4>
<ul>
  <li>Чемпіон України — 15 разів</li>
  <li>Володар Кубка України — 15 разів</li>
  <li>Володар Суперкубка України — 9 разів</li>
  <li>Переможець Кубка УЄФА — 2009</li>
</ul>

<h4>Рекорди та спадщина:</h4>
<ul>
  <li>Найкраший бомбардир: Луіз Адріано (128)</li>
  <li>Найбільше передач: Даріо Срна (129)</li>
  <li>Найбільше матчів: Даріо Срна (536)</li>
  <li>Найдорожчий продаж: Мудрик до ФК Челсі (100 млн)</li>
  <li>Найдорожчя покупка: Бернард з Атлетико Минейро (25 млн)</li>
</ul>


`
},
Інфраструктура: {
  text: `
  <h2>Донецьк</h2>
    <h3>Донбас Арена</h3>
    <p>Домашній стадіон ФК «Шахтар» Донецьк — «Донбас Арена» — відкритий у 2009 році. Це сучасний стадіон європейського рівня, який став символом найуспішнішої епохи клубу. Стадіон приймав матчі Євро-2012.</p>

    <h4>Місткість та характеристики:</h4>
    <ul>
      <li>Місткість: 52 187 глядачів</li>
      <li>Тип поля: натуральне трав’яне покриття</li>
      <li>Розташування: Донецьк, Україна</li>
      <li>Рік відкриття: 2009</li>
    </ul>

    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Donetsk_Donbass_Arena_40.jpg/1200px-Donetsk_Donbass_Arena_40.jpg" 
         alt="Донбас Арена"
         style="max-width:500px; border-radius:10px; display:block; margin:20px auto;">

         <img src="https://editorial.uefa.com/resources/0254-0f85ee245bfb-e31165c89211-1000/_-2012.jpeg" 
         alt=" Трибуни Донбас Арени"
         style="max-width:500px; border-radius:10px; display:block; margin:20px auto;">
<br>
<h3>Кірша</h3>
<p>Тренерувальна база Шахтаря. Знаходиться 15 км від Донецьку. У 2014 опинилась у центрі бойових дій, внаслідок обстрілу була пошкоджена. </p>
<h4>Характеристики:</h4>
<ul>
<li>Кількість полей: 9 полей</li>
<li>Покриття: 8 натуральних, 1 штучне</li>
<li>Розташування: Донецьк, Україна</li>
<li>Рік реконструції: 1999</li>
</ul>
<img src="https://alchetron.com/cdn/kirsha-training-centre-857dc2ef-7c77-4c36-991b-39879ae1d35-resize-750.jpeg" 
         alt="База Кірша"
         style="max-width:500px; border-radius:10px; display:block; margin:20px auto;">
<hr>
<h2>Другі частини України</h2>
    <h3>Арена Львів</h3>
    <p>Через війну на Донбассі, Шахтар був вимушений виіхати з Донецька та перестати грати на Донбасс Арені. Арена Львів це сучасній стадіон, який приймав матчі Євро-2012.</p>

    <h4>Місткість та характеристики:</h4>
    <ul>
     <li>Місткість: 34 725 глядачів</li>
     <li>Тип поля: натуральне трав’яне покриття</li>
     <li>Розташування: Львів, Україна</li>
     <li>Рік вдкриття: 2011</li>
     </ul>

     <img src="https://i0.wp.com/photo-lviv.in.ua/wp-content/uploads/2019/02/arena.jpg?fit=1280%2C849&ssl=1" 
         alt="Арена Львів"
         style="max-width:500px; border-radius:10px; display:block; margin:20px auto;">

         <img src="https://upload.wikimedia.org/wikipedia/ru/6/68/Lviv_Arena_Lviv_15.JPG" 
         alt="Трибуни Арени Львів"
         style="max-width:500px; border-radius:10px; display:block; margin:20px auto;">
         <br>
         <h3>Святошин</h3>
         <p>Через війну на Добассі, Шахтар тренеруеться на сучасній ьбазі Святошин. База знаходиться 20 кілометрів від Києва.</p>
         <h4>Характеристики:</h4>
         <ul>
         <li>Кількість полів: 2 поля</li>
         <li>Покриття: натуральне</li>
         <li>Розташування: Київ, Украіна</li>
         <li>Рік видкриття: 2014</li>
         </ul>

          <img src="https://fanday.net/img/news/UPL/Drugoe/svyatoshin.webp" 
         alt="Святошин"
         style="max-width:500px; border-radius:10px; display:block; margin:20px auto;">
  `
},
Історія: {
  title: `Історія ФК «Шахтар» Донецьк`,
  text: `
    <br>
    <img src="https://shakhtar.com/club/infrastructure/~/media/ce87bb064643434cb583b79b0192805d.ashx"
         style="max-width:100%; border-radius:10px; display:block; margin:20px auto;">
    <br>

    <p>ФК «Шахтар» Донецьк — один із найуспішніших та найвідоміших футбольних клубів України, який став символом професіоналізму, стабільності та європейського рівня українського футболу.</p>

    <h4>Заснування клубу</h4>
    <p>Футбольний клуб «Шахтар» було засновано у 1936 році. Протягом десятиліть команда поступово формувала власну ідентичність, представляючи індустріальний Донбас на футбольній мапі СРСР, а згодом — незалежної України.</p>

    <h4>Формування лідера українського футболу</h4>
    <p>Після здобуття Україною незалежності «Шахтар» швидко перетворився на одного з флагманів національного футболу. Клуб стабільно виступав у єврокубках та почав регулярно боротися за чемпіонство України.</p>

    <h4>Золотий період та європейський успіх</h4>
    <p>Найуспішнішим етапом в історії клубу стали 2000–2010-ті роки. У 2009 році «Шахтар» здобув свій головний міжнародний трофей — Кубок УЄФА, що стало історичним досягненням для українського футболу.</p>

    <h4>Домашня арена</h4>
    <p>«Донбас Арена» — легендарний домашній стадіон ФК «Шахтар», відкритий у 2009 році. Стадіон вважався одним із найсучасніших у Європі та став символом найуспішнішої епохи клубу.</p>
    <img class="history-picture"
         src="https://i0.wp.com/rsc-olympic.com/wp-content/uploads/2020/04/095d268606d.jpg?fit=1024%2C614&ssl=1"
         title="Донбас Арена">

    <h4>Виклики сучасності</h4>
    <p>Через війну в Україні клуб був змушений залишити Донецьк, однак «Шахтар» зберіг свою ідентичність, конкурентоспроможність та високий рівень організації.</p>

    <h4>Філософія та цінності</h4>
    <p>ФК «Шахтар» сповідує атакувальний стиль гри, активно розвиває молодих футболістів і поєднує український характер із сучасними європейськими підходами.</p>

    <h4>Майбутнє клубу</h4>
    <p>Сьогодні «Шахтар» Донецьк — це клуб, орієнтований на стабільні виступи в Україні та Європі, розвиток академії та збереження статусу одного з провідних футбольних брендів країни.</p>
  `,
},
Логотип: {
  title: `Logo`,
text: `<h3>Логотип клубу:</h3> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrpmqSbSk8ZpNxMQPFLFN38CchS0qcgK8swQ&s"      title="Логотип ФК Шахтар Донецьк"      style="max-width:300px; border-radius:10px; display:block; margin:20px auto;">`},
  Команда: { title: `Team` },
  Матчі: { 
    title: `Матчі`, 
    text:  `<p>Місце в УПЛ: 2 місце</p><p>Місце в Кубку України: виліт в 1/8 фіналу</p><p>Місце в Лізі Конференцій: 1/8 фіналу</p>`
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

        <tr class="highlight-shakhtar">
          <td>1</td>
          <td class="team">Шахтар Донецьк</td>
          <td>18</td>
          <td>12</td>
          <td>5</td>
          <td>1</td>
          <td>46</td>
          <td>12</td>
          <td>41</td>
        </tr>

         <tr>
          <td>2</td>
          <td class="team">ЛНЗ Черкаси</td>
          <td>18</td>
          <td>12</td>
          <td>2</td>
          <td>4</td>
          <td>23</td>
          <td>11</td>
          <td>38</td>
        </tr>

        <tr>
          <td>3</td>
          <td class="team">Полісся Житомир</td>
          <td>18</td>
          <td>11</td>
          <td>3</td>
          <td>4</td>
          <td>31</td>
          <td>12</td>
          <td>36</td>
        </tr>

         <tr>
          <td>4</td>
          <td class="team">Динамо Київ</td>
          <td>18</td>
          <td>9</td>
          <td>5</td>
          <td>4</td>
          <td>40</td>
          <td>21</td>
          <td>32</td>
        </tr>

         <tr>
          <td>5</td>
          <td class="team">Кривбас</td>
          <td>18</td>
          <td>8</td>
          <td>6</td>
          <td>4</td>
          <td>31</td>
          <td>25</td>
          <td>30</td>
        </tr>

           <tr>
          <td>6</td>
          <td class="team">Металіст 1925</td>
          <td>17</td>
          <td>7</td>
          <td>7</td>
          <td>3</td>
          <td>19</td>
          <td>12</td>
          <td>28</td>
        </tr>

     <tr>
          <td>7</td>
          <td class="team">Колос Ковалівка</td>
          <td>18</td>
          <td>7</td>
          <td>7</td>
          <td>4</td>
          <td>18</td>
          <td>15</td>
          <td>28</td>
        </tr>

        

           <tr>
          <td>8</td>
          <td class="team">Зоря Луганьск</td>
          <td>18</td>
          <td>6</td>
          <td>6</td>
          <td>6</td>
          <td>22</td>
          <td>23</td>
          <td>24</td>
        </tr>

  <tr>
          <td>9</td>
          <td class="team">Верес Рівне</td>
          <td>17</td>
          <td>5</td>
          <td>6</td>
          <td>6</td>
          <td>16</td>
          <td>20</td>
          <td>21</td>
        </tr>
        
<tr>
          <td>10</td>
          <td class="team">Оболонь Київ</td>
          <td>18</td>
          <td>6</td>
          <td>5</td>
          <td>7</td>
          <td>13</td>
          <td>30</td>
          <td>20</td>
        </tr>


        <tr>
          <td>11</td>
          <td class="team">Рух Львів</td>
          <td>18</td>
          <td>6</td>
          <td>1</td>
          <td>11</td>
          <td>15</td>
          <td>25</td>
          <td>19</td>
        </tr>

<tr>
          <td>12</td>
          <td class="team">Карпати Львів</td>
          <td>18</td>
          <td>4</td>
          <td>7</td>
          <td>7</td>
          <td>20</td>
          <td>25</td>
          <td>19</td>
        </tr>

         <tr>
          <td>13</td>
          <td class="team">Кудрівка</td>
          <td>18</td>
          <td>5</td>
          <td>4</td>
          <td>9</td>
          <td>23</td>
          <td>32</td>
          <td>19</td>
        </tr>

         <tr>
          <td>14</td>
          <td class="team">Епіцентр</td>
          <td>17</td>
          <td>4</td>
          <td>2</td>
          <td>12</td>
          <td>18</td>
          <td>33</td>
          <td>14</td>
        </tr>

         <tr>
          <td>15</td>
          <td class="team">Олександрія</td>
          <td>18</td>
          <td>2</td>
          <td>5</td>
          <td>11</td>
          <td>14</td>
          <td>32</td>
          <td>11</td>
        </tr>

         <tr>
          <td>16</td>
          <td class="team">Полтава</td>
          <td>16</td>
          <td>2</td>
          <td>3</td>
          <td>13</td>
          <td>16</td>
          <td>43</td>
          <td>9</td>
        </tr>

      </tbody>
    </table>
    </div>
  `
},
  Квитки: {
    title: `Купити квітки`,
    text: `Квитки на матч можно купити <a href="https://tickets.shakhtar.com/" target="_blank">тут</a>.<br><img src="https://shakhtar.com/-/media/fcsd/news/2025/august/14_news/14_shakhtar_panathinaikos/gal/dsc_8722.jpg?1767811995031">`
  },
  Магазин: {
    title: `Магазин`,
    text: `Магазин Шахтаря можно знайти <a href="https://shop.shakhtar.com/" target="_blank">тут</a>.<img src="https://shakhtar.com/-/media/fcsd/news/2025/november/2_news/2_shakhtar_dynamo/gal/mls_7035.jpg?1772202146137">`
  },
  Телеграм: {
    title: `Телеграм Канал`,
    text: `<p>Підпісуйтесь на наш <a href="https://t.me/FanShakhtarDonetsk" target="_blank">Телеграм канал</a> заради більше новин.</p>
    <img src="https://shakhtar.com/-/media/fcsd/news/2025/october/29_news/29_uc_dynamo_shakhtar/gal/mls_2891.jpg?1772202038543" >`
  },
  Менеджмент: {
    title: "Менеджмент",
  },
  Результати: {
    title: "Результати",
  },
  Трофеї: {
    title: "Трофеї",
    text: '<img src="https://sport.24tv.ua/resources/photos/news/202405/2559042.jpg?v=1716199061000&w=1300&h=730&fit=cover&output=webp&q=90"><h4>Кубок УЕФА 2009 року</h4><br><img src="https://img.tsn.ua/cached/148/tsn-0adb2b455a252fbeb54cd6e76bc767e2/thumbs/1200x630/98/a2/2c54b6eb1b2c4cf808ee0c083479a298.jpeg"><h4>15 разовий чемпіон УПЛ</h4><br><img src="https://uaf.ua/photos/kubok-ukraini/final-2025/%D0%BC%D0%B0%D1%82%D1%87/%D1%88%D0%B0%D1%85%D1%82%D0%B0%D1%80-%D0%BA%D1%83%D0%B1%D0%BE%D0%BA-2025-1-min.JPG"><h4>15 разовий чемпіон Кубка України</h4><br><img src="https://static.ua-football.com/img/upload/20/294554.jpeg"><h4>9 разовий володар Суперкубка України</h4>',
  }

  
};

const menuGroups = {
  'Головна': [],
  'Клуб': ['Історія', 'Інфраструктура', 'Логотип', 'Менеджмент', 'Трофеї'],
  'Матчі': ['Таблиця', 'Результати'],
  'Магазин': ['Квитки'],
  'Команда': ['Тренери', 'Легенди'],
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
      <p><strong>🕒 Час (УКР):</strong> ${match.time}</p>
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
