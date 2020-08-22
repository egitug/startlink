var link1 = 'imagen1_'; var link2 = '_here'; var link3 = 'click_movie/'; var baru1 = '<img width="360" height="480" src="http://image.tmdb.org/t/p/'; 
var baru2 = '"/>'; var baru3 = 'https://channelmovie.info/play.php?movie='; function updateme() { var text = 
document.getElementsByTagName('body')[0].innerHTML; text = replaceAll(text,link1,baru1); text = replaceAll(text,link2,baru2); text = 
replaceAll(text,link3,baru3); document.getElementsByTagName('body')[0].innerHTML = text;
}
function replaceAll(txt, replace, with_this) { return txt.replace(new RegExp(replace, 'g'),with_this);
}
window.setTimeout(updateme,2000);
