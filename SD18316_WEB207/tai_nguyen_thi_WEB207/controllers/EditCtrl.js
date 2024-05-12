window.EditCtrl = function ($scope, $http, $routeParams, $location) {
    $scope.title = 'Chỉnh sửa bài viết';
    const linkApi = 'http://localhost:3000/post';
    let postID = $routeParams.id;
    $http.get(
        `${linkApi}/${postID}`
    ).then(function (response) {
        console.log(response);
        if (response.status == 200) {
            $scope.post = {
                id: response.data.id,
                tieude: response.data.tieu_de,
                noidung: response.data.noi_dung,
                tacgia: response.data.tac_gia,
                theloai: response.data.the_loai,
                ngaydang: new Date(response.data.ngay_dang)
            }
        }
    })
    $scope.editPost = function () {
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
            let editPost = {
                tieu_de: $scope.post.tieude,
                noi_dung: $scope.post.noidung,
                tac_gia: $scope.post.tacgia,
                the_loai: $scope.post.theloai,
                ngay_dang: $scope.post.ngaydang
            }
            $http.put(
                `${linkApi}/${postID}`,
                editPost
            ).then(function (response) {
                if (response.status == 200) {
                    alert("Sửa bài viết thành công");
                    $location.path('/list-post');
                }
            })
        }
    }
}
