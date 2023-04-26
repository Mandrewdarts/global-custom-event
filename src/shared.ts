export function toast(message: string) {
  document.dispatchEvent(
    new CustomEvent('app-toast', {
      detail: {
        text: message,
      },
    })
  );
}

export function appToastEventHandler() {
  document.addEventListener(
    'app-toast',
    (e: any) => {
      Toastify({ text: e.detail.text }).showToast();
    },
    { capture: true }
  );
}

export function authChange(user: { email: string } | null) {
  document.dispatchEvent(
    new CustomEvent('authchange', {
      detail: {
        authenticated: Boolean(user),
        user,
      },
    })
  );
}
