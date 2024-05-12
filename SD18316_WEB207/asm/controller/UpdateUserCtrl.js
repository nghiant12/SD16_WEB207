window.UpdateUserCtrl = function ($scope, $http, $routeParams, $location) {

    $scope.title = "Sửa thông tin User";
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
  
    $scope.update = function () {
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
          $http.put(`${apiUser}/${id}`, newUser).then(function (response) {
              if (response.status == 200) {
                  alert("Chỉnh sửa user thanh công");
                  $location.path('/list-user')
              }
          });
      }
  }
}