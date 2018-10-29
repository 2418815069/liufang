<template>
    <div>
        <h1>.Vue File</h1>
        <span>{{message}}</span>
    </div>
</template>
<script>
import myTest from './my-test'
export default {
    data() {
        return {
            message: 'yyyhdsju vue'
        };
    },
    components: {
        myTest
    }
};
</script>
<style scoped>

</style>

