import React from 'react';
interface ImageInput {
    src: string;
    placeholder: string;
    alt: string;
}
export declare const ImageLoad: React.MemoExoticComponent<({ src, placeholder, alt }: ImageInput) => JSX.Element>;
export {};
