import { h, tag, extractClass, WeElement, OmiProps, classNames, Ref } from 'omi'
import { AvatarContextProps } from './type'
import style from './style/index'
import size from './_example/size'
// const AvatarContext = React.createContext('default');

@tag('t-avatar-context')
export default class AvatarContext extends WeElement<AvatarContextProps> {
    static css = style

    static defaultProps = {
    }

    static propTypes = {
        size: String,
        children: String,
    }
    static Consumer: any
    static Provider: any
    render(props: OmiProps<AvatarContextProps, any>, store: any) {
        return (
            <AvatarContext.Consumer>
                {(inputSize: any) => <AvatarContext.Provider value={size || inputSize}>{this.children}</AvatarContext.Provider>}
            </ AvatarContext.Consumer>
        )
    }
}


