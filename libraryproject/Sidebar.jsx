import styles from "./StatCard.module.css";

const TONES = {
  gold: { bg: "var(--gold-soft)", fg: "var(--gold-deep)" },
  green: { bg: "var(--available-soft)", fg: "var(--available)" },
  orange: { bg: "var(--one-shift-soft)", fg: "var(--one-shift)" },
  red: { bg: "var(--full-day-soft)", fg: "var(--full-day)" },
  blue: { bg: "var(--blue-soft)", fg: "var(--blue)" },
};

export default function StatCard({ icon: IconCmp, label, value, sub, tone = "gold" }) {
  const t = TONES[tone] || TONES.gold;
  return (
    <div className={styles.card}>
      <div className={styles.iconWrap} style={{ background: t.bg, color: t.fg }}>
        <IconCmp />
      </div>
      <div className={styles.label}>{label}</div>
      <div className={styles.value}>{value}</div>
      {sub && (
        <div className={styles.sub} style={{ color: t.fg }}>
          {sub}
        </div>
      )}
    </div>
  );
}
