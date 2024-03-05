import './App.css';
import sidenavIcon from './assets/icons/sidenav.svg';
import arrowDown from './assets/icons/arrow-down.svg';
import arrowLeft from './assets/icons/arrow-left.svg';
import githubIcon from './assets/icons/github.svg';
import linkedinIcon from './assets/icons/linkedin.svg';
import aboutImage from './assets/images/about-image.png';
import PortfolioWork from './assets/components/PortfolioWork';
import notepadImage from './assets/images/notepad-io.jpg';
import scribblenotesImage from './assets/images/scribblenotes.jpg';
import spotifyImage from './assets/images/spotify.jpeg';
import autImage from './assets/images/aut.jpg';
import { useEffect, useState } from 'react';
import $ from 'jquery'
import { motion } from 'framer-motion';
import HorizontalBlock from './assets/components/HorizontalBlock';
import VerticalBlock from './assets/components/VerticalBlock';


function App() {
  const [buttonText, setButtonText] = useState('phone');

  function setActiveNavItem(target) {
    // Remove active class from current active div and its children
    $('.nav-content .active').removeClass('active');
  
    // Add active class to the clicked button and its parent div
    const clickedButton = $(target);
    clickedButton.addClass('active');
    clickedButton.parent().addClass('active');
    clickedButton.prev('span').addClass('active');
  }

  function toggleSideNav() {
    if ($('nav').hasClass('small')) {
      // open nav
      // toggle class then show content
      $('nav').toggleClass('small');
      $('.open-nav').toggleClass('active');

      setTimeout(() => {
        $('.nav-content').animate({opacity: 1}, 300)
      }, 600)
      
    } else {
      // close nav
      $('.nav-content').animate({opacity: 0}, 300, () => {
        $('nav').toggleClass('small');
        $('.open-nav').toggleClass('active');
      });
    }  
  }

  function openClientEmail() {
    const email = 'logan.loganwood@gmail.com';
    const subject = 'Web Development Enquiry';
    const body = 'Hello, I would like to inquire about your services.';
  
    const mailtoURL = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  
    window.location.href = (mailtoURL);
  }

  function openPhone() {
    const phoneNumber = '0226945092';
    window.location.href = `tel:${phoneNumber}`;
    setButtonText(phoneNumber);
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Get the sections and their offsets from the top of the page
      const homeSection = document.getElementById('home');
      const aboutSection = document.getElementById('about');
      const portfolioSection = document.getElementById('portfolio');
      const contactSection = document.getElementById('contact');

      const homeOffset = homeSection.offsetTop - 200;
      const aboutOffset = aboutSection.offsetTop - 200;
      const portfolioOffset = portfolioSection.offsetTop - 200;

      // Calculate the visible section based on the scroll position
      let visibleSection = '';

      if (scrollPosition >= homeOffset && scrollPosition < aboutOffset) {
        visibleSection = 'home';
      } else if (scrollPosition >= aboutOffset && scrollPosition < portfolioOffset) {
        visibleSection = 'about';
      } else {
        visibleSection = 'portfolio';
      } 

      // Update the classList of the nav buttons based on the visible section
      setActiveNavItem($('#' + visibleSection + '-btn')[0])
    }

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Check screen size to see if nav should display
    if (window.innerWidth >= 900) {
      $('nav').removeClass('small')

      $('.open-nav').removeClass('active')

      $('.nav-content').css({opacity: 1} )
    }

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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

  const RndProject = {
    wip: true,
    title: 'AUT Final Year Project',
    description: 'Working with a team of other final year students, we are increasing efficiency and productivity for our client in the Agricultural industry by leveraging vision intelligence and forecasting techniques. Vision intelligence is used to classify baby spinach leaves to assist with quality control, and an array of sensors will be used to predict appropiate machine settings across the packing line.',
    preview: autImage,
    technologies: 'Python ‧ Flask ‧ Tensorflow ‧ Vision Intelligence ‧ Classification ‧ Forecasting',
    url: null,
    github_url: null
  } 

  return (
    <div className="App">
      
      <div id='page'>

        <section id='home'>

          <VerticalBlock x={50} y={50} width={50} height={120} color={'#caeefb'} scroll_speed={5} />


          <div className='welcome'>
            <p>Hi, my name is</p>
            <h1>Logan Wood</h1> 
            <h3>I create captivating digital experiences</h3>
            <button onClick={(e) => {
              $('#portfolio')[0].scrollIntoView({ behavior: 'smooth' })
            }}>see my work</button>
          </div>

          <HorizontalBlock x={200} y={50} width={100} height={50} color={'#f8a897'} scroll_speed={1.5} />
        </section>

        <section id='about'>
          <div className='content'>
            <h2>A little about me...</h2>
            <div className='row'>
              <div className='left-col'>
                <p>Welcome to my website! My name is Logan, and I've been designing and building web applications for over 5 years. What started in high school as a bit of fun using HTML and CSS to create hilariously awful websites, has turned into a passion for creating visually stunning and user friendly digital experiences.
                <br></br><br></br>
                Now, I study Software Development and Data Science at university, and have had the privilege of working with a couple great small business owners, creating the perfect digital solution to suit their needs.
                </p>
                <button onClick={(e) => {
                  $('#contact')[0].scrollIntoView({ behavior: 'smooth' })
                }}>Get In Contact</button>
              </div>
            <img className='about-img' src={aboutImage} alt='about'></img>
            </div>
            <img className='down-arrow' src={arrowDown} alt='downwards arrow' onClick={() => {
              $('#portfolio')[0].scrollIntoView({ behavior: 'smooth' })}}>
            </img>
          </div>
        </section>

        <section id='portfolio'>
          <div className='content'>
            <h2>My Portfolio</h2>
            <PortfolioWork {...notepadio} />
            <PortfolioWork {...scribblenotes} />
            <PortfolioWork {...playlistPresenter} />
            <PortfolioWork {...RndProject} />
          </div>
        </section>

        <section id='contact'>
          <div className='content'>

            <h2>Get In Contact</h2>
            <p>Want to work with me?</p><br></br>
            <p>Get in contact via:</p>

            <div className='row'>
              <button onClick={openClientEmail}>email</button>
              <span className='vertical-divider'></span>
              <button id='phone' onClick={openPhone}>{buttonText}</button>
            </div>

            <p>My other links:</p>

            <div className='row icons'>
              <img src={githubIcon} alt='github icon' onClick={() => { window.open('https://github.com/logan-wood', '_blank') }}></img>
              <img src={linkedinIcon} alt='linkedin icon' onClick={() => { window.open('https://www.linkedin.com/in/logan-wood-dev/', '_blank') }}></img>
            </div>

          </div>
        </section>

        <footer>

          <div className='content'>
            <span className='divider-line'></span>

            <div className='footer-columns-container'>
              <div>
                <p>© 2023 Logan Wood</p>
                <p>logan.loganwood@gmail.com<br></br>0226945092</p>
                <img className='icon' src={githubIcon} alt='github icon' onClick={() => { window.open('https://github.com/logan-wood', '_blank') }}></img>
                <img className='icon' src={linkedinIcon} alt='linkedin icon' onClick={() => { window.open('https://www.linkedin.com/in/logan-wood-dev/', '_blank') }}></img>
                <p className='align-bottom'>Thank you for viewing!</p>
              </div>

              <div className='footer-nav'>
                <div>
                  <button onClick={(e) => {
                    $('#home')[0].scrollIntoView({ behavior: 'smooth' })
                    }}>home</button>
                  <button onClick={(e) => {
                    $('#about')[0].scrollIntoView({ behavior: 'smooth' })
                    }}>about</button>
                  <button onClick={(e) => {
                    $('#portfolio')[0].scrollIntoView({ behavior: 'smooth' })
                    }}>portfolio</button>
                  <button onClick={(e) => {
                    $('#contact')[0].scrollIntoView({ behavior: 'smooth' })
                    }}>contact</button>
                </div>

                <button id='back-to-top' onClick={(e) => {
                  $('#home')[0].scrollIntoView({ behavior: 'smooth' })
                  }}>back to top</button>
              </div>
            </div>

          </div>
        </footer>

      </div>

      <nav className='small'> 
          <img src={arrowLeft} className='open-nav active' alt='right arrow' onClick={() => { toggleSideNav() }}></img>
          <div className='nav-content hide'>
            <p className='logo'>&lt;/&gt;</p>
            <div className='active'>
              <span className='active'>&gt;</span>
              <button id="home-btn" className='active' onClick={(e) => {
                setActiveNavItem(e.target)
                $('#home')[0].scrollIntoView({ behavior: 'smooth' })
                }}>home</button>
            </div>
            <div>
              <span >&gt;</span>
              <button id="about-btn" onClick={(e) => {
                setActiveNavItem(e.target)
                $('#about')[0].scrollIntoView({ behavior: 'smooth' })
                }}>about me</button>
            </div>
            <div>
              <span >&gt;</span>
              <button id="portfolio-btn" onClick={(e) => {
                setActiveNavItem(e.target)
                $('#portfolio')[0].scrollIntoView({ behavior: 'smooth' })
                }}>portfolio</button>
            </div>
            <button id='contact-btn' onClick={(e) => {
              $('#contact')[0].scrollIntoView({ behavior: 'smooth' })
            }}>contact</button>
            <img src={sidenavIcon} onClick={() => {toggleSideNav()}} alt='close-sidenav'></img>
          </div>
        </nav>
      
    </div>
  );
}

export default App;
