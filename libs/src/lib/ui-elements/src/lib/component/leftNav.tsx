'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
export async function LeftNav() {
  const pathname = usePathname()

  console.log(pathname)
  return (
    <div className="left-nav">
        <ul className="nav-list">
          <li className="create">
            <Link href="/"  className={pathname == '/' ? "active" : ""}>
              <span className="plus-icon">+</span> Create Stablecoin
            </Link>
          </li>
          <li>
            <Link className={pathname == '/operate' ? "active" : ""} href="/operate">Operate Stablecoins</Link>
          </li>
          <li>
            <Link className={pathname == '/role' ? "active" : ""} href="/role">Role Management</Link>
          </li>
          <li>
            <Link className={pathname == '/stableCoin' ? "active" : ""} href="/stableCoin">Stablecoin Details</Link>
          </li>
        </ul>
    </div>
  );
}
