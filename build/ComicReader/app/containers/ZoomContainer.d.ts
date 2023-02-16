import React from 'react';
interface ZoomInput {
    type: 'button';
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    className: string;
    srcImage: string;
}
export declare const ZoomContainer: ({ type, onClick, className, srcImage }: ZoomInput) => JSX.Element;
export {};
