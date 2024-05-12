window.ListCtrl = function ($scope, $http) {
    $scope.title = "Danh sách nhân viên";
    const linkApi = "http://localhost:3000/employee";
    $http.get(linkApi).then(function (response) {
        // console.log(response);
        if (response.status == 200) {
            $scope.listEmployee = response.data;
        } else {
            alert('Call dữ liệu thất bại');
        };
    });
    $scope.deleteEmployee = function (deleteID) {
        // alert(deleteID);
        let confirm = window.confirm('Bạn có chắc chắn muốn xóa nhân viên này không?');
        if (confirm) {
            $http.delete(
                `${linkApi}/${deleteID}`
            ).then(function (response) {
                if (response.status == 200) {
                    alert('Xóa nhân viên thành công!');
                } else {
                    alert('Xóa nhân viên thất bại');
                };
            });
        };
    };
};