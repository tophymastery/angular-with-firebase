import firebase from 'firebase'

export class RegisterController {

    constructor() {

    }

    signUp() {
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
            .then((res) => {
                // console.log(res)
                console.log(firebase.auth().currentUser)
            })
    }

}