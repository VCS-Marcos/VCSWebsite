import { useState } from "react";
import { motion } from "framer-motion";

interface ImageWithShimmerProps {
    src: string;
    alt: string;
    className?: string;
    containerClassName?: string;
}

export const ImageWithShimmer = ({ src, alt, className = "", containerClassName = "" }: ImageWithShimmerProps) => {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <div className={`relative overflow-hidden ${containerClassName}`}>
            {/* Shimmer effect */}
            {!isLoaded && (
                <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-shimmer" />
            )}

            {/* Actual image */}
            <motion.img
                src={src}
                alt={alt}
                className={className}
                initial={{ opacity: 0 }}
                animate={{ opacity: isLoaded ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                onLoad={() => setIsLoaded(true)}
                loading="lazy"
            />
        </div>
    );
};

export default ImageWithShimmer;
