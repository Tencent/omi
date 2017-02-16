/*!
 *  omi-jquery-date-picker v0.1.0 by dntzhang
 *  Omi / JQuery Date Picker integration.
 *  Github: https://github.com/AlloyTeam/omi
 *  MIT Licensed.
 */

;(function () {

    var OmiJQueryDatePicker = {};
    var Omi = typeof require === 'function'
        ? require('omi')
        : window.Omi;

    OmiJQueryDatePicker.init = function() {
        Omi.extendPlugin('omi-jquery-date-picker', function (dom, instance) {
            var data = Omi.getParameters(dom, instance, {
                numberType: ['minDays','maxDays','duration'],
                booleanType: ['autoClose','startDate','endDate','showShortcuts','inline','alwaysOpen','singleDate','lookBehind','batchMode','stickyMonths','showTopbar','swapTime','selectForward','selectBackward','showWeekNumbers'],
                functionType: ['onFirstDateSelected','onChange','onApply','onClose','onClosed','onOpen','onOpened'],
                stringType: ['format','separator','language','startOfWeek','container','applyBtnClass','singleMonth']
            });

            $(dom).dateRangePicker(data).bind('datepicker-first-date-selected', data['onFirstDateSelected'])
                .unbind('datepicker-change')
                .unbind('datepicker-apply')
                .unbind('datepicker-close')
                .unbind('datepicker-closed')
                .unbind('datepicker-open')
                .unbind('datepicker-opened')
                .bind('datepicker-change', data['onChange'])
                .bind('datepicker-apply', data['onApply'])
                .bind('datepicker-close',  data['onClose'])
                .bind('datepicker-closed', data['onClosed'])
                .bind('datepicker-open', data['onOpen'])
                .bind('datepicker-opened', data['onOpened']);

            instance[dom.getAttribute('instanceRef')] = $(dom).data('dateRangePicker');
        });
    }

    OmiJQueryDatePicker.destroy = function(){
        delete Omi.plugins['omi-jquery-date-picker'];
    };

    if (typeof exports == "object") {
        module.exports = OmiJQueryDatePicker;
    } else if (typeof define == "function" && define.amd) {
        define([], function(){ return OmiJQueryDatePicker });
    } else {
        window.OmiJQueryDatePicker = OmiJQueryDatePicker;
    }

})();
