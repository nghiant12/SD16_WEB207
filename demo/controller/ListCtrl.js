window.ListCtrl = function ($scope, $http) {
    $scope.title = "Danh sách sinh viên";

    // Sử dụng tham số $http để thực hiện
    // việc call API

    // Link API
    // const apiStudent = 'https://65b07b4ed16d31d11bdca4f4.mockapi.io/nghiant12/student';
    const apiStudent = 'http://localhost:3000/student';

    // $http.phương thức truy cập HTTP
    // GET, POST, PUT, DELETE
    function getAll() {
        $http.get(apiStudent).then(function (response) {
            console.log(response);
            console.log(response.data);//Lấy ra dữ liệu
            if (response.status == 200) {
                $scope.listStudent = response.data;
            } else {
                alert("Call dữ liệu không thành công");
            }
        });
    }
    getAll();
    $scope.delStudent = function (deleteID) {
        alert(deleteID);
        let confirm = window.confirm("Bạn có muốn xóa không?");
        // console.log(confirm);
        if (confirm) {
            $http.delete(
                // apiStudent + '/' + deleteID
                `${apiStudent}/${deleteID}`
            ).then(function (response) {
                if (response.status == 200) {
                    alert("Xóa thành công");
                    getAll();
                }
            });
        }
    }
}