import Vue from 'vue';

Vue.filter('numberFixed2', function(val) {
    val = +val || 0;

    return val.toFixed(2);
});
