/* ===========================
   RESET & BASE
=========================== */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  --violet:       #7c3aed;
  --violet-light: #a78bfa;
  --violet-dark:  #5b21b6;
  --pink:         #f9a8d4;
  --pink-light:   #fce7f3;
  --yellow:       #fef08a;
  --white:        #ffffff;
  --bg:           #f5f3ff;
  --text-dark:    #1e1b4b;
  --text-mid:     #4c1d95;
  --radius-card:  18px;
  --radius-btn:   50px;
  --shadow:       0 8px 32px rgba(124, 58, 237, 0.15);
  --shadow-hover: 0 16px 40px rgba(124, 58, 237, 0.28);
  --transition:   0.3s ease;
}

body {
  font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
  background: linear-gradient(135deg, #ede9fe 0%, #fce7f3 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-dark);
}

/* ===========================
   SCREENS
=========================== */
.screen {
  display: none;
  width: 100%;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.screen.active {
  display: flex;
}

/* ===========================
   WELCOME SCREEN
=========================== */
.welcome-card {
  background: var(--white);
  border-radius: var(--radius-card);
  box-shadow: var(--shadow);
  padding: 3.5rem 3rem;
  max-width: 520px;
  width: 100%;
  text-align: center;
}

.title {
  font-size: 2.8rem;
  font-weight: 800;
  color: var(--violet);
  margin-bottom: 0.6rem;
  letter-spacing: -0.5px;
}

.subtitle {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--violet-dark);
  margin-bottom: 1.2rem;
}

.description {
  font-size: 1rem;
  color: #6b7280;
  line-height: 1.7;
  margin-bottom: 2rem;
}

/* ===========================
   BUTTONS
=========================== */
.btn {
  cursor: pointer;
  border: none;
  border-radius: var(--radius-btn);
  font-size: 1.05rem;
  font-weight: 700;
  padding: 0.85rem 2.4rem;
  transition: transform var(--transition), box-shadow var(--transition), background var(--transition);
  letter-spacing: 0.3px;
}

.btn-primary {
  background: linear-gradient(135deg, var(--violet) 0%, var(--violet-light) 100%);
  color: var(--white);
  box-shadow: 0 4px 18px rgba(124, 58, 237, 0.35);
}

.btn-primary:hover {
  transform: translateY(-3px) scale(1.03);
  box-shadow: 0 10px 28px rgba(124, 58, 237, 0.45);
}

.btn-primary:active {
  transform: translateY(0) scale(0.98);
}

/* ===========================
   GAME SCREEN
=========================== */
.game-wrapper {
  width: 100%;
  max-width: 720px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.game-title {
  font-size: 2rem;
  font-weight: 800;
  color: var(--violet);
  letter-spacing: -0.5px;
}

/* Stats bar */
.stats {
  display: flex;
  gap: 1.2rem;
  flex-wrap: wrap;
  justify-content: center;
}

.stat-box {
  background: var(--white);
  border-radius: 14px;
  box-shadow: var(--shadow);
  padding: 0.75rem 1.6rem;
  text-align: center;
  min-width: 160px;
}

.stat-label {
  display: block;
  font-size: 0.78rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  color: var(--violet-light);
  margin-bottom: 0.2rem;
}

.stat-value {
  display: block;
  font-size: 1.7rem;
  font-weight: 800;
  color: var(--violet);
}

/* ===========================
   CARD GRID
=========================== */
.card-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  width: 100%;
}

/* ===========================
   CARDS (flip mechanic)
=========================== */
.card {
  aspect-ratio: 1 / 1;
  perspective: 800px;
  cursor: pointer;
}

.card-inner {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: var(--radius-card);
}

/* Flipped state */
.card.flipped .card-inner {
  transform: rotateY(180deg);
}

/* Matched state */
.card.matched .card-inner {
  transform: rotateY(180deg);
}

.card.matched .card-front {
  background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%);
  border-color: #34d399;
}

/* Front face (emoji) */
.card-front,
.card-back {
  position: absolute;
  inset: 0;
  border-radius: var(--radius-card);
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-front {
  background: var(--white);
  border: 2.5px solid var(--violet-light);
  box-shadow: var(--shadow);
  font-size: 2.8rem;
  transform: rotateY(180deg);
  transition: border-color var(--transition), background var(--transition);
}

/* Back face (decorative) */
.card-back {
  background: linear-gradient(135deg, var(--violet) 0%, #a855f7 100%);
  box-shadow: var(--shadow);
  font-size: 1.8rem;
  color: rgba(255,255,255,0.25);
  user-select: none;
}

.card-back::after {
  content: '?';
  font-size: 2.2rem;
  font-weight: 900;
  color: rgba(255, 255, 255, 0.55);
}

/* Hover effect (only unflipped, unmatched) */
.card:not(.flipped):not(.matched):hover .card-back {
  background: linear-gradient(135deg, var(--violet-dark) 0%, var(--violet) 100%);
  box-shadow: var(--shadow-hover);
  transform: scale(1.04) translateY(-3px);
  transition: transform var(--transition), box-shadow var(--transition), background var(--transition);
}

/* ===========================
   END SCREEN
=========================== */
.end-card {
  background: var(--white);
  border-radius: var(--radius-card);
  box-shadow: var(--shadow);
  padding: 3.5rem 3rem;
  max-width: 520px;
  width: 100%;
  text-align: center;
}

/* ===========================
   RESPONSIVE
=========================== */
@media (max-width: 600px) {
  .card-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 0.7rem;
  }

  .card-front {
    font-size: 2rem;
  }

  .title {
    font-size: 2rem;
  }

  .welcome-card,
  .end-card {
    padding: 2.5rem 1.5rem;
  }
}

@media (min-width: 601px) and (max-width: 900px) {
  .card-grid {
    grid-template-columns: repeat(4, 1fr);
  }
} 