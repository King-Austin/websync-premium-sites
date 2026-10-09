import { Metadata } from 'next';
import PrivacyContent from './PrivacyContent';

export const metadata: Metadata = {
  title: 'Privacy Policy | WebSync Digital',
  description: 'Learn how WebSync Digital protects your data. Read our privacy policy detailing our data handling practices, security measures, and your rights.',
  alternates: {
    canonical: '/privacy',
  },
};

export default function Page() {
  return <PrivacyContent />;
}
