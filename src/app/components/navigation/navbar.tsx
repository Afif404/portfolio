import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="navbar">
          <div className="navbar-logo">
            <Link href="/">Company</Link>
          </div>
          <ul className="navbar-links">
            <li><Link href="#about">About</Link></li>
            <li><Link href="#services">Services</Link></li>
            <li><Link href="#contact">Contact</Link></li>
          </ul>
        </nav>
      );
    };
    