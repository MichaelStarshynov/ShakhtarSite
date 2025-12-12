// Заголовок сайта
const h1 = document.createElement('h1');
h1.textContent = "AZ Alkmaar";
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
  Home: {
    title: 'Welcome at the site of AZ Alkmaar',
    text: ` <div style="text-align:center;">
      <h3 style="color:#e65100;">🔥AZ - its more than football!</h3>
      <p style="font-size:18px;">Its passion, fight, wins and emotions. we are AZ, we are power!</p>
      <p><strong>Join us, follow the matches, buy tickets and support team!</strong></p>
      <button onclick="showPage('Tickets')" class="shop-btn">🎟️ Buy tickets for a match!</button>
      <button onclick="showPage('News')" class="shop-btn">📰 Read news</button>
      <button onclick="showPage('Team')" class="shop-btn">👥 Team</button>
      <img src="https://znaki.fm/static/content/thumbs/1600x900/4/3f/bpkw53---c16x9x50px50p--aadb263f6cc56a1ad1cde7bb1e5483f4.jpg" style="max-width:100%; border-radius:10px; margin:20px 0;">
    </div>`
  },
  News: { title: `News of AZ` },
  Club: { 
  title: `Club - AZ Alkmaar`,
  text: `
    <h3>AZ Alkmaar is more than just a club. It represents Noord-Holland, passion, youth development, and a progressive football philosophy.</h3>
    <p>AZ Alkmaar was founded in 1967 and has grown into one of the strongest and most respected clubs in the Netherlands, known for developing young talent and challenging the traditional top teams.</p>
    
    <h4>🏆 Achievements:</h4>
    <ul>
      <li>2x Eredivisie Champions</li>
      <li>5x KNVB Cup Winners</li>
      <li>2x Johan Cruyff Shield</li>
      <li>UEFA Europa League semifinalists (2005, 2023)</li>
    </ul>

    <h4>🏟️ Home Stadium:</h4>
    <p>AFAS Stadium is the home ground of AZ Alkmaar. It was opened in 2006 and has a capacity of over 19,000 spectators. Known for its modern design and great atmosphere, it stands as a symbol of AZ’s ambitions.</p>
    <img src="https://www.az.nl/media/cbnj140h/stadion.jpeg?rxy=0.492,0.6124578919073548&width=2560&height=1096&v=1da73a39dbe2a40" 
         alt="AZ Alkmaar home stadium: AFAS Stadium" 
         style="max-width:300px; border-radius:10px;"
         title="AFAS Stadium in Alkmaar">

    <h4>Records and Legends:</h4>
    <ul>
      <li>Top Scorer: Dirk Scheringa — Club legend and supporter of development</li>
      <li>Most Appearances: Ron Vlaar — Defensive icon and fan favorite</li>
      <li>Legendary Manager: Louis van Gaal — Led AZ to the Eredivisie title in 2009</li>
      <li>Most Expensive Transfer: Myron Boadu → AS Monaco for €17 million</li>
    </ul>

    <h3>Logo:</h3>
    <img src="https://www.psv.nl/upload_mm/f/0/9/107815_fullimage_logo-az-240x240.png" 
         title="AZ Alkmaar Logo" 
         style="max-width:300px; border-radius:10px;">
  `
},

  History: {
  title: `History of AZ Alkmaar`,
  text: `<br><img src="https://www.az.nl/media/pnwnp21c/ep2025102345140.jpg?width=2560&height=1440&v=1dc5223eb0e7b00"><br>
     <p>AZ Alkmaar, founded in 1967 through the merger of Alkmaar '54 and FC Zaanstreek, has become one of the most respected and forward-thinking clubs in Dutch football. The club is known for its unique philosophy: working with talent, creativity, and ambition both on and off the pitch.</p>
     
     <h4>Origins and Early Development</h4>
     <p>The club's foundational years set the tone for a bold and independent spirit. AZ quickly gained a reputation as a fierce competitor, and by the late 1970s and early 1980s, the club had established itself among the elite of Dutch football.</p>
     
     <h4>Golden Era of the 1980s</h4>
     <p>AZ's first major success came in 1981, when the club won its first Eredivisie title under coach George Kessler. That same season, they reached the UEFA Cup final, narrowly losing to Ipswich Town. This period marked the club’s arrival on the European stage.</p>
     <img class="history-picture" src="https://az.nl/media/yfpl1d32/caad6d8d04896ee3f57e04337f998a31-landskampioen8081.jpg" alt="AZ Alkmaar in the 1980s" title="AZ wins its first Eredivisie title in 1981">
     
     <h4>New Leadership and Modern Growth</h4>
     <p>A new chapter began in the late 1990s with the leadership of Dirk Scheringa, who invested heavily in the club's infrastructure and ambitions. Talented players and innovative coaching helped AZ rise again in Dutch football.</p>
     
     <h4>Louis van Gaal Era</h4>
     <p>The appointment of Louis van Gaal in 2005 brought historic success. AZ played modern, attacking football, culminating in winning the Eredivisie title in 2009. This achievement broke the dominance of the traditional top three and remains a cornerstone of the club’s legacy.</p>
     <img class="history-picture" src="https://i.ytimg.com/vi/ys8fnGPtwos/maxresdefault.jpg" alt="AZ becomes Eredivisie champion in 2009" title="Eredivisie Champions 2009">
     
     <h4>AFAS Stadium and the Future</h4>
     <p>Opened in 2006, AFAS Stadium is a modern, fan-friendly arena that symbolizes AZ’s long-term vision. Despite facing challenges, including a roof collapse in 2019, the club demonstrated resilience and continued growing stronger.</p>
     <img class="history-picture" src="https://www.santosfootballplanet.nl/uploads/AFAS1ANP-434802676.jpg?v=1637841768" title="AFAS Stadium">

     <h4>Recent Success and Youth Development</h4>
     <p>AZ remains one of the best clubs in the Netherlands for producing young talent. Players like Myron Boadu, Teun Koopmeiners, and Owen Wijndal are just a few examples of stars who emerged from AZ’s academy and took the next step in their careers internationally.</p>
     <img class="history-picture" src="https://pbs.twimg.com/media/G2TEK_PasAAnia5?format=jpg&name=large" alt="Teun Koopmeiners, product of AZ academy" title="Teun Koopmeiners at AZ">

     <h4>Identity and Culture</h4>
     <p>AZ stands for innovation, hard work, and community. The club has always stood out for its professionalism, scouting, and disciplined football. The supporters are loyal, passionate, and deeply connected to the city and region.</p>
     
     <h4>Legacy and Vision</h4>
     <p>With two Eredivisie titles, numerous European adventures, and a reputation for developing talent, AZ continues to look to the future. The club invests in youth academies, tactical innovation, and sustainable growth to remain a strong force in Dutch football and beyond. AZ Alkmaar’s history is one of ambition, identity, and the courage to challenge the status quo—and that journey is far from over.</p>
  `,
},


  Team: { title: `Team` },
  Matches: { 
    title: `Matches`, 
    text:  `<p>Place in Eredivisie: 5 place</p><p>Place in Conference League: 13 place</p><p>Place in cup: 1/8</p>`

  },
  Tickets: {
    title: `Buying tickets`,
    text: `You can buy tickets <a href="https://www.az.nl/wedstrijden/tickets" target="_blank">here</a>.<br><img src="https://az.nl/media/5folh2nk/240413184625_ep15030.jpg?rxy=0.512,0.5285285285285285&width=2560&height=1096&v=1da8f11fd6cc170">`
  },
  Shop: {
    title: `Shop`,
    text: `Shop of AZ you can find <a href="https://www.az.nl/webshop" target="_blank">here</a>.<img src="https://www.inalkmaar.nl/storage/uploads/Locaties/AZ/AZ(4).jfif?v=1742904043900">`
  },
  Telegram: {
    title: `Telegram Channel`,
    text: `<p>Follow our <a href="https://t.me/AlkmaarZaanstreek" target="_blank">Telegram channel</a> for more news.</p>
    <img src="https://storage.pubble.nl/648e3015/content/2022/8/d3939f3d-01cc-4e42-9014-26afda304274_thumb1920.jpg" >`
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

  if (pageKey === 'Team') {
    showTeam();
    return;
  }
  if (pageKey === 'News') {
    showNews();
    return;
  }
  if (pageKey === 'Matches') {
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
  backBtn.textContent = '← Back to the team';
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
    <p><strong>Number:</strong> ${player.number}</p>
    <p><strong>Position:</strong> ${player.position}</p>
    <p><strong>Age:</strong> ${player.age}</p>
    <p><strong>Nationality:</strong> ${player.nationality}</p>
    <h4>Statistics</h4>
    <p>⚽ <strong>Goals:</strong> ${player.goals || "0"}</p>
    <p>👟 <strong>Assists:</strong> ${player.assist || "0"}</p>
    <p>🏟️ <strong>Matches:</strong> ${player.matches}</p>
  `;
  content.appendChild(info);
}


// Показ команды с разделами по позициям + тренеры
function showTeam() {
  content.innerHTML = ''; // очищаем перед выводом

  const title = document.createElement('h2');
  title.textContent = 'Team';
  content.appendChild(title);

  // Категории игроков
  const groups = {
    'Goalkeepers': ['GK', 'Goalkeeper'],
    'Defender': ['DF', 'Defender'],
    'Midfielders': ['MF', 'Midfielder'],
    'Forwards': ['FW', 'Forward']
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
          <p>Age: ${player.age}</p>
          <p>Nationality: ${player.nationality}</p>
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
    coachesTitle.textContent = 'Coaches';
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
        <p>Age: ${coach.age}</p>
        <p>Nationality: ${coach.nationality}</p>
      `;

      coachesList.appendChild(card);
    });

    content.appendChild(coachesList);
  }
}

 
function showMatches() {
  content.innerHTML = '<h2>Matches</h2>';

  // берем текст из pages
  const info = document.createElement('div');
  info.innerHTML = pages['Matches'].text;
  content.appendChild(info);

  const grid = document.createElement('div');
  grid.className = 'matches-grid';

  if (!window.matches || window.matches.length === 0) {
    grid.innerHTML = '<p>There are no matches</p>';
    content.appendChild(grid);
    return;
  }

  window.matches.forEach(match => {
    const card = document.createElement('div');
    card.className = 'match-card';

    card.innerHTML = `
      <p><strong>📅 Datum:</strong> ${match.date}</p>
      <p><strong>⚔️ Opponent:</strong> ${match.opponent}</p>
      <p><strong>🕒 Time (NL):</strong> ${match.time}</p>
      <p><strong>🎯 Score:</strong> ${match.score || "The match isn't played"}</p>
      <p><strong>📍 Place</strong> ${match.place}</p>
      <p><strong>🏆 Competition:</strong> ${match.competition}</p>
    `;

    grid.appendChild(card);
  });

  content.appendChild(grid);
}

// Новости
function showNews() {
  content.innerHTML = '<h2>News</h2>';

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
      <p style="color: black;">${item.datum}</p>
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
showPage('Home');
