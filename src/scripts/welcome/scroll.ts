export function scrollDisappearence(): void {
    window.addEventListener('scroll', () => {
        const scroll = window.scrollY;
        const title = document.querySelector<HTMLElement>('#welcome');
        title!.style.opacity = `${1 - scroll / (title!.offsetHeight / 1.7)}`;
    })
}

export function cardAppearence(): void {
    window.addEventListener('scroll', () => {
        const scroll = window.scrollY;
        const cards = document.querySelectorAll<HTMLElement>('.experiences__card');
        if (cards.length === 0) return;
        for (const currentCard of cards) {
            let value = (scroll - currentCard.offsetTop + window.innerHeight) / 400;
            if (value > 1) value = 1;
            if (value < 0) value = 0;
            currentCard.style.opacity = `${value}`;
            currentCard.style.scale = `${value}`;
            currentCard.style.boxShadow = `0 0 ${value}rem rgba(0, 0, 0, 0.5)`;
        }
    });
}