import { storiesOf } from '@storybook/vue3';
import AButton from '../src/AButton.vue';

/**
 * @type {import('@storybook/vue3').Meta}
 */
export default {
  component: AButton,
  title: 'Design System/UI/atoms/Button',
};

// 👇 We create a “template” of how args map to rendering
// const Template = args => ({
//   components: { AButton },
//   setup() {
//     //👇 The args will now be passed down to the template
//     return { args };
//   },
//   template: '<a-button v-bind="args" />',
// });

// //👇 Each story then reuses that template
// export const Primary = Template.bind({});
// Primary.args = {
//   primary: true,
//   label: 'Primary',
// };

storiesOf('Button', module).add('Default', () => ({
  components: { AButton },
  template: `
    <div> 
      <a-button>Hello wtf</a-button>
      <a-button>Hello button</a-button>
      <a-button>Hello XX</a-button>
    </div>
  `,
}));
