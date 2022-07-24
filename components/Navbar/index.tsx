import { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './index.module.scss';
import { navs } from './navConfig';

const Navbar: NextPage = () => {
  const router = useRouter();

  console.log('router', router);

  return (
    <div className={styles.navbar}>
      <section className={styles.logoArea}>BLOG-C</section>
      <section className={styles.linkArea}>
        {navs.map((nav) => (
          <Link key={nav.value} href={nav.value}>
            <a className={router.pathname === nav.value ? styles.active : ''}>
              {nav.label}
            </a>
          </Link>
        ))}
      </section>
    </div>
  );
};

export default Navbar;
