import { Link } from 'react-router-dom';

const NotFoundScreen = () => (
  <div className='full-height flex flex-column flex-center'>
    <img
      src={`${process.env.PUBLIC_URL}/images/logo.png`}
      alt='Crypto Exchange'
      draggable='false'
      className='logo-404'
    />
    <h1 className='title-404'>404</h1>
    <p className='paragraph-404'>Such a page could not be found on the Crypto Exchange server.</p>
    <Link to='/' className='button button-purple button-medium'>
      Go to the homepage
    </Link>
  </div>
);

export default NotFoundScreen;
