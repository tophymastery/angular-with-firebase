import firebase from 'firebase'

export class FirebaseService {
    constructor ($q) {
        'ngInject'

        this.$q = $q
    }

    signOut() {
        firebase.auth().signOut()
    }

    signInWithEmailAndPassword(email, password) {
        return this.$q((resolve, reject) => {
            firebase.auth().signInWithEmailAndPassword(email, password)
                .then(resolve, reject)
            })
    }

    signInWithGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider()
        return $q((resolve, reject) => {
            firebase.auth().signInWithRedirect(provider)
                .then(resolve, reject)
            })
    }

    createUserWithEmailAndPassword(email, password) {
        return $q((resolve, reject) => {
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(resolve, reject)
            })
    }
}