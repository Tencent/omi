# color-picker

## More Version of README
[Chinese Version](README.zh-cn.md)


## Project Homepage
Click [here](https://zhangbobell.github.io/color-picker)see demo

## UI
![color-picker-snap](snap.png)

## advantages
1. simple and easy to use, the same UI with MS Word 2013;
2. added "Latest Used Color" feature;
3. user could use "more color" feature in browsers supported HTML5 API `input[type='color']`;
4. support multi-language, current support: Simplified-Chinese(default)[zh-cn], American-English[en-us];

## Get it
you could download this repository, and use the compressed css and js file. For convenience, you could also use it by installing [bower](http://bower.io/) package via `bower install color-picker`.

## Usage
color-picker is based on angular，

example：
```javascript
<link rel="stylesheet" href="path/to/color-picker.min.css">

<script src="path/to/angular.js"></script>
<script src="path/to/color-picker.min.js"></script>

<!-- directive way -->
<font-color></font-color>

<!-- controller way -->
<div ng-controller="demoCtrl">
    <div color-picker set-color="dynamicSetColor()" class="font-color" ng-style="{'background-color': selectedForeColor}"></div>
</div>

<script>
    var myApp = angular.module('colorpickerDemo', ['ui.colorpicker']);

    // directive way
    myApp.directive('fontColor', function() {
         return {
             restrict: 'E',
             scope:{},
             replace: false,
             template: '<div color-picker default-color="#ff0000" class="font-color" ng-style="{\'background-color\': selectedFontColor}"></div>',
             link: function(scope) {
                 scope.selectedFontColor = '#f00';

                 scope.$on('colorPicked', function(event, color) {
                     scope.selectedFontColor = color;
                 });
             }
         }
    })


    // controller way
    myApp.controller('demoCtrl', function($scope) {
         $scope.selectedForeColor = dynamicSetColor();

         $scope.$on('colorPicked', function(event, color) {
             $scope.selectedForeColor = color;
         });

         // dynamically set color
         $scope.dynamicSetColor = dynamicSetColor;

         function dynamicSetColor() {
             return '#0f0';
         }

     });

</script>
```

## configuration
The default language is Simplified Chinese(`zh-cn`), we also provide American English(`en-us`), you could configure like below:
```javascript
angular.module('colorpickerDemo', ['ui.colorpicker'])
    .config(function (localizeProvider) {
        localizeProvider.setDefaultLang('en-us');
    })
```
The source code of language is `src/lang.service.js`, pull request is welcome to support more languages.

## options
you could set below attributes to configure color-picker:
 - `default-color`: default color you want to set，eg. `default-color="#ff0000"`
 - `disabled`: if is disabled, eg `disabled="disabled"`
 - `set-color`: the function to dynamically set default color, to archive the goal of setting different default color in different context
  eg. `set-color="dynamicSet()"`, and `dynamicSet` function returns the color depends on different context.

## event
`colorPicked`: triggered after use selecting a color, it could be listened in the parent scope of color-picker, the event parameters include a key `color` which is user selected
