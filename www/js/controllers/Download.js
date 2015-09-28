angular.module('focus.controllers')
	.controller('DownloadController', function($scope, $timeout, $cordovaFileTransfer, $cordovaFile, $cordovaZip) {

  $scope.downloadFile = function() {

    var directory = cordova.file.dataDirectory;
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

    $cordovaFileTransfer.download(url, targetPath, options, trustHosts)
      .then(function(result) {
        console.log("Files downloaded " + JSON.stringify(result.response));
        unzipFile();
      }, function(err) {
        console.log("Files failed to download " + JSON.stringify(err));
      }, function (progress) {
        $timeout(function() {
          $scope.downloadProgress = (progress.loaded / progress.total) * 100;
        })
    });

    function unzipFile() {
      $cordovaZip.unzip(directory + fileName, directory + "sounds")
      .then(function() {
        console.log("Files unzipped");
        deleteFile();
      }, function() {
        console.log("Failed to unzip");
      }, function(progressEvent) {
        console.log(progressEvent);
      });
    };

    function deleteFile() {
      $cordovaFile.removeFile(directory, fileName)
      .then(function(success) {
        console.log("File deleted");
      }, function (error) {
        console.log("File failed to delete");
      });
    };

  };

});
