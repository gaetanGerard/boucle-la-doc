'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

import styles from './Navigation.module.scss';

export default function Navigation({ navigation }) {
  const pathname = usePathname();
  return (
    <nav className={styles.navigation}>
      <ul>
        {navigation.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className={pathname === item.href ? `${styles.active}` : ''}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}