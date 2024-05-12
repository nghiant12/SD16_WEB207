let myApp = angular.module('myApp', []);
myApp.controller('myCtrl', function ($scope) {
    $scope.calculate = function () {
        var a = parseFloat($scope.dai);
        var b = parseFloat($scope.rong);
        $scope.dientich = a * b;
        $scope.chuvi = (a + b) * 2;
        console.log('thunghiahehe');
    };
});