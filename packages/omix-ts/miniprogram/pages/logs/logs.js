"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("../../utils/util");
var create_1 = require("../../utils/create");
var store_1 = require("../../store");
create_1.default(store_1.default, {
    use: ['logs'],
    onLoad: function () {
        console.log(1);
        this.store.data.logs = (wx.getStorageSync('logs') || []).map(function (log) {
            return util_1.formatTime(new Date(log));
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9ncy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvZ3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSx5Q0FBNkM7QUFDN0MsNkNBQXVDO0FBQ3ZDLHFDQUErQjtBQUUvQixnQkFBTSxDQUFDLGVBQUssRUFBRTtJQUNaLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQztJQUNiLE1BQU0sRUFBRTtRQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDZCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFDLEdBQVc7WUFDdkUsT0FBTyxpQkFBVSxDQUFDLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUE7UUFDbEMsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy9sb2dzLmpzXG5pbXBvcnQgeyBmb3JtYXRUaW1lIH0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbCdcbmltcG9ydCBjcmVhdGUgZnJvbSAnLi4vLi4vdXRpbHMvY3JlYXRlJ1xuaW1wb3J0IHN0b3JlIGZyb20gJy4uLy4uL3N0b3JlJ1xuXG5jcmVhdGUoc3RvcmUsIHtcbiAgdXNlOiBbJ2xvZ3MnXSxcbiAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XG4gICAgY29uc29sZS5sb2coMSlcbiAgICB0aGlzLnN0b3JlLmRhdGEubG9ncyA9ICh3eC5nZXRTdG9yYWdlU3luYygnbG9ncycpIHx8IFtdKS5tYXAoKGxvZzogc3RyaW5nKSA9PiB7XG4gICAgICByZXR1cm4gZm9ybWF0VGltZShuZXcgRGF0ZShsb2cpKVxuICAgIH0pXG4gIH1cbn0pXG4iXX0=