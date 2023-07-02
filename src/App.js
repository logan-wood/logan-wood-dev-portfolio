import './App.css';
import sidenavIcon from './assets/icons/sidenav.svg';
import arrowDown from './assets/icons/arrow-down.svg';
import arrowLeft from './assets/icons/arrow-left.svg';
import githubIcon from './assets/icons/github.svg';
import linkedinIcon from './assets/icons/linkedin.svg';
import aboutImage from './assets/images/about-image.png';
import PortfolioWork from './assets/components/PortfolioWork';
import notepadImage from './assets/images/notepad-io.jpg';
import scribblenotesImage from './assets/images/scribblenotes.jpg'
import $ from 'jquery'


function App() {
  function setActiveNavItem(e) {
    // Remove active class from current active div and its children
    $('.nav-content .active').removeClass('active');
  
    // Add active class to the clicked button and its parent div
    const clickedButton = $(e.target);
    clickedButton.addClass('active');
    clickedButton.parent().addClass('active');
    clickedButton.prev('span').addClass('active');
  }

  function toggleSideNav() {
    if ($('nav').hasClass('active')) {
      console.log('has active')
      // toggle class then show content
      $('nav').toggleClass('active');
      $('.open-nav').toggleClass('active');

      setTimeout(() => {
        $('.nav-content').animate({opacity: 1}, 300)
      }, 600)
      
    } else {
      $('.nav-content').animate({opacity: 0}, 300, () => {
        $('nav').toggleClass('active');
        $('.open-nav').toggleClass('active');
      });
    }  
  }

  const notepadio = {
    title: 'Notepad.io',
    description: 'Built in collaboration with 4 developers, notepad.io is an online note-taking application designed to retain user attention. A point system is integrated which allows users to play a Pokemon style game while taking notes.',
    preview: notepadImage,
    technologies: 'node.js ‧ express ‧ react.js ‧ firebase ‧ tinymce ‧ agile methodologies',
    url: 'https://github.com/logan-wood/notepad.io',
    github_url: 'https://github.com/logan-wood/notepad.io'
  };

  const scribblenotes = {
    title: 'Scribblenotes',
    description: 'An all-inclusive web application which is capable of automating business processes - users can create accounts, pay for services and subscriptions through stripe and automatically generate CSV files, all through a user-friendly customer portal. An admin panel is included.',
    preview: scribblenotesImage,
    technologies: 'node.js ‧ express ‧ ejs ‧ mysql ‧ stripe ‧ azure ‧ blob storage',
    url: 'https://github.com/logan-wood/scribblenotes',
    github_url: 'https://github.com/logan-wood/scribblenotes'
  };

  return (
    <div className="App">
      
      <div id='page'>

        <section id='home'>
          <div>
            <p>Hi, my name is</p>
            <h1>Logan Wood</h1>
            <h3>I bring ideas to life through code</h3>
            <button>see my work</button>
          </div>
        </section>

        <section id='about'>
          <h2>A little about me...</h2>
          <p>Welcome to my website! My name is Logan, and I've been designing and building web applications for over 5 years. What started in high school as a bit of fun using HTML and CSS to create hilariously awful websites, has turned into a passion for creating visually stunning and user friendly digital experiences.</p>
          <p>Now, I study Software Development and Data Science at university, and have had the privilege of working with a couple great small business owners, creating the perfect digital solution to suit their needs.</p>
          <img src={aboutImage} alt='about image'></img>
          <img src={arrowDown} alt='downwards arrow'></img>
        </section>

        <section id='portfolio'>
          <h2>My Portfolio</h2>
          <PortfolioWork {...notepadio}></PortfolioWork>
          <PortfolioWork {...scribblenotes}></PortfolioWork>
        </section>

        <section id='contact'>
          <h2>Get In Contact</h2>
          <p>Want to work with me?</p>
          <p>Get in contact via:</p>
          <button>email</button>
          <span className='vertical-divider'></span>
          <button>phone</button>
          <p>My other links:</p>
          <img src={githubIcon} alt='github icon' onClick={() => { window.open('https://github.com/logan-wood', '_blank') }}></img>
          <img src={linkedinIcon} alt='linkedin icon' onClick={() => { window.open('https://www.linkedin.com/in/logan-wood-dev/', '_blank') }}></img>
        </section>

        <footer>
          <span className='divider-line'></span>
          <div>
            <p>© 2023 Logan Wood</p>
            <p>logan.loganwood@gmail.com<br></br>0226945092</p>
            <img src={githubIcon} alt='github icon' onClick={() => { window.open('https://github.com/logan-wood', '_blank') }}></img>
            <img src={linkedinIcon} alt='linkedin icon' onClick={() => { window.open('https://www.linkedin.com/in/logan-wood-dev/', '_blank') }}></img>
            <p>Thank you for viewing!</p>
          </div>
          <div>
            <button>home</button>
            <button>about</button>
            <button>portfolio</button>
            <button>contact</button>
            <button>back to top</button>
          </div>
        </footer>

      </div>

      <nav> 
          <img src={arrowLeft} className='open-nav' alt='right arrow' onClick={() => { toggleSideNav() }}></img>
          <div className='nav-content'>
            <p className='logo'>&lt;/&gt;</p>
            <div className='active'>
              <span className='active'>&gt;</span>
              <button className='active' onClick={(e) => {setActiveNavItem(e)}}>home</button>
            </div>
            <div>
              <span>&gt;</span>
              <button onClick={(e) => {setActiveNavItem(e)}}>about me</button>
            </div>
            <div>
              <span>&gt;</span>
              <button onClick={(e) => {setActiveNavItem(e)}}>portfolio</button>
            </div>
            <button id='contact-btn'>contact</button>
            <img src={sidenavIcon} onClick={() => {toggleSideNav()}} alt='close-sidenav'></img>
          </div>
        </nav>
      
    </div>
  );
}

export default App;
