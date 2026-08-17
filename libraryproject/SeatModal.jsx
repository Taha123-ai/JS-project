import { NavLink } from "react-router-dom";
import { LIBRARY_NAME } from "../../data/mockData";
import styles from "./Sidebar.module.css";

const NAV_ITEMS = [
  { to: "/", label: "Dashboard", icon: HomeIcon, end: true },
  { to: "/seats", label: "Seat Allocation", icon: GridIcon, end: false },
];

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.brand}>
        <div className={styles.brandMark}>
          <TrophyIcon />
        </div>
        <div className={styles.brandText}>
          <div className={styles.name}>{LIBRARY_NAME}</div>
          <div className={styles.sub}>Seat Allocation Admin</div>
        </div>
      </div>

      <nav className={styles.nav}>
        <div className={styles.navLabel}>Menu</div>
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            className={({ isActive }) => `${styles.navItem} ${isActive ? styles.active : ""}`}
          >
            <item.icon />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className={styles.foot}>
        <div className={styles.avatar}>RM</div>
        <div className={styles.who}>
          <div className={styles.whoName}>Ravi Mehta</div>
          <div className={styles.whoRole}>Library Owner</div>
        </div>
      </div>
    </aside>
  );
}

function HomeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 11.5 12 4l9 7.5" />
      <path d="M5 10v9a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1v-9" />
    </svg>
  );
}
function GridIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
    </svg>
  );
}
function TrophyIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 4h8v5a4 4 0 0 1-8 0V4Z" />
      <path d="M8 5H4v1a4 4 0 0 0 4 4" />
      <path d="M16 5h4v1a4 4 0 0 1-4 4" />
      <path d="M12 13v3" />
      <path d="M9 20h6" />
      <path d="M9.5 16.5 10 20h4l.5-3.5" />
    </svg>
  );
}
