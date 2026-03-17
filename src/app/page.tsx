"use client"
import Link from "next/link";
import styles from "./page.module.css";

const pages = [
  {
    href: "/buttons",
    title: "Buttons Previews",
    description: "Button components imported from Figma designs",
    tag: "UI",
  },
  {
    href: "/badge",
    title: "Badge Previews",
    description: "Badges components imported from Figma designs",
    tag: "UI",
  },
  {
    href: "/small-badges",
    title: "Small Badge Previews",
    description: "Small Badges components imported from Figma designs",
    tag: "UI",
  },
  {
    href: "/premium-badge",
    title: "Premium Badge Previews",
    description: "Premium Badges components imported from Figma designs",
    tag: "UI",
  },
  {
    href: "/travel-badge",
    title: "Travel Badge Previews",
    description: "Travel Badges components imported from Figma designs",
    tag: "UI",
  },
  {
    href: "/range-slider",
    title: "Range Slider",
    description: "Draggable range slider component imported from Figma designs",
    tag: "UI",
  },
  {
    href: "/responsive-slider",
    title: "Responsive Range Slider",
    description: "Responsive dual-handle range slider with tooltips from Figma designs",
    tag: "UI",
  },
  {
    href: "/membership-plan-slider",
    title: "Membership Plan Slider",
    description: "Premium membership bar with progress and CTA button from Figma designs",
    tag: "UI",
  },
  {
    href: "/tabs",
    title: "Tabs",
    description: "Tab component with active state from Figma designs",
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
