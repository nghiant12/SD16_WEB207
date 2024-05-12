window.AddCtrl = function ($scope, $http, $location) {
    $scope.title = 'Thêm bài viết mới';
    const linkApi = 'http://localhost:3000/post';

    $scope.addPost = function () {
        let flag = true;
        $scope.kiemtra = {
            tieude: false,
            noidung: false,
            tacgia: false,
            theloai: false,
            ngaydang: false
        }
        if (!$scope.post || !$scope.post.tieude) {
            flag = false;
            $scope.kiemtra.tieude = true;
        }
        if (!$scope.post || !$scope.post.noidung) {
            flag = false;
            $scope.kiemtra.noidung = true;
        }
        if (!$scope.post || !$scope.post.tacgia) {
            flag = false;
            $scope.kiemtra.tacgia = true;
        }
        if (!$scope.post || !$scope.post.theloai) {
            flag = false;
            $scope.kiemtra.theloai = true;
        }
        if (!$scope.post || !$scope.post.ngaydang) {
            flag = false;
            $scope.kiemtra.ngaydang = true;
        }
        if (flag) {
            let newPost = {
                tieu_de: $scope.post.tieude,
                noi_dung: $scope.post.noidung,
                tac_gia: $scope.post.tacgia,
                the_loai: $scope.post.theloai,
                ngay_dang: $scope.post.ngaydang
            };
            console.log(newPost);
            $http.post(linkApi, newPost).then(function (response) {
                if (response.status == 201) {
                    alert("Thêm bài viết mới thành công");
                    $location.path('/list-post');
                }
            })
        }
    }
};