import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function UserRegistration() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullname: '',
    dob: '',
    email: '',
    phone: '',
    address: '',
    password: '',
    confirm_password: '',
    terms: false
  });
  const [progress, setProgress] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState('');

  // Mouse tracking for subtle background movement
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Update progress bar
  useEffect(() => {
    let filledCount = 0;
    const totalFields = 8;
    
    if (formData.fullname.trim() !== '') filledCount++;
    if (formData.dob.trim() !== '') filledCount++;
    if (formData.email.trim() !== '') filledCount++;
    if (formData.phone.trim() !== '') filledCount++;
    if (formData.address.trim() !== '') filledCount++;
    if (formData.password.trim() !== '') filledCount++;
    if (formData.confirm_password.trim() !== '') filledCount++;
    if (formData.terms) filledCount++;

    setProgress((filledCount / totalFields) * 100);
  }, [formData]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirm_password) {
      setError('Passwords do not match');
      return;
    }
    
    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          role: 'user',
          fullName: formData.fullname,
          dateOfBirth: formData.dob,
          email: formData.email,
          phoneNumber: formData.phone,
          address: formData.address,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || 'Registration failed');
      } else {
        setShowSuccess(true);
      }
    } catch (err) {
      console.error(err);
      setError('Failed to connect to the server');
    }
  };

  const handleGoToDashboard = () => {
    setShowSuccess(false);
    navigate('/');
  };

  return (
    <main className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 pt-28 pb-12 bg-surface">
      {/* Atmospheric Background Elements */}
      <div 
        className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none transition-transform duration-300 ease-out"
        style={{ transform: `translate(${(mousePos.x - 0.5) * 50}px, ${(mousePos.y - 0.5) * 50}px)` }}
      ></div>
      <div 
        className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-tertiary/10 rounded-full blur-[100px] pointer-events-none transition-transform duration-300 ease-out"
        style={{ transform: `translate(${(mousePos.x - 0.5) * -30}px, ${(mousePos.y - 0.5) * -30}px)` }}
      ></div>
      
      <div className="w-full max-w-7xl flex flex-col lg:flex-row items-center gap-20 relative z-10">
        
        {/* Left Side: Branding & Community Narrative */}
        <div className="flex-1 text-center lg:text-left space-y-6 w-full">
          <h1 className="font-display text-[48px] md:text-display-lg text-on-surface leading-tight">
            Join the <span className="text-primary">Movement</span> of Food Abundance
          </h1>
          <p className="font-body text-body-lg text-on-surface-variant max-w-lg mx-auto lg:mx-0">
            Your surplus can be someone's feast. Register today to bridge the gap between food waste and hunger in our community.
          </p>
          
          <div className="pt-4 flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">volunteer_activism</span>
              </div>
              <div className="text-left">
                <p className="font-label text-label-md text-on-surface">12k+ Rescuers</p>
                <p className="font-caption text-caption text-on-surface-variant">Active monthly</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center text-tertiary">
                <span className="material-symbols-outlined">restaurant</span>
              </div>
              <div className="text-left">
                <p className="font-label text-label-md text-on-surface">50k Meals</p>
                <p className="font-caption text-caption text-on-surface-variant">Shared this week</p>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:block w-full h-[300px] rounded-full overflow-hidden mt-12 border border-outline-variant/30">
            <div 
              className="w-full h-full bg-cover bg-center transition-transform duration-700 hover:scale-105" 
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBV3IGfTdete8eMG1UY4pPrkQtgFrEIamB-futrL4LdkCyeAz8gIiOBy4DRMqc9NqHWGyB5HffrH2e2HH3AiWJnM0_hYGVNQbkXF-cJGk8HgM6XhnR9s-ahgYXrXUPGxVjZKfYOfmvG69bnTFGVlrMm3wpdxxmdrI-jUvSdpM_aXkx1prtufHCQVMCN1RZe0vToK4j06L36BjLmkS4fEuGQLwDezRe19wBU0wwtOIkd61w_bUXBpfwUnmW8bOjlbA-puQ1JRbrJMswY')" }}
            ></div>
          </div>
        </div>

        {/* Right Side: Registration Form */}
        <div className="flex-1 w-full max-w-xl">
          <div className="bg-surface-container/60 backdrop-blur-md rounded-[2.5rem] p-8 sm:p-12 shadow-2xl relative overflow-hidden border border-outline-variant/50">
            {/* Progress Bar (Subtle) */}
            <div className="absolute top-0 left-0 w-full h-1 bg-surface-container-highest">
              <div 
                className="h-full bg-primary transition-all duration-300" 
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-1">
                <h2 className="font-headline text-[24px] text-on-surface">Create your account</h2>
                <p className="font-caption text-caption text-on-surface-variant">Fill in your details to start rescuing surplus food.</p>
              </div>

              {error && (
                <div className="p-3 bg-error-container/20 border border-error/50 rounded-lg text-error text-sm">
                  {error}
                </div>
              )}

              {/* Grid Layout for inputs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="flex flex-col gap-1.5 group">
                  <label className="font-label text-label-md text-on-surface-variant group-focus-within:text-primary transition-colors" htmlFor="fullname">Full Name</label>
                  <div className="relative flex items-center rounded-xl bg-surface-container-low border border-outline-variant focus-within:border-primary focus-within:shadow-[0_0_15px_rgba(110,255,132,0.2)] transition-all">
                    <span className="material-symbols-outlined absolute left-3 text-on-surface-variant group-focus-within:text-primary">person</span>
                    <input className="w-full bg-transparent border-none focus:ring-0 text-on-surface py-3 pl-10 pr-3 placeholder:text-outline/50 outline-none" id="fullname" name="fullname" value={formData.fullname} onChange={handleChange} placeholder="Jane Doe" required type="text" />
                  </div>
                </div>
                {/* Date of Birth */}
                <div className="flex flex-col gap-1.5 group">
                  <label className="font-label text-label-md text-on-surface-variant group-focus-within:text-primary transition-colors" htmlFor="dob">Date of Birth</label>
                  <div className="relative flex items-center rounded-xl bg-surface-container-low border border-outline-variant focus-within:border-primary focus-within:shadow-[0_0_15px_rgba(110,255,132,0.2)] transition-all">
                    <span className="material-symbols-outlined absolute left-3 text-on-surface-variant group-focus-within:text-primary pointer-events-none">calendar_today</span>
                    <input className="w-full bg-transparent border-none focus:ring-0 text-on-surface py-3 pl-10 pr-3 outline-none [color-scheme:dark]" id="dob" name="dob" value={formData.dob} onChange={handleChange} required type="date" />
                  </div>
                </div>
                {/* Email ID */}
                <div className="flex flex-col gap-1.5 group md:col-span-2">
                  <label className="font-label text-label-md text-on-surface-variant group-focus-within:text-primary transition-colors" htmlFor="email">Email ID</label>
                  <div className="relative flex items-center rounded-xl bg-surface-container-low border border-outline-variant focus-within:border-primary focus-within:shadow-[0_0_15px_rgba(110,255,132,0.2)] transition-all">
                    <span className="material-symbols-outlined absolute left-3 text-on-surface-variant group-focus-within:text-primary">mail</span>
                    <input className="w-full bg-transparent border-none focus:ring-0 text-on-surface py-3 pl-10 pr-3 placeholder:text-outline/50 outline-none" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="jane@example.com" required type="email" />
                  </div>
                </div>
                {/* Phone Number */}
                <div className="flex flex-col gap-1.5 group md:col-span-2">
                  <label className="font-label text-label-md text-on-surface-variant group-focus-within:text-primary transition-colors" htmlFor="phone">Phone Number</label>
                  <div className="relative flex items-center rounded-xl bg-surface-container-low border border-outline-variant focus-within:border-primary focus-within:shadow-[0_0_15px_rgba(110,255,132,0.2)] transition-all">
                    <span className="material-symbols-outlined absolute left-3 text-on-surface-variant group-focus-within:text-primary">call</span>
                    <input className="w-full bg-transparent border-none focus:ring-0 text-on-surface py-3 pl-10 pr-3 placeholder:text-outline/50 outline-none" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="+1 (555) 000-0000" required type="tel" />
                  </div>
                </div>
                {/* Address */}
                <div className="flex flex-col gap-1.5 group md:col-span-2">
                  <label className="font-label text-label-md text-on-surface-variant group-focus-within:text-primary transition-colors" htmlFor="address">Address</label>
                  <div className="relative flex items-center rounded-xl bg-surface-container-low border border-outline-variant focus-within:border-primary focus-within:shadow-[0_0_15px_rgba(110,255,132,0.2)] transition-all">
                    <span className="material-symbols-outlined absolute left-3 text-on-surface-variant group-focus-within:text-primary">location_on</span>
                    <input className="w-full bg-transparent border-none focus:ring-0 text-on-surface py-3 pl-10 pr-3 placeholder:text-outline/50 outline-none" id="address" name="address" value={formData.address} onChange={handleChange} placeholder="123 Kindness Way, Green City" required type="text" />
                  </div>
                </div>
                {/* Create Password */}
                <div className="flex flex-col gap-1.5 group">
                  <label className="font-label text-label-md text-on-surface-variant group-focus-within:text-primary transition-colors" htmlFor="password">Create Password</label>
                  <div className="relative flex items-center rounded-xl bg-surface-container-low border border-outline-variant focus-within:border-primary focus-within:shadow-[0_0_15px_rgba(110,255,132,0.2)] transition-all">
                    <span className="material-symbols-outlined absolute left-3 text-on-surface-variant group-focus-within:text-primary">lock</span>
                    <input className="w-full bg-transparent border-none focus:ring-0 text-on-surface py-3 pl-10 pr-3 placeholder:text-outline/50 outline-none" id="password" name="password" value={formData.password} onChange={handleChange} placeholder="••••••••" required type="password" />
                  </div>
                </div>
                {/* Confirm Password */}
                <div className="flex flex-col gap-1.5 group">
                  <label className="font-label text-label-md text-on-surface-variant group-focus-within:text-primary transition-colors" htmlFor="confirm_password">Confirm Password</label>
                  <div className="relative flex items-center rounded-xl bg-surface-container-low border border-outline-variant focus-within:border-primary focus-within:shadow-[0_0_15px_rgba(110,255,132,0.2)] transition-all">
                    <span className="material-symbols-outlined absolute left-3 text-on-surface-variant group-focus-within:text-primary">verified_user</span>
                    <input className="w-full bg-transparent border-none focus:ring-0 text-on-surface py-3 pl-10 pr-3 placeholder:text-outline/50 outline-none" id="confirm_password" name="confirm_password" value={formData.confirm_password} onChange={handleChange} placeholder="••••••••" required type="password" />
                  </div>
                </div>
              </div>

              {/* Terms */}
              <div className="flex items-start gap-3 pt-2 group">
                <div className="relative flex items-center mt-0.5">
                  <input className="peer h-5 w-5 bg-surface-container-low border border-outline-variant rounded focus:ring-primary text-primary transition-all appearance-none checked:bg-primary checked:border-primary cursor-pointer" id="terms" name="terms" checked={formData.terms} onChange={handleChange} required type="checkbox" />
                  <span className="material-symbols-outlined absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-on-primary text-sm opacity-0 peer-checked:opacity-100 pointer-events-none" style={{ fontVariationSettings: "'wght' 700" }}>check</span>
                </div>
                <label className="font-caption text-caption text-on-surface-variant cursor-pointer group-hover:text-on-surface transition-colors" htmlFor="terms">
                  I agree to the <Link className="text-primary hover:underline transition-all" to="#">Terms of Service</Link> and <Link className="text-primary hover:underline transition-all" to="#">Privacy Policy</Link>.
                </label>
              </div>

              {/* Submit Button */}
              <button 
                type="submit"
                className="w-full bg-primary text-on-primary font-bold py-4 rounded-xl hover:bg-primary-fixed-dim hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(110,255,132,0.15)] font-headline text-[18px] group"
              >
                Complete Registration
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </button>
              
              <p className="text-center font-label text-label-md text-on-surface-variant pt-2">
                Already have an account? <Link className="text-tertiary font-bold hover:text-tertiary-fixed-dim transition-colors" to="#">Log In</Link>
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {showSuccess && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background/90 backdrop-blur-md p-6">
          <div className="bg-surface-container/60 backdrop-blur-md max-w-md w-full rounded-[2.5rem] p-12 text-center space-y-6 border border-outline-variant/50 animate-[pulse_0.3s_ease-out]">
            <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="material-symbols-outlined text-primary text-[48px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
            </div>
            <h3 className="font-headline text-[32px] text-on-surface leading-tight">Welcome to <br/><span className="text-primary">foodForALL!</span></h3>
            <p className="font-body text-body-md text-on-surface-variant">
              Your account has been created successfully. You're now part of a movement making a real difference in the community.
            </p>
            <button 
              onClick={handleGoToDashboard}
              className="w-full bg-tertiary-container text-on-tertiary-container font-bold py-4 rounded-xl hover:brightness-110 active:scale-95 transition-all font-headline text-[18px] shadow-lg shadow-tertiary-container/20 mt-4"
            >
              Go to Dashboard
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
