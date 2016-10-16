export class RegisterController {
  constructor ($firebase) {
    'ngInject'

    this.$firebase = $firebase
  }

  signUp () {
    this.$firebase.createUserWithEmailAndPassword(this.email, this.password)
  }
}
