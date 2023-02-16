import React from 'react';
interface MinimizerInput {
    type: 'button';
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    className: string;
    srcImage: string;
    title: string;
}
export declare const MinimizerContainer: ({ type, onClick, className, srcImage, title }: MinimizerInput) => JSX.Element;
export {};
