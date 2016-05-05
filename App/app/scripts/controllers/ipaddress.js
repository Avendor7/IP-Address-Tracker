'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:PostCtrl
 * @description
 * # PostCtrl
 * Controller of the appApp
 */
angular.module('appApp')
  .controller('IPAddressCtrl', function ($http, $scope, API_ENDPOINT, $state, $uibModal, $log, ipaddressFactory) {

   
    //get the data
    function getAllData() {
      ipaddressFactory.getAll()
        .success(function (response) {
          var address = response;
          $scope.ipaddressData = address;
        })
        .error(function (response, status) {
            switch (status) {
              case 404:
                console.log('404 server not found');
                break;
              default:
                console.log('General Error');
                break;
            }
          });
    }
    
    //start load by grabbing all of the ip addresses from the DB
    getAllData();
    
    //delete data from ID
    $scope.deleteAddress = function (id) {
      ipaddressFactory.delete(id)
        .success(function () {
          getAllData();
        })
        .error(function (response, status) {
            switch (status) {
              case 404:
                console.log('404 server not found');
                break;
              default:
                console.log('General Error');
                break;
            }
          });

    };




    //edit button pressed
    $scope.openEdit = function (id) {
      //query the database using the factory with inserted id
      ipaddressFactory.get(id)
        .success(function (response) {
          //set the scope from the response
          $scope.editAddress = response;
          //actually open the modal, inserting the data from the DB in the DB callback
          var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'editModal.html',
            controller: 'EditModalInstanceCtrl',
            resolve: {
              addressData: function () {
                return $scope.editAddress;
              }
            }
          });
          //modal result callback
          modalInstance.result.then(function (data) {
            $scope.updatedData = data;
            //write put request to database factory
            ipaddressFactory.put($scope.updatedData)
              .success(function () {
                getAllData();
              })
              .error(function (response, status) {
            switch (status) {
              case 404:
                console.log('404 server not found');
                break;
              default:
                console.log('General Error');
                break;
            }
          });


          }, function () {
            $log.info('Modal dismissed at: ' + new Date());
          });
        })
        //DB error, no modal is opened
        .error(function (response, status) {
            switch (status) {
              case 404:
                console.log('404 server not found');
                break;
              default:
                console.log('General Error');
                break;
            }
          });

    };

    //new button pressed
    $scope.openNew = function () {
      var modalInstance = $uibModal.open({
        animation: $scope.animationsEnabled,
        templateUrl: 'newModal.html',
        controller: 'NewModalInstanceCtrl',
        resolve: {
          //nodata
        }
      });

      //modal result callback
      modalInstance.result.then(function (data) {
        $scope.newData = data;
        
        //write put request to database factory
        ipaddressFactory.post($scope.newData)
          .success(function () {
            getAllData();
          })
          .error(function (response, status) {
            switch (status) {
              case 404:
                console.log('404 server not found');
                break;
              default:
                console.log('General Error');
                break;
            }
          });


      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });

    };



  });
