import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function VendorRegistration() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('idle');
  const [error, setError] = useState('');
  
  const [formData, setFormData] = useState({
    fullName: '',
    dateOfBirth: '',
    email: '',
    phoneNumber: '',
    shopName: '',
    typeOfShop: '',
    address: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
    setSubmitStatus('submitting');
    setError('');

    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          role: 'vendor',
          fullName: formData.fullName,
          dateOfBirth: formData.dateOfBirth,
          email: formData.email,
          phoneNumber: formData.phoneNumber,
          shopName: formData.shopName,
          typeOfShop: formData.typeOfShop,
          address: formData.address,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || 'Registration failed');
        setSubmitStatus('idle');
      } else {
        setSubmitStatus('success');
      }
    } catch (err) {
      console.error(err);
      setError('Failed to connect to the server');
      setSubmitStatus('idle');
    }
  };

  return (
    <main className="pt-24 pb-20 px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-start min-h-screen">
      {/* Left Column - Promotional Content */}
      <section className="space-y-12 lg:sticky lg:top-32">
        <div className="space-y-6">
          <span className="inline-flex items-center px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full text-caption uppercase tracking-wider font-bold">
            Partner Program
          </span>
          <h1 className="font-display text-[40px] md:text-display-lg text-primary leading-tight">
            Turn Surplus into <br /> <span className="text-tertiary">Social Impact</span>
          </h1>
          <p className="font-body text-body-lg text-on-surface-variant max-w-lg">
            Join our ecosystem of ethical food vendors. By listing your surplus, you're not just reducing waste—you're feeding vitality into the heart of our community.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="p-6 bg-surface-container rounded-3xl border border-outline-variant/30 text-center sm:text-left">
            <span className="material-symbols-outlined text-tertiary-container mb-2 text-3xl">eco</span>
            <h3 className="font-label text-label-md text-primary mb-1">Eco-Conscious</h3>
            <p className="text-caption text-on-surface-variant">Zero-waste fulfillment tracking.</p>
          </div>
          <div className="p-6 bg-surface-container rounded-3xl border border-outline-variant/30 text-center sm:text-left">
            <span className="material-symbols-outlined text-tertiary-container mb-2 text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>diversity_1</span>
            <h3 className="font-label text-label-md text-primary mb-1">Community Led</h3>
            <p className="text-caption text-on-surface-variant">Direct impact on local hunger.</p>
          </div>
        </div>

        <div className="relative rounded-[2rem] overflow-hidden h-[300px] shadow-2xl group">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10"></div>
          <img
            alt="Vibrant local market stall"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyScuaQEUouCAq_2hOrktv-bdmwh-6ugB_ID7UFtXZkEBTCH6PbMTzZO3CqA340fBjqvhWZ5naSIqlfBH4KjNTNXHDbzoe9fGPZ8YNoHnCj4IL-FpagJ4eMEihQlpSnyI4In_lDlhLSTlV1OqRhvSrIQdaiTnBwZlToX4Zix_ObeTHHaPYkf5g2SMiS03eonb_Yf04snwqaCoEFthg8CElfXjQHwxSqOEtvn0IeXff2vX_BuQFVf6QXvAJ5PQPe1zFnztvM2ihK3vR"
          />
          <div className="absolute bottom-6 left-6 z-20">
            <p className="font-headline text-2xl md:text-headline-md text-primary-fixed mb-1 font-bold">15,000+ Tons Rescued</p>
            <p className="font-label text-label-md text-secondary">Join 500+ local vendors today</p>
          </div>
        </div>
      </section>

      {/* Right Column - Registration Form */}
      <section className="bg-surface-container/70 backdrop-blur-md p-8 md:p-12 rounded-[2rem] shadow-2xl border border-primary/10">
        <h2 className="font-headline text-2xl md:text-headline-lg text-on-surface mb-8">Vendor Registration</h2>
        
        {error && (
          <div className="p-3 mb-6 bg-error-container/20 border border-error/50 rounded-lg text-error text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-1">
              <label className="font-label text-label-md text-on-surface-variant ml-1 block">Full Name</label>
              <input name="fullName" value={formData.fullName} onChange={handleChange} required className="w-full bg-surface-container-high border-none rounded-xl p-4 text-on-surface focus:ring-2 focus:ring-primary focus:shadow-[0_0_15px_rgba(110,255,132,0.3)] transition-all placeholder:text-outline/50 outline-none" placeholder="Alex Rivers" type="text" />
            </div>
            <div className="space-y-1">
              <label className="font-label text-label-md text-on-surface-variant ml-1 block">Date of Birth</label>
              <input name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} required className="w-full bg-surface-container-high border-none rounded-xl p-4 text-on-surface focus:ring-2 focus:ring-primary focus:shadow-[0_0_15px_rgba(110,255,132,0.3)] transition-all outline-none" type="date" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-1">
              <label className="font-label text-label-md text-on-surface-variant ml-1 block">Email ID</label>
              <input name="email" value={formData.email} onChange={handleChange} required className="w-full bg-surface-container-high border-none rounded-xl p-4 text-on-surface focus:ring-2 focus:ring-primary focus:shadow-[0_0_15px_rgba(110,255,132,0.3)] transition-all placeholder:text-outline/50 outline-none" placeholder="alex@greenstore.com" type="email" />
            </div>
            <div className="space-y-1">
              <label className="font-label text-label-md text-on-surface-variant ml-1 block">Phone Number</label>
              <input name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required className="w-full bg-surface-container-high border-none rounded-xl p-4 text-on-surface focus:ring-2 focus:ring-primary focus:shadow-[0_0_15px_rgba(110,255,132,0.3)] transition-all placeholder:text-outline/50 outline-none" placeholder="+1 (555) 000-0000" type="tel" />
            </div>
          </div>

          <hr className="border-outline-variant/30 my-8" />

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-1">
              <label className="font-label text-label-md text-on-surface-variant ml-1 block">Shop Name</label>
              <input name="shopName" value={formData.shopName} onChange={handleChange} required className="w-full bg-surface-container-high border-none rounded-xl p-4 text-on-surface focus:ring-2 focus:ring-primary focus:shadow-[0_0_15px_rgba(110,255,132,0.3)] transition-all placeholder:text-outline/50 outline-none" placeholder="Green Valley Grocers" type="text" />
            </div>
            <div className="space-y-1">
              <label className="font-label text-label-md text-on-surface-variant ml-1 block">Type of Shop</label>
              <select name="typeOfShop" value={formData.typeOfShop} onChange={handleChange} required className="w-full bg-surface-container-high border-none rounded-xl p-4 text-on-surface focus:ring-2 focus:ring-primary focus:shadow-[0_0_15px_rgba(110,255,132,0.3)] transition-all outline-none cursor-pointer pr-10 appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%2388b695%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-[length:24px] bg-no-repeat bg-[position:right_12px_center]">
                <option disabled value="">Select category</option>
                <option value="Restaurant">Restaurant</option>
                <option value="General Store">General Store</option>
                <option value="Cafe">Cafe</option>
                <option value="Hotel">Hotel</option>
                <option value="Catering">Catering</option>
              </select>
            </div>
          </div>

          <div className="space-y-1">
            <label className="font-label text-label-md text-on-surface-variant ml-1 block">Shop Address</label>
            <textarea name="address" value={formData.address} onChange={handleChange} required className="w-full bg-surface-container-high border-none rounded-xl p-4 text-on-surface focus:ring-2 focus:ring-primary focus:shadow-[0_0_15px_rgba(110,255,132,0.3)] transition-all placeholder:text-outline/50 resize-none outline-none" placeholder="123 Sustainability Way, Eco City, EC 40201" rows="2"></textarea>
          </div>

          <hr className="border-outline-variant/30 my-8" />

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-1">
              <label className="font-label text-label-md text-on-surface-variant ml-1 block">Create Password</label>
              <div className="relative">
                <input name="password" value={formData.password} onChange={handleChange} required className="w-full bg-surface-container-high border-none rounded-xl p-4 text-on-surface focus:ring-2 focus:ring-primary focus:shadow-[0_0_15px_rgba(110,255,132,0.3)] transition-all placeholder:text-outline/50 outline-none pr-12" placeholder="••••••••" type={showPassword ? 'text' : 'password'} />
                <span onClick={() => setShowPassword(!showPassword)} className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-outline-variant cursor-pointer hover:text-primary transition-colors select-none">
                  {showPassword ? 'visibility_off' : 'visibility'}
                </span>
              </div>
            </div>
            <div className="space-y-1">
              <label className="font-label text-label-md text-on-surface-variant ml-1 block">Confirm Password</label>
              <div className="relative">
                <input name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required className="w-full bg-surface-container-high border-none rounded-xl p-4 text-on-surface focus:ring-2 focus:ring-primary focus:shadow-[0_0_15px_rgba(110,255,132,0.3)] transition-all placeholder:text-outline/50 outline-none pr-12" placeholder="••••••••" type={showConfirmPassword ? 'text' : 'password'} />
                <span onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-outline-variant cursor-pointer hover:text-primary transition-colors select-none">
                  {showConfirmPassword ? 'visibility_off' : 'visibility'}
                </span>
              </div>
            </div>
          </div>

          <div className="pt-4">
            <label className="flex items-start gap-3 cursor-pointer group">
              <div className="relative flex items-center mt-0.5">
                <input required className="peer h-5 w-5 bg-surface-container-high border border-outline-variant/30 rounded focus:ring-primary text-primary transition-all appearance-none checked:bg-primary checked:border-primary" type="checkbox" />
                <span className="material-symbols-outlined absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-on-primary text-sm opacity-0 peer-checked:opacity-100 pointer-events-none" style={{ fontVariationSettings: "'wght' 700" }}>check</span>
              </div>
              <span className="text-caption text-on-surface-variant group-hover:text-on-surface transition-colors leading-tight">
                I agree to the <Link to="#" className="text-primary hover:underline">Terms of Service</Link> and <Link to="#" className="text-primary hover:underline">Privacy Policy</Link> regarding surplus distribution and data handling.
              </span>
            </label>
          </div>

          <button 
            type="submit"
            disabled={submitStatus !== 'idle'}
            className={`w-full font-bold py-4 rounded-xl transition-all duration-150 font-headline text-[18px] mt-4 shadow-lg ${
              submitStatus === 'idle' 
                ? 'bg-primary-container text-on-primary-container hover:bg-primary-fixed-dim active:scale-[0.98] shadow-primary/20 cursor-pointer' 
                : submitStatus === 'submitting'
                  ? 'bg-primary-container/70 text-on-primary-container/70 cursor-wait'
                  : 'bg-tertiary-container text-on-tertiary-container shadow-tertiary/20'
            }`}
          >
            {submitStatus === 'idle' ? 'Complete Registration' : submitStatus === 'submitting' ? 'Processing...' : 'Check Your Email'}
          </button>

          <p className="text-center text-caption text-on-surface-variant pt-2">
            Already a vendor? <Link to="#" className="text-tertiary-fixed font-bold hover:underline">Log in to your dashboard</Link>
          </p>
        </form>
      </section>
    </main>
  );
}
