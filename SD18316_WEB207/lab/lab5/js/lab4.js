let myApp = angular.module('myApp', []);
//Bai1
myApp.controller('myCtrl', function ($scope) {
    $scope.fullname = "Nguyễn Thu Nghĩa";
    $scope.birthday = "12-02-2004";
    $scope.gender = "Nữ";
    $scope.photo = "hehe.jpg";
    $scope.mark = 9.5;
});
//Bai2
myApp.controller('myCtrl2', function ($scope) {
    $scope.student = {
        fullname: "Nguyễn Thu Nghĩa",
        birthday: "12-02-2004",
        gender: "Nữ",
        photo: "hehe.jpg",
        mark: 9.5
    };
});
//Bai3
myApp.controller('myCtrl3', function ($scope) {
    $scope.student = [
        {
            fullname: "Nguyễn Thu Nghĩa",
            birthday: "12-02-2004",
            gender: "Nữ",
            photo: "hehe.jpg",
            mark: 9.5
        },
        {
            fullname: "Nguyễn Thu Nghĩa",
            birthday: "12-02-2004",
            gender: "Nữ",
            photo: "meow.jpg",
            mark: 9.5
        },
        {
            fullname: "Nguyễn Thu Nghĩa",
            birthday: "12-02-2004",
            gender: "Nữ",
            photo: "blue.jpg",
            mark: 9.5
        }
    ];
});