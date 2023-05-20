import Image from 'next/image';
import Link from 'next/link';
import './Nav.style.css'

function Nav(props) {
  return (
    <>
    <nav className='nav'>
          <div>
        <Image
        className='logo'
        src="logo.svg"
        width={50}
         height={50}
      alt="logo"
    />
    <h1>Lead Master</h1>
    </div>
    <Link href='/' className='btn'>
      <button>{props.button}</button>
    </Link>
        </nav>
    </>
  )
}

export default Nav