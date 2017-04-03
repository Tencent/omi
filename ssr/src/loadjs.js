
(function () {
    load('https://unpkg.com/omi@1.2.2/dist/omi.min.js',function (err) {
        eval(__OMI_DATA__.component)
        //diff

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