class CourseViewController {
    constructor($course, $state, $firebase) {
        'ngInject'

        this.$course = $course
        this.$firebase = $firebase
        this.courseId = $state.params.id
        this.course = null
    }

    $onInit() {
        this.course$ = this.$course.get(this.courseId)
            .subscribe((course) => {
                this.course = course
            })

        this.$firebase.currentUser()
            .first()
            .subscribe(({uid}) => {
                this.userId = uid
            })
    }

    $onDestroy() {
        this.course$.unsubscribe()
    }
}

export default {
    selector: 'courseView',
    template: require('./course-view.component.html'),
    controller: CourseViewController
}