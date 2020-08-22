var link1 = 'go-image_';
var link2 = '_clicks';
var link3 = 'see_movie/';
var baru1 = '<img width="360" height="480" src="http://image.tmdb.org/t/p/';
var baru2 = '"/>';
var baru3 = 'https://channelmovie.info/play.php?movie=';
function updateme()
{
var text = document.getElementsByTagName('body')[0].innerHTML;
text = replaceAll(text,link1,baru1);
text = replaceAll(text,link2,baru2);
text = replaceAll(text,link3,baru3);
document.getElementsByTagName('body')[0].innerHTML = text;
}
function replaceAll(txt, replace, with_this) {
return txt.replace(new RegExp(replace, 'g'),with_this);

}
window.setTimeout(updateme,2000);
