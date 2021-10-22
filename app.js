const downloadBtn = document.querySelector('.downloadBtn');
const playBtn = document.querySelector('.playIcon');
const pauseBtn = document.querySelector('.pauseIcon');
const nextBtn = document.querySelector('.nextIcon');
const songPlayer = document.querySelector('.player');
const musicImage = document.querySelector('.music__image');
const blockBackground = document.querySelector('.background');
const musicTitle = document.querySelector('#title');
const musicAuthor = document.querySelector('#author');

const imagesURL = [
    'https://i.ibb.co/gz8dJ5M/avengers-01.jpg',
    
    'https://cdns-images.dzcdn.net/images/cover/e7d27421737821968036178d32d4b77b/500x500.jpg',

    'https://i1.sndcdn.com/artworks-2bu0vLnuQsW97imz-jipFqQ-t500x500.jpg'
];

const musicTitles = [
    'The Avengers',
    "He's a Pirate",
    'Inspired',
];

const musicAuthors = [
    'Alan Silvestri',
    'Klaus Badelt',
    'NEFFEX',
];

const audiosURL = [
    'https://mezzoforte.ru/s/artist/308418-alan_silvestri_the_avengers.mp3',
    'https://now.morsmusic.org/load/1795945051/Klaus_Badelt_-_Hes_A_Pirate_(musmore.com).mp3',
    'https://muzgen.net/uploads/music/2021/09/NEFFEX_Inspired.mp3',
];

const avengers = new Audio();
avengers.src = audiosURL[0];

const pirates = new Audio();
pirates.src = audiosURL[1];

const inspired = new Audio();
inspired.src = audiosURL[2];

playBtn.addEventListener('click', () => {
    playBtn.style.display = 'none';
    pauseBtn.style.display = 'block';
    avengers.play();

    let sliderPosition = avengers.duration * (songPlayer.value / 100);
    sliderPosition = avengers.currentTime;

    setInterval(() => {
        let position = 0;
        position = avengers.currentTime * (100 / avengers.duration);
        songPlayer.value = position;

        if (avengers.ended) {
            downloadBtn.removeAttribute('href', audiosURL[0]);
            downloadBtn.setAttribute('href', audiosURL[1]);

            avengers.currentTime = 0;
            avengers.pause();

            playBtn.style.display = 'block';
            pauseBtn.style.display = 'none';

            musicImage.style.backgroundImage = `url(${imagesURL[1]})`;

            blockBackground.removeAttribute('src', `${imagesURL[0]}`);
            blockBackground.setAttribute('src', `${imagesURL[1]}`);

            musicTitle.innerHTML = `${musicTitles[1]}`;
            musicAuthor.innerHTML = `${musicAuthors[1]}`;

            playBtn.addEventListener('click', () => {
                playBtn.style.display = 'none';
                pauseBtn.style.display = 'block';
                avengers.pause();
                pirates.play();
        
                let sliderPosition = pirates.duration * (songPlayer.value / 100);
                sliderPosition = pirates.currentTime;
        
                setInterval(() => {
                    let position = 0;
                    position = pirates.currentTime * (100 / pirates.duration);
                    songPlayer.value = position;
        
                    if (pirates.ended) {
                        downloadBtn.removeAttribute('href', audiosURL[1]);
                        downloadBtn.setAttribute('href', audiosURL[2]);

                        songPlayer.value = 0;

                        playBtn.style.display = 'block';
                        pauseBtn.style.display = 'none';

                        musicImage.style.backgroundImage = `url(${imagesURL[2]})`;

                        blockBackground.removeAttribute('src', `${imagesURL[1]}`);
                        blockBackground.setAttribute('src', `${imagesURL[2]}`);

                        musicTitle.innerHTML = `${musicTitles[2]}`;
                        musicAuthor.innerHTML = `${musicAuthors[2]}`;

                        playBtn.addEventListener('click', () => {
                            playBtn.style.display = 'none';
                            pauseBtn.style.display = 'block';
                            inspired.play();
                            pirates.pause();
                    
                            let sliderPosition = inspired.duration * (songPlayer.value / 100);
                            sliderPosition = inspired.currentTime;
                    
                            setInterval(() => {
                                let position = 0;
                                position = inspired.currentTime * (100 / inspired.duration);
                                songPlayer.value = position;
                    
                                if (inspired.ended) {
                                    window.location.reload(false);
                                }
                            }, 1000);
                        });
                        pauseBtn.addEventListener('click', () => {
                            playBtn.style.display = 'block';
                            pauseBtn.style.display = 'none';
                            inspired.pause();
                        });
                    }
                }, 1000);
                pauseBtn.addEventListener('click', () => {
                    playBtn.style.display = 'block';
                    pauseBtn.style.display = 'none';
                    pirates.pause();
                });
            });
        }
    }, 1000);

    pauseBtn.addEventListener('click', () => {
        playBtn.style.display = 'block';
        pauseBtn.style.display = 'none';
        avengers.pause();
    });
});

nextBtn.addEventListener('click', () => {
    downloadBtn.removeAttribute('href', audiosURL[0]);
    downloadBtn.setAttribute('href', audiosURL[1]);

    playBtn.style.display = 'block';
    pauseBtn.style.display = 'none';

    avengers.currentTime = 0;
    avengers.pause();

    playBtn.addEventListener('click', () => {
        playBtn.style.display = 'none';
        pauseBtn.style.display = 'block';
        pirates.play();
        avengers.pause();

        let sliderPosition = pirates.duration * (songPlayer.value / 100);
        sliderPosition = pirates.currentTime;

        setInterval(() => {
            let position = 0;
            position = pirates.currentTime * (100 / pirates.duration);
            songPlayer.value = position;

            if (pirates.ended) {
                songPlayer.value = 0;

                playBtn.style.display = 'block';
                pauseBtn.style.display = 'none';

                musicImage.style.backgroundImage = `url(${imagesURL[2]})`;

                blockBackground.removeAttribute('src', `${imagesURL[1]}`);
                blockBackground.setAttribute('src', `${imagesURL[2]}`);

                musicTitle.innerHTML = `${musicTitles[2]}`;
                musicAuthor.innerHTML = `${musicAuthors[2]}`;

                playBtn.addEventListener('click', () => {
                    playBtn.style.display = 'none';
                    pauseBtn.style.display = 'block';
                    inspired.play();
            
                    let sliderPosition = pirates.duration * (songPlayer.value / 100);
                    sliderPosition = pirates.currentTime;
            
                    setInterval(() => {
                        let position = 0;
                        position = inspired.currentTime * (100 / inspired.duration);
                        songPlayer.value = position;
            
                        if (inspired.ended) {
                            songPlayer.value = 0;
    
                            playBtn.style.display = 'block';
                            pauseBtn.style.display = 'none';
    
                            musicImage.style.backgroundImage = `url(${imagesURL[0]})`;
    
                            blockBackground.removeAttribute('src', `${imagesURL[2]}`);
                            blockBackground.setAttribute('src', `${imagesURL[0]}`);
    
                            musicTitle.innerHTML = `${musicTitles[0]}`;
                            musicAuthor.innerHTML = `${musicAuthors[0]}`;
                        }
                    }, 1000);
                });

            }
        }, 1000);

        pauseBtn.addEventListener('click', () => {
            playBtn.style.display = 'block';
            pauseBtn.style.display = 'none';
            pirates.pause();
        });
    });

    musicImage.style.backgroundImage = `url(${imagesURL[1]})`;

    blockBackground.removeAttribute('src', `${imagesURL[0]}`);
    blockBackground.setAttribute('src', `${imagesURL[1]}`);

    musicTitle.innerHTML = `${musicTitles[1]}`;
    musicAuthor.innerHTML = `${musicAuthors[1]}`;

    nextBtn.addEventListener('click', () => {
        downloadBtn.removeAttribute('href', audiosURL[1]);
        downloadBtn.setAttribute('href', audiosURL[2]);

        playBtn.style.display = 'block';
        pauseBtn.style.display = 'none';

        pirates.currentTime = 0;
        pirates.pause();

        playBtn.addEventListener('click', () => {
            playBtn.style.display = 'none';
            pauseBtn.style.display = 'block';
            inspired.play();
            pirates.pause();

            let sliderPosition = inspired.duration * (songPlayer.value / 100);
            sliderPosition = inspired.currentTime;

            setInterval(() => {
                let position = 0;
                position = inspired.currentTime * (100 / inspired.duration);
                songPlayer.value = position;

                if (inspired.ended) {
                    songPlayer.value = 0;
                    inspired.pause();
            
                    playBtn.addEventListener('click', () => {
                        playBtn.style.display = 'none';
                        pauseBtn.style.display = 'block';
                        inspired.pause();
                        avengers.play();
                                
                        let sliderPosition = pirates.duration * (songPlayer.value / 100);
                        sliderPosition = avengers.currentTime;
                                
                        setInterval(() => {
                            let position = 0;
                            position = avengers.currentTime * (100 / avengers.duration);
                            songPlayer.value = position;
                                        
                        }, 1000);
                        pauseBtn.addEventListener('click', () => {
                            playBtn.style.display = 'block';
                            pauseBtn.style.display = 'none';
                            avengers.pause();
                        });
                    });

                    playBtn.style.display = 'block';
                    pauseBtn.style.display = 'none';
            
                    musicImage.style.backgroundImage = `url(${imagesURL[0]})`;
            
                    blockBackground.removeAttribute('src', `${imagesURL[2]}`);
                    blockBackground.setAttribute('src', `${imagesURL[0]}`);
            
                    musicTitle.innerHTML = `${musicTitles[0]}`;
                    musicAuthor.innerHTML = `${musicAuthors[0]}`;
                }
            }, 1000);

            pauseBtn.addEventListener('click', () => {
                playBtn.style.display = 'block';
                pauseBtn.style.display = 'none';
                inspired.pause();
            });
        });

        musicImage.style.backgroundImage = `url(${imagesURL[2]})`;

        blockBackground.removeAttribute('src', `${imagesURL[1]}`);
        blockBackground.setAttribute('src', `${imagesURL[2]}`);

        musicTitle.innerHTML = `${musicTitles[2]}`;
        musicAuthor.innerHTML = `${musicAuthors[2]}`;

        nextBtn.addEventListener('click', () => {
            window.location.reload(false);
        });
    });
});