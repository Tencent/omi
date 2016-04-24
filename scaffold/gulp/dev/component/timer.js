'use strict';

App.Timer = Nuclear.create({
    install: function install() {
        //react这里不需要加bind(this),会导致对javascript上下文的误解
        this.interval = setInterval(this.tick.bind(this), 1000);
    },
    tick: function tick() {
        this.option.secondsElapsed++;
    },
    render: function render() {
        return ' <div>Seconds Elapsed: {{secondsElapsed}}</div>';
    }
});