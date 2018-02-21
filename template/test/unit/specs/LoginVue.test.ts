import { mount } from "@vue/test-utils";
import LoginForm from '~/components/LoginForm.vue';

describe("LoginForm.vue", () => {
    let wrapper: any;

    beforeEach(() => {
        wrapper = mount(LoginForm, {
            data: {
                message: "Hello world"
            },
            propsData: {
                myProp: "!"
            }
        });
    });

    it(".formEmail = ''", () => {
        expect(wrapper.vm.formEmail).toHaveLength(0);
    });
});
