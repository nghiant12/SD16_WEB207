window.DetailCtrl = function ($scope, $http, $routeParams) {
    $scope.title = "Chi tiết bài viết";
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
}