angular.module('focus.controllers')
	.controller('DownloadController', function($scope, $timeout, $cordovaFileTransfer, $cordovaFile, $q) {

  $scope.downloadFile = function() {

    var directory = cordova.file.applicationStorageDirectory;

    $scope.images = [];

    var resources = [
        "http://imaxfocus.com/heleneO_150x150.jpg",
        "http://imaxfocus.com/olaf_tufte.jpg",
        "http://imaxfocus.com/alexander_dale_oen.jpg",
        "http://imaxfocus.com/mette_solli.jpg",
        "http://imaxfocus.com/tutta1.jpg"
      ];

    var promises = [];

    resources.forEach(function(i,x) {
      var fileName = i.split("/").pop();
      var targetPath = directory + fileName;
      $cordovaFile.checkFile(directory, fileName)
      .then(function (success) {
        console.log("Asset found on device, skipping download");
        referToAsset(targetPath);
      }, function (error) {
        console.log("Asset not found on device, initiating download");
        downloadAsset(i, targetPath);
      });
    });

    // Download asset if it doesn't already exist
    function downloadAsset(url, targetPath) {
      console.log("About to start transfer");
      promises.push($cordovaFileTransfer.download(url, targetPath, {}, true));
    }

    // Refer to asset on device if it already exists
    function referToAsset(targetPath) {
      $scope.images.push(targetPath);
    }

    $q.all(promises).then(function(res) {
      console.log("in theory, all done");
      for(var i=0; i<res.length; i++) {
        $scope.images.push(res[i].nativeURL);
      }
    });

   };

});
