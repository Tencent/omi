import { WeElement } from 'omi';
import { Hook } from 'flatpickr/dist/types/options';
import { Locale } from 'flatpickr/dist/types/locale';
import '@omiu/input';
interface Props {
    locale?: string;
    placeholder?: string;
    altFormat?: string;
    altInput?: boolean;
    altInputClass?: string;
    allowInput?: boolean;
    ariaDateFormat?: string;
    clickOpens?: boolean;
    dateFormat?: string;
    defaultDate?: object;
    defaultHour?: number;
    defaultMinute?: number;
    disable?: any[];
    disableMobile?: boolean;
    enable?: any[];
    enableTime?: boolean;
    enableSeconds?: boolean;
    formatDateFn?: (date: Date, format: string, locale: Locale) => string;
    hourIncrement?: number;
    minuteIncrement?: number;
    inline?: boolean;
    maxDate?: string;
    minDate?: string;
    mode?: string;
    nextArrow?: string;
    prevArrow?: string;
    noCalendar?: boolean;
    onChange?: Hook;
    onClose?: Hook;
    onOpen?: Hook;
    onReady?: Hook;
    onMonthChange?: Hook;
    onYearChange?: Hook;
    onValueUpdate?: Hook;
    parseDateFn?: (date: string, format: string) => Date;
    position?: string;
    shorthandCurrentMonth?: boolean;
    showMonths?: number;
    static?: boolean;
    time_24hr?: boolean;
    weekNumbers?: boolean;
    wrap?: boolean;
    theme?: string;
}
export default class Popover extends WeElement<Props> {
    static defaultProps: {
        theme: string;
    };
    static propTypes: {
        theme: StringConstructor;
    };
    onEnter: (evt: any) => void;
    timeout: any;
    onLeave: () => void;
    onEnterPopover: (evt: any) => void;
    onLeavePopover: () => void;
    installed(): Promise<void>;
    isShow: boolean;
    render(props: any): JSX.Element;
}
export {};
