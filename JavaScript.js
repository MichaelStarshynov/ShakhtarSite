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
    title: 'Вітаю вас на сайті Шахтар Донецьк',
    text: ` <div style="text-align:center;">
      <h3 style="color:#e65100;">🔥Шахтар - це більше ніж футбол!</h3>
      <p style="font-size:18px;">Це страсть, боротьба, перемоги та эмоції. Ми — Шахтар, ми — сіла!</p>
      <p><strong>Приєднуйтесь до нас, слідкуйте за матчамі, купуйте квитки та підтрімуйте команду!</strong></p>
      <button onclick="showPage('Квитки')" class="shop-btn">🎟️ Купити квитки на матч!</button>
      <button onclick="showPage('Новини')" class="shop-btn">📰 Читати новини</button>
      <button onclick="showPage('Команда')" class="shop-btn">👥 Команда</button>
      <img src="https://shakhtar.com/-/media/fcsd/club/philosophy-and-crest/puma_kit_1641820242.jpg?sc_lang=uk-ua" style="max-width:100%; border-radius:10px; margin:20px 0;">
    </div>`
  },
  Новини: { title: `Новини нашого клубу` },
  Клуб: { 
  title: `Клуб - Шахтар Донецьк`,
  text: `
    <h3>Шахтар — це більше, ніж клуб. Це символ Донбасу, історія, традиції та перемоги.</h3>
    <p>Футбольний клуб «Шахтар» заснований у 1936 році. Це один з найуспішніших клубів України та відомий у Європі.</p>
    
    <h4>🏆 Досягнення:</h4>
    <ul>
      <li>15x Чемпіон України</li>
      <li>15x Володар Кубка України</li>
      <li>9x Володар Суперкубка України</li>
      <li>1x Володар Кубка УЄФА (2009)</li>
    </ul>

    <h4>🏟️ Домашній стадіон:</h4>
    <p>«Донбас Арена» — один з найсучасніших стадіонів Європи, відкритий у 2009 році. Місткість: понад 52 000 глядачів. 
    Через війну клуб проводить домашні матчі у різних містах України. Зараз Шахтар проводить домашні матчі на Арена Львів.</p>
    <img src="https://shakhtar.com/en/club/infrastructure/donbass-arena/~/media/cfd6d2a9ff114fc19d3c91b787b19f35.ashx" 
         alt="Домашній стадіон Шахтаря: Донбас Арена" 
         style="max-width:300px; border-radius:10px;">

    <h4>Рекорди:</h4>
    <ul>
      <li>Найкращий бомбардир: Луїс Адріано — 128 голів</li>
      <li>Найбільше матчів за клуб: Даріо Срна — 536 матчів</li>
      <li>Легендарний тренер: Мірча Луческу (виграв Кубок УЄФА та 22 трофеї з клубом)</li>
      <li>Найдорожчій трансфер: Михайло Мудрик → Челсі за €70 млн + бонуси</li>
    </ul>
  `
},
  Істория: {
  title: `Історія футбольного клубу «Шахтар»`,
  text: `<br><img src="https://shakhtar.com/assets/images/backgrounds/og-default.jpg"><br>
     <p>Футбольний клуб «Шахтар» Донецьк був заснований у 1936 році під назвою «Стахановець». Його історія — це шлях від робітничої команди Донбасу до одного з найсильніших клубів Східної Європи. Протягом десятиліть «Шахтар» став символом сили, характеру та незламності українського футболу.</p>
     
     <h4>Заснування клубу</h4>
     <p>Перший матч команда зіграла 24 травня 1936 року проти «Динамо» Одеса. Назва «Шахтар» була обрана невипадково: клуб завжди символізував гірників Донбасу та їхню віддану працю. У радянський період клуб поступово утверджувався, стаючи серйозним конкурентом провідним колективам СРСР.</p>
     
     <h4>Перші трофеї</h4>
     <p>У 1961 році «Шахтар» вперше завоював Кубок СРСР, обігравши у фіналі московське «Торпедо». Надалі команда ще неодноразово підтверджувала свій рівень, а 1980-ті стали періодом стабільності та розвитку клубу.</p>
     <img src="https://footclub.com.ua/media/illustration/339054904/_00.jpg" alt="Шахтар – володар Кубка СРСР 1961" title="Шахтар – Кубок СРСР 1961">
     
     <h4>Незалежна Україна</h4>
     <p>З проголошенням незалежності України «Шахтар» став головним суперником київського «Динамо». У 1996 році президентом клубу став Рінат Ахметов, і з цього моменту почалася нова епоха. Були збудовані сучасні бази, залучені відомі тренери та легіонери.</p>
     
     <h4>Ера Мірчі Луческу</h4>
     <p>Справжній прорив відбувся з приходом румунського тренера Мірчі Луческу у 2004 році. Під його керівництвом «Шахтар» виграв понад 20 трофеїв, а головним тріумфом став Кубок УЄФА 2009 року. У фіналі, що відбувся у Стамбулі, «Шахтар» переміг німецький «Вердер» 2:1 завдяки голам Луїса Адріано та Жадсона.</p>
     <img class="history-picture" src="https://sportnews.24tv.ua/resources/photos/news/202505/2826775.jpg?v=1747741194000&w=1200&h=675" alt="Перемога Шахтаря в Кубку УЄФА 2009" title="Кубок УЄФА 2009">
     
     <h4>Донбас Арена та війна</h4>
     <p>У 2009 році відкрилася «Донбас Арена» — один із найкращих стадіонів Європи з місткістю понад 52 000 глядачів. Проте через війну на сході України клуб був змушений залишити Донецьк. Відтоді «Шахтар» проводить свої домашні матчі у Львові, Харкові, Києві та інших містах, зберігаючи підтримку по всій Україні.</p>
     
     <h4>Сучасна епоха</h4>
     <p>Попри всі труднощі, «Шахтар» залишається провідною силою українського футболу. Клуб продовжує здобувати чемпіонські титули, виховувати нові покоління зірок та виступати на європейській арені. Саме у «Шахтарі» розкрилися таланти Андрія Шевченка, Жадсона, Вілліана, Фернандіньйо, Михайла Мудрика та Георгія Судакова.</p>
     <img src="https://shakhtar.com/-/media/fcsd/news/2025/september/28_news/28_rukh_shakhtar/1245__.jpg?h=799&iar=0&w=1245" alt="Сучасний Шахтар" title="Сучасний Шахтар">
     
     <h4>Символ і традиції</h4>
     <p>«Шахтар» — це не лише футбол, а й частина української культури. Клуб символізує працелюбність, силу і віру в перемогу. Його фанати — одні з найвідданіших у Європі, підтримують команду незалежно від обставин. Помаранчево-чорні кольори стали символом незламності та боротьби.</p>
     
     <h4>Насліддя та майбутнє</h4>
     <p>Сьогодні «Шахтар» має у своєму активі 15 чемпіонських титулів України, десятки кубків та Суперкубків. Але головне — це віра в майбутнє: клуб продовжує будувати нові академії, розвивати молодь і мріє повернутися додому — на «Донбас Арену» в мирний Донецьк. Історія «Шахтаря» — це історія боротьби, сили та любові до футболу, яка триває і сьогодні.</p>
  `,
},

  Команда: { title: `Команда` },
  Матчі: { 
    title: `Матчі`, 
    text:  `<p>Место в УПЛ: 1 місце</p><p>Місце в Лізі Конференцій: 11</p><p>Місце в кубку України: 1/8</p>`

  },
  Квитки: {
    title: `Купити квитки`,
    text: `Квитки можно купити <a href="https://tickets.shakhtar.com/" target="_blank">тут</a>.<br><img src="https://fanday.net/img/news/Drugoe2/thumbs/donbassarena.jpg" style="max-width:300px;">`
  },
  Магазин: {
    title: `Купити атрибутику`,
    text: `Атрибутику Шахтаря можно купити <a href="https://shop.shakhtar.com/ru/" target="_blank">тут</a>.<img src="https://i.postimg.cc/1X84sGyr/48872f43-1d91-4349-bb2e-ac96f6fb2697.jpg" style="max-width:300px;">`
  },
  Телеграм: {
    title: `Телеграм-канал`,
    text: `<p>Підпісуйтесь на наш <a href="https://t.me/FanShakhtarDonetsk" target="_blank">телеграм-канал</a> для більше новин.</p>
    <img src="https://www.ostro.org/upload/news/2025/07/25/mls-8749_1200x630.jpg?v=1753419905" >`
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

// Показ команды с разделами по позициям + тренеры
function showTeam() {
  content.innerHTML = ''; // очищаем перед выводом

  const title = document.createElement('h2');
  title.textContent = 'Склад команди';
  content.appendChild(title);

  // Категории игроков
  const groups = {
    'Воротарі': ['GK', 'Голкіпер'],
    'Захістникі': ['DF', 'Захістник'],
    'Півзахістники': ['MF', 'Півзахістник'],
    'Нападники': ['FW', 'Нападник']
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

        groupList.appendChild(card);
      });

    if (groupList.children.length > 0) {
      content.appendChild(groupList);
    }
  }

  // ---- Тренеры ----
  if (window.coaches && window.coaches.length > 0) {
    const coachesTitle = document.createElement('h3');
    coachesTitle.textContent = 'Тренерскій штаб';
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
      <p><strong>📍 Місце</strong> ${match.place}</p>
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
