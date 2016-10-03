import angular from 'angular'
import _ from 'lodash'

class DetailController {
    constructor($stateParams, $http, LIB_URL) {
        this.type = $stateParams.type
        this.data = $stateParams.data
        this.list = []

        console.log("$stateParams.type = " + $stateParams.type + ", $stateParams.data =" + $stateParams.data)
        
        $http.get(LIB_URL)
            .then((res) => res.data)
            .then((res) => {
                this.list = _(res)
                    .filter((track) => track[this.type] === this.data)
                    .value()
            console.log(this.list)
            })
    }
}

angular
    .module('app')
    .controller('DetailController', DetailController)