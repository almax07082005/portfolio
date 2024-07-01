document.querySelectorAll<HTMLAnchorElement>('.vertical-nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e: MouseEvent) {
        e.preventDefault();

        const targetElement = document.querySelector<HTMLElement>(this.getAttribute('href')!);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
