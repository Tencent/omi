/* AlloyFlow 0.1.0
 * By AlloyTeam
 * https://github.com/AlloyTeam/AlloyFlow
 */

var AlloyFlow = function (option) {

    this.start_time = null;
    this.workflow = option.workflow;
    this.wf_len = this.workflow.length;
    this.timer = null;
    this.interval = option.interval || 15;

    this.onStart = option.onStart || function () { };
    this.onProgress = option.onProgress || function () { };
    this.onEnd = option.onEnd || function () { };

    if (typeof this.workflow[0] === "function") {
        this.stopSeries = false;
        this.isSeries = true;
        this.workIndex = 0;
    } else {
        var i=0,
            j,
            startLen;
        for (; i < this.wf_len; i++) {
            var start =  this.workflow[i].start;
            if (typeof start !== "number") {


                j=0;
                startLen=start.length;
                for (; j < startLen; j++) {
                    this.workflow.splice(i, 0, { work: this.workflow[i].work, start: start[j] });
                }
                i += startLen;
                this.workflow.splice(i--, 1);
                this.wf_len--;
                this.wf_len += startLen;

            }
        }
    }
};

AlloyFlow.prototype = {
    start: function () {
        this.onStart();
        if (this.isSeries) {
            this.stopSeries = false;
            this.workIndex = 0;
            this._startSeries();
            return;
        }
        var self = this;

        this._forEach(this.workflow,function (item) {
            item.done = false;
        });
        this.start_time = new Date();
        clearInterval(this.timer);
        this.timer = setInterval(function () {

            var doneCount = 0;

            self._forEach(self.workflow, function (w) {
                var currentTime = new Date() - self.start_time ;
                if (currentTime >= w.start) {
                    if (!w.done) {
                        w.done = true;
                        w.work.call(self,currentTime);
                        self.onProgress();

                    } else {
                        doneCount++;
                        if (doneCount === self.wf_len) {

                            clearInterval(self.timer);
                            self.onEnd();
                        }
                    }
                }
            });
        }, this.interval);
    },
    _startSeries: function () {
        this.workflow[this.workIndex].call(this);
    },
    _forEach: function (arr,callback) {
        if (Array.prototype.forEach) return arr.forEach(callback);
        var i = 0,
            len = arr.length;
        for (; i < len; i++) {
            callback(arr[i]);
        }
    },
    stop: function () {
        if (this.isSeries) {
            this.stopSeries = true;
        } else {
            clearInterval(this.timer);
        }
    },
    next: function (msg , delay) {
        if(arguments.length === 2){
            var self = this;
            setTimeout(function(){
                self._nextTask(msg);
            },delay);
        }else{
            this._nextTask(msg);
        }
    },
    callback: function (){
        console.log(arguments);
        this._nextTask.apply(this,arguments);
    },
    _nextTask:function(){
        if (this.stopSeries) return;
        this.workIndex++;
        this.workflow[this.workIndex].apply(this,arguments);
        this.onProgress();
        if (this.workIndex === this.wf_len - 1) {
            this.workIndex = 0;
            this.stopSeries = true;
            this.onEnd();
        }
    }
};

if (typeof module !== 'undefined' && typeof exports === 'object') {
    module.exports = AlloyFlow;
}