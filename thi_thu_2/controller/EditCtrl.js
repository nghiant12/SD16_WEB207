window.EditCtrl = function ($scope, $http, $routeParams, $location) {
    $scope.title = "Chỉnh sửa nhân viên";
    let employeeID = $routeParams.id;
    const linkApi = "http://localhost:3000/employee";
    $http.get(
        `${linkApi}/${employeeID}`
    ).then(function (response) {
        // console.log(response)
        if (response.status == 200) {
            $scope.employee = {
                id: response.data.id,
                hoten: response.data.ho_ten,
                sdt: response.data.sdt,
                email: response.data.email,
                chucvu: response.data.chuc_vu,
                ngaysinh: new Date(response.data.ngay_sinh)

            };
        };
    });
    $scope.editEmployee = function () {
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
            let editEmployee = {
                ho_ten: $scope.employee.hoten,
                sdt: $scope.employee.sdt,
                email: $scope.employee.email,
                chuc_vu: $scope.employee.chucvu,
                ngay_sinh: $scope.employee.ngaysinh
            };
            $http.put(
                `${linkApi}/${employeeID}`,
                editEmployee
            ).then(function (response) {
                if (response.status == 200) {
                    alert("Chỉnh sửa nhân viên thành công");
                    $location.path('/list-employee')
                };
            });
        }
    };
}