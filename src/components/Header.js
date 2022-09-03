import logo from '../images/logo.svg'
export default function Header() {
  return (
    <header className='container header'>
      <img src={logo} className='image header__image' alt='Место' />
    </header>
  )
}
