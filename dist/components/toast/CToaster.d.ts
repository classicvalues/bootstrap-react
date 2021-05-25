import React, { HTMLAttributes, ReactElement } from 'react';
export interface CToasterProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * A string of all className you want applied to the base component. [docs]
     */
    className?: string;
    /**
     * Describes the placement of your component. [docs]
     *
     * @type 'top-start' | 'top' | 'top-end' | 'middle-start' | 'middle' | 'middle-end' | 'bottom-start' | 'bottom' | 'bottom-end' |
     * @default 'top-end'
     */
    placement?: 'top-start' | 'top-center' | 'top-end' | 'middle-start' | 'middle-center' | 'middle-end' | 'bottom-start' | 'bottom-center' | 'bottom-end' | string;
    /**
     * TODO:. [docs]
     */
    push?: ReactElement;
}
export declare const CToaster: React.ForwardRefExoticComponent<CToasterProps & React.RefAttributes<HTMLDivElement>>;