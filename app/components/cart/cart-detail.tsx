'use client'

import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { CheckIcon, ClockIcon, QuestionMarkCircleIcon, XMarkIcon as XMarkIconMini } from '@heroicons/react/20/solid'
import { api } from 'convex/_generated/api'
import type { Id } from 'convex/_generated/dataModel'
import { useMutation, useQuery } from 'convex/react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router'
import type { RootState } from '~/store/store'



export default function CartDetailComponent() {
  const userId = useSelector((state: RootState) => state.auth.user?._id) || ''

  const cartItems = useQuery(api.cart.getCartItems, { userId });

  const cartProducts = cartItems?.map(item =>
    useQuery(api.clothes.getClothesById, {
      id: item.productId
    })
  ) || [];
  console.log(cartProducts);

  const updateQuantity = useMutation(api.cart.updateCartItemQuantity);
  const removeItem = useMutation(api.cart.removeFromCart);

  const handleQuantityChange = async (cartItemId: Id<"cart">, quantity: number) => {
    await updateQuantity({ cartItemId, quantity });
  };

  const handleRemoveItem = async (cartItemId: Id<"cart">) => {
    await removeItem({ cartItemId });
  };

  return (
    <div className="bg-white">

      <main className="mx-auto max-w-2xl px-4 pt-16 pb-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Shopping Cart</h1>

        <form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
          <section aria-labelledby="cart-heading" className="lg:col-span-7">
            <h2 id="cart-heading" className="sr-only">
              Items in your shopping cart
            </h2>

            <ul role="list" className="divide-y divide-gray-200 border-t border-b border-gray-200">
              {cartProducts.map((product, index) => (
                <li key={product?._id} className="flex py-6 sm:py-10">
                  <div className="shrink-0">
                    <img
                      alt={product?.images[0]?.alt || 'Product Image'}
                      src={product?.images[0]?.src || ''}
                      className="size-24 rounded-md object-cover sm:size-48"
                    />
                  </div>

                  <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                    <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                      <div>
                        <div className="flex justify-between">
                          <h3 className="text-sm">
                            <Link to={`product/${product?._id}`} className="font-medium text-gray-700 hover:text-gray-800">
                              {product?.name}
                            </Link>
                          </h3>
                        </div>
                        <div className="mt-1 flex text-sm">
                          <p className="text-gray-500">{product?.colors[0]?.name}</p>
                          {product?.sizes ? (
                            <p className="ml-4 border-l border-gray-200 pl-4 text-gray-500">{product?.sizes[0].name}</p>
                          ) : null}
                        </div>
                        <p className="mt-1 text-sm font-medium text-gray-900">{product?.price}</p>
                      </div>

                      <div className="mt-4 sm:mt-0 sm:pr-9">
                        {/* Replace the select element with a simple display of quantity */}
                        <div className="inline-grid w-full max-w-16 grid-cols-1">
                          <span className="col-start-1 row-start-1 rounded-md bg-white py-1.5 px-3 text-base text-gray-900">
                            {cartItems && cartItems[index]?.quantity}
                          </span>
                        </div>

                        <div className="absolute top-0 right-0">
                          <button
                            type="button"
                            className="-m-2 inline-flex p-2 text-gray-400 hover:text-gray-500"
                            onClick={() => cartItems && handleRemoveItem(cartItems[index]._id)}
                          >
                            <span className="sr-only">Remove</span>
                            <XMarkIconMini aria-hidden="true" className="size-5" />
                          </button>
                        </div>
                      </div>
                    </div>

                    <p className="mt-4 flex space-x-2 text-sm text-gray-700">
                      {product?.sizes[0].inStock ? (
                        <CheckIcon aria-hidden="true" className="size-5 shrink-0 text-green-500" />
                      ) : (
                        <ClockIcon aria-hidden="true" className="size-5 shrink-0 text-gray-300" />
                      )}

                      <span>{product?.sizes[0].inStock ? 'In stock' : `Ships in 3-4 weeks`}</span>
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* Order summary */}
          <section
            aria-labelledby="summary-heading"
            className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
          >
            <h2 id="summary-heading" className="text-lg font-medium text-gray-900">
              Order summary
            </h2>

            <dl className="mt-6 space-y-4">
              <div className="flex items-center justify-between">
                <dt className="text-sm text-gray-600">Subtotal</dt>
                <dd className="text-sm font-medium text-gray-900">$99.00</dd>
              </div>
              <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                <dt className="flex items-center text-sm text-gray-600">
                  <span>Shipping estimate</span>
                  <a href="#" className="ml-2 shrink-0 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Learn more about how shipping is calculated</span>
                    <QuestionMarkCircleIcon aria-hidden="true" className="size-5" />
                  </a>
                </dt>
                <dd className="text-sm font-medium text-gray-900">$5.00</dd>
              </div>
              <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                <dt className="flex text-sm text-gray-600">
                  <span>Tax estimate</span>
                  <a href="#" className="ml-2 shrink-0 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Learn more about how tax is calculated</span>
                    <QuestionMarkCircleIcon aria-hidden="true" className="size-5" />
                  </a>
                </dt>
                <dd className="text-sm font-medium text-gray-900">$8.32</dd>
              </div>
              <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                <dt className="text-base font-medium text-gray-900">Order total</dt>
                <dd className="text-base font-medium text-gray-900">$112.32</dd>
              </div>
            </dl>

            <div className="mt-6">
              <Link
                to="/checkout/address"
                className="w-full rounded-md border border-transparent bg-red-900 px-4 py-3 text-base font-medium text-white shadow-xs hover:bg-red-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 focus:outline-hidden inline-flex items-center justify-center"
              >
                Checkout
              </Link>

            </div>
          </section>
        </form>
      </main>
    </div>
  )
}
