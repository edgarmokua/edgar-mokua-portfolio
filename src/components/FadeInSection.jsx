import React from "react";

export default function FadeInSection({ children, delay, className = "" }) {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();
  React.useEffect(() => {
    const node = domRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      });
    });

    observer.observe(node);
    return () => {
      if (node) {
        observer.unobserve(node);
      }
    };
  }, []);
  return (
    <div
      className={`fade-in-section ${isVisible ? "is-visible" : ""} ${className}`.trim()}
      style={{ transitionDelay: delay }}
      ref={domRef}
    >
      {children}
    </div>
  );
}
