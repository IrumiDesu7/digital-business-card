import githubIcon from '../img/githubIcon.png';
import twitterIcon from '../img/twitterIcon.png';
import instagramIcon from '../img/instagramIcon.png';

export default function Footer() {
  return (
    <footer>
      <div className='socials'>
        <img src={twitterIcon} alt='Twitter icon' />
        <img src={instagramIcon} alt='Instagram icon' />
        <img src={githubIcon} alt='Github icon' />
      </div>
    </footer>
  );
}
