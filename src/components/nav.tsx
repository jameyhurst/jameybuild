import Link from "next/link";

export default function Nav() {
  return (
    <nav className="site-nav">
      <div className="wrap">
        <Link href="/" className="logo">
          jamey.build
        </Link>
        <ul className="nav-links">
          <li><Link href="/blog">Blog</Link></li>
          <li><a href="#">Design</a></li>
          <li><a href="#">Tech</a></li>
          <li><a href="#">About</a></li>
        </ul>
      </div>
    </nav>
  );
}
