export const intersectionObserverAvailable = () => "IntersectionObserver" in window;

let observer;

const initObserver = () => {
  if (intersectionObserverAvailable()) {
    return new IntersectionObserver(function(entries, observer) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          let lazyImage = entry.target;
          lazyImage.src = lazyImage.dataset.src;
          observer.unobserve(lazyImage);
        }
      });
    });
  }
}


export const getObserver = () =>  {
  if (intersectionObserverAvailable() && !observer) {
    observer = initObserver();
  }
  return observer;
}