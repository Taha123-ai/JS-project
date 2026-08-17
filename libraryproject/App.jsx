.overlay {
  position: fixed;
  inset: 0;
  background: rgba(15, 24, 48, 0.5);
  backdrop-filter: blur(2px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  animation: fadeIn 0.18s ease;
  padding: 20px;
}

.modal {
  background: var(--card);
  border-radius: 18px;
  width: 100%;
  max-width: 440px;
  box-shadow: var(--shadow-lg);
  animation: popIn 0.22s cubic-bezier(0.2, 0.9, 0.3, 1.2);
  max-height: 88vh;
  overflow-y: auto;
}

.head {
  padding: 20px 24px;
  border-bottom: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.head h3 {
  font-size: 18px;
  font-weight: 700;
}
.sectionTag {
  font-size: 12.5px;
  color: var(--text-muted);
  font-weight: 500;
  font-family: "Inter", sans-serif;
}

.closeBtn {
  width: 30px;
  height: 30px;
  border-radius: 8px;
  border: none;
  background: #f2f4f9;
  color: var(--text-muted);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
.closeBtn:hover {
  background: var(--full-day-soft);
  color: var(--full-day);
}

.body {
  padding: 22px 24px;
}

.profileRow {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 18px;
}
.avatar {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: var(--gold-soft);
  color: var(--gold-deep);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 17px;
  font-weight: 700;
  font-family: "Sora", sans-serif;
  flex-shrink: 0;
}
.studentName {
  font-family: "Sora", sans-serif;
  font-weight: 700;
  font-size: 17px;
  color: var(--text);
}

.row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 11px 0;
  border-bottom: 1px solid #f1f2f8;
}
.row:last-child {
  border-bottom: none;
}
.rowKey {
  font-size: 12.5px;
  color: var(--text-muted);
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 500;
}
.rowVal {
  font-size: 13.6px;
  font-weight: 700;
  color: var(--text);
  text-align: right;
}

.badge {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 4px 11px;
  border-radius: 100px;
  font-size: 11.5px;
  font-weight: 700;
  margin-top: 5px;
}
.badgeDot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: currentColor;
}
.badgeGreen {
  background: var(--available-soft);
  color: var(--available);
}
.badgeOrange {
  background: var(--one-shift-soft);
  color: var(--one-shift);
}
.badgeRed {
  background: var(--full-day-soft);
  color: var(--full-day);
}

.availableState {
  text-align: center;
  padding: 20px 10px 8px;
}
.availableIcon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: var(--available-soft);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 16px;
}
.availableTitle {
  font-family: "Sora", sans-serif;
  font-size: 19px;
  font-weight: 700;
  color: var(--text);
}
.availableSub {
  font-size: 13px;
  color: var(--text-muted);
  margin-top: 8px;
  line-height: 1.5;
}

.foot {
  padding: 16px 24px;
  border-top: 1px solid var(--border);
  display: flex;
  justify-content: flex-end;
}
.closeTextBtn {
  padding: 10px 18px;
  border-radius: 9px;
  border: 1px solid var(--border);
  background: var(--card);
  font-size: 13.6px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.15s ease;
}
.closeTextBtn:hover {
  border-color: var(--gold);
  color: var(--gold-deep);
}
