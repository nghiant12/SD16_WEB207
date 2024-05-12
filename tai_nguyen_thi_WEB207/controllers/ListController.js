window.ListController = function ($scope, $http) {
    $scope.title = 'Danh sách bài viết';

    const linkApi = "http://localhost:3000/post";
    $http.get(linkApi).then(function (response) {
        console.log(response);
        if (response.status == 200) {
            $scope.listPost = response.data
        }
    })

    $scope.deletePost = function (deleteID) {
        // alert(deleteID)
        let confirm = window.confirm("Bạn có chắc chắn muốn xóa bài viết này không?")
        if (confirm) {
            $http.delete(
                `${linkApi}/${deleteID}`
            ).then(function (response) {
                if (response.status == 200) {
                    alert("Xóa bài viết thành công!")
                } else {
                    alert("Xóa bài viết thất bại")
                }
            })
        }
    }
}