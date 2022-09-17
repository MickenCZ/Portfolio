import Link from "next/link"

export default function Navbar() {
  return (
    <nav id="navbar">
          <Link href="/">About</Link>
          <Link href="/work">Work</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/certifications" id="indent">Certifications</Link>
    </nav>
  )
}
