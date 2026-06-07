* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  color: #2c2a28;
  background: #f4efe7;
  font-family: Georgia, "Times New Roman", "Noto Serif SC", "Microsoft YaHei", serif;
}

img {
  max-width: 100%;
  display: block;
}

.grain {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 999;
  opacity: 0.09;
  background-image:
    radial-gradient(circle at 20% 20%, rgba(255,255,255,.7) 0 1px, transparent 1px),
    radial-gradient(circle at 70% 40%, rgba(0,0,0,.35) 0 1px, transparent 1px);
  background-size: 4px 4px, 6px 6px;
}

.cover {
  min-height: 100vh;
  display: grid;
  place-items: center;
  text-align: center;
  color: #f5efe7;
  background:
    radial-gradient(circle at 50% 45%, rgba(255, 214, 190, .16), transparent 30%),
    linear-gradient(135deg, #070817 0%, #101937 50%, #2b2846 100%);
}

.cover-inner {
  padding: 40px 24px;
}

.name-cn {
  font-size: clamp(4rem, 16vw, 9rem);
  letter-spacing: .08em;
  margin-bottom: 30px;
  font-family: "Noto Serif SC", "Microsoft YaHei", serif;
}

.cover h1 {
  font-weight: 400;
  font-size: clamp(2rem, 7vw, 4.8rem);
  line-height: 1.15;
  margin: 0 0 44px;
}

.open-btn {
  border: 1px solid rgba(255,255,255,.5);
  background: rgba(255,255,255,.08);
  color: #f5efe7;
  padding: 13px 36px;
  border-radius: 999px;
  font-size: 1rem;
  letter-spacing: .12em;
  cursor: pointer;
  backdrop-filter: blur(8px);
  transition: transform .3s ease, background .3s ease;
}

.open-btn:hover {
  transform: translateY(-2px);
  background: rgba(255,255,255,.17);
}

.chapter {
  min-height: 100vh;
  padding: 110px 8vw;
  position: relative;
  overflow: hidden;
}

.chapter-soft {
  background:
    radial-gradient(circle at 80% 20%, rgba(174, 202, 222, .35), transparent 25%),
    linear-gradient(180deg, #f7f0e6, #ede0d0);
}

.chapter-album {
  background:
    radial-gradient(circle at 20% 10%, rgba(155, 190, 172, .28), transparent 28%),
    linear-gradient(180deg, #f2eadf, #e9ddcc);
}

.chapter-night {
  color: #f3eee8;
  background:
    radial-gradient(circle at 50% 30%, rgba(120, 100, 180, .24), transparent 30%),
    linear-gradient(180deg, #070814, #11162d 55%, #0b0d18);
}

.chapter-deep {
  color: #f3eee8;
  background:
    radial-gradient(circle at 50% 20%, rgba(200, 170, 140, .18), transparent 28%),
    linear-gradient(180deg, #0b0c16, #1d1b26 55%, #2d241d);
}

.chapter-warm {
  background:
    radial-gradient(circle at 80% 20%, rgba(255, 204, 143, .35), transparent 30%),
    linear-gradient(180deg, #f4eadb, #f1dcc8 60%, #ead2bf);
}

.epilogue {
  color: #f4efe7;
  background:
    radial-gradient(circle at 50% 20%, rgba(255, 218, 190, .12), transparent 35%),
    linear-gradient(180deg, #11111b, #07070d);
}

.chapter-head {
  max-width: 780px;
  margin: 0 auto 70px;
  text-align: center;
}

.chapter-no {
  font-size: clamp(1.1rem, 3vw, 1.8rem);
  letter-spacing: .08em;
  opacity: .72;
  margin-bottom: 34px;
}

.lead {
  font-size: clamp(1.45rem, 4.2vw, 3.2rem);
  line-height: 1.45;
  font-weight: 400;
  margin: 0;
}

.lead.cn {
  font-family: "Noto Serif SC", "Microsoft YaHei", serif;
  font-size: clamp(1.25rem, 3.2vw, 2.25rem);
  line-height: 1.75;
}

.polaroid {
  width: min(760px, 94%);
  margin: 0 auto;
  padding: 18px 18px 32px;
  background: #fffaf1;
  box-shadow: 0 25px 70px rgba(64, 44, 30, .22);
  transform: rotate(-1deg);
}

.polaroid img {
  width: 100%;
}

figcaption {
  margin-top: 18px;
  text-align: center;
  font-size: clamp(.95rem, 2vw, 1.2rem);
  line-height: 1.5;
  color: inherit;
  opacity: .76;
}

.photo-grid {
  max-width: 1180px;
  margin: 0 auto 90px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 34px;
}

.photo-card {
  margin: 0;
  padding: 13px 13px 22px;
  background: rgba(255, 250, 241, .92);
  border-radius: 10px;
  box-shadow: 0 18px 40px rgba(80, 50, 20, .14);
  cursor: zoom-in;
}

.photo-card:nth-child(odd) {
  transform: rotate(-.8deg);
}

.photo-card:nth-child(even) {
  transform: rotate(.8deg);
}

.photo-card img {
  width: 100%;
  border-radius: 6px;
  object-fit: cover;
}

.note-intro,
.closing-line,
.distance-text {
  max-width: 720px;
  margin: 90px auto;
  text-align: center;
  font-size: clamp(1.4rem, 4vw, 3rem);
  line-height: 1.45;
}

.notes-wall {
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 34px;
  align-items: center;
}

.note {
  background: #fffdf6;
  padding: 10px;
  border-radius: 4px;
  box-shadow: 0 16px 38px rgba(50, 35, 25, .16);
  cursor: zoom-in;
}

.note:nth-child(1) { transform: rotate(-2deg); }
.note:nth-child(2) { transform: rotate(1deg); }
.note:nth-child(3) { transform: rotate(-.5deg); }
.note:nth-child(4) { transform: rotate(2deg); }
.note:nth-child(5) { transform: rotate(-1.5deg); }
.note:nth-child(6) { transform: rotate(.8deg); }
.note:nth-child(7) { transform: rotate(-1deg); }

.dialogue {
  max-width: 780px;
  margin: 0 auto 90px;
}

.line {
  width: fit-content;
  max-width: 86%;
  padding: 18px 22px;
  margin: 22px 0;
  border-radius: 20px;
  font-family: "Noto Serif SC", "Microsoft YaHei", sans-serif;
  font-size: clamp(1.1rem, 3vw, 1.9rem);
  line-height: 1.55;
}

.line span {
  display: block;
  opacity: .56;
  font-size: .8em;
  margin-bottom: 6px;
}

.girl {
  margin-right: auto;
  background: rgba(255,255,255,.1);
}

.boy {
  margin-left: auto;
  background: rgba(255,255,255,.18);
}

.confession {
  text-align: center;
  font-family: "Noto Serif SC", "Microsoft YaHei", serif;
  margin: 100px auto;
}

.confession p:first-child {
  font-size: clamp(2.6rem, 9vw, 6rem);
  margin: 0 0 24px;
}

.confession p:last-child {
  font-size: clamp(3rem, 11vw, 7.5rem);
  margin: 0;
  text-shadow: 0 0 30px rgba(255, 210, 210, .22);
}

.stacked-images {
  max-width: 920px;
  margin: 0 auto;
}

.screen-card,
.ring-card {
  margin: 70px auto;
  padding: 14px;
  background: rgba(255,255,255,.08);
  border: 1px solid rgba(255,255,255,.12);
  border-radius: 18px;
  box-shadow: 0 22px 70px rgba(0,0,0,.25);
  cursor: zoom-in;
}

.screen-card.light {
  background: rgba(255, 248, 236, .92);
  color: #2c2a28;
}

.screen-card img,
.ring-card img {
  width: 100%;
  border-radius: 12px;
}

.ring-card {
  max-width: 760px;
  background: rgba(255, 245, 225, .14);
}

.memory-flow {
  max-width: 1040px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 28px;
}

.memory-flow img {
  width: 100%;
  border-radius: 18px;
  box-shadow: 0 24px 55px rgba(70, 45, 25, .17);
  cursor: zoom-in;
}

.memory-flow .wide {
  grid-column: 1 / -1;
}

.letter {
  max-width: 860px;
  margin: 0 auto;
  font-family: "Noto Serif SC", "Microsoft YaHei", serif;
  font-size: clamp(1.08rem, 2.6vw, 1.55rem);
  line-height: 1.9;
  color: rgba(255,255,255,.88);
}

.final-love {
  margin-top: 70px;
  text-align: center;
  font-size: clamp(2.2rem, 7vw, 5rem);
  color: #fff7ee;
}

.reveal {
  opacity: 0;
  transform: translateY(36px);
  transition: opacity .9s ease, transform .9s ease;
}

.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

.lightbox {
  position: fixed;
  inset: 0;
  display: none;
  align-items: center;
  justify-content: center;
  background: rgba(4, 4, 8, .88);
  z-index: 1000;
  padding: 28px;
}

.lightbox.show {
  display: flex;
}

.lightbox img {
  max-height: 88vh;
  max-width: 92vw;
  border-radius: 12px;
  box-shadow: 0 24px 80px rgba(0,0,0,.55);
}

#closeLightbox {
  position: fixed;
  top: 22px;
  right: 26px;
  border: none;
  background: transparent;
  color: white;
  font-size: 46px;
  cursor: pointer;
}

@media (max-width: 760px) {
  .chapter {
    padding: 86px 5vw;
  }

  .photo-grid,
  .notes-wall,
  .memory-flow {
    grid-template-columns: 1fr;
  }

  .notes-wall {
    gap: 24px;
  }

  .line {
    max-width: 92%;
  }
}
