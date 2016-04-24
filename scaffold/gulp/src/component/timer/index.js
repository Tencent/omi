App.Timer = Nuclear.create({
    install: function () {
        //react这里不需要加bind(this),会导致对javascript上下文的误解
        this.interval = setInterval(this.tick.bind(this), 1000);
    },
    tick: function () {
        this.option.secondsElapsed++;
    },
    render: function () {
        return ' <div>Seconds Elapsed: {{secondsElapsed}}</div>';
    }
});