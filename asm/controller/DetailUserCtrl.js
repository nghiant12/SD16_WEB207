window.DetailUserCtrl = function ($scope, $http, $routeParams) {

    $scope.title = "Chi tiết thông tin User";
    var id = $routeParams.id;
    console.log(id);
    const api = "http://localhost:3000/users";
    $http.get(
      `${api}/${id}`)
      .then(function (response) {
      if (response.status == 200) {
        console.log(response.data.ngaySinh);
        // Chuyển đổi định dạng ngày
        var dateObject = new Date(response.data.ngaySinh);
        $scope.formattedDate = dateObject.getDate() + '/' + (dateObject.getMonth() + 1) + '/' + dateObject.getFullYear();
        $scope.user = {
          id: response.data.id,
          hoTen: response.data.hoTen,
          ngaySinh: dateObject,
          gioiTinh: response.data.gioiTinh,
          cccd: response.data.cccd,
          email: response.data.email,
          sdt: response.data.sdt,
          tenDN: response.data.tenDN,
          matKhau: response.data.matKhau
        };
      }
    });
}
