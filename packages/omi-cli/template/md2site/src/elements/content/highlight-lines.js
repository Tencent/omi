
// Iterates through `array`, running `callback` for each `array` element.
function forEach(array, callback) {
    var i = -1, length = array ? array.length : 0;
    while (++i < length) {
        callback(array[i]);
    }
}

function indexOf(array, elem) {
    var i = -1, length = array ? array.length : 0;
    while (++i < length) {
        if (array[i] === elem) {
            return i;
        }
    }
}
function highlightLines() {
    // TODO: mark as parsed.
    forEach(document.querySelectorAll('pre code'), function(element) {
        // Trim whitespace if the `data-trim` attribute is present.
        if (element.hasAttribute('data-trim') && typeof element.innerHTML.trim == 'function') {
            element.innerHTML = element.innerHTML.trim();
        }

        // Highlight code using highlight.js.
        hljs.highlightBlock(element);

        // Split highlighted code into lines.
        var openTags = [], reHtmlTag = /<(\/?)span(?:\s+(?:class=(['"])hljs-.*?\2)?\s*|\s*)>/g;
        element.innerHTML = element.innerHTML.replace(/(.*?)\r?\n/g, function(_, string) {
            if (!string) {
                return '<span class=line>&nbsp;</span>';
            }
            var openTag, stringPrepend;
            // Re-open all tags that were previously closed.
            if (openTags.length) {
                stringPrepend = openTags.join('');
            }
            // Match all HTML `<span>` tags.
            reHtmlTag.lastIndex = 0;
            while (openTag = reHtmlTag.exec(string)) {
                // If it is a closing tag, remove the opening tag from the list.
                if (openTag[1]) {
                    openTags.pop();
                }
                // Otherwise if it is an opening tag, push it to the list.
                else {
                    openTags.push(openTag[0]);
                }
            }
            // Close all opened tags, so that strings can be wrapped with `span.line`.
            if (openTags.length) {
                string += Array(openTags.length + 1).join('</span>');
            }
            if (stringPrepend) {
                string = stringPrepend + string;
            }
            return '<span class=line>' + string + '</span>';
        });
    });

}

export default highlightLines;