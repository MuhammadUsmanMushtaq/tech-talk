import MainNavigation from './MainNavigation';

function Layout({ children }) {
  return (
    <div className='p-4'>
      <MainNavigation />
      <main className='max-w-[800px] m-auto'>{children}</main>
    </div>
  );
}

export default Layout;
