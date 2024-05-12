window.AddCtrl = function ($scope, $http, $location) {
    $scope.title = "Thêm sinh viên mới";
    $scope.createStudent = function () {
        const apiStudent = 'http://localhost:3000/student';

        //Tạo 1 biến dùng dể kiểm tra lỗi
        let flag = true;

        //Tạo 1 biến để hiển thị lỗi
        $scope.kiemTra = {
            hoTen: false,
            email: false,
            ngaySinh: false
        };

        //Kiểm tra trống
        if (!$scope.student || !$scope.student.hoTen) {
            flag = false;
            $scope.kiemTra.hoTen = true;
        }
        if (!$scope.student || !$scope.student.email) {
            flag = false;
            $scope.kiemTra.email = true;
        }
        if (!$scope.student || !$scope.student.ngaySinh) {
            flag = false;
            $scope.kiemTra.ngaySinh = true;
        }

        //Kiểm tra dữ liệu bằng Regex
        let regexEmail = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
        let checkEmail = regexEmail.test($scope.student.email);
        //nhập sai trả về false, nhập đúng trả về true

        if (!checkEmail) {
            flag = false;
            $scope.kiemTra.email = true;
        }

        if (flag) {
            let newStudent = {
                hoTen: $scope.student.hoTen,
                email: $scope.student.email,
                ngaySinh: $scope.student.ngaySinh
            };
            // console.log(newStudent);
            $http.post(
                apiStudent,
                newStudent
            ).then(function (response) {
                if (response.status == 201) {
                    alert("Thêm sinh viên mới thành công");
                    $location.path('/list');
                }
            });
        }
    }
}