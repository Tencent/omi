export = Omi;
export as namespace Omi;

declare namespace Omi {
	type Callback = (...args: any[]) => void;
	type Key = string | number;
	type Ref<T> = (instance: T) => void;
	type ComponentChild = VNode<any> | object | string | number | boolean | null;
	type ComponentChildren = ComponentChild[] | ComponentChild;

	interface Attributes {
		key?: string | number | any;
		css?: string
	}

	interface ClassAttributes<T> extends Attributes {
		ref?: Ref<T>;
	}

	interface OmiDOMAttributes {
		children?: ComponentChildren;
		dangerouslySetInnerHTML?: {
			__html: string;
		};
	}

	/**
	 * Use this to manually set the attributes of a custom element
	 *
	 * declare global {
	 *     namespace JSX {
	 * 	       interface IntrinsicElements {
	 *             'hello-element': Props & {
	 *                 propFromParent: string;
	 *             }
	 *         }
	 *     }
	 * }
	 */
	interface CustomElementBaseAttributes extends ClassAttributes<any>, OmiDOMAttributes {}
	interface Props extends ClassAttributes<any>, OmiDOMAttributes {}
	/**
	 * Define the contract for a virtual node in omi.
	 *
	 * A virtual node has a name, a map of attributes, an array
	 * of child {VNode}s and a key. The key is used by omi for
	 * internal purposes.
	 */
	interface VNode<P = any> {
		nodeName: string;
		attributes: P;
		children: Array<VNode<any> | string>;
		key?: Key | null;
	}

	type RenderableProps<P, RefType = any> = P & Attributes & { children?: ComponentChildren; ref?: Ref<RefType> };

	interface WeElement<P, D> extends HTMLElement {
		install?(): void;
		installed?(): void;
		uninstall?(): void;
		beforeUpdate?(): void;
		afterUpdate?(): void;
		updated?(): void;
		beforeRender?(): void;
		receiveProps?(props: RenderableProps<P>, data: D, oldProps:RenderableProps<P>): any;
		attrsToProps(): void;
		setAttribute(name: string, value: any): void;
	}

	interface ModelView<P, D> {
		install?(): void;
		installed?(): void;
		uninstall?(): void;
		beforeUpdate?(): void;
		afterUpdate?(): void;
		updated?(): void;
		beforeRender?(): void;
		receiveProps?(props: RenderableProps<P>, data: D, oldProps:RenderableProps<P>): any;
		attrsToProps(): void;
		setAttribute(name: string, value: any): void;
	}

	interface Component<P, D> extends HTMLElement {
		install?(): void;
		installed?(): void;
		uninstall?(): void;
		beforeUpdate?(): void;
		afterUpdate?(): void;
		updated?(): void;
		beforeRender?(): void;
		receiveProps?(props: RenderableProps<P>, data: D, oldProps:RenderableProps<P>): any;
		attrsToProps(): void;
		setAttribute(name: string, value: any): void;
	}

	abstract class WeElement<P = {}, D = {}> {
		constructor();

		// Allow static members to reference class type parameters
		// https://github.com/Microsoft/TypeScript/issues/24018
		static props: object;
		static data: object;
		static observe: boolean;
		static mergeUpdate: boolean;
		static css: string;

		props: RenderableProps<P>;
		data?: D;
		host?: HTMLElement;
		normalizedNodeName?: string;
		elementId: number;

		update?(): void;
		fire?(name: string, data?: object): void;
		css?(): string;
		// Abstract methods don't infer argument types
		// https://github.com/Microsoft/TypeScript/issues/14887
		abstract render(props: RenderableProps<P>, data: D): void;
	}

	// The class type (not instance of class)
	// https://stackoverflow.com/q/42753968/2777142
	interface WeElementConstructor {
		new(): WeElement;
	}

	abstract class ModelView<P = {}, D = {}> {
		constructor();

		// Allow static members to reference class type parameters
		// https://github.com/Microsoft/TypeScript/issues/24018
		static props: object;
		static data: object;
		static observe: boolean;
		static mergeUpdate: boolean;

		props: RenderableProps<P>;
		data: D;
		host: HTMLElement;

		update(): void;
		fire(name: string, data?: object): void;

		// Abstract methods don't infer argument types
		// https://github.com/Microsoft/TypeScript/issues/14887
		abstract render(props: RenderableProps<P>, data: D): void;
	}

	abstract class Component<P = {}, D = {}> {
		constructor();

		// Allow static members to reference class type parameters
		// https://github.com/Microsoft/TypeScript/issues/24018
		static props: object;
		static data: object;
		static observe: boolean;
		static mergeUpdate: boolean;
		static css: string;

		props: RenderableProps<P>;
		data?: D;
		host?: HTMLElement;
		normalizedNodeName?: string;
		elementId: number;

		update?(): void;
		fire?(name: string, data?: object): void;
		css?(): string;
		// Abstract methods don't infer argument types
		// https://github.com/Microsoft/TypeScript/issues/14887
		abstract render(props: RenderableProps<P>, data: D): void;
	}

	function h<P>(
		node: string,
		params: Attributes & P | null,
		...children: ComponentChildren[]
	): VNode<any>;
	function h(
		node: string,
		params: JSX.HTMLAttributes & JSX.SVGAttributes & Record<string, any> | null,
		...children: ComponentChildren[]
	): VNode<any>;

	function render(vnode: ComponentChild, parent: string | Element | Document | ShadowRoot | DocumentFragment, store?: object): any;

	function define(name: string, ctor: WeElementConstructor): void;
	function defineElement(name: string, ctor: WeElementConstructor): void;
	function tag(name: string, pure?: boolean): (ctor: WeElementConstructor) => void;
	function tick(callback: Callback, scope?: any): void;
	function nextTick(callback: Callback, scope?: any): void;
	function observe(target: WeElementConstructor): void;
	function getHost(element: WeElement): WeElement;
	function classNames(...args: any[]): string;
	function extractClass(...args: any[]): object;
	function o(obj: any): string;

	var options: {
		vnode?: (vnode: VNode<any>) => void;
		event?: (event: Event) => Event;
	};

	var elements: object
}


type Defaultize<Props, Defaults> =
	// Distribute over unions
	Props extends any
		? 	// Make any properties included in Default optional
			& Partial<Pick<Props, Extract<keyof Props, keyof Defaults>>>
			// Include the remaining properties from Props
			& Pick<Props, Exclude<keyof Props, keyof Defaults>>
		: never;

declare global {
	namespace JSX {
		interface Element extends Omi.VNode<any> {
		}

		interface ElementClass extends Omi.WeElement<any, any> {
		}

		interface ElementClass extends Omi.Component<any, any> {
		}

		interface ElementAttributesProperty {
			props: any;
		}

		interface ElementChildrenAttribute {
			children: any;
		}

		type LibraryManagedAttributes<Component, Props> =
			Component extends { defaultProps: infer Defaults }
				? Defaultize<Props, Defaults>
				: Props;

		interface SVGAttributes extends HTMLAttributes {
			accentHeight?: number | string;
			accumulate?: "none" | "sum";
			additive?: "replace" | "sum";
			alignmentBaseline?: "auto" | "baseline" | "before-edge" | "text-before-edge" | "middle" | "central" | "after-edge" | "text-after-edge" | "ideographic" | "alphabetic" | "hanging" | "mathematical" | "inherit";
			allowReorder?: "no" | "yes";
			alphabetic?: number | string;
			amplitude?: number | string;
			arabicForm?: "initial" | "medial" | "terminal" | "isolated";
			ascent?: number | string;
			attributeName?: string;
			attributeType?: string;
			autoReverse?: number | string;
			azimuth?: number | string;
			baseFrequency?: number | string;
			baselineShift?: number | string;
			baseProfile?: number | string;
			bbox?: number | string;
			begin?: number | string;
			bias?: number | string;
			by?: number | string;
			calcMode?: number | string;
			capHeight?: number | string;
			clip?: number | string;
			clipPath?: string;
			clipPathUnits?: number | string;
			clipRule?: number | string;
			colorInterpolation?: number | string;
			colorInterpolationFilters?: "auto" | "sRGB" | "linearRGB" | "inherit";
			colorProfile?: number | string;
			colorRendering?: number | string;
			contentScriptType?: number | string;
			contentStyleType?: number | string;
			cursor?: number | string;
			cx?: number | string;
			cy?: number | string;
			d?: string;
			decelerate?: number | string;
			descent?: number | string;
			diffuseConstant?: number | string;
			direction?: number | string;
			display?: number | string;
			divisor?: number | string;
			dominantBaseline?: number | string;
			dur?: number | string;
			dx?: number | string;
			dy?: number | string;
			edgeMode?: number | string;
			elevation?: number | string;
			enableBackground?: number | string;
			end?: number | string;
			exponent?: number | string;
			externalResourcesRequired?: number | string;
			fill?: string;
			fillOpacity?: number | string;
			fillRule?: "nonzero" | "evenodd" | "inherit";
			filter?: string;
			filterRes?: number | string;
			filterUnits?: number | string;
			floodColor?: number | string;
			floodOpacity?: number | string;
			focusable?: number | string;
			fontFamily?: string;
			fontSize?: number | string;
			fontSizeAdjust?: number | string;
			fontStretch?: number | string;
			fontStyle?: number | string;
			fontVariant?: number | string;
			fontWeight?: number | string;
			format?: number | string;
			from?: number | string;
			fx?: number | string;
			fy?: number | string;
			g1?: number | string;
			g2?: number | string;
			glyphName?: number | string;
			glyphOrientationHorizontal?: number | string;
			glyphOrientationVertical?: number | string;
			glyphRef?: number | string;
			gradientTransform?: string;
			gradientUnits?: string;
			hanging?: number | string;
			horizAdvX?: number | string;
			horizOriginX?: number | string;
			ideographic?: number | string;
			imageRendering?: number | string;
			in2?: number | string;
			in?: string;
			intercept?: number | string;
			k1?: number | string;
			k2?: number | string;
			k3?: number | string;
			k4?: number | string;
			k?: number | string;
			kernelMatrix?: number | string;
			kernelUnitLength?: number | string;
			kerning?: number | string;
			keyPoints?: number | string;
			keySplines?: number | string;
			keyTimes?: number | string;
			lengthAdjust?: number | string;
			letterSpacing?: number | string;
			lightingColor?: number | string;
			limitingConeAngle?: number | string;
			local?: number | string;
			markerEnd?: string;
			markerHeight?: number | string;
			markerMid?: string;
			markerStart?: string;
			markerUnits?: number | string;
			markerWidth?: number | string;
			mask?: string;
			maskContentUnits?: number | string;
			maskUnits?: number | string;
			mathematical?: number | string;
			mode?: number | string;
			numOctaves?: number | string;
			offset?: number | string;
			opacity?: number | string;
			operator?: number | string;
			order?: number | string;
			orient?: number | string;
			orientation?: number | string;
			origin?: number | string;
			overflow?: number | string;
			overlinePosition?: number | string;
			overlineThickness?: number | string;
			paintOrder?: number | string;
			panose1?: number | string;
			pathLength?: number | string;
			patternContentUnits?: string;
			patternTransform?: number | string;
			patternUnits?: string;
			pointerEvents?: number | string;
			points?: string;
			pointsAtX?: number | string;
			pointsAtY?: number | string;
			pointsAtZ?: number | string;
			preserveAlpha?: number | string;
			preserveAspectRatio?: string;
			primitiveUnits?: number | string;
			r?: number | string;
			radius?: number | string;
			refX?: number | string;
			refY?: number | string;
			renderingIntent?: number | string;
			repeatCount?: number | string;
			repeatDur?: number | string;
			requiredExtensions?: number | string;
			requiredFeatures?: number | string;
			restart?: number | string;
			result?: string;
			rotate?: number | string;
			rx?: number | string;
			ry?: number | string;
			scale?: number | string;
			seed?: number | string;
			shapeRendering?: number | string;
			slope?: number | string;
			spacing?: number | string;
			specularConstant?: number | string;
			specularExponent?: number | string;
			speed?: number | string;
			spreadMethod?: string;
			startOffset?: number | string;
			stdDeviation?: number | string;
			stemh?: number | string;
			stemv?: number | string;
			stitchTiles?: number | string;
			stopColor?: string;
			stopOpacity?: number | string;
			strikethroughPosition?: number | string;
			strikethroughThickness?: number | string;
			string?: number | string;
			stroke?: string;
			strokeDasharray?: string | number;
			strokeDashoffset?: string | number;
			strokeLinecap?: "butt" | "round" | "square" | "inherit";
			strokeLinejoin?: "miter" | "round" | "bevel" | "inherit";
			strokeMiterlimit?: string;
			strokeOpacity?: number | string;
			strokeWidth?: number | string;
			surfaceScale?: number | string;
			systemLanguage?: number | string;
			tableValues?: number | string;
			targetX?: number | string;
			targetY?: number | string;
			textAnchor?: string;
			textDecoration?: number | string;
			textLength?: number | string;
			textRendering?: number | string;
			to?: number | string;
			transform?: string;
			u1?: number | string;
			u2?: number | string;
			underlinePosition?: number | string;
			underlineThickness?: number | string;
			unicode?: number | string;
			unicodeBidi?: number | string;
			unicodeRange?: number | string;
			unitsPerEm?: number | string;
			vAlphabetic?: number | string;
			values?: string;
			vectorEffect?: number | string;
			version?: string;
			vertAdvY?: number | string;
			vertOriginX?: number | string;
			vertOriginY?: number | string;
			vHanging?: number | string;
			vIdeographic?: number | string;
			viewBox?: string;
			viewTarget?: number | string;
			visibility?: number | string;
			vMathematical?: number | string;
			widths?: number | string;
			wordSpacing?: number | string;
			writingMode?: number | string;
			x1?: number | string;
			x2?: number | string;
			x?: number | string;
			xChannelSelector?: string;
			xHeight?: number | string;
			xlinkActuate?: string;
			xlinkArcrole?: string;
			xlinkHref?: string;
			xlinkRole?: string;
			xlinkShow?: string;
			xlinkTitle?: string;
			xlinkType?: string;
			xmlBase?: string;
			xmlLang?: string;
			xmlns?: string;
			xmlnsXlink?: string;
			xmlSpace?: string;
			y1?: number | string;
			y2?: number | string;
			y?: number | string;
			yChannelSelector?: string;
			z?: number | string;
			zoomAndPan?: string;
		}

		interface PathAttributes {
			d: string;
		}

		interface EventHandler<E extends Event> {
			(event: E): void;
		}

		type ClipboardEventHandler = EventHandler<ClipboardEvent>;
		type CompositionEventHandler = EventHandler<CompositionEvent>;
		type DragEventHandler = EventHandler<DragEvent>;
		type FocusEventHandler = EventHandler<FocusEvent>;
		type KeyboardEventHandler = EventHandler<KeyboardEvent>;
		type MouseEventHandler = EventHandler<MouseEvent>;
		type TouchEventHandler = EventHandler<TouchEvent>;
		type UIEventHandler = EventHandler<UIEvent>;
		type WheelEventHandler = EventHandler<WheelEvent>;
		type AnimationEventHandler = EventHandler<AnimationEvent>;
		type TransitionEventHandler = EventHandler<TransitionEvent>;
		type GenericEventHandler = EventHandler<Event>;
		type PointerEventHandler = EventHandler<PointerEvent>;

		interface DOMAttributes extends Omi.OmiDOMAttributes {
			// Image Events
			onLoad?: GenericEventHandler;
			onError?: GenericEventHandler;
			onLoadCapture?: GenericEventHandler;

			// Clipboard Events
			onCopy?: ClipboardEventHandler;
			onCopyCapture?: ClipboardEventHandler;
			onCut?: ClipboardEventHandler;
			onCutCapture?: ClipboardEventHandler;
			onPaste?: ClipboardEventHandler;
			onPasteCapture?: ClipboardEventHandler;

			// Composition Events
			onCompositionEnd?: CompositionEventHandler;
			onCompositionEndCapture?: CompositionEventHandler;
			onCompositionStart?: CompositionEventHandler;
			onCompositionStartCapture?: CompositionEventHandler;
			onCompositionUpdate?: CompositionEventHandler;
			onCompositionUpdateCapture?: CompositionEventHandler;

			// Focus Events
			onFocus?: FocusEventHandler;
			onFocusCapture?: FocusEventHandler;
			onBlur?: FocusEventHandler;
			onBlurCapture?: FocusEventHandler;

			// Form Events
			onChange?: GenericEventHandler;
			onChangeCapture?: GenericEventHandler;
			onInput?: GenericEventHandler;
			onInputCapture?: GenericEventHandler;
			onSearch?: GenericEventHandler;
			onSearchCapture?: GenericEventHandler;
			onSubmit?: GenericEventHandler;
			onSubmitCapture?: GenericEventHandler;

			// Keyboard Events
			onKeyDown?: KeyboardEventHandler;
			onKeyDownCapture?: KeyboardEventHandler;
			onKeyPress?: KeyboardEventHandler;
			onKeyPressCapture?: KeyboardEventHandler;
			onKeyUp?: KeyboardEventHandler;
			onKeyUpCapture?: KeyboardEventHandler;

			// Media Events
			onAbort?: GenericEventHandler;
			onAbortCapture?: GenericEventHandler;
			onCanPlay?: GenericEventHandler;
			onCanPlayCapture?: GenericEventHandler;
			onCanPlayThrough?: GenericEventHandler;
			onCanPlayThroughCapture?: GenericEventHandler;
			onDurationChange?: GenericEventHandler;
			onDurationChangeCapture?: GenericEventHandler;
			onEmptied?: GenericEventHandler;
			onEmptiedCapture?: GenericEventHandler;
			onEncrypted?: GenericEventHandler;
			onEncryptedCapture?: GenericEventHandler;
			onEnded?: GenericEventHandler;
			onEndedCapture?: GenericEventHandler;
			onLoadedData?: GenericEventHandler;
			onLoadedDataCapture?: GenericEventHandler;
			onLoadedMetadata?: GenericEventHandler;
			onLoadedMetadataCapture?: GenericEventHandler;
			onLoadStart?: GenericEventHandler;
			onLoadStartCapture?: GenericEventHandler;
			onPause?: GenericEventHandler;
			onPauseCapture?: GenericEventHandler;
			onPlay?: GenericEventHandler;
			onPlayCapture?: GenericEventHandler;
			onPlaying?: GenericEventHandler;
			onPlayingCapture?: GenericEventHandler;
			onProgress?: GenericEventHandler;
			onProgressCapture?: GenericEventHandler;
			onRateChange?: GenericEventHandler;
			onRateChangeCapture?: GenericEventHandler;
			onSeeked?: GenericEventHandler;
			onSeekedCapture?: GenericEventHandler;
			onSeeking?: GenericEventHandler;
			onSeekingCapture?: GenericEventHandler;
			onStalled?: GenericEventHandler;
			onStalledCapture?: GenericEventHandler;
			onSuspend?: GenericEventHandler;
			onSuspendCapture?: GenericEventHandler;
			onTimeUpdate?: GenericEventHandler;
			onTimeUpdateCapture?: GenericEventHandler;
			onVolumeChange?: GenericEventHandler;
			onVolumeChangeCapture?: GenericEventHandler;
			onWaiting?: GenericEventHandler;
			onWaitingCapture?: GenericEventHandler;

			// MouseEvents
			onClick?: MouseEventHandler;
			onClickCapture?: MouseEventHandler;
			onContextMenu?: MouseEventHandler;
			onContextMenuCapture?: MouseEventHandler;
			onDblClick?: MouseEventHandler;
			onDblClickCapture?: MouseEventHandler;
			onDrag?: DragEventHandler;
			onDragCapture?: DragEventHandler;
			onDragEnd?: DragEventHandler;
			onDragEndCapture?: DragEventHandler;
			onDragEnter?: DragEventHandler;
			onDragEnterCapture?: DragEventHandler;
			onDragExit?: DragEventHandler;
			onDragExitCapture?: DragEventHandler;
			onDragLeave?: DragEventHandler;
			onDragLeaveCapture?: DragEventHandler;
			onDragOver?: DragEventHandler;
			onDragOverCapture?: DragEventHandler;
			onDragStart?: DragEventHandler;
			onDragStartCapture?: DragEventHandler;
			onDrop?: DragEventHandler;
			onDropCapture?: DragEventHandler;
			onMouseDown?: MouseEventHandler;
			onMouseDownCapture?: MouseEventHandler;
			onMouseEnter?: MouseEventHandler;
			onMouseEnterCapture?: MouseEventHandler;
			onMouseLeave?: MouseEventHandler;
			onMouseLeaveCapture?: MouseEventHandler;
			onMouseMove?: MouseEventHandler;
			onMouseMoveCapture?: MouseEventHandler;
			onMouseOut?: MouseEventHandler;
			onMouseOutCapture?: MouseEventHandler;
			onMouseOver?: MouseEventHandler;
			onMouseOverCapture?: MouseEventHandler;
			onMouseUp?: MouseEventHandler;
			onMouseUpCapture?: MouseEventHandler;

			// Selection Events
			onSelect?: GenericEventHandler;
			onSelectCapture?: GenericEventHandler;

			// Touch Events
			onTouchCancel?: TouchEventHandler;
			onTouchCancelCapture?: TouchEventHandler;
			onTouchEnd?: TouchEventHandler;
			onTouchEndCapture?: TouchEventHandler;
			onTouchMove?: TouchEventHandler;
			onTouchMoveCapture?: TouchEventHandler;
			onTouchStart?: TouchEventHandler;
			onTouchStartCapture?: TouchEventHandler;

			// Pointer Events
			onPointerOver?: PointerEventHandler;
			onPointerOverCapture?: PointerEventHandler;
			onPointerEnter?: PointerEventHandler;
			onPointerEnterCapture?: PointerEventHandler;
			onPointerDown?: PointerEventHandler;
			onPointerDownCapture?: PointerEventHandler;
			onPointerMove?: PointerEventHandler;
			onPointerMoveCapture?: PointerEventHandler;
			onPointerUp?: PointerEventHandler;
			onPointerUpCapture?: PointerEventHandler;
			onPointerCancel?: PointerEventHandler;
			onPointerCancelCapture?: PointerEventHandler;
			onPointerOut?: PointerEventHandler;
			onPointerOutCapture?: PointerEventHandler;
			onPointerLeave?: PointerEventHandler;
			onPointerLeaveCapture?: PointerEventHandler;
			onGotPointerCapture?: PointerEventHandler;
			onGotPointerCaptureCapture?: PointerEventHandler;
			onLostPointerCapture?: PointerEventHandler;
			onLostPointerCaptureCapture?: PointerEventHandler;

			// UI Events
			onScroll?: UIEventHandler;
			onScrollCapture?: UIEventHandler;

			// Wheel Events
			onWheel?: WheelEventHandler;
			onWheelCapture?: WheelEventHandler;

			// Animation Events
			onAnimationStart?: AnimationEventHandler;
			onAnimationStartCapture?: AnimationEventHandler;
			onAnimationEnd?: AnimationEventHandler;
			onAnimationEndCapture?: AnimationEventHandler;
			onAnimationIteration?: AnimationEventHandler;
			onAnimationIterationCapture?: AnimationEventHandler;

			// Transition Events
			onTransitionEnd?: TransitionEventHandler;
			onTransitionEndCapture?: TransitionEventHandler;
		}

		interface HTMLAttributes extends Omi.ClassAttributes<any>, DOMAttributes {
			// Standard HTML Attributes
			accept?: string;
			acceptCharset?: string;
			acceptcharset?: string;
			accessKey?: string;
			accesskey?: string;
			action?: string;
			allowFullScreen?: boolean;
			allowfullscreen?: boolean;
			allowTransparency?: boolean;
			allowtransparency?: boolean;
			alt?: string;
			async?: boolean;
			autocomplete?: string;
			autofocus?: boolean;
			autoPlay?: boolean;
			capture?: boolean;
			cellPadding?: number | string;
			cellpadding?: number | string;
			cellSpacing?: number | string;
			cellspacing?: number | string;
			charSet?: string;
			challenge?: string;
			checked?: boolean;
			class?: string;
			className?: string;
			cols?: number | string;
			colSpan?: number | string;
			colspan?: number | string;
			content?: string;
			contentEditable?: boolean;
			contenteditable?: boolean;
			contextMenu?: string;
			contextmenu?: string;
			controls?: boolean;
			controlsList?: string;
			controlslist?: string;
			coords?: string;
			crossOrigin?: string;
			crossorigin?: string;
			data?: string;
			dateTime?: string;
			datetime?: string;
			default?: boolean;
			defer?: boolean;
			dir?: string;
			disabled?: boolean;
			download?: any;
			draggable?: boolean;
			encType?: string;
			enctype?: string;
			form?: string;
			formAction?: string;
			formaction?: string;
			formEncType?: string;
			formenctype?: string;
			formMethod?: string;
			formmethod?: string;
			formNoValidate?: boolean;
			formnovalidate?: boolean;
			formTarget?: string;
			formtarget?: string;
			frameBorder?: number | string;
			frameborder?: number | string;
			headers?: string;
			height?: number | string;
			hidden?: boolean;
			high?: number | string;
			href?: string;
			hrefLang?: string;
			hreflang?: string;
			for?: string;
			httpEquiv?: string;
			httpequiv?: string;
			icon?: string;
			id?: string;
			inputMode?: string;
			inputmode?: string;
			integrity?: string;
			is?: string;
			keyParams?: string;
			keyparams?: string;
			keyType?: string;
			keytype?: string;
			kind?: string;
			label?: string;
			lang?: string;
			list?: string;
			loop?: boolean;
			low?: number | string;
			manifest?: string;
			marginHeight?: number | string;
			marginheight?: number | string;
			marginWidth?: number | string;
			marginwidth?: number | string;
			max?: number | string;
			maxLength?: number | string;
			maxlength?: number | string;
			media?: string;
			mediaGroup?: string;
			mediagroup?: string;
			method?: string;
			min?: number | string;
			minLength?: number | string;
			minlength?: number | string;
			multiple?: boolean;
			muted?: boolean;
			name?: string;
			noValidate?: boolean;
			novalidate?: boolean;
			open?: boolean;
			optimum?: number | string;
			pattern?: string;
			placeholder?: string;
			playsInline?: boolean;
			playsinline?: boolean;
			poster?: string;
			preload?: string;
			radioGroup?: string;
			radiogroup?: string;
			readOnly?: boolean;
			readonly?: boolean;
			rel?: string;
			required?: boolean;
			role?: string;
			rows?: number | string;
			rowSpan?: number | string;
			rowspan?: number | string;
			sandbox?: string;
			scope?: string;
			scoped?: boolean;
			scrolling?: string;
			seamless?: boolean;
			selected?: boolean;
			shape?: string;
			size?: number | string;
			sizes?: string;
			slot?: string;
			span?: number | string;
			spellcheck?: boolean;
			src?: string;
			srcset?: string;
			srcDoc?: string;
			srcdoc?: string;
			srcLang?: string;
			srclang?: string;
			srcSet?: string;
			start?: number | string;
			step?: number | string;
			style?: any;
			summary?: string;
			tabIndex?: number | string;
			tabindex?: number | string;
			target?: string;
			title?: string;
			type?: string;
			useMap?: string;
			usemap?: string;
			value?: string | string[] | number;
			width?: number | string;
			wmode?: string;
			wrap?: string;

			// RDFa Attributes
			about?: string;
			datatype?: string;
			inlist?: any;
			prefix?: string;
			property?: string;
			resource?: string;
			typeof?: string;
			vocab?: string;
		}

		interface IntrinsicElements {
			// HTML
			a: HTMLAttributes;
			abbr: HTMLAttributes;
			address: HTMLAttributes;
			area: HTMLAttributes;
			article: HTMLAttributes;
			aside: HTMLAttributes;
			audio: HTMLAttributes;
			b: HTMLAttributes;
			base: HTMLAttributes;
			bdi: HTMLAttributes;
			bdo: HTMLAttributes;
			big: HTMLAttributes;
			blockquote: HTMLAttributes;
			body: HTMLAttributes;
			br: HTMLAttributes;
			button: HTMLAttributes;
			canvas: HTMLAttributes;
			caption: HTMLAttributes;
			cite: HTMLAttributes;
			code: HTMLAttributes;
			col: HTMLAttributes;
			colgroup: HTMLAttributes;
			data: HTMLAttributes;
			datalist: HTMLAttributes;
			dd: HTMLAttributes;
			del: HTMLAttributes;
			details: HTMLAttributes;
			dfn: HTMLAttributes;
			dialog: HTMLAttributes;
			div: HTMLAttributes;
			dl: HTMLAttributes;
			dt: HTMLAttributes;
			em: HTMLAttributes;
			embed: HTMLAttributes;
			fieldset: HTMLAttributes;
			figcaption: HTMLAttributes;
			figure: HTMLAttributes;
			footer: HTMLAttributes;
			form: HTMLAttributes;
			h1: HTMLAttributes;
			h2: HTMLAttributes;
			h3: HTMLAttributes;
			h4: HTMLAttributes;
			h5: HTMLAttributes;
			h6: HTMLAttributes;
			head: HTMLAttributes;
			header: HTMLAttributes;
			hr: HTMLAttributes;
			html: HTMLAttributes;
			i: HTMLAttributes;
			iframe: HTMLAttributes;
			img: HTMLAttributes;
			input: HTMLAttributes;
			ins: HTMLAttributes;
			kbd: HTMLAttributes;
			keygen: HTMLAttributes;
			label: HTMLAttributes;
			legend: HTMLAttributes;
			li: HTMLAttributes;
			link: HTMLAttributes;
			main: HTMLAttributes;
			map: HTMLAttributes;
			mark: HTMLAttributes;
			menu: HTMLAttributes;
			menuitem: HTMLAttributes;
			meta: HTMLAttributes;
			meter: HTMLAttributes;
			nav: HTMLAttributes;
			noscript: HTMLAttributes;
			object: HTMLAttributes;
			ol: HTMLAttributes;
			optgroup: HTMLAttributes;
			option: HTMLAttributes;
			output: HTMLAttributes;
			p: HTMLAttributes;
			param: HTMLAttributes;
			picture: HTMLAttributes;
			pre: HTMLAttributes;
			progress: HTMLAttributes;
			q: HTMLAttributes;
			rp: HTMLAttributes;
			rt: HTMLAttributes;
			ruby: HTMLAttributes;
			s: HTMLAttributes;
			samp: HTMLAttributes;
			script: HTMLAttributes;
			section: HTMLAttributes;
			select: HTMLAttributes;
			slot: HTMLAttributes;
			small: HTMLAttributes;
			source: HTMLAttributes;
			span: HTMLAttributes;
			strong: HTMLAttributes;
			style: HTMLAttributes;
			sub: HTMLAttributes;
			summary: HTMLAttributes;
			sup: HTMLAttributes;
			table: HTMLAttributes;
			tbody: HTMLAttributes;
			td: HTMLAttributes;
			textarea: HTMLAttributes;
			tfoot: HTMLAttributes;
			th: HTMLAttributes;
			thead: HTMLAttributes;
			time: HTMLAttributes;
			title: HTMLAttributes;
			tr: HTMLAttributes;
			track: HTMLAttributes;
			u: HTMLAttributes;
			ul: HTMLAttributes;
			"var": HTMLAttributes;
			video: HTMLAttributes;
			wbr: HTMLAttributes;

			//SVG
			svg: SVGAttributes;
			animate: SVGAttributes;
			circle: SVGAttributes;
			clipPath: SVGAttributes;
			defs: SVGAttributes;
			ellipse: SVGAttributes;
			feBlend: SVGAttributes;
			feColorMatrix: SVGAttributes;
			feComponentTransfer: SVGAttributes;
			feComposite: SVGAttributes;
			feConvolveMatrix: SVGAttributes;
			feDiffuseLighting: SVGAttributes;
			feDisplacementMap: SVGAttributes;
			feFlood: SVGAttributes;
			feGaussianBlur: SVGAttributes;
			feImage: SVGAttributes;
			feMerge: SVGAttributes;
			feMergeNode: SVGAttributes;
			feMorphology: SVGAttributes;
			feOffset: SVGAttributes;
			feSpecularLighting: SVGAttributes;
			feTile: SVGAttributes;
			feTurbulence: SVGAttributes;
			filter: SVGAttributes;
			foreignObject: SVGAttributes;
			g: SVGAttributes;
			image: SVGAttributes;
			line: SVGAttributes;
			linearGradient: SVGAttributes;
			marker: SVGAttributes;
			mask: SVGAttributes;
			path: SVGAttributes;
			pattern: SVGAttributes;
			polygon: SVGAttributes;
			polyline: SVGAttributes;
			radialGradient: SVGAttributes;
			rect: SVGAttributes;
			stop: SVGAttributes;
			symbol: SVGAttributes;
			text: SVGAttributes;
			tspan: SVGAttributes;
			use: SVGAttributes;
			[tagName: string]: any;
		}
	}
}
