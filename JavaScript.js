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
    title: 'Вітаємо вас на сайті ФК Шахтар Донецьк',
    text: ` <div style="text-align:center;">
      <h3 style="color:#e65100;">🔥Шахтар - це більше ніж футбол</h3>
      <p style="font-size:18px;">Це пристрасть, боротьба, перемоги та емоції. Ми - Шахтар, Ми - Сила!</p>
      <p><strong>Приєднуйтесь до нас, слідкуйте за матчамі, купуйте квитки та підтримуйте команду!</strong></p>
      <p>❗ Цей сайт не є офіційним сайтом Шахтаря.</p>
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
    <li>Найбільше голів: Луїз Адріано - 128 голів</li>
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
    text:  `<p>Місце в УПЛ: 2 місце</p><p>Місце в Лізі Конференцій: 1/8 фіналу</p><p>Місце в Кубку України: виліт в 1/8</p>`

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

        <tr class="highlight-shakhtar">
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

        <tr>
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
    <br>
    <h4>Ліга Конференцій</h4>
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
          <td class="team">Страсбур</td>
          <td>6</td>
          <td>5</td>
          <td>1</td>
          <td>0</td>
          <td>11</td>
          <td>5</td>
          <td>16</td>
        </tr>

          <tr>
          <td>2</td>
          <td class="team">Ракув</td>
          <td>6</td>
          <td>4</td>
          <td>2</td>
          <td>0</td>
          <td>9</td>
          <td>2</td>
          <td>14</td>
        </tr>

           <tr>
          <td>3</td>
          <td class="team">AEK (Афіни)</td>
          <td>6</td>
          <td>4</td>
          <td>1</td>
          <td>1</td>
          <td>14</td>
          <td>7</td>
          <td>13</td>
        </tr>

           <tr>
          <td>4</td>
          <td class="team">Спарта Прага</td>
          <td>6</td>
          <td>4</td>
          <td>1</td>
          <td>1</td>
          <td>10</td>
          <td>3</td>
          <td>13</td>
        </tr>

        <tr>
          <td>5</td>
          <td class="team">Райо Вальєкано</td>
          <td>6</td>
          <td>4</td>
          <td>1</td>
          <td>1</td>
          <td>13</td>
          <td>7</td>
          <td>13</td>
        </tr>

          <tr class="highlight-shakhtar">
          <td>6</td>
          <td class="team">Шахтар Донецьк</td>
          <td>6</td>
          <td>4</td>
          <td>1</td>
          <td>1</td>
          <td>10</td>
          <td>5</td>
          <td>13</td>
        </tr>

        <tr>
          <td>7</td>
          <td class="team">Майнц 05</td>
          <td>6</td>
          <td>4</td>
          <td>1</td>
          <td>1</td>
          <td>7</td>
          <td>3</td>
          <td>13</td>
        </tr>
        
         <tr>
          <td>8</td>
          <td class="team">АЕК Ларнака</td>
          <td>6</td>
          <td>4</td>
          <td>1</td>
          <td>3</td>
          <td>3</td>
          <td>0</td>
          <td>12</td>
        </tr>

           <tr>
          <td>9</td>
          <td class="team">Лозанна</td>
          <td>6</td>
          <td>3</td>
          <td>2</td>
          <td>1</td>
          <td>6</td>
          <td>3</td>
          <td>11</td>
        </tr>

         <tr>
          <td>10</td>
          <td class="team">Крістал Пелес</td>
          <td>6</td>
          <td>3</td>
          <td>1</td>
          <td>2</td>
          <td>11</td>
          <td>6</td>
          <td>10</td>
        </tr>
 
           <tr>
          <td>11</td>
          <td class="team">Лех</td>
          <td>6</td>
          <td>3</td>
          <td>1</td>
          <td>2</td>
          <td>12</td>
          <td>8</td>
          <td>10</td>
        </tr>	

            <tr>
          <td>12</td>
          <td class="team">Самсунспор</td>
          <td>6</td>
          <td>3</td>
          <td>1</td>
          <td>2</td>
          <td>10</td>
          <td>6</td>
          <td>10</td>
        </tr>
      
         <tr>
          <td>13</td>
          <td class="team">Целє</td>
          <td>6</td>
          <td>3</td>
          <td>1</td>
          <td>2</td>
          <td>8</td>
          <td>7</td>
          <td>10</td>
        </tr>

          <tr>
          <td>14</td>
          <td class="team">АЗ Алкмар</td>
          <td>6</td>
          <td>3</td>
          <td>1</td>
          <td>2</td>
          <td>7</td>
          <td>7</td>
          <td>10</td>
        </tr>


         <tr>
          <td>15</td>
          <td class="team">Фіорентіна</td>
          <td>6</td>
          <td>3</td>
          <td>0</td>
          <td>3</td>
          <td>8</td>
          <td>5</td>
          <td>9</td>
        </tr>

           <tr>
          <td>16</td>
          <td class="team">Рієка</td>
          <td>6</td>
          <td>2</td>
          <td>3</td>
          <td>1</td>
          <td>5</td>
          <td>2</td>
          <td>19</td>
        </tr>

           <tr>
          <td>17</td>
          <td class="team">Ягеллонія</td>
          <td>6</td>
          <td>2</td>
          <td>3</td>
          <td>1</td>
          <td>5</td>
          <td>4</td>
          <td>9</td>
        </tr>

        <tr>
  <td>18</td>
  <td class="team">Омонія</td>
  <td>6</td>
  <td>2</td>
  <td>2</td>
  <td>2</td>
  <td>5</td>
  <td>4</td>
  <td>8</td>
</tr>

<tr>
  <td>19</td>
  <td class="team">Ноах</td>
  <td>6</td>
  <td>2</td>
  <td>2</td>
  <td>2</td>
  <td>6</td>
  <td>7</td>
  <td>8</td>
</tr>

<tr>
  <td>20</td>
  <td class="team">Дріта</td>
  <td>6</td>
  <td>2</td>
  <td>2</td>
  <td>2</td>
  <td>4</td>
  <td>8</td>
  <td>8</td>
</tr>

<tr>
  <td>21</td>
  <td class="team">КуПС</td>
  <td>6</td>
  <td>1</td>
  <td>4</td>
  <td>1</td>
  <td>6</td>
  <td>5</td>
  <td>7</td>
</tr>

<tr>
  <td>22</td>
  <td class="team">Шкендія</td>
  <td>6</td>
  <td>2</td>
  <td>1</td>
  <td>3</td>
  <td>4</td>
  <td>5</td>
  <td>7</td>
</tr>

<tr>
  <td>23</td>
  <td class="team">Зріньскі</td>
  <td>6</td>
  <td>2</td>
  <td>1</td>
  <td>3</td>
  <td>8</td>
  <td>10</td>
  <td>7</td>
</tr>

<tr>
  <td>24</td>
  <td class="team">Сігма</td>
  <td>6</td>
  <td>2</td>
  <td>1</td>
  <td>3</td>
  <td>7</td>
  <td>9</td>
  <td>7</td>
</tr>

<tr>
  <td>25</td>
  <td class="team">Університатя</td>
  <td>6</td>
  <td>2</td>
  <td>1</td>
  <td>3</td>
  <td>6</td>
  <td>8</td>
  <td>7</td>
</tr>

<tr>
  <td>26</td>
  <td class="team">Лінкольн Ред Імпс</td>
  <td>6</td>
  <td>2</td>
  <td>1</td>
  <td>3</td>
  <td>7</td>
  <td>15</td>
  <td>7</td>
</tr>

<tr>
  <td>27</td>
  <td class="team">Динамо Київ</td>
  <td>6</td>
  <td>2</td>
  <td>0</td>
  <td>4</td>
  <td>9</td>
  <td>9</td>
  <td>6</td>
</tr>

<tr>
  <td>28</td>
  <td class="team">Легія</td>
  <td>6</td>
  <td>2</td>
  <td>0</td>
  <td>4</td>
  <td>8</td>
  <td>8</td>
  <td>6</td>
</tr>

<tr>
  <td>29</td>
  <td class="team">Слован</td>
  <td>6</td>
  <td>2</td>
  <td>0</td>
  <td>4</td>
  <td>5</td>
  <td>9</td>
  <td>6</td>
</tr>

<tr>
  <td>30</td>
  <td class="team">Брейдаблік</td>
  <td>6</td>
  <td>1</td>
  <td>2</td>
  <td>3</td>
  <td>6</td>
  <td>11</td>
  <td>5</td>
</tr>

<tr>
  <td>31</td>
  <td class="team">Шемрок</td>
  <td>6</td>
  <td>1</td>
  <td>1</td>
  <td>4</td>
  <td>7</td>
  <td>13</td>
  <td>4</td>
</tr>

<tr>
  <td>32</td>
  <td class="team">Хеккен</td>
  <td>6</td>
  <td>0</td>
  <td>3</td>
  <td>3</td>
  <td>5</td>
  <td>8</td>
  <td>3</td>
</tr>

<tr>
  <td>33</td>
  <td class="team">Хамрун Спартанс</td>
  <td>6</td>
  <td>1</td>
  <td>0</td>
  <td>5</td>
  <td>4</td>
  <td>11</td>
  <td>3</td>
</tr>

<tr>
  <td>34</td>
  <td class="team">Шелбурн</td>
  <td>6</td>
  <td>0</td>
  <td>2</td>
  <td>4</td>
  <td>0</td>
  <td>7</td>
  <td>2</td>
</tr>

<tr>
  <td>35</td>
  <td class="team">Абердін</td>
  <td>6</td>
  <td>0</td>
  <td>2</td>
  <td>4</td>
  <td>3</td>
  <td>14</td>
  <td>2</td>
</tr>

<tr>
  <td>36</td>
  <td class="team">Рапід</td>
  <td>6</td>
  <td>0</td>
  <td>1</td>
  <td>5</td>
  <td>3</td>
  <td>14</td>
  <td>1</td>
</tr>


  </tbody>
    </table>
  `
},

  Квитки: {
    title: `Купити квітки`,
    text: `Квитки на матч можно купити <a href="https://tickets.shakhtar.com/" target="_blank">тут</a>.<br><img src="https://shakhtar.com/-/media/fcsd/news/2025/october/23_news/23_shakhtar_legia/gal/mls_4061.jpg?1765623518331">`
  },
  Магазин: {
    title: `Магазин`,
    text: `Магазин Шахтаря можно знайти <a href="https://shop.shakhtar.com/" target="_blank">тут</a>.<img src="https://shakhtar.com/-/media/fcsd/news/2025/december/14_news/14_shakhtar_epicentr/gal/mls_7639.jpg?1766308184780">`
  },
  Телеграм: {
    title: `Телеграм Канал`,
    text: `<p>Підпісуйтесь на наш <a href="https://t.me/FanShakhtarDonetsk" target="_blank">Телеграм канал</a> заради більше новин.</p>
    <img src="https://shakhtar.com/-/media/fcsd/news/2025/november/2_news/2_shakhtar_dynamo/gal/mls_7241.jpg?1766308325474" >`
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
  if (pageKey === 'Історія') {
  showLegends();
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
// Фнкія легенд

function showLegends() {
  content.innerHTML = '<h2>Легенди Шахтаря</h2>';

  const grid = document.createElement('div');
  grid.className = 'players-list';

  if (!window.legends || window.legends.length === 0) {
    grid.innerHTML = '<p>Легенди ще не додані</p>';
  } else {
    window.legends.forEach(legend => {
      const card = document.createElement('div');
      card.className = 'player-card';
      card.innerHTML = `
        <img src="${legend.photo}" alt="${legend.name}" class="legend-photo">
        <h3>${legend.name}</h3>
        <p><strong>Вік:</strong> ${legend.age}</p>
        <p><strong>Роль:</strong> ${legend.position}</p>
        <p><strong>Національність:</strong> ${legend.nationality}</p>
        <p><strong>Матчі:</strong> ${legend.matches}</p>
        <p><strong>Голи:</strong> ${legend.goals || "0"}</p>
        <p><strong>Ассісти:</strong> ${legend.assist || "0"}</p>
      `;
      grid.appendChild(card);
    });
  }

  content.appendChild(grid);
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
