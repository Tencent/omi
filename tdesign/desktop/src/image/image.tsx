import { h, tag, WeElement, classNames, OmiProps, createRef } from 'omi'
import { ImageProps } from './type'
import { StyledProps } from '@src/common'
import  observe from '../_common/js/utils/observe'
import css from './style'
import Space from '../space'
import '../icon/image'
import '../icon/image-error'

export interface ImageProps extends TdImageProps, StyledProps {}

export type TImageProps = ImageProps &
    StyledProps & {
        onClick?: (e: MouseEvent) => void;
        onMouseDown?: (e: MouseEvent) => void;
        draggable?: boolean;
    };

@tag('t-image')
export default class Image extends WeElement<TImageProps>{
    static css = css as string

    static defaultProps = {
        fit: 'fill',
        gallery: false,
        lazy: false,
        overlayTrigger: 'always',
        position: 'center',
        shape: 'square',
    }

    static propTypes = {
        alt: String,
        fallback: String,
        fit: String,
        gallery: Boolean,
        lazy: Boolean,
        overlayTrigger: String,
        position: String,
        referrerpolicy: String,
        shape: String,
        src: Object,
        srcset: Object, 
    }


    shouldLoad = !this.props.lazy
    handleLoadImage = () => { this.shouldLoad = true }

    imageRef = createRef()
    imageNode = this.imageRef.current
    observerRefValue: any = null

    isLoaded = false
    imageSrc = this.props.src
    previewUrl = typeof this.imageSrc === 'string' ? this.imageSrc : ''
    hasError = false
    
    installed() {
        if (this.hasError && this.previewUrl) {
            this.hasError = false
        }
        if (!this.props.lazy || !this.imageRef?.current) {
            return
        }
        const io = observe(this.imageRef.current, null, this.handleLoadImage, 0)
        this.observerRefValue = this.imageRef.current

        return () => {
            this.observerRefValue && io && io.unobserve(this.observerRefValue)
        }

    }
    render(props: TImageProps, store: any) {
        const {
            className,
            src,
            style,
            alt,
            fit,
            position,
            shape,
            placeholder,
            loading,
            error,
            overlayTrigger,
            lazy,
            gallery,
            overlayContent,
            srcset,
            fallback,
            onLoad,
            onError,
            ...restProps
        } = props;

        const classPrefix = 't'

        const handleLoad = (e: Event) => {
            this.isLoaded = true
            onLoad?.({ e })
        }

        /*  useEffect(() => {
              if (!lazy || !imageRef?.current) {
                return;
              }
          
              // https://stackoverflow.com/questions/67069827/cleanup-ref-issues-in-react
              let observerRefValue = null;
          
              const io = observe(imageRef.current, null, handleLoadImage, 0);
              observerRefValue = imageRef.current;
          
              return () => {
                observerRefValue && io && io.unobserve(observerRefValue);
              };
            }, [lazy, imageRef]);
        */
        const handleError = (e: Event) => {
            this.hasError = true
            if (fallback) {
                this.imageSrc = fallback
                this.hasError = false
            }
            onError?.({ e })
        }

        const hasMouseEvent = overlayTrigger === 'hover'
        let shouldShowOverlay = !hasMouseEvent
        const handleToggleOverlay = (overlay: boolean) => {
            shouldShowOverlay = overlay
        }

        const renderOverlay = () => {
            if (!overlayContent) {
                return null
            }
            return (
                <div
                    className={classNames(
                        `${classPrefix}-image__overlay-content`,
                        !shouldShowOverlay && `${classPrefix}-image__overlay-content--hidden`,
                    )}
                >
                    {overlayContent}
                </div>
            )
        }
        const renderPlaceholder = () => {
            if (!placeholder) {
                return null
            }
            return <div className={`${classPrefix}-image__placeholder`}>{placeholder}</div>
        };

        const renderGalleryShadow = () => {
            if (!gallery) {
                return null
            }
            return <div className={`${classPrefix}-image__gallery-shadow`} />
        }

        const renderImage = () => {
            const url = typeof this.imageSrc === 'string' ? this.imageSrc : this.previewUrl
            return (
                <img
                    src={url}
                    onError={handleError}
                    onLoad={handleLoad}
                    className={classNames(
                        `${classPrefix}-image`,
                        `${classPrefix}-image--fit-${fit}`,
                        `${classPrefix}-image--position-${position}`,
                    )}
                    alt={alt}
                />
            )
        }

        const renderImageSrcset = () => (
            <picture>
                {Object.entries(srcset).map(([type, url]) => (
                    <source key={url} type={type} srcSet={url} />
                ))}
                {props.src && renderImage()}
            </picture>
        )
        
        return (
            <div
                ref={this.imageRef}
                className={classNames(
                    `${classPrefix}-image__wrapper`,
                    `${classPrefix}-image__wrapper--shape-${shape}`,
                    gallery && `${classPrefix}-image__wrapper--gallery`,
                    hasMouseEvent && `${classPrefix}-image__wrapper--need-hover`,
                    className,
                )}
                style={style}
                {...(hasMouseEvent
                    ? {
                        onMouseEnter: () => handleToggleOverlay(true),
                        onMouseLeave: () => handleToggleOverlay(false),
                    }
                    : null)}
                {...restProps}
            >
                {renderPlaceholder()}

                {renderGalleryShadow()}

                {!(this.hasError || !this.shouldLoad) && (
                    <div>
                        {srcset && Object.keys(srcset).length ? renderImageSrcset() : renderImage()}
                        {!(this.hasError || !this.shouldLoad) && !this.isLoaded && (
                            <div className={`${classPrefix}-image__loading`}>
                                {loading || (
                                    <t-space direction="vertical" size={8} align="center">
                                        <t-icon-image size={24} />
                                        {/* support loading = '' to hide loading text */}
                                        {/* {typeof loading === 'string' ? loading : t(local.loadingText)} */}
                                        {loading}
                                    </t-space>
                                )}
                            </div>
                        )}
                    </div>
                )}

                {this.hasError && (
                    <div className={`${classPrefix}-image__error`}>
                        {error || (
                            <Space direction="vertical" size={8} align="center">
                                <t-image-error size={24} />
                                {/* {typeof error === 'string' ? error : t(local.errorText)} */}
                                {error}
                            </Space>
                        )}
                    </div>
                )}
                {renderOverlay()}
            </div>
        )
    }
}
