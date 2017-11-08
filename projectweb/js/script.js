/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

//Variable worden aangemaakt
var filterButton = document.querySelector('aside');
var filterform = document.querySelector('aside');

var likeButton = document.querySelector('article button:nth-of-type(1)');
var setfavorite = document.querySelector('header ul li:nth-of-type(2)');

var downloadButton = document.querySelector('article button:nth-of-type(2)');
var downloaden = document.querySelector('header ul li:nth-of-type(3)');

var reactieLiken = document.querySelector('form fieldset button:nth-of-type(1)');

var berichtLiken = document.querySelector('section fieldset button:nth-of-type(2)');

var berichtDisliken = document.querySelector('section fieldset button:nth-of-type(3)');

var reageren = document.querySelector('form fieldset button:nth-of-type(2)');
var berichtplaatsen = document.querySelector('section');

var zoeken = document.querySelector('header form:nth-of-type(1) button');
var zoekbalk = document.querySelector('header form:nth-of-type(2) input');


//Mobiel filtermenu klapt in en/of uit
filterButton.addEventListener('click', function () {
    filterform.classList.toggle('active');
});


//In favorieten zetten
likeButton.addEventListener('click', function () {
    setfavorite.classList.toggle('favorieten');
});

likeButton.addEventListener('click', function () {
    likeButton.classList.toggle('favorietgezet');
});

//aan het downloaden
downloadButton.addEventListener('click', function () {
    downloaden.classList.toggle('download');
});

downloadButton.addEventListener('click', function () {
    downloadButton.classList.toggle('gedownload');
});

//Bij reactie een like geven
reactieLiken.addEventListener('click', function (e) {
    e.preventDefault();
    reactieLiken.classList.toggle('reactielikegeven');
});

//Op een bericht liken
berichtLiken.addEventListener('click', function (e) {
    e.preventDefault();
    berichtLiken.classList.toggle('berichtlikegeven');
});

berichtDisliken.addEventListener('click', function (e) {
    e.preventDefault();    berichtDisliken.classList.toggle('berichtdislikegeven');
});

//Als er een bericht wordt geplaatst
reageren.addEventListener('click', function (e) {
    e.preventDefault();    berichtplaatsen.classList.toggle('berichtplaatsen');
});

//Zoeken
zoeken.addEventListener('click', function (e) {
    e.preventDefault();    zoekbalk.classList.toggle('zoeken');
});
