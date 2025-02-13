'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { setLoggedOut } from '../../store/slice/authSlice'
import CartFloating from '../cart/cart-floating'
import CartFloatingComponent from '../cart/cart-floating'

const navigation = [
  { name: 'Shop', href: '/shop' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

interface HeaderProps {
  isDarkTheme?: boolean
}

type RootState = {
  auth: {
    isLoggedIn: boolean
    user: any
  }
}

export default function HeaderComponent({ isDarkTheme = false }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const dispatch = useDispatch()
  const { isLoggedIn, user } = useSelector((state: RootState) => state.auth)
  
  const handleLogout = () => {
    dispatch(setLoggedOut())
  }

  const themeClasses = isDarkTheme
    ? 'bg-gray-900 text-white'
    : 'bg-white text-gray-900'

  const buttonClasses = isDarkTheme
    ? 'bg-white text-gray-900 hover:bg-gray-100'
    : 'bg-gray-900 hover:bg-red-900 text-white'

  const iconClasses = isDarkTheme
    ? 'text-white hover:text-gray-300'
    : 'text-gray-700 hover:text-gray-900'

  return (
    <header className={themeClasses}>
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
              </svg>
              <span className={`font-bold text-xl ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>
                Ecommerce
              </span>
            </div>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className={`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 ${iconClasses}`}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link key={item.name} to={item.href} className="text-lg font-semibold hover:opacity-80">
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">

          {isLoggedIn ? (
            <div className="flex items-center gap-4">
              <span className="text-lg">Welcome, {user.username}</span>
              <button
                onClick={handleLogout}
                className={`rounded-md px-4 py-2 text-lg font-semibold shadow-sm transition-colors duration-200 cursor-pointer ${buttonClasses}`}
              >
                Log out
              </button>
            </div>
          ) : (
            <Link to="/sign-in">
              <button
                className={`rounded-md px-4 py-2 text-lg font-semibold shadow-sm transition-colors duration-200 cursor-pointer ${buttonClasses}`}
              >
                Log in
              </button>
            </Link>
          )}
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className={`fixed inset-y-0 right-0 z-10 w-full overflow-y-auto px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 ${themeClasses}`}>
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src={isDarkTheme
                  ? "https://tailwindui.com/plus-assets/img/logos/mark.svg?color=white"
                  : "https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                }
                className="h-8 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className={`-m-2.5 rounded-md p-2.5 ${iconClasses}`}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold hover:bg-gray-50 hover:bg-opacity-10`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <button
                  className={`w-full rounded-md px-4 py-2 text-sm font-semibold shadow-sm transition-colors duration-200 cursor-pointer ${buttonClasses}`}
                >
                  Log in
                </button>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
