function exchange(str, a, b) {
    return str.split(a).map(function(item){return item.replace(new RegExp(b, 'g'), a)}).join(b);
}

function safeDoubleQuote(str) {
    return JSON.stringify(str).replace(/(^"|"$)/g, '');
}

function safeSingleQuote(str) {
    str = exchange(str, "'", '"');
    return exchange(safeDoubleQuote(str), "'", '"');
}

function escapeHtml(unsafe) {
    return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
         .replace(/'/g, "&#039;");
}

function scopedEvent(tpl,id) {
    return tpl.replace(/<[\s\S]*?[^=]>/g, function (item) {
        return item.replace(/on(abort|blur|cancel|canplay|canplaythrough|change|click|close|contextmenu|cuechange|dblclick|drag|dragend|dragenter|dragleave|dragover|dragstart|drop|durationchange|emptied|ended|error|focus|input|invalid|keydown|keypress|keyup|load|loadeddata|loadedmetadata|loadstart|mousedown|mouseenter|mouseleave|mousemove|mouseout|mouseover|mouseup|mousewheel|pause|play|playing|progress|ratechange|reset|resize|scroll|seeked|seeking|select|show|stalled|submit|suspend|timeupdate|toggle|volumechange|waiting|autocomplete|autocompleteerror|beforecopy|beforecut|beforepaste|copy|cut|paste|search|selectstart|wheel|webkitfullscreenchange|webkitfullscreenerror|touchstart|touchmove|touchend|touchcancel|pointerdown|pointerup|pointercancel|pointermove|pointerover|pointerout|pointerenter|pointerleave|Abort|Blur|Cancel|CanPlay|CanPlayThrough|Change|Click|Close|ContextMenu|CueChange|DblClick|Drag|DragEnd|DragEnter|DragLeave|DragOver|DragStart|Drop|DurationChange|Emptied|Ended|Error|Focus|Input|Invalid|KeyDown|KeyPress|KeyUp|Load|LoadedData|LoadedMetadata|LoadStart|MouseDown|MouseEnter|MouseLeave|MouseMove|MouseOut|MouseOver|MouseUp|MouseWheel|Pause|Play|Playing|Progress|RateChange|Reset|Resize|Scroll|Seeked|Seeking|Select|Show|Stalled|Submit|Suspend|TimeUpdate|Toggle|VolumeChange|Waiting|AutoComplete|AutoCompleteError|BeforeCopy|BeforeCut|BeforePaste|Copy|Cut|Paste|Search|SelectStart|Wheel|WebkitFullScreenChange|WebkitFullScreenError|TouchStart|TouchMove|TouchEnd|TouchCancel|PointerDown|PointerUp|PointerCancel|PointerMove|PointerOver|PointerOut|PointerEnter|PointerLeave)=('|"|{)([\s\S]*)('|"|})/g, function (eventStr, eventName, open, str, close) {
            if (str.indexOf('Omi.instances[') === 0 || str.indexOf('new Function(') === 0){
                return eventStr;
            }
            if (open === '{') {
                // JSX-like event bind
                const funcBody = `(${str}).bind(Omi.instances[${id}])(event)`;
                const result = `on${eventName}="new Function('event', '${escapeHtml(safeSingleQuote(funcBody))}')(event)"`;
                return result.split('\n').map(function(line) {
                    return line.endsWith(';') ? line : line + ';';
                }).join('');
            } else {
                if (!str.match(/.*?\(.*?\)/)) {
                    // if is not JSX-like event and is not a function call (func(xxx, ttt))
                    return eventStr;
                }
            }
            return eventStr.replace(/=(['|"])/, '=$1Omi.instances[' + id + '].');
        });
    });
};

export default scopedEvent;
