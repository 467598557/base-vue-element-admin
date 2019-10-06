import {FormTriggerRequiredClassName} from 'config/common';

function blurHandler(el, rule) {
    if(rule.required && !this.value.trim()) {
        this.value = "";
        el.classList.add(FormTriggerRequiredClassName);
    }
}
export default {
    install(Vue) {
        Vue.directive("input-rule", {
            inserted(el, binding) {
                let input = el.getElementsByTagName("input")[0];
                if(input) {
                    input.addEventListener("focus", function() {
                        el.classList.remove(FormTriggerRequiredClassName);
                    }, false);
                    input.addEventListener("blur", blurHandler.bind(input, el, binding.value), false);
                }
            },
            update(el, binding) {
                if(binding.value != binding.oldValue) {
                    let input = el.getElementsByTagName("input")[0];
                    if(input) {
                        blurHandler.call(input, el, binding.value);
                    }
                }
            }
        });
    }
}
