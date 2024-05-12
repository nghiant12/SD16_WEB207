window.AddCtrl = function ($scope, $http, $location) {
    $scope.title = "Thêm nhân viên mới";
    $scope.addEmployee = function () {
        const linkApi = "http://localhost:3000/employee";
        let flag = true;
        $scope.kiemTra = {
            hoTen: false,
            sdt: false,
            email: false,
            chucVu: false,
            ngaySinh: false
        }
        //check trống
        if (!$scope.employee || !$scope.employee.hoten) {
            flag = false;
            $scope.kiemTra.hoTen = true;
        };
        if (!$scope.employee || !$scope.employee.sdt) {
            flag = false;
            $scope.kiemTra.sdt = true;
        };
        if (!$scope.employee || !$scope.employee.email) {
            flag = false;
            $scope.kiemTra.email = true;
        };
        if (!$scope.employee || !$scope.employee.chucvu) {
            flag = false;
            $scope.kiemTra.chucVu = true;
        };
        if (!$scope.employee || !$scope.employee.ngaysinh) {
            flag = false;
            $scope.kiemTra.ngaySinh = true;
        };
        //check email
        let regexEmail = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
        let checkEmail = regexEmail.test($scope.employee.email);
        if (!checkEmail) {
            flag = false;
            $scope.kiemTra.email = true;
        }
        //check sdt
        let regexSDT = /((09|03|07|08|05)+([0-9]{8})\b)/g;
        let checkSDT = regexSDT.test($scope.employee.sdt);
        if (!checkSDT) {
            flag = false;
            $scope.kiemTra.sdt = true;
        }
        if (flag) {
            let newEmployee = {
                ho_ten: $scope.employee.hoten,
                sdt: $scope.employee.sdt,
                email: $scope.employee.email,
                chuc_vu: $scope.employee.chucvu,
                ngay_sinh: $scope.employee.ngaysinh
            }
            $http.post(
                linkApi,
                newEmployee
            ).then(function (response) {
                if (response.status == 201) {
                    alert("Thêm nhân viên mới thành công");
                    $location.path('/list-employee')
                }
            });
        }
    };
};