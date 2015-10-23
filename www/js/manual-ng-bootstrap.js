if (window.cordova) {
    window.ionic.Platform.ready(function() {
        console.log("Mobile: Bootstrapping");
        angular.bootstrap(document, ['focus']);
    })}
else {
    angular.element(document).ready(function() {
        console.log("Browser: Bootstrapping");
        angular.bootstrap(document, ['focus']);
    });
}
