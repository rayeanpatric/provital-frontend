import React, { useState, useEffect, useRef } from "react";
import ImageCard from "../ImageCard/ImageCard";
import "./ImageGallery.scss";

const ImageGallery = ({ items }) => {
  const containerRef = useRef(null);
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(
    window.innerWidth <= 1024
  );
  const dragStartRef = useRef(null);
  const scrollStartRef = useRef(null);
  const isDraggingRef = useRef(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileOrTablet(window.innerWidth <= 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleTouchStart = (e) => {
    dragStartRef.current = e.touches[0].clientX;
    scrollStartRef.current = containerRef.current.scrollLeft;
    isDraggingRef.current = true;
    containerRef.current.style.scrollBehavior = "auto";
  };

  const handleTouchMove = (e) => {
    if (!isDraggingRef.current) return;

    const x = e.touches[0].clientX;
    const delta = dragStartRef.current - x;
    if (Math.abs(delta) > 5) {
      containerRef.current.scrollLeft = scrollStartRef.current + delta;
      e.preventDefault();
    }
  };
  const handleTouchEnd = () => {
    isDraggingRef.current = false;
    dragStartRef.current = null;
    containerRef.current.style.scrollBehavior = "smooth";

    if (isMobileOrTablet) {
      const scrollContainer = containerRef.current;
      const itemWidth = scrollContainer.offsetWidth * 0.9;
      const currentScroll = scrollContainer.scrollLeft;
      const totalWidth = itemWidth * items.length;

      // Handle infinite scroll wrapping
      if (currentScroll >= totalWidth) {
        scrollContainer.scrollLeft = 0;
      } else if (currentScroll <= 0) {
        scrollContainer.scrollLeft = totalWidth - itemWidth;
      } else {
        // Snap to nearest item
        const targetScroll = Math.round(currentScroll / itemWidth) * itemWidth;
        scrollContainer.scrollTo({
          left: targetScroll,
          behavior: "smooth",
        });
      }
    }
  };

  const handleMouseDown = (e) => {
    e.preventDefault();
    isDraggingRef.current = true;
    dragStartRef.current = e.clientX;
    scrollStartRef.current = containerRef.current.scrollLeft;
    containerRef.current.style.scrollBehavior = "auto";
    containerRef.current.style.cursor = "grabbing";

    const handleMouseMove = (e) => {
      if (!isDraggingRef.current) return;

      e.preventDefault();
      const x = e.clientX;
      const delta = dragStartRef.current - x;
      if (Math.abs(delta) > 5) {
        containerRef.current.scrollLeft = scrollStartRef.current + delta;
      }
    };

    const handleMouseUp = () => {
      isDraggingRef.current = false;
      dragStartRef.current = null;
      containerRef.current.style.cursor = "grab";
      containerRef.current.style.scrollBehavior = "smooth";

      if (isMobileOrTablet) {
        const itemWidth = containerRef.current.offsetWidth * 0.9;
        const currentScroll = containerRef.current.scrollLeft;
        const targetScroll = Math.round(currentScroll / itemWidth) * itemWidth;
        containerRef.current.scrollTo({
          left: targetScroll,
          behavior: "smooth",
        });
      }

      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  // Create duplicate items for infinite scroll effect
  const displayItems = isMobileOrTablet ? [...items, ...items] : items;

  return (
    <div className="image-gallery">
      <div
        ref={containerRef}
        className="image-gallery__container"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
      >
        {displayItems.map((item, index) => (
          <div key={`${item.title}-${index}`} className="image-gallery__item">
            <ImageCard
              image={item.image}
              title={item.title}
              description={item.description}
              duration={item.duration}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
