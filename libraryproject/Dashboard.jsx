.topbar {
  height: 72px;
  flex-shrink: 0;
  background: rgba(244, 246, 251, 0.9);
  backdrop-filter: blur(6px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 32px;
  border-bottom: 1px solid var(--border);
  position: sticky;
  top: 0;
  z-index: 20;
}

.title {
  font-size: 21px;
  font-weight: 700;
  color: var(--text);
}

.subtitle {
  font-size: 12.5px;
  color: var(--text-muted);
  margin-top: 2px;
}

.right {
  display: flex;
  align-items: center;
  gap: 14px;
}

.iconBtn {
  width: 38px;
  height: 38px;
  border-radius: 9px;
  background: var(--card);
  border: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-muted);
  cursor: pointer;
  transition: all 0.15s ease;
}
.iconBtn:hover {
  border-color: var(--gold);
  color: var(--gold-deep);
  transform: translateY(-1px);
}

.avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: var(--gold-soft);
  color: var(--gold-deep);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12.5px;
  font-weight: 700;
  font-family: "Sora", sans-serif;
}
