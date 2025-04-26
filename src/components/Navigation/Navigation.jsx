'use client';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import Link from 'next/link';
import Image from 'next/image';

import styles from './Navigation.module.scss';

export default function Navigation({ navigation }) {
  const pathname = usePathname();
  return (
    <nav className={styles.navigation}>
      <ul>
        {navigation.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className={clsx(
              {
                [styles.active]: pathname === item.href || (item.href === '/documentation' && pathname.includes('/documentation')),
              }
            )} target={item.type === "internal" ? "_self" : "_blank"}>{item.haveIcon ? <Image src={item.icon} alt={item.label} className={styles.icon} width={32} height={32} /> : item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}