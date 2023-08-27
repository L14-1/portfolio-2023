export function switchTheme(): void {
  const html = document.getElementById("htmlEl");
  const switchLight = document.getElementById("switch");
  const light = document.getElementById("light");
  const orb = document.getElementById("orb");

  if (!html || !switchLight || !light || !orb) return;

  switchLight.addEventListener("click", () => {
    light.classList.add("theme-switcher__light--active");
    orb.classList.add("theme-switcher__light__orb--active");
    html.style.height = "100vh";
    html.style.overflow = "hidden";
    setTimeout(() => {
      html.classList.toggle("dark");
      html.classList.toggle("light");
      html.classList.toggle("animated-appearence");
      light.classList.remove("theme-switcher__light--active");
      orb.classList.remove("theme-switcher__light__orb--active");
      html.style.height = "unset";
      html.style.overflow = "visible";
      setTimeout(() => {
        html.classList.remove("animated-appearence");
      }, 1000);
    }, 1500);
  });
}
