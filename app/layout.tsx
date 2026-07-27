import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gopal Saha — Scientific Illustrator & Graphic Designer',
  description: '13+ years of scientific illustration, animal anatomy, educational infographics and graphic design.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}