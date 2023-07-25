export function sayHello(): void {
    const getHours = new Date().getHours();
    if (getHours <= 5 || getHours >= 18) {
        document.querySelector<HTMLDivElement>('.welcome__title--hello')!.innerText = 'Bonsoir, je suis';
    }  
}