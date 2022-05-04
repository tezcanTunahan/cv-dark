import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faGithub,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className='navbar__top'>
        <h3>Tunahan</h3>
        <p>Web developer</p>
      </div>
      <div className='navbar__mid'>
        <nav className='navbar__mid__nav'>
          <a>About</a>
          <a>Work</a>
          <a>My skills</a>
          <a>Contact</a>
          <a>Blog</a>
        </nav>
      </div>
      <div className='navbar__bot'>
        <a href='https://www.linkedin.com/in/tunahan-t-055244211/'>
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href='https://github.com/tezcanTunahan'>
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href='https://www.instagram.com/tunahantezcaan/'>
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
    </div>
  );
}
