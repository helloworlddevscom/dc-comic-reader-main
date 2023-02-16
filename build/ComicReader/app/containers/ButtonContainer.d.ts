import React from 'react';
interface buttonInput {
    type: 'button';
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    className: string;
    srcImage: string;
    title: string;
}
export declare const ButtonContainer: ({ type, onClick, className, srcImage, title }: buttonInput) => JSX.Element;
export {};
