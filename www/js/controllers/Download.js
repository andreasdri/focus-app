angular.module('focus.controllers')
	.controller('DownloadController', function($scope, $timeout, $cordovaFileTransfer, $cordovaFile, $cordovaZip, $q) {

  $scope.downloadFile = function() {

    var directory = cordova.file.applicationStorageDirectory;
    var username = "test";
    var password = "test";
    var url = encodeURI("http://localhost:3000/download/");
    var fileName = "basic.zip"
    var targetPath = directory + fileName;
    var trustHosts = true;
    var authData = btoa(username + ":" + password);
    var options = {
      headers: {
        "Authorization": "Basic " + authData
      }
    };

    $cordovaFile.checkFile(directory, fileName)
    .then(function (success) {
        console.log("Asset found on device, skipping download, unzipping");
        unzip();
      }, function (error) {
        console.log("Asset not found on device, initiating download");
        download();
      });

    function download() {
      $cordovaFileTransfer.download(url, targetPath, options, trustHosts)
      .then(function(result) {
        // Success!
        console.log("Files downloaded " + JSON.stringify(result.response));
        unzip();
      }, function(err) {
        // Error
        console.log("Files failed to download " + JSON.stringify(err));
      }, function (progress) {
        $timeout(function () {
          $scope.downloadProgress = (progress.loaded / progress.total) * 100;
        })
      });
    };

    function unzip() {
      $cordovaZip.unzip(directory + fileName,
        directory + "sounds")
      .then(function () {
        console.log('Files unzipped');
      }, function () {
        console.log('Failed to unzip');
      }, function (progressEvent) {
        console.log(progressEvent);
      });
    };

  };

});
