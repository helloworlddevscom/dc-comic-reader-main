import React from 'react';
interface NavArrowInput {
    type: 'button';
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    className: string;
    srcImage: string;
    title: string;
}
export declare const NavArrowContainer: ({ type, onClick, className, srcImage, title }: NavArrowInput) => JSX.Element;
export {};
