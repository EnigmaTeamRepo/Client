<template>
    <li class="user-item flex-col">
        <span class="date">{{registrationDate}}</span>
        <span class="name">
            {{ name }}
        </span>
        <div>
            <span class="birthdate">{{berthDate}}</span>
            <span class="passport">{{passport}}</span>
            <span class="sex">{{sex}}</span>

        </div>
        <p class="passport-issued-by">
            {{user?.passport_issued_by}}
        </p>
        <p class="born-place">
            {{user?.born_place}}
        </p>

        <div class="actions">
            <button class="action-btn action-btn--warn" v-if="isNew">отклонить</button>
            <button class="action-btn" v-if="isNew">одобрить</button>

            <button class="action-btn" 
                v-if="isActive"
                :class="{'action-btn--warn': isBlocked}"
            >
                {{changeStatusText}}
            </button>

        </div>
    </li>
</template>
<script>
export default {
    name: 'VUserItem',
    props: {
        user: {
            type: Object,
            required: true
        },
    },

    computed: {
        name() {
            return `${this.user?.last_name} ${this.user?.name} ${this.user?.patronymic} `
        },

        registrationDate() {
            const date = new Date(this.user?.registration_date)
            const hours = date.getHours()
            const minutes = this.dateFormat(date.getMinutes())
            const month = this.dateFormat(date.getMonth())
            const day = this.dateFormat(date.getDay())
            const year = this.dateFormat(date.getFullYear())

            return `${hours}:${minutes} ${day}:${month}:${year}`
        },

        berthDate() {
            const date = new Date(this.user?.birth_date)
            const month = this.dateFormat(date.getMonth())
            const day = this.dateFormat(date.getDay())
            const year = this.dateFormat(date.getFullYear())

            return `${day}.${month}.${year}`
        },
        passport() {
            const passport = this.user.passport
            return `${passport.substring(0, 4)} ${passport.substring(4,passport.lenth)}`
        },

        sex() {
            return this.user.sex === 'male' ? 'Муж.' : 'Жен.'
        },

        isActive() {
            return this.user.user_status === "ACTIVE"
        },

        isBlocked() {
            return this.user.user_status === "BLOCKED"
        },

        isNew() {
            return this.user.user_status === "NEW"
        },

        changeStatusText() {
            return this.isActive ? 'заблокировать' : 'разблокировать'
        }
    },
    methods: {
        dateFormat(value) {
            return value < 10 ? `0${value}` : value
        }
    },
}
</script>
<style src="./style.scss" lang="scss"></style>
