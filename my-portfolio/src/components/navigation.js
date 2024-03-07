

function Navbar() {
  return (
    <header id="header" class="fixed-top" >
    <div className="nav">      
    <div className="container d-flex align-items-center justify-content-between">

    <h1 className="logo"><a href="#header">.</a></h1>



<nav id="navbar" className="navbar">
  <ul>
    <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
    <li><a className="nav-link scrollto" href="#about">About</a></li>
    <li><a className="nav-link scrollto" href="#services">Projects</a></li>
    <li><a className="nav-link scrollto " href="#work">Work</a></li>
    <li><a className="nav-link scrollto " href="#blog">Blog</a></li>

    <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
  </ul>
  <i className="bi bi-list mobile-nav-toggle"></i>
</nav>

</div>
    </div>
    </header>
  );
}

export default Navbar;