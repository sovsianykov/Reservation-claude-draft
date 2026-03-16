import Link from "next/link";
import styles from "./page.module.css";

const pages = [
  {
    href: "/figma-previews",
    title: "Figma Previews",
    description: "Button components imported from Figma designs",
    tag: "UI",
  },
];

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.intro}>
          <h1>Components Library</h1>
          <p>A collection of UI components built with Next.js and React.</p>
        </div>

        <nav className={styles.nav}>
          {pages.map((page) => (
            <Link key={page.href} href={page.href} className={styles.navCard}>
              <span className={styles.navTag}>{page.tag}</span>
              <span className={styles.navTitle}>{page.title}</span>
              <span className={styles.navDesc}>{page.description}</span>
              <span className={styles.navArrow}>→</span>
            </Link>
          ))}
        </nav>
      </main>
    </div>
  );
}
