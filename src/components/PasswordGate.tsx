'use client';

import { useState, useEffect, useRef } from 'react';
import { Lock, ArrowRight } from 'lucide-react';

const SITE_PASSWORD = '0210';
const AUTH_KEY = 'bs_authenticated';

export default function PasswordGate({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const stored = sessionStorage.getItem(AUTH_KEY);
    setIsAuthenticated(stored === 'true');
  }, []);

  useEffect(() => {
    if (isAuthenticated === false) {
      inputRef.current?.focus();
    }
  }, [isAuthenticated]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === SITE_PASSWORD) {
      sessionStorage.setItem(AUTH_KEY, 'true');
      setIsAuthenticated(true);
      setError(false);
    } else {
      setError(true);
      setShake(true);
      setPassword('');
      setTimeout(() => setShake(false), 500);
      inputRef.current?.focus();
    }
  };

  // Loading state
  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-primary-300 border-t-primary-600 rounded-full animate-spin" />
      </div>
    );
  }

  // Authenticated
  if (isAuthenticated) {
    return <>{children}</>;
  }

  // Password form
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <form onSubmit={handleSubmit} className="text-center">
          {/* Logo area */}
          <div className="mb-8">
            <div className="w-20 h-20 mx-auto bg-primary-50 rounded-full flex items-center justify-center mb-6">
              <Lock className="w-8 h-8 text-primary-500" />
            </div>
            <h1 className="text-2xl font-semibold tracking-wide text-foreground mb-2">
              BEAUTY SPHERE
            </h1>
            <p className="text-sm text-foreground/50">
              Введите пароль для входа на сайт
            </p>
          </div>

          {/* Input */}
          <div className={`relative mb-4 ${shake ? 'animate-shake' : ''}`}>
            <input
              ref={inputRef}
              type="password"
              inputMode="numeric"
              maxLength={4}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError(false);
              }}
              placeholder="- - - -"
              className={`w-full text-center text-2xl tracking-[0.5em] font-medium px-6 py-4 rounded-xl border-2 outline-none transition-colors bg-white ${
                error
                  ? 'border-red-400 text-red-600'
                  : 'border-border focus:border-primary-400'
              }`}
              autoComplete="off"
            />
          </div>

          {error && (
            <p className="text-sm text-red-500 mb-4 animate-fade-in">
              Неверный пароль. Попробуйте ещё раз.
            </p>
          )}

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 px-6 py-4 text-sm font-medium text-white bg-primary-500 hover:bg-primary-600 rounded-xl shadow-sm transition-all hover:scale-[1.02] active:scale-95"
          >
            Войти
            <ArrowRight className="h-4 w-4" />
          </button>
        </form>
      </div>
    </div>
  );
}
