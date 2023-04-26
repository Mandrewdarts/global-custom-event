import { authChange, toast } from './shared';

export function bootstrapLoginForm() {
  const form = getLoginForm();
  form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const user = {
      email: formData.get('email') as string,
    };

    setTimeout(() => {
      authChange(user);
      toast('Logged in!');
      form.style.display = 'none';
      (e.target as HTMLFormElement).reset();
    }, 3000);
  });
}

export function getLoginForm() {
  return document.querySelector('#login-form') as HTMLFormElement;
}
