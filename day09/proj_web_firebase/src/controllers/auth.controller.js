import firebase from 'firebase'

export class AuthController {
  constructor ($scope) {
    'ngInject'
    this.$scope = $scope

    firebase.auth().onAuthStateChanged((user) => {
      console.log(user)
    })
  }
}
