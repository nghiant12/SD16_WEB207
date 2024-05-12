window.UpdateMonHocCtrl = function ($scope, $http, $routeParams, $location) {
    $scope.title = "Sửa thông tin môn học";
    let monhocID = $routeParams.id;
    const apiMonHoc = 'http://localhost:3000/mon-hoc';
    $http.get(
        `${apiMonHoc}/${monhocID}`
    ).then(function (response) {
        if (response.status == 200) {
            $scope.monhoc = {
                id: response.data.id,
                maMH: response.data.maMH,
                tenMH: response.data.tenMH
            }
        }
    });
    $scope.updateMonHoc = function () {
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
            let updateMonHoc = {
                maMH: $scope.monhoc.maMH,
                tenMH: $scope.monhoc.tenMH
            };
            $http.put(
                `${apiMonHoc}/${monhocID}`,
                updateMonHoc
            ).then(function (response) {
                if (response.status == 200) {
                    alert("Chỉnh sửa thành công");
                    $location.path('/tai-khoan');
                }
            });
        }
    }
}