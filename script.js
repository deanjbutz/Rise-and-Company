const trending = document.querySelector('.trending');
const trendingGifs = document.querySelector('.trending-gifs');
const show = document.querySelector('#show');
const clear = document.querySelector('#clear');

show.addEventListener('click', showGif);
clear.addEventListener('click', clearTrending);

function showGif() {
    while (trendingGifs.firstChild) {
        trendingGifs.removeChild(trendingGifs.firstChild);
    }
    let gif = document.createElement('a')
    gif.innerHTML = '<img src="./assets/GifMeme_22112021150959.gif" alt="gif failed to load, fuck you Alex">'
    trendingGifs.appendChild(gif);
};

function clearTrending() {
    while (trendingGifs.firstChild) {
        trendingGifs.removeChild(trendingGifs.firstChild);
    }
};
