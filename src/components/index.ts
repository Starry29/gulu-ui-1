import type {App, Component} from 'vue';
import Input from '../lib/input/Input.vue';
import InputPassword from '../lib/input/InputPassword.vue';
import InputTextArea from '../lib/input/textArea.vue';
import Switch from '../lib/Switch.vue';
import Carousel from '../lib/Carousel/Carousel.vue';
import CarouselItem from '../lib/Carousel/CarouselItem.vue';
import Tag from '../lib/Tag/Tag.vue';
import ComponentDesc from '../Common/ComponentDesc.vue';
import Button from '../lib/Button.vue';

const components: { [propName: string]: Component } = {
    GInput: Input,
    GButton: Button,
    GInputPassword: InputPassword,
    GInputTextArea: InputTextArea,
    GSwitch: Switch,
    GCarousel: Carousel,
    GCarouselItem: CarouselItem,
    GTag: Tag,
    ComponentDesc
};
export default {
    install: (Vue: App) => {
        for (const key in components) {
            Vue.component(key, components[key]);
        }

    }
};