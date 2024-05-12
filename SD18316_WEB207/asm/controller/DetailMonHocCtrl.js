window.DetailMonHocCtrl = function ($scope, $http, $routeParams) {
    $scope.title = "Chi tiết môn học";
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
}