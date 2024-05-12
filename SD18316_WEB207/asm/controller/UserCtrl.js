window.userCtrl = function ($scope, $http, $location) {
  const api = "http://localhost:3000/users";
  $scope.listUser = [];
  $http.get(api).then(function (response) {
    if (response.status == 200) {
       console.log(response.data);
      $scope.listUser = response.data;
    }
  });
  // 

  $scope.delUser = function (deleteID) {
    // alert(deleteID);
    let confirm = window.confirm("Bạn có chắc muốn xóa người dùng này không?");
    if (confirm) {
        $http.delete(
            `${api}/${deleteID}`
        ).then(function (response) {
            if (response.status == 200) {
                alert("Xóa người dùng thành công");
                
            }
        });
    }
}
};
