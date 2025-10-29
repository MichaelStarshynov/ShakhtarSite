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
         style="max-width:300px; border-radius:10px;"
         title="Донбасс Арена під час Євро 2012">

    <h4>Рекорди:</h4>
    <ul>
      <li>Найкращий бомбардир: Луїс Адріано — 128 голів</li>
      <li>Найбільше матчів за клуб: Даріо Срна — 536 матчів</li>
      <li>Легендарний тренер: Мірча Луческу (виграв Кубок УЄФА та 22 трофеї з клубом)</li>
      <li>Найдорожчій трансфер: Михайло Мудрик → Челсі за €70 млн + бонуси</li>
    </ul>
    <h3>Логотип:</h3>
    <img src="https://upload.wikimedia.org/wikipedia/ru/thumb/a/a2/FC_Shakhtar_Donetsk_Logo.svg/1297px-FC_Shakhtar_Donetsk_Logo.svg.png" title="Логотип Шахтаря" style="max-width:300px; border-radius:10px;">
  `
},
  Історія: {
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
     <img src="https://donjetsk.com/wp-content/uploads/2019/01/donbass-arena-gorbaseva.jpg" title="Донбасс Арена у 2012 році">

     <h4>Сучасна епоха</h4>
     <p>Попри всі труднощі, «Шахтар» залишається провідною силою українського футболу. Клуб продовжує здобувати чемпіонські титули, виховувати нові покоління зірок та виступати на європейській арені. Саме у «Шахтарі» розкрилися таланти Сергія Реброва, Жадсона, Вілліана, Фернандіньйо, Михайла Мудрика та Георгія Судакова.</p>
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
    text:  `<p>Місце в УПЛ: 1 місце</p><p>Місце в Лізі Конференцій: 17</p><p>Місце в кубку України: виліт у 1/8</p>`

  },
  Квитки: {
    title: `Купити квитки`,
    text: `Квитки можно купити <a href="https://tickets.shakhtar.com/" target="_blank">тут</a>.<br><img src="https://scontent.frtm1-1.fna.fbcdn.net/v/t39.30808-6/486299348_1204569017692845_2753996765057573885_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Xn-IOSVwtGIQ7kNvwHkalJG&_nc_oc=Adkrk1PInLHsdlf5tRLcFP0NZ6TsF1cZbwn6tmEpOkra0mcftOyIXYAoCvWSLCR0do8&_nc_zt=23&_nc_ht=scontent.frtm1-1.fna&_nc_gid=uqNqC-enYaQ3KT1y70rSqw&oh=00_AfdYAuRRnKzZYuiU9pIFpaObkYD1sRjIfouSMKYZc8v0Sw&oe=69011E4B" style="max-width:300px;">`
  },
  Магазин: {
    title: `Купити атрибутику`,
    text: `Атрибутику Шахтаря можно купити <a href="https://shop.shakhtar.com/ru/" target="_blank">тут</a>.<img src="https://i.postimg.cc/rytHhTcP/f86a5700-bfe6-4eee-8b64-98c186d8d6c0.jpg" style="max-width:300px;">`
  },
  Телеграм: {
    title: `Телеграм-канал`,
    text: `<p>Підпісуйтесь на наш <a href="https://t.me/FanShakhtarDonetsk" target="_blank">телеграм-канал</a> для більше новин.</p>
    <img src="https://img.tsn.ua/cached/458/tsn-0b4bc102/thumbs/1200x630/5d/f3/47de631671b4d8a7daafaac46b2ef35d.jpg" >`
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
  backBtn.textContent = '← Назад до складу';
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
    <p><strong>Позиція:</strong> ${player.position}</p>
    <p><strong>Вік:</strong> ${player.age}</p>
    <p><strong>Національність:</strong> ${player.nationality}</p>
    <h3>Біографія та кар'єра</h3>
    <p>${player.description}</p>
  `;
  content.appendChild(info);
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
      <p><strong>🕒 Час (UA):</strong> ${match.time}</p>
      <p><strong>🎯 Рахунок:</strong> ${match.score || "Матч ще не відбувся"}</p>
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
      <p>${item.datum}</p>
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
