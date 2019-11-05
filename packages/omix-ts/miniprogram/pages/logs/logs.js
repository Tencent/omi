"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("../../utils/util");
var create_1 = require("../../utils/create");
var index_1 = require("../../store/index");
create_1.default(index_1.default, {
    use: ['logs'],
    onLoad: function () {
        this.store.data.logs = (wx.getStorageSync('logs') || []).map(function (log) {
            return util_1.formatTime(new Date(log));
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9ncy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvZ3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSx5Q0FBNkM7QUFDN0MsNkNBQXVDO0FBQ3ZDLDJDQUFxQztBQUVyQyxnQkFBTSxDQUFDLGVBQUssRUFBRTtJQUNaLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQztJQUNiLE1BQU0sRUFBRTtRQUNOLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUMsR0FBVztZQUN2RSxPQUFPLGlCQUFVLENBQUMsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTtRQUNsQyxDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvL2xvZ3MuanNcbmltcG9ydCB7IGZvcm1hdFRpbWUgfSBmcm9tICcuLi8uLi91dGlscy91dGlsJ1xuaW1wb3J0IGNyZWF0ZSBmcm9tICcuLi8uLi91dGlscy9jcmVhdGUnXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi4vLi4vc3RvcmUvaW5kZXgnXG5cbmNyZWF0ZShzdG9yZSwge1xuICB1c2U6IFsnbG9ncyddLFxuICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnN0b3JlLmRhdGEubG9ncyA9ICh3eC5nZXRTdG9yYWdlU3luYygnbG9ncycpIHx8IFtdKS5tYXAoKGxvZzogc3RyaW5nKSA9PiB7XG4gICAgICByZXR1cm4gZm9ybWF0VGltZShuZXcgRGF0ZShsb2cpKVxuICAgIH0pXG4gIH1cbn0pXG4iXX0=