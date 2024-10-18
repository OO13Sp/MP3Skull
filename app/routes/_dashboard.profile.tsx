import { Link, Outlet } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faShoppingCart, faPhone, faSun, faQrcode } from '@fortawesome/free-solid-svg-icons';

export default function _dashboardprofile() {
  return (
    <div className="flex justify-center items-center min-h-screen p-2 sm:p-6">
      {/* Main container */}
      <div className="w-full max-w-5xl rounded-lg border border-white">
        <h1 className="mt-2 sm:mt-5 text-2xl sm:text-3xl font-bold text-center text-white mb-4 sm:mb-6">
          Profile Settings
        </h1>

        <div className="flex flex-col sm:flex-row h-full p-2 sm:p-6 rounded-lg border border-white">
          
          {/* Sidebar (hidden on mobile) */}
       {/* Sidebar (hidden on mobile) */} 
<aside className="hidden sm:block w-1/5 p-2 sm:p-6">
  <nav className="flex flex-col space-y-4">
    <Link to="/profile" className="flex items-center space-x-2 text-sm sm:text-base text-blue-100 font-medium hover:underline">
      <FontAwesomeIcon icon={faUserCircle} className="h-5 w-5 sm:hidden" />
      <span className="hidden sm:block">My Profile</span>
    </Link>

    <Link to="./subscription" className="flex items-center space-x-2 text-sm sm:text-base text-white hover:text-blue-100">
      <FontAwesomeIcon icon={faShoppingCart} className="h-5 w-5 sm:hidden" />
      <span className="hidden sm:block">Subscription</span>
    </Link>

    <Link to="" className="flex items-center space-x-2 text-sm sm:text-base text-white hover:text-blue-100">
      <FontAwesomeIcon icon={faPhone} className="h-5 w-5 sm:hidden" />
      <span className="hidden sm:block">Contact Us</span>
    </Link>

    <Link to="." className="flex items-center space-x-2 text-sm sm:text-base text-white hover:text-blue-100">
      <FontAwesomeIcon icon={faSun} className="h-5 w-5 sm:hidden" />
      <span className="hidden sm:block">Change Theme</span>
    </Link>

    <Link to="" className="flex items-center space-x-2 text-sm sm:text-base text-white hover:text-blue-100">
      <FontAwesomeIcon icon={faQrcode} className="h-5 w-5 sm:hidden" />
      <span className="hidden sm:block">Share QR Code</span>
    </Link>
  </nav>
</aside>


          {/* Main Content */}
          <main className="flex-1 p-2 sm:p-8 flex flex-col items-center">
            <section className="w-full max-w-md p-2 sm:p-6 rounded-lg border border-white mb-4 sm:mb-8">
              <div className="items-center justify-between mb-4">
                <Outlet />
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
