<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
 <xsl:output method="html"/>
<xsl:template match="/">


<html>
<head>
<link rel="stylesheet" href="css/Style.css"/>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="Winter.js"></script>
    <title>Document</title>
</head>
<body>
  <header>
                <div>
                  <b>тел.+375292708723</b>
                  <b>e-mail:ghighersworld@gmail.com</b>
                </div>
            </header>

<article>
<img src="images\lines_menu_burger_icon_123889.svg" class="burger"/>
<div class="exception"> </div>
<a href="main.html"><h1 class="except">Wind</h1></a>
 
<a href="main.html"><h3 class="except">Главная</h3></a>


<h3 class="drop">Каталог</h3>
<a href="About_us.html"><h3 class="except">О нас</h3></a>
<hr/>
  <div class="dropdown-content">
   
  <p class="content" id="hide"><a href="Main.html">Главная</a></p>
            <p class="content"><a href="Autumn_info.xml">Осенняя коллекция</a></p>
            <p class="content"><a href="winter_info.xml">Зимняя коллекция</a></p>
                      <p class="content"> <a href="Demiseason_info.xml">Демисезонная коллекция</a></p>
            <p class="content" id="hide"> <a href="About_us.html">О нас</a></p>
           
    </div>
</article>

<section>
<h2 id="fuck"  style="color:#B29F91">Зимняя коллекция</h2>
</section>





<div id="myOverlay" class="overlay">
  <div class="overlay-content">
  <span class="closebtn" onclick="closeSearch()" title="Закрыть">&#8617;</span>
  <div class="img">
   <button class="slider_prev">&#10094;</button>
        <button class="slider_next">&#10095;</button>
  <img/></div>
  <div class="info">
  <div class="description"></div> 
    <h3>Данные для заказа:</h3>
  <div class="form">
  <input placeholder="ФИО"></input>
   <input placeholder="E-mail"></input>
    <input placeholder="моб.телефон"></input>
   </div>
   <div class="buy">
   <b class="cost" style="opacity:0"></b>
     <button id="button">Заказать</button>
     </div>
  </div>
  </div>
</div>






<main class="except">
 <xsl:for-each select="info/block">
<figure>
<xsl:attribute name="id">
  <xsl:value-of select="id"/>
</xsl:attribute>
<script>
hover();
</script>
<div>
  <img>
    <xsl:attribute name="src">
        <xsl:value-of select="src"/>
    </xsl:attribute>
  </img>
      <figcaption>
   <h4><xsl:value-of select="name"/></h4>
   <p><button>

   <xsl:attribute name="class">
  <xsl:value-of select="id"/>
</xsl:attribute>
   <b>Заказать</b></button></p>
 </figcaption>
 </div>
</figure> 

 </xsl:for-each>
</main>

<aside class="except">
<hr/>
<h4>Пол</h4>

<label for="male">
<div>
<input type="checkbox" id="male" category="Мужской" view="sex"/>
<span for="male"></span>
<label for="male">Мужской</label>
</div>
</label>

<label for="female">
<div>
<input type="checkbox" id="female" category="Женский" view="sex"/>
<span for="female"></span>
<label  for="female">Женский</label>
</div>
</label>
 


<h4>Материал</h4>

<label for="fleece">
<div>
<input type="checkbox" id="fleece" category="Шерсть" view="material"/>
<span id="fleece"></span>
<label for="fleece">Шерсть</label>
</div>
</label>

<label for="cashmere">
<div>
<input type="checkbox" id="cashmere" category="Кашемир" view="material"/>
<span id="cashmere"></span>
<label for="cashmere">Кашемир</label>
</div>
</label>

<label for="velour">
<div>
<input type="checkbox" id="velour" category="Велюр" view="material"/>
<span id="velour"></span>
<label for="velour">Велюр</label>
</div>
</label>    

<h4>Цвет</h4>

<label for="black">
<div>
<input type="checkbox" id="black" category="Чёрный" view="color"/>
<span id="black"></span>
<label for="black">Чёрный</label>
</div>
</label> 

<label for="white">
<div>
<input type="checkbox" id="white" category="Белый" view="color"/>
<span id="white"></span>
<label for="white">Белый</label>
</div>
</label> 

<label for="skin">
<div>
<input type="checkbox" id="skin" category="Коричневый" view="color"/>
<span id="skin"></span>
<label for="skin">Коричневый</label>
</div>
</label> 

<label for="brown">
<div>
<input type="checkbox" id="brown" category="Серый" view="color"/>
<span id="brown"></span>
<label for="brown">Серый</label>
</div>
</label> 

<button>Применить</button>

</aside>


  <footer>
<div>
<h4>Информация</h4>
<hr/>
</div>
<p>Юридический и почтовый адрес:</p>
<p>27022006,Республика Беларусь</p>
<p>Минск,Бобруйская 25,комната 425</p>
<p class="space"></p>
<p>Режим работы:</p>
<p>Онлайн-заказ--круглосуточно</p>
<p>Оператор:с 9:00-18:00 с понедельника по пятницу</p>
<p class="space"></p>
<p>Номера операторов:</p>
<p>+375218976534</p>
<p>+119178239920</p>
<h5>Минск 2024.Все права защищены</h5>
        </footer>

</body>
</html>




</xsl:template>
</xsl:stylesheet>