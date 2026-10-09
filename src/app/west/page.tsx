import { Metadata } from 'next';
import WestContent from './WestContent';

export const metadata: Metadata = {
  title: 'West Taylor - Developer & Founder | WebSync Digital',
  description: 'Profile of West Taylor, visionary entrepreneur, expert software engineer, and Founder & CEO of WebSync Digital.',
  alternates: {
    canonical: '/west',
  },
};

export default function Page() {
  return <WestContent />;
}
