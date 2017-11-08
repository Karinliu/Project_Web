/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
//VERHALEN BUTTONS
//Verhalen worden in favorieten gezet
var verhalenLikeButton = document.querySelector('main fieldset button:nth-of-type(1)');
var verhalenSetFavorite = document.querySelector('ul li:nth-of-type(2)');

var verhalenDownloadButton = document.querySelector('main fieldset button:nth-of-type(2)');
var verhalenGedownload = document.querySelector('ul li:nth-of-type(3)');

var reactieLiken = document.querySelector('form fieldset button:nth-of-type(1)');

var zoeken = document.querySelector('header form:nth-of-type(1) button');
var zoekbalk = document.querySelector('header form:nth-of-type(2) input');


//Verhalen in favorieten zetten
verhalenLikeButton.addEventListener('click', function () {
    verhalenSetFavorite.classList.toggle('favorieten');
});

//Verhalen icoontje veranderd in een andere kleur
verhalenLikeButton.addEventListener('click', function () {
    verhalenLikeButton.classList.toggle('favorietgezet');
});

//Verhalen downloaden
verhalenDownloadButton.addEventListener('click', function () {
    verhalenGedownload.classList.toggle('download');
});

//Verhalen downloaden in een vinkje veranderen
verhalenDownloadButton.addEventListener('click', function () {
    verhalenDownloadButton.classList.toggle('gedownload');
});


//Bij reactie een like geven
reactieLiken.addEventListener('click', function (e) {
    e.preventDefault();
    reactieLiken.classList.toggle('reactielikegeven');
});

//Zoeken
zoeken.addEventListener('click', function (e) {
    e.preventDefault();    zoekbalk.classList.toggle('zoeken');
});
