import myPic from '../img/image.png';

export default function Info() {
  return (
    <div className='info'>
      <img src={myPic} alt='person' />
      <h2 className='name'>Irumi</h2>
      <h5 className='position'>Frontend Developer</h5>
      <h6 className='website'>irumi.website</h6>
      <div className='buttons'>
        <button className='email'>Email</button>
        <button className='linkedin'>LinkedIn</button>
      </div>
    </div>
  );
}
