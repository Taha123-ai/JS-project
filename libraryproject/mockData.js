import styles from "./SeatModal.module.css";
import { getStudentBySeat, formatDate, SEAT_STATUS } from "../../data/mockData";

const STATUS_LABEL = {
  [SEAT_STATUS.ONE_SHIFT]: "One Shift Occupied",
  [SEAT_STATUS.FULL_DAY]: "Full Day Occupied",
};
const STATUS_CLASS = {
  [SEAT_STATUS.ONE_SHIFT]: styles.badgeOrange,
  [SEAT_STATUS.FULL_DAY]: styles.badgeRed,
};

const FEE_CLASS = {
  Paid: styles.badgeGreen,
  Due: styles.badgeOrange,
  Overdue: styles.badgeRed,
};

function initials(name) {
  return name.split(" ").map((p) => p[0]).slice(0, 2).join("").toUpperCase();
}

export default function SeatModal({ seat, onClose }) {
  if (!seat) return null;
  const student = seat.status === SEAT_STATUS.AVAILABLE ? null : getStudentBySeat(seat.seatNumber);

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.head}>
          <h3>
            Seat {seat.seatNumber}{" "}
            <span className={styles.sectionTag}>Section {seat.column}</span>
          </h3>
          <button className={styles.closeBtn} onClick={onClose} aria-label="Close">
            <CloseIcon />
          </button>
        </div>

        <div className={styles.body}>
          {student ? (
            <>
              <div className={styles.profileRow}>
                <div className={styles.avatar}>{initials(student.name)}</div>
                <div>
                  <div className={styles.studentName}>{student.name}</div>
                  <span className={`${styles.badge} ${STATUS_CLASS[student.status]}`}>
                    <span className={styles.badgeDot} />
                    {STATUS_LABEL[student.status]}
                  </span>
                </div>
              </div>

              <Row icon={<SeatIcon />} label="Seat Number" value={student.seatNumber} mono />
              <Row icon={<PhoneIcon />} label="Phone Number" value={student.phone} mono />
              <Row icon={<CalIcon />} label="Join Date" value={formatDate(student.joinDate)} />
              <Row icon={<CardIcon />} label="Membership Type" value={student.membership} />
              <Row icon={<ClockIcon />} label="Shift Timing" value={student.shiftTiming} />
              <Row
                icon={<TrendIcon />}
                label="Attendance"
                value={`${student.attendance}%`}
                valueColor={
                  student.attendance >= 80
                    ? "var(--available)"
                    : student.attendance >= 60
                    ? "var(--one-shift)"
                    : "var(--full-day)"
                }
              />
              <Row
                icon={<WalletIcon />}
                label="Fee Status"
                value={<span className={`${styles.badge} ${FEE_CLASS[student.feeStatus]}`}>{student.feeStatus}</span>}
              />
              <Row icon={<CalXIcon />} label="Membership Expiry" value={formatDate(student.membershipExpiry)} />
            </>
          ) : (
            <div className={styles.availableState}>
              <div className={styles.availableIcon}>
                <CheckIcon />
              </div>
              <div className={styles.availableTitle}>Seat Available</div>
              <div className={styles.availableSub}>
                Seat {seat.seatNumber} in Section {seat.column} is free and ready to be assigned.
              </div>
            </div>
          )}
        </div>

        <div className={styles.foot}>
          <button className={styles.closeTextBtn} onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

function Row({ icon, label, value, mono, valueColor }) {
  return (
    <div className={styles.row}>
      <div className={styles.rowKey}>
        {icon}
        {label}
      </div>
      <div className={styles.rowVal} style={{ color: valueColor, fontFamily: mono ? "JetBrains Mono, monospace" : undefined }}>
        {value}
      </div>
    </div>
  );
}

/* ---- inline icons ---- */
function iconProps(extra) {
  return { width: 14, height: 14, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", ...extra };
}
function CloseIcon() { return <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18M6 6l12 12" /></svg>; }
function SeatIcon() { return <svg {...iconProps()}><path d="M6 9V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4" /><path d="M5 9h14l-1 5H6L5 9Z" /><path d="M6 14v6M18 14v6" /></svg>; }
function PhoneIcon() { return <svg {...iconProps()}><path d="M5.5 3h3l1.5 5-2.2 1.6a12 12 0 0 0 6.1 6.1l1.6-2.2 5 1.5v3a2 2 0 0 1-2.2 2A17 17 0 0 1 3.5 5.2 2 2 0 0 1 5.5 3Z" /></svg>; }
function CalIcon() { return <svg {...iconProps()}><rect x="3" y="4.5" width="18" height="16" rx="2.2" /><path d="M3 9.5h18M8 3v3M16 3v3" /></svg>; }
function CardIcon() { return <svg {...iconProps()}><rect x="2.5" y="5" width="19" height="14" rx="2.2" /><path d="M2.5 9.5h19" /><path d="M6 15h4" /></svg>; }
function ClockIcon() { return <svg {...iconProps()}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3.3 2" /></svg>; }
function TrendIcon() { return <svg {...iconProps()}><path d="m4 15 5.5-5.5 4 4L21 6" /><path d="M15 6h6v6" /></svg>; }
function WalletIcon() { return <svg {...iconProps()}><path d="M3 7.5A2.5 2.5 0 0 1 5.5 5h11A2.5 2.5 0 0 1 19 7.5V8h1.5A1.5 1.5 0 0 1 22 9.5v8a1.5 1.5 0 0 1-1.5 1.5H5.5A2.5 2.5 0 0 1 3 16.5v-9Z" /><circle cx="16.5" cy="13.5" r="1.3" /></svg>; }
function CalXIcon() { return <svg {...iconProps()}><rect x="3" y="4.5" width="18" height="16" rx="2.2" /><path d="M3 9.5h18" /><path d="m9.5 14 5 5m0-5-5 5" /></svg>; }
function CheckIcon() { return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--available)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>; }
