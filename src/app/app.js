/**
 * @ngdoc overview
 * @name Angular
 *
 * @description
 * Generated by Yo men
 *
 * **Note:** Describe what this module does
 *
 * @example
 * http://localhost:8000
 **/

  angular.module('Angular', [ 'ngRoute', 'LocalStorageModule' ])
  .config(['localStorageServiceProvider', function (localStorageServiceProvider) {
      localStorageServiceProvider.setPrefix('ls');
  }])
  .config([ '$routeProvider', '$locationProvider', function($routeProvider,$locationProvider) {

    $routeProvider
    .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'mainCtrl'
    })
    .otherwise({
        redirectTo: '/'
    });

    $locationProvider.html5Mode(true);

}])
  .factory('TeamFactory', function TeamFactory() {
      var team = localStorageService.get('players') || [];



      return {
        add: function (player) {
            this.team.push(player);
        },
        getPlayer: function (number) {
            return this.team[number];
        },

        getTeam: function() {
            return this.team;
        }
    };
})

  .factory('PlayerFactory', function (playerInfo) {
    console.log("NEW PLAYER");
    var Player =  function () {
        info = playerInfo.replace(/, /g, '/').replace(/,/g, '/').split('/');

        console.log(info);

        this.firstName      = info[0];
        this.lastName       = info[1];
        this.playerNumber   = info[2];
        this.position       = info[3];
    };
    return Player;
  })
/**
 * @ngdoc overview
 * @name $rootScope
 *
 * @description
 * Global Utility functions attached on the $rootScope of the ngdocs module
 **/
 .run([ '$rootScope', '$location', function($rootScope,$location) {
  /**
   *
   * @ngdoc function
   * @name $rootScope.isActive
   *
   * @description
   * Global utility function,
   * used to apply active classes to link buttons
   *
   * @example
   <pre>
     <a href="/example" ng-class="{ 'active': isActive('/example') }">
       Example
     </a>
   </pre>
   **/
   $rootScope.isActive = function (href) {
    return href === $location.path();
};
}]);
