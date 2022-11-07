import { LazyLoadImage } from 'react-lazy-load-image-component';

interface IImageProps {
    src: string;
    alt?: string;
    className?: string;
    style?: {};
}

export function Image({ src, alt, className, style }: IImageProps) {
    return (
        <LazyLoadImage
            style={style}
            className={className}
            src={src}
            alt={alt}
            placeholderSrc={'/icons/icon-512x512.png'}
        />
    );
}
