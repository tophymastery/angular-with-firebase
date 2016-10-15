import firebase from 'firebase'
import { Observable, BehaviorSubject } from 'rxjs'
import _ from 'lodash'

export class FirebaseService {
  constructor ($q, $rootScope) {
    'ngInject'

    this.$q = $q
    this.$rootScope = $rootScope
    this._currentUser = new BehaviorSubject()

    let $currentUser

    firebase.database().ref('.info/connected').on('value', (snapshot) => {
      const connected = snapshot.val()
      if ($currentUser) {
        $currentUser.unsubscribe()
        $currentUser = null
      }
      if (connected) {
        const onlineRef = firebase.database().ref('online').push()
        onlineRef.onDisconnect().remove()
        onlineRef.set(true)
        $currentUser = this.currentUser()
          .subscribe(
          (user) => {
            if (user) {
              onlineRef.set(user.uid)
            }
          }
          )
      }
    })

    firebase.auth().onAuthStateChanged((user) => {
      this._currentUser.next(user)
    })

    firebase.database().ref('user').on('value', () => { })
  }

  currentUser () {
    return this._currentUser.filter((x) => x !== undefined)
  }

  signOut () {
    firebase.auth().signOut()
  }

  signInWithEmailAndPassword (email, password) {
    return this.$q((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then(resolve, reject)
    })
  }

  signInWithGoogle () {
    const provider = new firebase.auth.GoogleAuthProvider()
    return this.$q((resolve, reject) => {
      firebase.auth().signInWithRedirect(provider)
        .then(resolve, reject)
    })
  }

  createUserWithEmailAndPassword (email, password) {
    return this.$q((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(resolve, reject)
    })
  }

  set (path, data) {
    return Observable.fromPromise(
      this.$q((resolve, reject) => {
        firebase.database().ref(path).set(data)
          .then(resolve, reject)
      })
    )
  }

  update (path, data) {
    return Observable.fromPromise(
      this.$q((resolve, reject) => {
        firebase.database().ref(path).update(data)
          .then(resolve, reject)
      })
    )
  }

  push (path, data) {
    return Observable.fromPromise(
      this.$q((resolve, reject) => {
        firebase.database().ref(path).push(data)
          .then(resolve, reject)
      })
    )
  }

  remove (path) {
    return Observable.fromPromise(
      this.$q((resolve, reject) => {
        firebase.database().ref(path).remove()
          .then(resolve, reject)
      })
    )
  }

  onValue (ref) {
    return Observable.create((o) => {
      ref = _.isString(ref) ? this.ref(ref) : ref
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

  onArrayValue (ref) {
    return Observable.create((o) => {
      ref = _.isString(ref) ? this.ref(ref) : ref
      const fn = ref.on('value', (snapshots) => {
        const result = []
        snapshots.forEach((snapshot, key) => {
          const x = snapshot.val()
          x.id = snapshot.key
          result.push(x)
        })
        setTimeout(() => {
          console.log('got data')
          this.$rootScope.$apply(() => {
            o.next(result)
          })
        }, 0)
      })
      return () => {
        ref.off('value', fn)
      }
    })
  }

  onceValue (path, callback) {
    firebase.database().ref(path).once('value', (snapshot) => {
      setTimeout(() => {
        this.$rootScope.$apply(() => {
          callback(snapshot.val())
        })
      }, 0)
    })
  }

  upload (path, file) {
    return Observable.create((o) => {
      firebase.storage().ref(path).put(file)
        .then((res) => {
          setTimeout(() => {
            this.$rootScope.$apply(() => {
              o.next(res)
              o.complete()
            })
          }, 0)
        }, (err) => {
          setTimeout(() => {
            this.$rootScope.$apply(() => {
              o.error(err)
            })
          }, 0)
        })
    })
  }

  get timestamp () {
    return firebase.database.ServerValue.TIMESTAMP
  }

  ref (path) {
    return firebase.database().ref(path)
  }

  onChildAdded (ref) {
    return Observable.create((o) => {
      ref = _.isString(ref) ? this.ref(ref) : ref
      const fn = ref.on('child_added', (snapshot) => {
        setTimeout(() => {
          this.$rootScope.$apply(() => {
            o.next(snapshot.val())
          })
        }, 0)
      })
      return () => {
        ref.off('child_added', fn)
      }
    })
  }
}
