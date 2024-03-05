import './App.css';
import sidenavIcon from './assets/icons/sidenav.svg';
import arrowDown from './assets/icons/arrow-down.svg';
import arrowLeft from './assets/icons/arrow-left.svg';
import githubIcon from './assets/icons/github.svg';
import linkedinIcon from './assets/icons/linkedin.svg';
import aboutImage from './assets/images/about-image.png';
import PortfolioWork from './assets/components/PortfolioWork';
import { useEffect, useState } from 'react';
import $ from 'jquery'
import HorizontalBlock from './assets/components/HorizontalBlock';
import VerticalBlock from './assets/components/VerticalBlock';
import { horizontalBlocks } from './assets/data/horizontalBlocks';
import { verticalBlocks } from './assets/data/verticalBlocks';
import { rndProject, scribblenotes, playlistPresenter, notepadio } from './assets/data/projects';

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

  return (
    <div className="App">
      
      <div id='page'>

        <section id='home'>

          {horizontalBlocks.map((block, index) => {
            return <HorizontalBlock 
              key={index} 
              x={block.x} 
              y={block.y} 
              width={block.width} 
              height={block.height} 
              color={block.color} 
              scroll_speed={block.scroll_speed} 
            />
          })}
          
          {verticalBlocks.map((block, index) => {
            return <VerticalBlock 
              key={index} 
              x={block.x} 
              y={block.y} 
              width={block.width} 
              height={block.height} 
              color={block.color} 
              scroll_speed={block.scroll_speed} 
            />
          })}


          <div className='welcome'>
            <p>Hi, my name is</p>
            <h1>Logan Wood</h1> 
            <h3>I create captivating digital experiences</h3>
            <button onClick={(e) => {
              $('#portfolio')[0].scrollIntoView({ behavior: 'smooth' })
            }}>see my work</button>
          </div>

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
            <PortfolioWork {...rndProject} />
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
