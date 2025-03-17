import React from "react";
type Props = React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
    [key: string]: any;
};
export declare function hyphenate(str: string): string;
declare const reactify: (WC: any) => React.ForwardRefExoticComponent<Omit<Props, "ref"> & React.RefAttributes<HTMLElement | undefined>>;
export default reactify;
