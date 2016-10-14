export class CourseService {
    constructor($firebase) {
        'ngInject'

        this.$firebase = $firebase
    }

    create({name, description}) {
        return this.$firebase.currentUser()
            .flatMap(({uid}) => this.$firebase.push('course', {
                name,
                description,
                owner: uid,
                timestamp: this.$firebase.timestamp
            }))
    }

    save(id, data) {
        return this.$firebase.set(`course/${id}`, data)
    }

    list() {
        const ref = this.$firebase.ref('course').orderByChild('open').equalTo(true)
        return this.$firebase.onArrayValue(ref)
    }

    get(id) {
        return this.$firebase.onValue(`course/${id}`)
    }

    ownCourses (userId) {
        const ref = this.$firebase.ref('course').orderByChild('owner').equalTo(userId)
        return this.$firebase.onArrayValue(ref)
    }

    sendMessage (id, message) {
        return this.$firebase.push(`chat/${id}`, message)
    }

    messages(id) {
        const ref = this.$firebase.ref(`chat/${id}`).limitToLast(10)
        return this.$firebase.onChildAdded(ref)
    }

    applyCourse(id, userId) {
        console.log('userId in applyCourse (course) = ' + userId)
        return this.$firebase.set(`course/${id}/student/${userId}`, true)
            .flatMap(() => this.$firebase.set(`userCourse/${user_id}/${id}`, true))
    }

    favorite (id, userId) {
        return this.$firebase.set(`course/${id}/favorite/${userId}`, true)
    }

    unfavorite (id, userId) {
        return this.$firebase.remove(`course/${id}/favorite/${userId}`)
    }

    user (userId) {
        const ref = this.$firebase.ref('course').orderByChild(`student/${userId}`).equalTo(true)
        return this.$firebase.onArrayValue(ref)
    }

}