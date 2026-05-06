import { Metadata } from 'next';
import TermsContent from './TermsContent';

export const metadata: Metadata = {
  title: 'Terms of Service | WebSync Digital',
  description: 'Terms of service and subscription agreements for WebSync Digital. Read our usage rights, pricing models, and service launch terms.',
  alternates: {
    canonical: '/terms',
  },
};

export default function Page() {
  return <TermsContent />;
}
