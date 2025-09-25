import clsx from "clsx";
import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa";

interface SliderProps {
    images: string[];
    position?: "top" | "center" | "bottom";
    height?: 'max'
}

const Slider: React.FC<SliderProps> = ({ images, position = "center", height }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [previousIndex, setPreviousIndex] = useState<number | null>(null);
    const [nextIndex, setNextIndex] = useState<number | null>(null);

    const handleNext = () => {
        setPreviousIndex(activeIndex);

        const newIndex = activeIndex === images.length - 1 ? 0 : activeIndex + 1;
        const newNextIndex = newIndex === images.length - 1 ? 0 : newIndex + 1;

        setActiveIndex(newIndex);
        setNextIndex(newNextIndex);
    };

    return (
        <div className="relative flex justify-center h-full w-full">
            <div
                className={clsx(
                    "relative flex h-full w-full justify-center",
                    {
                        "items-center": position === "center",
                        "items-start": position === "top",
                        "items-end": position === "bottom",
                    }
                )}
            >
                {images.map((img, idx) => (
                    <Slide
                        key={idx}
                        img={img}
                        index={idx}
                        activeIndex={activeIndex}
                        previousIndex={previousIndex}
                        nextIndex={nextIndex}
                        total={images.length}
                        height={height}
                    />
                ))}

                {/* Bouton navigation */}
                <button
                    onClick={handleNext}
                    aria-label="Suivant"
                    className={clsx(
                        "absolute right-35 lg:right-0 -translate-y-1/2 p-3 border-2 cursor-pointer",
                        "hover:scale-120 border-white hover:bg-white hover:text-black",
                        "rounded-full font-bold transition z-20",
                        {
                            "top-1/2": position === "center",
                            "top-30": position === "top",
                            "bottom-17": position === "bottom",
                        }
                    )}
                >
                    <FaChevronRight />
                </button>
            </div>
        </div>
    );
};

export default Slider;

// ================= Slide Component ================= //

interface SlideProps {
    img: string;
    index: number;
    activeIndex: number;
    previousIndex: number | null;
    nextIndex: number | null;
    total: number;
    height?: 'max'
}

const SLIDE_WIDTH = 337;

const Slide: React.FC<SlideProps> = ({ img, index, activeIndex, previousIndex, nextIndex, total, height }) => {
    const isActive = index === activeIndex;
    const isPrevious = index === previousIndex;
    const isNext = index === nextIndex;


    let offset = index - activeIndex;
    if (offset < 0) offset += total;

    return (
        <div
            className={clsx(
                { "h-[237px]": height !== 'max' },
                { "h-full": height === 'max' }, "absolute w-[294px]  rounded-3xl transition-all duration-700 ease-in-out",
                isActive
                    ? "z-10  scale-100"
                    : "z-0 scale-80 brightness-40",
                isPrevious && "animate-slideOutIn",
                isNext && "animate-slideInNext"
            )}
            style={{
                transform: `translateX(${offset * SLIDE_WIDTH}px)`,
                "--tx": `${offset * SLIDE_WIDTH}px`,
            } as React.CSSProperties}
        >
            <img
                src={img}
                alt={`slide-${index}`}
                className="w-full h-full object-cover rounded-3xl"
            />
        </div>
    );
};
