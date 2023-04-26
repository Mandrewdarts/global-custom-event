import { useEffect, useState } from 'react';
import { authChange, toast } from '../shared';

export function App() {
  const [user, setUser] = useState({ email: null });

  function onAuthChange(e: any) {
    if (e.detail.user) {
      setUser(e.detail.user);
    } else {
      setUser({ email: null });
    }
  }

  function handleLogout() {
    setTimeout(() => {
      authChange(null);
      toast('Logged out successfully.');
    }, 2000);
  }

  useEffect(() => {
    document.addEventListener('authchange', onAuthChange);

    return () => {
      document.removeEventListener('authchange', onAuthChange);
    };
  });

  return (
    <header className="header">
      <span>Feedback App</span>
      <div>
        {user.email && (
          <>
            <span style={{ fontSize: '1rem', marginRight: '1rem' }}>
              Welcome {user.email}!
            </span>
            <button onClick={handleLogout}>Logout</button>
          </>
        )}
      </div>
    </header>
  );
}
