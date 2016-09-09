'use strict';

/**
 * @ngdoc function
 * @name angularTodoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularTodoApp
 */
angular.module('angularTodoApp')
  .controller('MainCtrl', function ($scope, localStorageService) {
    // this 指代什么
    // $scope.todos = ['Item 1', 'Item 2', 'Item 3'];
    var todosInStore = localStorageService.get('todos');
    $scope.todos = todosInStore && todosInStore.split('\n') || [];

    // 第二个参数是什么意思？
    $scope.$watch('todos', function(){
    	localStorageService.add('todos', $scope.todos.join('\n'));
    }, true);

    // 如果你添加了一个空的Todo事项，或者一个重名的事项，你的Todo应用就会罢工哦。
    $scope.addTodo = function(){
 	  $scope.todos.push($scope.todo);
      $scope.todo = '';
    };

    $scope.removeTodo = function(index){
    	$scope.todos.splice(index, 1);
    };
  });
