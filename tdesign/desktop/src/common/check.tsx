import {createRef, classNames, WeElement, tag, OmiProps} from 'omi'
import { TdClassNamePefix } from '@src/utils/clsx'
import { StyledProps } from '@src/common';
import { CheckboxProps } from '@src/checkbox/type'
import { TNode } from '@src/common';
import { delKeyofString } from './helper';

export interface CheckProps extends CheckboxProps, StyledProps {
    type: 'radio' | 'radio-button' | 'checkbox';
    allowUncheck?: boolean;
    title?: string;
    children?: TNode;
    stopLabelTrigger?: Boolean;
}

export interface CheckContextValue {
    inject: (props: CheckProps) => CheckProps;
}
export const CheckContext = createRef<CheckContextValue>

@tag('t-check')
export default class Check extends WeElement<CheckProps>{
    
    render(props: OmiProps<CheckProps, any>, store: any){
        
        const classPrefix = 't'
        const {
            allowUncheck = false,
            type,
            disabled,
            name,
            value,
            onChange,
            indeterminate,
            children,
            label,
            className,
            style,
            readonly,
            onClick,
            ...htmlProps
        } = props

        const TOnChange: (
            checked: boolean,
            context: {
                e: Event
            },
        ) => void = onChange;
        
        let internalChecked: boolean
        const setInternalChecked = TOnChange


        const labelClassName = classNames(TdClassNamePefix(`${type}`), this.className, {
            [TdClassNamePefix(`is-checked`)]: internalChecked,
            [TdClassNamePefix(`is-disabled`)]: disabled,
            [TdClassNamePefix(`is-indeterminate`)]: indeterminate,
        });

        const input = (
            <input
                readOnly={readonly}
                type={type === 'radio-button' ? 'radio' : type}
                class={classNames(TdClassNamePefix(`${type}__former`))}
                checked={internalChecked}
                disabled={disabled}
                name={name}
                tabIndex={-1}
                value={typeof value === 'boolean' ? Number(value) : value}
                data-value={typeof value === 'string' ? `'${value}'` : value}
                data-allow-uncheck={allowUncheck || undefined}
                onClick={(e) => {
                    e.stopPropagation();
                    if ((type === 'radio-button' || type === 'radio') && allowUncheck && internalChecked) {
                        setInternalChecked(!e.currentTarget, { e });
                    }
                }}
                onChange={(e) => setInternalChecked(!e.currentTarget, { e })}
            />
        )
        // Checkbox/ Radio 内容为空则不再渲染 span，不存在 0:Number 的情况
        const showLabel = !!(children || label)

        const handleLabelClick = (e: Event) => {
            // 在tree等组件中使用  阻止label触发checked 与expand冲突
            if (this.props.stopLabelTrigger) e.preventDefault();
        }

        const onInnerClick = (e: MouseEvent) => {
            onClick?.({ e });
        }

        const ref = createRef
        return (
            <label
                ref={ref}
                tabIndex={disabled ? undefined : 0}
                class={labelClassName}
                title={props.title}
                style={style}
                {...delKeyofString(htmlProps, ['checkAll', 'stopLabelTrigger'])}
                onClick={onInnerClick}
            >
                {input}
                <span class={classNames(TdClassNamePefix(`${type}__input`))} />
                {showLabel && (
                    <span key="label" class={classNames(TdClassNamePefix(`${type}__label`))} onClick={handleLabelClick}>
                        {children || label}
                    </span>
                )}
            </label>
        );
    }
}
