import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar'
import '../styles/globals.css'

import { ThemeProvider } from 'next-themes'


function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <div className="grid grid-cols-12 gap-6 px-5 lg:px-48 my-14 md:px-32">
        <div className="h-full col-span-12 p-4 text-bace text-center bg-white dark:bg-dark-500 lg:col-span-3  rounded-2xl">
          <Sidebar />
        </div>
        <div className="flex flex-col col-span-12 overflow-hidden bg-white rounded-2xl lg:col-span-9 dark:bg-dark-500">
          <Navbar />
          <Component {...pageProps} />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default MyApp;