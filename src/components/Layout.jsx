import Navigation from '@/components/Navigation.jsx';

const Layout = ({ children }) => (
  <>
    <Navigation />

    <div className="bg-app">{children}</div>
  </>
);

export default Layout;