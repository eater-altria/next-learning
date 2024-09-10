import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts'
import clsx from 'clsx';

function RootLayout({ children} : {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={clsx(
        'antialiased',
        inter.className
      )}>{children}</body>
    </html>
  );
}


export default RootLayout;