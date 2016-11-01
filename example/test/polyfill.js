
if (!String.prototype.trim) {
    String.prototype.trim = function () {
        return this.replace(/(^\s*)|(\s*$)/g, '');
    };
}

if ((!('innerText' in document.createElement('a'))) && ('getSelection' in window)) {
    HTMLElement.prototype.__defineGetter__("innerText", function () {
        var selection = window.getSelection(),
            ranges = [],
            str;

        // Save existing selections.
        for (var i = 0; i < selection.rangeCount; i++) {
            ranges[i] = selection.getRangeAt(i);
        }

        // Deselect everything.
        selection.removeAllRanges();

        // Select `el` and all child nodes.
        // 'this' is the element .innerText got called on
        selection.selectAllChildren(this);

        // Get the string representation of the selected nodes.
        str = selection.toString();

        // Deselect everything. Again.
        selection.removeAllRanges();

        // Restore all formerly existing selections.
        for (var i = 0; i < ranges.length; i++) {
            selection.addRange(ranges[i]);
        }

        // Oh look, this is what we wanted.
        // String representation of the element, close to as rendered.
        return str;
    });

    HTMLElement.prototype.__defineSetter__("innerText", function (str) {
        this.innerHTML = str.replace(/\n/g, "<br />");
    });
}
