window.ListMonHocCtrl = function ($scope, $http, $location) {
    const apiMonHoc = 'http://localhost:3000/mon-hoc';
    function getAllMH() {
        $http.get(apiMonHoc).then(function (response) {
            if (response.status == 200) {
                // console.log(response.data);
                $scope.listMonHoc = response.data;
            }
        });
    };
    getAllMH();
    $scope.delMonHoc = function (deleteID) {
        // alert(deleteID);
        let confirm = window.confirm("Bạn có chắc muốn xóa môn học này không?");
        if (confirm) {
            $http.delete(
                `${apiMonHoc}/${deleteID}`
            ).then(function (response) {
                if (response.status == 200) {
                    alert("Xóa môn học thành công");
                    getAllMH();
                }
            });
        }
    }
}