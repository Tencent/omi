import React from "react";
type AnyProps = {
    [key: string]: any;
};
export declare function hyphenate(str: string): string;
declare const reactify: <T extends AnyProps = AnyProps>(WC: string) => React.ForwardRefExoticComponent<Omit<T, "ref"> & React.RefAttributes<HTMLElement | undefined>>;
export default reactify;
