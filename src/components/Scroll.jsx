import { useEffect, useRef } from 'react';
import './Scroll.css';
import v1 from '../assets/videos/v1.mp4';
import v2 from '../assets/videos/v2.mp4';  
import v3 from '../assets/videos/v3.mp4';
import v4 from '../assets/videos/v4.mp4';
import v5 from '../assets/videos/v5.mp4';
import v6 from '../assets/videos/v6.mp4';

const Scroll = () => {
    const horizontalWrapperRef = useRef(null);
    const scrollContentRef = useRef(null);

    useEffect(() => {
        const horizontalWrapper = horizontalWrapperRef.current;
        const scrollContent = scrollContentRef.current;

        if (!horizontalWrapper || !scrollContent) return;

        // Calculate the total scrollable width
        const scrollContentWidth = scrollContent.scrollWidth;

        // Auto-movement variables
        let autoScrollPosition = 0;
        const autoScrollSpeed = 0.5; // Pixels per frame - adjust for speed

        // Clone content for infinite loop
        const contentClone = scrollContent.cloneNode(true);
        horizontalWrapper.appendChild(contentClone);

        // Set the wrapper width to accommodate both original and cloned content
        horizontalWrapper.style.width = `${scrollContentWidth * 2}px`;

        // Animation loop for automatic horizontal movement
        let animationFrameId;

        function animateScroll() {
            // Auto-scroll logic
            autoScrollPosition -= autoScrollSpeed;

            // Reset position when first set of items is out of view (infinite loop)
            if (autoScrollPosition <= -scrollContentWidth) {
                autoScrollPosition = 0;
            }

            // Apply the horizontal translation
            horizontalWrapper.style.transform = `translateX(${autoScrollPosition}px)`;

            animationFrameId = requestAnimationFrame(animateScroll);
        }

        // Start the animation
        animateScroll();

        // Cleanup function
        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div className="horizontal-container">
            
            <div className="horizontal-scroll-wrapper" ref={horizontalWrapperRef}>
            <div className="film-strip "></div>
                <div className="scroll-content" ref={scrollContentRef}>
                    <div className="scroll-item">
                        <video src={v1} alt="Scene 1" autoPlay muted loop />
                    </div>
                    <div className="scroll-item">
                        <video src={v2} alt="Scene 2" autoPlay muted loop />
                    </div>
                    <div className="scroll-item">
                        <video src={v3} alt="Scene 3"autoPlay muted loop />
                    </div>
                    <div className="scroll-item">
                        <video src={v4} alt="Scene 4" autoPlay muted loop />
                    </div>
                    <div className="scroll-item">
                        <video src={v5} alt="Scene 5" autoPlay muted loop />
                    </div>
                    <div className="scroll-item">
                        <video src={v6} alt="Scene 6" autoPlay muted loop />
                    </div>
                </div>
            </div>
            <div className="film-strip film-strip-bottom"></div>
        </div>
    );
};

export default Scroll;