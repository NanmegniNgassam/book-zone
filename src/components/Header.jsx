import Link from 'next/link';

export default function Header() {
  return (
    <header className="site-header">
      <div className="container">
        <div className="header-content">
          <Link href="/" className="header-title-container">
            <h1 className="site-title">BookZone</h1>
            <span className="tagline">The Readers Booking Blog</span>
          </Link>
          <nav>
            <Link href="/create">
              Create
            </Link>
            <Link href="/about">
              About
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}