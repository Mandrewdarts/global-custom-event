import { defineComponent, reactive } from 'vue';
import { toast } from '../shared';

const html = String.raw;

export default defineComponent({
  setup() {
    const formState = reactive({ disabled: false });
    function submitForm(e: any) {
      formState.disabled = true;

      setTimeout(() => {
        formState.disabled = false;
        e.target.reset();
        toast('Feedback Submitted successfully');
      }, 2000);
    }

    return {
      submitForm,
      formState,
    };
  },
  template: html`
    <div class="feedback-form-container">
      <h1>Feedback Form</h1>
      <form @submit.prevent="submitForm">
        <label for="subject">
          <span>Subject</span>
          <input id="subject" type="text" />
        </label>

        <label for="feedback">
          <span>Feedback</span>
          <textarea id="feedback"></textarea>
        </label>

        <div class="buttons">
          <button :disabled="formState.disabled" type="submit">Submit</button>
          <button type="reset">Reset</button>
        </div>
      </form>
    </div>
  `,
});
