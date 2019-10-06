export default {
    install(Vue) {
        Vue.directive("input-extend", {
            inserted(el, binding, vnode) {
                let input = el;
                if(el.tagName !== 'INPUT') {
                    input = el.getElementsByTagName("input")[0];
                }

                switch(binding.value) {
                    case "number":
                        input.addEventListener("keyup", function() {
                            let value = this.value.replace(/[^0-9]/g,'') || "0";
                            vnode.data.model && vnode.data.model.callback(value);
                        }, false);
                        input.addEventListener("blur", function() {
                            let value = this.value.replace(/[^0-9]/g,'') || "0";
                            vnode.data.model && vnode.data.model.callback(value);
                        }, false);
                        break;
                    case "float":
                        const handler = function() {
                            this.value = this.value.replace(/[^0-9.]/g,'') || "0";
                            let length = this.value.length;
                            let dotIndex = this.value.indexOf(".");
                            if(dotIndex > -1) {
                                let value = this.value;
                                if(dotIndex == length-1) {
                                    value = this.value.substr(0, length-1);
                                } else if(dotIndex < length-2) {
                                    value = this.value.substr(0, dotIndex+3);
                                }

                                vnode.data.model && vnode.data.model.callback(value);
                            }
                        }
                        input.addEventListener("keyup", function() {
                            let value = this.value.replace(/[^0-9.]/g,'');

                            vnode.data.model && vnode.data.model.callback(value);
                        }, false);
                        input.addEventListener("blur", handler.bind(input), false);
                        break;
                }
            }
        });
    }
}
