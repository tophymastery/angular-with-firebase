class HomeController {
    constructor ($course, $state) {
        'ngInject'

        this.$course = $course
        this.$state = $state
        this.course = []
    }

    $onInit() {
        this.$course.list()
            .subscribe((courses) => {
                this.course = courses
            })
    }
}

export default {
    selector: 'home',
    template: require('./home.component.html'),
    controller: HomeController
}