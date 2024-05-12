window.AddMonHocCtrl = function ($scope, $http, $location) {
    $scope.title = "Thêm môn học mới";

    $scope.addMonHoc = function () {
        const apiMonHoc = 'http://localhost:3000/mon-hoc';
        let flag = true;
        $scope.kiemTra = {
            maMH: false,
            tenMH: false
        }
        if (!$scope.monhoc || !$scope.monhoc.maMH) {
            flag = false;
            $scope.kiemTra.maMH = true;
        }
        if (!$scope.monhoc || !$scope.monhoc.tenMH) {
            flag = false;
            $scope.kiemTra.tenMH = true;
        }

        if (flag) {
            let newMonHoc = {
                maMH: $scope.monhoc.maMH,
                tenMH: $scope.monhoc.tenMH
            };
            console.log(newMonHoc);
            $http.post(apiMonHoc, newMonHoc).then(function (response) {
                if (response.status == 201) {
                    alert("Thêm môn học thành công");
                    $location.path('/tai-khoan');
                }
            });
        }
    }
}