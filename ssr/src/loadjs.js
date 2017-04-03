<script>
(function () {
    load('https://xx.xxx.xxx/omi-server.min.js')

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
</script>