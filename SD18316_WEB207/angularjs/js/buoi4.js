//Khởi tạo module
//Set vùng AngularJS cho vùng NghiaNT12
let NghiaNT = angular.module('NghiaNT12', []);
//2 tham số: tên của ng-app, thành phần phụ thuộc

//Định nghĩa vùng controller
NghiaNT.controller('myController', myFunction);//trỏ đến hàm ko phải gọi hàm
//2 tham số: tên của controller cần định nghĩa, hàm thực hiện công việc

function myFunction($scope) {
    // $scope: là 1 tham số mặc định không được thay đổi
    // Luôn luôn có dùng đêr gender dữ liệu ra view
    $scope.xinchao = "Hello babi";
}

//Định nghĩa một vùng controller mới
//Khai báo và hiển thị ra view hoTen, diaChi, sdt, ngayChiaTay của nym
// NghiaNT.controller('myController1', myFunction1);
// function myFunction1($scope) {
//     $scope.hoTen = "Nguyen Thu Nghia";
//     $scope.diaChi = "Ha Noi";
//     $scope.sdt = "0123456789";
//     $scope.ngayChiaTay = "10/01/24";
// }

NghiaNT.controller('myController1', function ($scope) {
    $scope.hoTen = "Nguyen Thu Nghia";
    $scope.diaChi = "Ha Noi";
    $scope.sdt = "0123456789";
    $scope.ngayChiaTay = "10/01/24";

    $scope.nymArr = [
        {
            hoTen: "Nguyen Thu Nghia 1",
            diaChi: "Ha Noi",
            sdt: "0123456789",
            ngayChiaTay: "10/01/24"
        },
        {
            hoTen: "Nguyen Thu Nghia 2",
            diaChi: "Ha Noi",
            sdt: "0123456789",
            ngayChiaTay: "10/01/24"
        },
        {
            hoTen: "Nguyen Thu Nghia 3",
            diaChi: "Ha Noi",
            sdt: "0123456789",
            ngayChiaTay: "10/01/24"
        }
    ];
});