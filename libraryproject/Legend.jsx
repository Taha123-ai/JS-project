import styles from "./SeatGrid.module.css";
import Seat from "../Seat/Seat";
import { COLUMNS, ROWS_PER_COLUMN } from "../../data/mockData";

export default function SeatGrid({ seats, onSeatClick, matchedSeatNumbers, searchActive }) {
  return (
    <div className={styles.floor}>
      <div className={styles.floorLabel}>
        <div className={styles.eyebrow}>Ground Floor</div>
        <div className={styles.title}>Reading Hall — Seating Map</div>
      </div>

      <div className={styles.columnHeaders}>
        {COLUMNS.map((c) => (
          <div key={c} className={styles.columnHeader}>
            Section {c}
          </div>
        ))}
      </div>

      <div
        className={styles.grid}
        style={{
          gridTemplateColumns: `repeat(${COLUMNS.length}, 1fr)`,
          gridTemplateRows: `repeat(${ROWS_PER_COLUMN}, 1fr)`,
        }}
      >
        {seats.map((seat) => {
          let matchState = null;
          if (searchActive) {
            matchState = matchedSeatNumbers.has(seat.seatNumber) ? "match" : "dim";
          }
          return <Seat key={seat.seatNumber} seat={seat} onClick={onSeatClick} matchState={matchState} />;
        })}
      </div>
    </div>
  );
}
