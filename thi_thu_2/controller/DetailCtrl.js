window.DetailCtrl = function ($scope, $http, $routeParams) {
    $scope.title = "Chi tiết nhân viên";
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
}