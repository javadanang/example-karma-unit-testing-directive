var app = angular.module('myApp', []);

app.directive('myDirective', function($timeout) {
    var html = 
        '<div class="notification">' +
            '<div class="notification-content">' +
                '<p>{{ message }}</p>' +
            '</div>' +
        '</div>';
    return {
        restrict: 'E',
        scope: { message: '=' },
        template: html,
        replace: true
    }
});

