import React from 'react';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Mission from '../components/Mission';
import Callout from '../components/Callout';

export default function Home() {
  return (
    <main className="pt-16">
      {/* Hero Section */}
      <Hero />

      {/* Impact Stats Banner */}
      <Stats />

      {/* Mission Bento Grid */}
      <Mission />

      {/* Community Sign-up Callout */}
      <Callout />
    </main>
  );
}
