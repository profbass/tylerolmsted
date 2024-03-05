class FadeInElement {
    static elementsToAnimate = [];
    static animationStarted = false;

    static fadeElementIn(element, duration = 500, translateY = -10, translateYBool = false) {
        element.style.opacity = '0';
        if (translateYBool) {
            element.style.transform = `translateY(${translateY}px)`;
        }

        function animate(startTime) {
            return function(currentTime) {
                const elapsedTime = currentTime - startTime;
                const progress = Math.min(elapsedTime / duration, 1);
    
                element.style.opacity = `${progress}`;
                if (translateYBool) {
                    element.style.transform = `translateY(${translateY * (1 - progress)}px)`;
                }
    
                if (progress < 1) {
                    requestAnimationFrame(animate(startTime));
                } else {
                    const index = FadeInElement.elementsToAnimate.indexOf(animate(startTime));
                    if (index > -1) {
                        FadeInElement.elementsToAnimate.splice(index, 1);
                    }
                    if (FadeInElement.elementsToAnimate.length === 0) {
                        FadeInElement.animationStarted = false;
                    }
                }
            }
        }

        // Intersection Observer callback function
        function handleIntersection(entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    observer.unobserve(entry.target);
                    const animateFunc = animate(performance.now());
                    FadeInElement.elementsToAnimate.push(animateFunc);
                    if (!FadeInElement.animationStarted) {
                        FadeInElement.startAnimation();
                    }
                }
            });
        }

        // Create an Intersection Observer instance
        const observer = new IntersectionObserver(handleIntersection, {
            root: null,
            rootMargin: '0px',
            threshold: 0.3 // Adjust the threshold as needed
        });

        // Observe the element
        observer.observe(element);
    }

    static startAnimation() {
        FadeInElement.animationStarted = true;
        requestAnimationFrame((currentTime) => {
            FadeInElement.elementsToAnimate.forEach(animate => animate(currentTime));
            FadeInElement.elementsToAnimate = [];
        });
    }
}

export default FadeInElement;