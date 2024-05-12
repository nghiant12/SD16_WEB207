window.DangNhapCtrl = function ($scope, $http, $location) {
    $scope.title = "Đăng nhập tài khoản";
    // $scope.user = {};
    // $scope.dangNhap = false;
    // $scope.login = function () {
    //     const apiUsers = 'http://localhost:3000/users';

    //     let flag = true;
    //     $scope.kiemTra = {
    //         tenDN: false,
    //         matKhau: false
    //     };
    //     //Check trống
    //     if (!$scope.user || !$scope.user.tenDN) {
    //         flag = false;
    //         $scope.kiemTra.tenDN = true;
    //     };
    //     if (!$scope.user || !$scope.user.matKhau) {
    //         flag = false;
    //         $scope.kiemTra.matKhau = true;
    //     };
    //     if (flag) {
    //         $http.post(apiUsers, $scope.user).then(function (response) {
    //             let tenDN = response.data.users.tenDN;
    //             let matKhau = response.data.users.matKhau;
    //             if ($scope.user.tenDN == tenDN && $scope.user.matKhau == matKhau) {
    //                 $scope.dangNhap = true;
    //                 $scope.user = response.data.users;
    //                 alert('Đăng nhập thành công');
    //                 $location.path('/trang-chu');
    //             }
    //         });
    //     };

        // $http.get(apiUsers, $scope.user).then(function (response) {
        //     // let tenDN = response.data.users.tenDN;
        //     // let matKhau = response.data.users.matKhau;
        //     console.log(response);
        // });
    // };
};