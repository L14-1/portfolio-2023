export function scrollSlide(): void {
    window.addEventListener('scroll', () => {
        const scroll = window.scrollY;
        const titles = document.querySelectorAll<HTMLElement>('.section-title');
        if (titles.length === 0) return;
        for (const currentTitle of titles)  {
            currentTitle.style.transform = `translateX(${scroll - 350 + (900 - currentTitle.offsetTop)}px)`;
        }
    })
}