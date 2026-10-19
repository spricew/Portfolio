/**
 * Reveals elements when they enter the viewport by adding the `is-in` class,
 * which pairs with the hidden-state styles of `.proj-row` / `.fade-up-view`.
 * Once revealed an element is never hidden again, so scrolling back up can
 * not make it disappear (unlike `animation-timeline: view()`).
 *
 * Falls back to revealing everything at once when IntersectionObserver is
 * unavailable or the user prefers reduced motion.
 */
export function revealOnView(selector: string, threshold = 0.15): void {
  const elements = document.querySelectorAll<HTMLElement>(selector);

  if (elements.length === 0) return;

  if (
    !("IntersectionObserver" in window) ||
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    elements.forEach((element) => element.classList.add("is-in"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold }
  );

  elements.forEach((element) => observer.observe(element));
}
