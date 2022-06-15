import myPic from '../img/image.png';
import mail from '../img/mailIcon.png';
import linkedIn from '../img/linkedInIcon.png';

export default function Info() {
  return (
    <div className='info'>
      <img className='profilePic' src={myPic} alt='person' />
      <h2 className='name'>Irumi</h2>
      <h5 className='position'>Frontend Developer</h5>
      <h6 className='website'>irumi.website</h6>
      <div className='buttons'>
        <button className='email'>
          <img className='emailIcon' src={mail} alt='' />
          Email
        </button>
        <button className='linkedin'>
          <img className='linkedInIcon' src={linkedIn} alt='' />
          LinkedIn
        </button>
      </div>
    </div>
  );
}
