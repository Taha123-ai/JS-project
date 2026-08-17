import styles from "./Seat.module.css";
import { SEAT_STATUS } from "../../data/mockData";

const STATUS_CLASS = {
  [SEAT_STATUS.AVAILABLE]: styles.available,
  [SEAT_STATUS.ONE_SHIFT]: styles.oneShift,
  [SEAT_STATUS.FULL_DAY]: styles.fullDay,
};

export default function Seat({ seat, onClick, matchState }) {
  // matchState: "match" | "dim" | null (null = no active search)
  const dimmed = matchState === "dim";
  const highlighted = matchState === "match";

  return (
    <button
      className={`${styles.seat} ${STATUS_CLASS[seat.status]} ${dimmed ? styles.dimmed : ""} ${highlighted ? styles.highlighted : ""}`}
      onClick={() => onClick(seat)}
      title={`Seat ${seat.seatNumber}`}
    >
      <span className={styles.dot} />
      <span className={styles.number}>{seat.seatNumber}</span>
    </button>
  );
}
