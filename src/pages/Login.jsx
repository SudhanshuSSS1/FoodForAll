import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  const navigate = useNavigate();
  const [role, setRole] = useState('user'); // 'user' or 'vendor'
  const [showPassword, setShowPassword] = useState(false);
  const [authStatus, setAuthStatus] = useState('idle'); // 'idle', 'authenticating', 'success'

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setAuthStatus('authenticating');
    setErrorMsg('');
    
    const result = await login(email, password, role);
    
    if (result.success) {
      setAuthStatus('success');
      setTimeout(() => {
        setAuthStatus('idle');
        navigate(result.role === 'vendor' ? '/vendor/dashboard' : '/'); // Redirect based on actual role
      }, 1000);
    } else {
      setAuthStatus('idle');
      setErrorMsg(result.message);
    }
  };


  return (
    <main className="min-h-screen flex items-center justify-center px-6 pt-24 pb-12 relative overflow-hidden bg-surface">
      {/* Atmospheric Background Elements */}
      <div className="absolute top-[10%] right-[-5%] w-[400px] h-[400px] bg-primary/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-5%] left-[-5%] w-[300px] h-[300px] bg-tertiary/10 blur-[100px] rounded-full pointer-events-none"></div>
      
      <div className="w-full max-w-[480px] z-10">
        {/* Login Card */}
        <div className="bg-surface-container border border-outline-variant/30 rounded-[2.5rem] p-8 md:p-12 shadow-[0px_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-sm">
          <div className="mb-8">
            <h1 className="font-headline text-[32px] md:text-headline-lg text-on-surface mb-1">Welcome Back</h1>
            <p className="font-body text-body-md text-on-surface-variant">Log in to continue rescuing surplus food.</p>
          </div>
          
          {/* Role Toggle */}
          <div className="bg-surface-variant p-1 rounded-xl flex mb-8 relative">
            <div 
              className={`absolute h-[calc(100%-8px)] w-[calc(50%-4px)] bg-primary-container rounded-lg transition-transform duration-300 transform ${role === 'vendor' ? 'translate-x-[calc(100%+4px)]' : 'translate-x-0'}`}
            ></div>
            <button 
              type="button"
              className={`relative z-10 flex-1 py-2 font-label text-label-md text-center transition-colors duration-300 rounded-lg cursor-pointer ${role === 'user' ? 'text-on-primary-container font-bold' : 'text-on-surface-variant hover:text-on-surface'}`}
              onClick={() => setRole('user')}
            >
              Community Member
            </button>
            <button 
              type="button"
              className={`relative z-10 flex-1 py-2 font-label text-label-md text-center transition-colors duration-300 rounded-lg cursor-pointer ${role === 'vendor' ? 'text-on-primary-container font-bold' : 'text-on-surface-variant hover:text-on-surface'}`}
              onClick={() => setRole('vendor')}
            >
              Food Vendor
            </button>
          </div>
          
          {errorMsg && (
            <div className="mb-4 p-3 bg-error-container/20 border border-error/50 rounded-lg text-error text-sm text-center">
              {errorMsg}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email Field */}
            <div className="space-y-1 group">
              <label className="font-label text-label-md text-on-surface-variant group-focus-within:text-primary transition-colors ml-1 block" htmlFor="email">Email ID</label>
              <div className="relative rounded-xl focus-within:shadow-[0_0_15px_rgba(110,255,132,0.15)] transition-all">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary transition-colors">mail</span>
                <input required value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-surface-container-highest border-none rounded-xl py-3 pl-11 pr-3 text-on-surface placeholder:text-outline focus:ring-2 focus:ring-primary transition-all duration-200 outline-none" id="email" type="email" />
              </div>
            </div>
            
            {/* Password Field */}
            <div className="space-y-1 group">
              <label className="font-label text-label-md text-on-surface-variant group-focus-within:text-primary transition-colors ml-1 block" htmlFor="password">Password</label>
              <div className="relative rounded-xl focus-within:shadow-[0_0_15px_rgba(110,255,132,0.15)] transition-all">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary transition-colors">lock</span>
                <input required value={password} onChange={(e) => setPassword(e.target.value)} className="w-full bg-surface-container-highest border-none rounded-xl py-3 pl-11 pr-11 text-on-surface placeholder:text-outline focus:ring-2 focus:ring-primary transition-all duration-200 outline-none" id="password" type={showPassword ? 'text' : 'password'} />
                <button 
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-primary cursor-pointer select-none" 
                  onClick={() => setShowPassword(!showPassword)} 
                  type="button"
                  tabIndex="-1"
                >
                  <span className="material-symbols-outlined">{showPassword ? 'visibility_off' : 'visibility'}</span>
                </button>
              </div>
            </div>
            
            <div className="flex items-center justify-between py-1">
              <div className="flex items-center gap-2 group cursor-pointer">
                <input className="peer w-4 h-4 rounded bg-surface-container-highest border-outline-variant text-primary focus:ring-primary focus:ring-offset-background cursor-pointer" id="remember" type="checkbox" />
                <label className="font-caption text-caption text-on-surface-variant group-hover:text-on-surface cursor-pointer select-none transition-colors" htmlFor="remember">Remember me</label>
              </div>
              <Link className="font-caption text-caption text-tertiary-fixed hover:underline transition-all" to="#">Forgot Password?</Link>
            </div>
            
            {/* Primary Action */}
            <button 
              type="submit"
              disabled={authStatus !== 'idle'}
              className={`w-full font-label text-[18px] font-bold py-4 rounded-xl transition-all duration-200 mt-2 shadow-lg ${
                authStatus === 'idle'
                  ? 'bg-primary text-on-primary hover:bg-primary-fixed-dim active:scale-[0.98] shadow-primary/20 cursor-pointer'
                  : authStatus === 'authenticating'
                    ? 'bg-primary/70 text-on-primary/70 opacity-70 cursor-wait'
                    : 'bg-tertiary-container text-on-tertiary-container shadow-tertiary-container/20'
              }`}
            >
              {authStatus === 'idle' ? 'Sign In' : authStatus === 'authenticating' ? 'Authenticating...' : 'Success!'}
            </button>
          </form>
          
          <div className="mt-8 pt-8 border-t border-outline-variant flex flex-col items-center gap-3">
            <p className="font-body text-body-md text-on-surface-variant">Don't have an account?</p>
            <Link 
              to={role === 'user' ? '/signup' : '/register'}
              className="w-full border-2 border-tertiary hover:bg-tertiary/10 text-tertiary font-label text-[16px] font-bold py-3.5 rounded-xl transition-all duration-200 flex items-center justify-center gap-2"
            >
              Create New {role === 'user' ? 'Account' : 'Vendor Account'}
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </Link>
          </div>
        </div>
        
        {/* Identity Footer */}
        <div className="mt-8 text-center">
          <p className="font-caption text-caption text-on-surface-variant/60">
            © 2024 foodForALL. Powered by Kindness & Vitality.
          </p>
        </div>
      </div>
    </main>
  );
}
