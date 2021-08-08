    var changeview = function(e) {
        var cur = e.targetShape.container;
        if (cur.className === "chart-area-min") {
            var blocks = document.querySelectorAll(".chart-area-min");
            console.log(blocks);
            for (var i = 0; i < blocks.length; i++) {
                blocks[i].className = "chart-area-large";
            }
            cur.className += " active";
        } else if (cur.className === "chart-area-large active") {
            var blocks = document.querySelectorAll(".chart-area-large");
            for (var j = 0; j < blocks.length; j++) {
                blocks[j].className = "chart-area-min";
            }
        }
        switch (cur.id) {
            case "c1":
                scatter.renderData(dScatter);
            default:
                break;
        }
    }