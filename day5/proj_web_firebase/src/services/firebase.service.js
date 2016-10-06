import firebase from 'firebase'
import { Observable, BehaviorSubject } from 'rxjs'

export class FirebaseService {
    // $q use for promise style, $rootScope use for callBack style
    constructor($q, $rootScope) {
        'ngInject'

        this.$q = $q
        this.$rootScope = $rootScope
        this.currentUser = new BehaviorSubject(undefined)

        firebase.auth().onAuthStateChanged((user) => {
            console.log(user)
            this.currentUser.next(user)
        })

        //  cache firebase data
        firebase.database().ref('user').on('value', () => {})
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

    // can replace this function with BehaviorSubject
    // currentUser() {
    //     return firebase.auth().currentUser
    // }

    set(path, data) {
        return this.$q((resolve, reject) => {
            firebase.database().ref(path).set(data)
                .then(resolve, reject)
        })
    }

    // 1. Promise style - resolve can be called only one time
    // onValue(path) {
    //     return this.$q((resolve, reject) => {
    //         firebase.database().ref(path).on('value', (snapshot) => {
    //             console.log(snapshot)
    //             resolve(snapshot.val())
    //         })
    //     })
    // }

    // 2. callback style
    // onValue(path, callback) {
    //     firebase.database().ref(path).on('value', (snapshot) => {
    //         console.log(snapshot)
    //         setTimeout(() => {
    //             this.$rootScope.$apply(() => {
    //                 callback(snapshot.val())
    //             })
    //         }, 0)
    //     })
    // }

    // 3. rx style
    onValue(path) {
        return Observable.create((o) => {
            const ref = firebase.database().ref(path)
            const fn = ref.on('value', (snapshot) => {
                setTimeout(() => {
                    console.log('got data')
                    this.$rootScope.$apply(() => {
                        o.next(snapshot.val())
                    })
                }, 0)
            })
            return () => {
                ref.off('value', fn)
            }
        })

    }

    onceValue(path, callback) {
        firebase.database().ref(path).once('value', (snapshot) => {
            setTimeout(() => {
                this.$rootScope.$apply(() => {
                    callback(snapshot.val())
                })
            }, 0)
        })
    }
}