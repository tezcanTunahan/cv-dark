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
          <a>My skills</a>
          <a>Work</a>
          <a>Contact</a>
          <a>Blog</a>
        </nav>
      </div>
      <div className='navbar__bot'>bot</div>
    </div>
  );
}
