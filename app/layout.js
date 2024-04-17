import ThemeProvider from '@/contexts/ThemeProvider';
import './globals.css';

export const metadata = {
  title: 'Home | MovieDB',
  description: 'MovieDB homepage description',
};

const RootLayout = async ({ children }) => {
  return (
    <html lang="en" className="dark">
      <body className="dark:bg-body bg-white font-[Sora] dark:text-white text-dark">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
