window.DangNhapController = function ($scope) {
    $scope.dangNhap = function () {
        // let tenDN = $scope.inputValue.tenDangNhap;
        // let pass = $scope.inputValue.matKhau;
        // $scope.error = {};
        // if (tenDN == 'dinhtv7' && pass == '12345678') {
        //     $scope.mesDN = '';
        //     $scope.mesMK = '';
        //     alert('Chào mừng ' + $scope.inputValue.tenDN);
        // } else {
        //     if (tenDN !== 'dinhtv7') {
        //         $scope.mesDN = 'Sai tên đăng nhập';
        //     }
        //     else {
        //         $scope.mesDN = '';
        //     }

        //     if (pass !== 'dinhtv7') {
        //         $scope.mesMK = 'Sai mật khẩu';
        //     }
        //     else {
        //         $scope.mesMK = '';
        //     }
        // }
        $scope.inputValue = {};
        let tenDN = $scope.inputValue.tenDangnhap;
        let matKhau = $scope.inputValue.matKhau;
        $scope.error() = {};

        if (tenDN != 'DinhTV7' || tenDN == "") {
            $scope.error.tenDangnhap = "";
        } else {
            $scope.error.tenDangnhap = "Sai tên đăng nhập";
        }

        if (matKhau != "12345678" || matKhau == "") {
            $scope.error.matKhau = "";

        } else {
            $scope.error.matKhau = "Sai mật khẩu";
        }
        if (tenDN == "DinhTV7" && matKhau == "12345678") {
            alert("Xin chào " + tenDN);
        }
    }
}