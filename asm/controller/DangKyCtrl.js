window.DangKyCtrl = function ($scope, $http, $location) {
    $scope.title = "Đăng kí tài khoản";
    $scope.dangKy = function () {
        const apiUser = 'http://localhost:3000/users';
        let flag = true;
        $scope.kiemTra = {
            hoTen: false,
            ngaySinh: false,
            cccd: false,
            email: false,
            sdt: false,
            tenDN: false,
            matKhau: false
        };
        //Check trống
        if (!$scope.user || !$scope.user.hoTen) {
            flag = false;
            $scope.kiemTra.hoTen = true;
        }
        if (!$scope.user || !$scope.user.ngaySinh) {
            flag = false;
            $scope.kiemTra.ngaySinh = true;
        }
        if (!$scope.user || !$scope.user.cccd) {
            flag = false;
            $scope.kiemTra.cccd = true;
        }
        if (!$scope.user || !$scope.user.email) {
            flag = false;
            $scope.kiemTra.email = true;
        }
        if (!$scope.user || !$scope.user.sdt) {
            flag = false;
            $scope.kiemTra.sdt = true;
        }
        if (!$scope.user || !$scope.user.tenDN) {
            flag = false;
            $scope.kiemTra.tenDN = true;
        }
        if (!$scope.user || !$scope.user.matKhau) {
            flag = false;
            $scope.kiemTra.matKhau = true;
        }
        let regexCCCD = /[0-9]{13}/;
        let checkCCCD = regexCCCD.test($scope.user.cccd);
        if (!checkCCCD) {
            flag = false;
            $scope.kiemTra.cccd = true;
        }
        let regexEmail = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
        let checkEmail = regexEmail.test($scope.user.email);
        if (!checkEmail) {
            flag = false;
            $scope.kiemTra.email = true;
        }
        let regexSdt = /((09|03|07|08|05)+([0-9]{8})\b)/g;
        let checkSdt = regexSdt.test($scope.user.sdt);
        if (!checkSdt) {
            flag = false;
            $scope.kiemTra.sdt = true;
        }
        if (flag) {
            let newUser = {
                hoTen: $scope.user.hoTen,
                ngaySinh: $scope.user.ngaySinh,
                 gioiTinh: $scope.user.gioiTinh,
                cccd: $scope.user.cccd,
                email: $scope.user.email,
                sdt: $scope.user.sdt,
                tenDN: $scope.user.tenDN,
                matKhau: $scope.user.matKhau
            }
            // console.log(newUser);
            $http.post(apiUser, newUser).then(function (response) {
                if (response.status == 201) {
                    alert("Đăng ký thành công");
                    $location.path('/list-user')
                }
            });
        }
    }
}