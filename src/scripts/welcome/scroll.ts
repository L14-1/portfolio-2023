export function scrollDown(): void {
  window.addEventListener("scroll", () => {
    const scroll = window.scrollY;
    scrollDisappearence(scroll);
    ExperienceCardAppearence(scroll);
    aboutCardAppearence(scroll);
  });
}

function scrollDisappearence(scroll: number): void {
  const title = document.querySelector<HTMLElement>("#welcome");
  title!.style.opacity = `${1 - scroll / (title!.offsetHeight / 1.7)}`;
}

function ExperienceCardAppearence(scroll: number): void {
  const cards = document.querySelectorAll<HTMLElement>(".experiences__card");
  if (cards.length === 0) return;
  for (const currentCard of cards) {
    let value = (scroll - currentCard.offsetTop + window.innerHeight) / 400;
    if (value > 1) value = 1;
    if (value < 0) value = 0;
    currentCard.style.opacity = `${value}`;
    currentCard.style.scale = `${value}`;
    currentCard.style.boxShadow = `0 0 ${value}rem var(--box-shadow-color)`;
  }
}

function aboutCardAppearence(scroll: number): void {
  const aboutSection = document.querySelector<HTMLElement>(".about");
  const card = document.querySelector<HTMLElement>(".about__container__card");
  if (!aboutSection || !card) return;
  const aboutSectionTop = aboutSection.offsetTop;
  let rotation = (aboutSectionTop - scroll) * 0.25;
  if (scroll < aboutSectionTop - 300) rotation = 90;
  if (scroll > aboutSectionTop) rotation = 0;
  if (rotation < 0) rotation = 0;
  if (rotation > 90) rotation = 90;
  card.style.transform = `rotateX(${rotation}deg)`;
  card.style.setProperty("--leftShine", `${rotation - 30}rem`);
}
