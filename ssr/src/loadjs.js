(function () {
    load('https://unpkg.com/omi@1.2.4/dist/omi.min.js',function (err) {
        eval(__OMI_DATA__.component)
    })

    function load (src, fn) {
        fn = fn || function () {}
        var script = document.createElement('script')
        script.src = src
        script.onload = function () { fn(null) }
        script.onerror = fn
        script.crossorigin = 'anonymous'
        document.head.appendChild(script)
    }
})()