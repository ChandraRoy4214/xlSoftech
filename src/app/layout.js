// import { disableReactDevTools } from '@fvilers/disable-react-devtools';
import localFont from 'next/font/local';
import Footer from '../../components/Footer';
import '../../styles/globals.css';
import Navbar from '../../components/Navbar';

// const barlowCondensed = localFont({
//   src: [
//     {
//       path: '../public/fonts/Poppins-Regular.ttf',
//       weight: '400',
//     },
//     {
//       path: '../public/fonts/Poppins-Medium.ttf',
//       weight: '500',
//     },
//     {
//       path: '../public/fonts/Poppins-SemiBold.ttf',
//       weight: '600',
//     },
//     {
//       path: '../public/fonts/Poppins-Bold.ttf',
//       weight: '700',
//     },
//     {
//       path: '../public/fonts/Poppins-ExtraBold.ttf',
//       weight: '800',
//     },
//   ],
//   variable: '--font-barlow-condensed',
// });

// const barlow = localFont({
//   src: [
//     {
//       path: '../public/fonts/Poppins-Regular.ttf',
//       weight: '400',
//     },
//     {
//       path: '../public/fonts/Poppins-Medium.ttf',
//       weight: '500',
//     },
//     {
//       path: '../public/fonts/Poppins-SemiBold.ttf',
//       weight: '600',
//     },
//     {
//       path: '../public/fonts/Poppins-Bold.ttf',
//       weight: '700',
//     },
//     {
//       path: '../public/fonts/Poppins-ExtraBold.ttf',
//       weight: '800',
//     },
//   ],
//   variable: '--font-barlow',
// });

export default async function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        cz-shortcut-listen='false'
        className={` bg-black min-h-screen font-barlow`}
        // className={`${barlow.variable} ${barlowCondensed.variable} bg-black min-h-screen font-barlow`}
      >
        <div className='min-h-screen'>
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
