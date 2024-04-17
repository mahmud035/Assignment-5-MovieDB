import './globals.css';

export const metadata = {
  title: 'Home | MovieDB',
  description: 'MovieDB homepage description',
};

const RootLayout = async ({ children }) => {
  return (
    // TODO: Toggle dark class to switch between dark and light mode
    <html lang="en" className="dark">
      <body className="dark:bg-body bg-white font-[Sora] dark:text-white text-dark">
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
