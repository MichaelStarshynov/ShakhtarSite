// Заголовок сайта
const h1 = document.createElement('h1');
h1.textContent = "ФК Шахтар Донецьк";
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
    title: 'Втаємо вас на сайті ФК Шахтар Донецьк',
    text: ` <div style="text-align:center;">
      <h3 style="color:#e65100;">🔥Шахтар - це більше ніж футбол</h3>
      <p style="font-size:18px;">Це пристрасть, боротьба, перемоги та емоції. Ми - Шахтар, Ми - Сила!</p>
      <p><strong>Приєднуйтесь до нас, слідкуйте за матчамі, купуйте квитки та підтримуйте команду!</strong></p>
      <button onclick="showPage('Квитки')" class="shop-btn">🎟️ Купити квитки на матч!</button>
      <button onclick="showPage('Новини')" class="shop-btn">📰 Читайте новини</button>
      <button onclick="showPage('Команда')" class="shop-btn">👥 Команда</button>
      <img src="https://shakhtar.com/-/media/fcsd/club/philosophy-and-crest/puma_kit_1641820242.jpg?sc_lang=en" style="max-width:100%; border-radius:10px; margin:20px 0;">
    </div>`
  },
  Новини: { title: `Новини Шахтаря` },
  Клуб: { 
  title: `Клуб - ФК Шахтар`,
  text: `
  <h3>ФК «Шахтар» Донецьк — це більше, ніж футбольний клуб. Це символ українського характеру, стійкості, розвитку молоді та сучасного європейського футболу.</h3>
  <p>Заснований у 1936 році, «Шахтар» Донецьк став найуспішнішим клубом України XXI століття. Клуб відомий своєю сильною академією, поєднанням українських і бразильських талантів та прогресивною філософією гри.</p>
  
  <h4>🏆 Досягнення:</h4>
  <ul>
    <li>15× Чемпіон України</li>
    <li>15× Володар Кубка України</li>
    <li>9× Володар Суперкубка України</li>
    <li>Володар Кубка УЄФА (2009)</li>
  </ul>

  <h4>🏟️ Домашній стадіон:</h4>
  <p>«Донбас Арена», відкрита у 2009 році, є одним із найсучасніших стадіонів Східної Європи. Вміщуючи понад 52 000 глядачів, вона символізує амбіції, успіх і європейську ідентичність «Шахтаря». Зараз Шахтар проводить домашні матчі на Арена Львів.</p>
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Donetsk_Donbass_Arena_40.jpg/1200px-Donetsk_Donbass_Arena_40.jpg"
       alt="Домашній стадіон ФК Шахтар Донецьк — Донбас Арена"
       style="max-width:300px; border-radius:10px;"
       title="Донбас Арена">

  <h4>Рекорди та легенди:</h4>
  <ul>
    <li>Найбільше голів - Луїз Адріано - 128 голів</li>
    <li>Найбільше матчів: Даріо Срна — капітан, лідер і символ клубу</li>
    <li>Легендарний тренер: Мірча Луческу — привів «Шахтар» до європейського тріумфу у 2009 році</li>
    <li>Найдорожчий трансфер: Мудрик → ФК Челсі (€100 млн)</li>
  </ul>

  <h3>Логотип клубу:</h3>
  <img src="https://upload.wikimedia.org/wikipedia/ru/thumb/a/a2/FC_Shakhtar_Donetsk_Logo.svg/1297px-FC_Shakhtar_Donetsk_Logo.svg.png"
       title="Логотип ФК Шахтар Донецьк"
       style="max-width:300px; border-radius:10px;">
`
},

  Історія: {
  title: `Історія ФК «Шахтар» Донецьк`,
  text: `
    <br>
    <img src="https://futkrichalki.ru/wp-content/uploads/2011/06/og-default.jpg">
    <br>

    <p>ФК «Шахтар» Донецьк був заснований у 1936 році під назвою «Стахановець». Клуб швидко став символом індустріального Донбасу та уособленням працьовитості, характеру й командного духу. З роками «Шахтар» перетворився на один із найвідоміших і найуспішніших клубів Східної Європи.</p>

    <h4>Початок і становлення</h4>
    <p>Перші десятиліття існування клубу були періодом формування ідентичності. «Шахтар» регулярно виступав у чемпіонаті_toggle команд, здобуваючи репутацію міцного та непоступливого суперника, особливо у кубкових турнірах.</p>

    <h4>Кубкові успіхи ХХ століття</h4>
    <p>У радянський період «Шахтар» чотири рази вигравав Кубок СРСР (1961, 1962, 1980, 1983). Саме тоді клуб отримав прізвисько «кубкова команда», відоме далеко за межами України.</p>
    <img class="history-picture" src="https://pictures.ua.tribuna.com/image/4b639bd9-2716-44df-9a41-a694983d4639?width=1920&quality=70" title="Шахтар — володар Кубка СРСР">

    <h4>Незалежна Україна та нова ера</h4>
    <p>Після здобуття Україною незалежності «Шахтар» став одним із лідерів національного футболу. У 2000-х роках клуб зробив стратегічний крок уперед, інвестуючи в інфраструктуру, селекцію та сучасну футбольну модель.</p>

    <h4>Ера Мірчі Луческу</h4>
    <p>Найуспішніший період в історії клубу пов’язаний з тренером Мірчею Луческу. Під його керівництвом «Шахтар» домінував в Україні та здобув історичну перемогу в Кубку УЄФА у 2009 році — перший європейський трофей в історії українського клубного футболу.</p>
    <img class="history-picture" src="https://fanday.net/img/news/Drugoe3/shakhtaruefa-52r.webp" title="Перемога Шахтаря в Кубку УЄФА 2009">

    <h4>Донбас Арена</h4>
    <p>У 2009 році було відкрито «Донбас Арену» — ультрасучасний стадіон, який став символом нового рівня клубу. Арена швидко здобула визнання в Європі та приймала матчі Євро-2012.</p>
    <img class="history-picture" src="https://fanday.net/img/news/Drugoe2/donbassarena.webp" title="Донбас Арена">

    <h4>Війна та випробування</h4>
    <p>З 2014 року «Шахтар» був змушений покинути Донецьк через війну. Попри втрату дому, клуб не зламався: він продовжив виступи на високому рівні, зберіг статус гранда українського футболу та став символом незламності.</p>

    <h4>Академія та сучасність</h4>
    <p>«Шахтар» відомий своєю сильною академією та вмінням розвивати таланти. Клуб поєднує українське ядро з технічними легіонерами, зберігаючи атакувальний, сучасний стиль гри.</p>

    <h4>Спадщина та майбутнє</h4>
    <p>Сьогодні ФК «Шахтар» Донецьк — це клуб із багатою історією, європейськими амбіціями та чітким баченням майбутнього. Попри всі труднощі, «Шахтар» дивиться вперед і залишається гордістю українського футболу.</p>
  `,
},



  Команда: { title: `Team` },
  Матчі: { 
    title: `Матчі`, 
    text:  `<p>Місце в УПЛ: 1 місце</p><p>Місце в Лізі Конференцій: 2 місце</p><p>Місце в Кубку України: виліт в 1/8</p>`

  },
  Квитки: {
    title: `Купити квітки`,
    text: `Квитки на матч можно купити <a href="https://tickets.shakhtar.com/" target="_blank">тут</a>.<br><img src="https://shakhtar.com/-/media/fcsd/news/2025/october/23_news/23_shakhtar_legia/gal/mls_4061.jpg?1765623518331">`
  },
  Магазин: {
    title: `Магазин`,
    text: `Магазин Шахтаря можно знайти <a href="https://shop.shakhtar.com/" target="_blank">тут</a>.<img src="https://shakhtar.com/-/media/fcsd/news/2025/december/11_news/11_hamrunspartans_shakhtar/gal/mls_1328.jpg?1765623617258">`
  },
  Телеграм: {
    title: `Телеграм Канал`,
    text: `<p>Підпісуйтесь на наш <a href="https://t.me/FanShakhtarDonetsk" target="_blank">Телеграм канал</a> заради більше новин.</p>
    <img src="https://shakhtar.com/-/media/fcsd/news/2025/december/6_news/6_kolos_shakhtar/gal/mls_4225.jpg?1765623759827" >`
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
    <h4>Statistics</h4>
    <p>⚽ <strong>Голи:</strong> ${player.goals || "0"}</p>
    <p>👟 <strong>Передачі:</strong> ${player.assist || "0"}</p>
    <p>🏟️ <strong>Матчі:</strong> ${player.matches}</p>
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
    'Воротарі': ['GK', 'Голкіпер'],
    'Захістники': ['DF', 'Захістник', 'Лівій Захістник', 'Правий Захістник'],
    'Півзахістники': ['MF', 'Півзахістник'],
    'Нападники': ['FW', 'Нападник', 'Лівій Вінгер', 'Правий Вінгер']
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
          <p>Вік: ${player.age}</p>
          <p>Національність: ${player.nationality}</p>
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
        <pНаціональність: ${coach.nationality}</p>
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
      <p><strong>🕒 Час:</strong> ${match.time}</p>
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

  // Сортируем новости по дате (от новых к старым)
  const sortedNews = [...window.news].sort((a, b) => new Date(b.date) - new Date(a.date));

  sortedNews.forEach(item => {
    const preview = document.createElement('div');
    preview.className = 'news-card';
    preview.onclick = () => showFullNews(item.id);

    const firstSentence = item.text.split('.')[0] + '.';

    preview.innerHTML = `
      <h3>${item.title}</h3>
      <p style="color: white;">${item.datum}</p>
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
  backBtn.textContent = '← Back';
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
    img.style.margin = '20px auto'; // <-- тут auto по бокам
  img.style.display = 'block';
    content.appendChild(img);
  }

  const fullText = document.createElement('div');
  fullText.innerHTML = item.text;
  content.appendChild(fullText);
}



// Запуск - показываем главную страницу
showPage('Головна');
