import angular from 'angular'
import _ from 'lodash'

angular
    .module('app')
    .controller('AppController', AppController)

function AppController($http, LIB_URL) {
    const vm = this
    vm.name = 'tophy'
    vm.list = []
    vm.select = 'Artist'
    vm.tracks = []
    vm.resetList = resetList

    $http.get(LIB_URL)
        .then((res) => res.data)
        .then((res) => {
            vm.tracks = res
            resetList()
        })

    function resetList() {
        vm.list = _(vm.tracks)
            .map((track) => track[vm.select])
            .uniq()
            .value()
    }
}