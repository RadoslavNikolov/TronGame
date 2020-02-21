<template>
    <div v-cloak>
        <div class="text-center">
            <div><span :class=avatarClass><i class="fas fa-user-circle fa-3x"></i></span></div>
            <h5>{{model.userEmail}}</h5>
        </div>    
    </div>
</template>

<script>

export default {
    name: 'PlayerProfile',
    props: {
        model: {
            type: Object,
            required: true
        }
    },
    date() {
       
    },
    mounted() {
        
    },
    computed: {
        avatarClass() {
            switch(this.model?.color){
                case 'red': return 'text-danger';
                case 'blue': return 'text-info';
                default: break;
            }

            return '';
        }

    }
}
</script>