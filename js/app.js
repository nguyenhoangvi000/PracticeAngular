var myApp = angular.module("myApp", []);

myApp.controller("myController", function ($scope) {
    console.log("ok");

    $scope.users = [
        { username: "Vi Hoang", fullname: "Vi Nguyen Hoang", Email: "nguyenhoangvi000@gmail.com", }
    ];

})