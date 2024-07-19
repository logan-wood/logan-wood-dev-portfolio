import notepadImage from '../images/notepad-io.jpg';
import scribblenotesImage from '../images/scribblenotes.jpg';
import spotifyImage from '../images/spotify.jpeg';
import autImage from '../images/aut.jpg';

const notepadio = {
    wip: false,
    title: 'Notepad.io',
    description: 'Built in collaboration with 4 developers, notepad.io is an online note-taking application designed to retain user attention. A point system is integrated which allows users to play a Pokemon style game while taking notes.',
    preview: notepadImage,
    technologies: 'node.js ‧ express ‧ react.js ‧ firebase ‧ tinymce ‧ agile methodologies',
    url: 'https://github.com/logan-wood/notepad.io',
    github_url: 'https://github.com/logan-wood/notepad.io'
};

const scribblenotes = {
    wip: false,
    title: 'Scribblenotes',
    description: 'An all-inclusive web application which is capable of automating business processes - users can create accounts, pay for services and subscriptions through stripe and automatically generate CSV files, all through a user-friendly customer portal. An admin panel is included.',
    preview: scribblenotesImage,
    technologies: 'node.js ‧ express ‧ ejs ‧ mysql ‧ stripe ‧ azure ‧ blob storage',
    url: 'https://github.com/logan-wood/scribblenotes',
    github_url: 'https://github.com/logan-wood/scribblenotes'
};

const playlistPresenter = {
    wip: true,
    title: 'Spotify Playlist Showcase',
    description: 'Due to a lack of a way to quickly and effectively summarize a Spotify playlist, I am developing a web app that allows users to showcase their Spotify playlists, with the ability to choose the order of music, segments to play, visuals to show, and the ability to swipe to the next track. Currently in early stages of development.',
    preview: spotifyImage,
    technologies: 'react.js ‧ typescript ‧ nest.js ‧ Spotify API & Web Player ‧ mysql',
    url: 'https://spotify-playlist-showcase-static-client.onrender.com/',
    github_url: 'https://github.com/logan-wood/Spotify-Playlist-Showcase'
};

const rndProject = {
    wip: false,
    title: 'AUT Final Year Project',
    description: 'Working with a team of other final year students, we\'ve increased efficiency and productivity for our client in the Agricultural industry by leveraging a vision intelligence model. A camera has been set up on the processing line, which provides images to our vision intelligence model, to classify the moisture level of the produce. This information is used to assist in calibrating machine settings on the processing line.',
    preview: autImage,
    technologies: 'Python ‧ Flask ‧ Tensorflow ‧ Vision Intelligence ‧ Classification',
    url: null,
    github_url: null
} 

export { rndProject, notepadio, scribblenotes, playlistPresenter }