<template>
    <div class="container grey-1">
        Well shoot, an error has occurred.  Please click <a href="https://nickrosen.codes/">here</a> to return to the home page. 
    </div>
</template>

<script>
    export default {
        data() {
            return {
                title: 'Nick Rosen | 404 Page'
            }
        },
        head () {
            return {
                title: this.title,
                meta: [
                    // hid is used as unique identifier. Do not use `vmid` for it as it will not work
                    { hid: 'description', name: 'description', content: 'Nick Rosen Error Page' }
                ]
            }
        }
    }
</script>

<style scoped>

</style>