import { useEffect } from "react";

export default function useFadeInEffect() {
  useEffect(() => {
    const faders = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      });
    });
    faders.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}
