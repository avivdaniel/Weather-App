import Navigation from '@/components/Navigation.jsx';

const Layout = ({ children }) => (
  <>
    <Navigation />

    <div className="max-w-screen-lg mx-auto p-4 bg-app">{children}</div>
  </>
);

export default Layout;