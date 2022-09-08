export default function Footer() {
  return (
    <footer className='container footer'>
      <p className='footer__copy'>
        &copy; {new Date().getFullYear()} Mesto Russia
      </p>
    </footer>
  )
}
