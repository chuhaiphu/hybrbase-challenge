'use client'

import { useState } from 'react'
import { ChevronDownIcon, TrashIcon } from '@heroicons/react/20/solid'


const products = [
  {
    id: 1,
    title: 'Basic Tee',
    href: '#',
    price: '$32.00',
    color: 'Black',
    size: 'Large',
    imageSrc: 'https://tailwindui.com/plus-assets/img/ecommerce-images/checkout-page-02-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
  },

]


export default function CheckoutPaymentComponent() {
  const [selectedPayment, setSelectedPayment] = useState<'apple' | 'paypal'>('apple')

  return (
    <div className="bg-gray-50">
      <main className="mx-auto max-w-7xl px-4 pt-16 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <form className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
            <div>
              <h2 className="text-lg font-medium text-gray-900">Payment Method</h2>

              <div className="mt-4 mr-48 grid grid-cols-2 gap-4 sm:grid-cols-2">
                {/* Apple Pay Card */}
                <div
                  className="relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none hover:border-indigo-600"
                  onClick={() => setSelectedPayment('apple')}
                >
                  <div className="flex flex-1">
                    <div className="flex flex-col">
                      <span className="block text-sm font-medium text-gray-900">Apple Pay</span>
                      <span className="mt-1 flex items-center text-sm text-gray-500">Pay with Apple Pay</span>
                    </div>
                  </div>
                  <div className={`h-5 w-5 rounded-full border flex items-center justify-center ${selectedPayment === 'apple' ? 'border-indigo-600 bg-indigo-600' : 'border-gray-300'
                    }`}>
                    {selectedPayment === 'apple' && (
                      <div className="h-2.5 w-2.5 rounded-full bg-white" />
                    )}
                  </div>
                </div>

                {/* PayPal Card */}
                <div
                  className="relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none hover:border-indigo-600"
                  onClick={() => setSelectedPayment('paypal')}
                >
                  <div className="flex flex-1">
                    <div className="flex flex-col">
                      <span className="block text-sm font-medium text-gray-900">PayPal</span>
                      <span className="mt-1 flex items-center text-sm text-gray-500">Pay with PayPal</span>
                    </div>
                  </div>
                  <div className={`h-5 w-5 rounded-full border flex items-center justify-center ${selectedPayment === 'paypal' ? 'border-indigo-600 bg-indigo-600' : 'border-gray-300'
                    }`}>
                    {selectedPayment === 'paypal' && (
                      <div className="h-2.5 w-2.5 rounded-full bg-white" />
                    )}
                  </div>
                </div>

                <div className="col-span-2 border-t border-gray-200 py-6">
                  <section aria-labelledby="shipping-heading">
                    <h2 id="shipping-heading" className="text-lg font-medium text-gray-900">
                      Payment Details
                    </h2>

                    <div className="mt-4 grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-3">
                      <div className="sm:col-span-3">
                        <div className="">
                          <input
                            id="cardHolderName"
                            name="cardHolderName"
                            type="text"
                            placeholder="Card Holder Name"
                            className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-3">
                        <div className="mt-2">
                          <input
                            id="cardNumber"
                            name="cardNumber"
                            type="text"
                            placeholder="Card Number"
                            autoComplete="cc-number"
                            className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                          />
                        </div>
                      </div>

                      <div>
                        <div className="mt-2">
                          <input
                            id="month"
                            name="month"
                            type="number"
                            min="1"
                            max="12"
                            placeholder="Month (MM)"
                            autoComplete="cc-exp-month"
                            className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                          />
                        </div>
                      </div>

                      <div>
                        <div className="mt-2">
                          <input
                            id="year"
                            name="year"
                            type="number"
                            min={new Date().getFullYear()}
                            max={new Date().getFullYear() + 10}
                            placeholder="Year (YYYY)"
                            autoComplete="cc-exp-year"
                            className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                          />
                        </div>
                      </div>

                      <div>
                        <div className="mt-2">
                          <input
                            id="cvc"
                            name="cvc"
                            type="text"
                            maxLength={4}
                            placeholder="CVC"
                            autoComplete="cc-csc"
                            className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                          />
                        </div>
                      </div>
                    </div>
                  </section>

                  <button
                    type="submit"
                    className="mt-5 w-full rounded-md border border-transparent bg-indigo-600 px-4 py-3 text-base font-medium text-white shadow-xs hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 focus:outline-hidden"
                  >
                    Confirm payment
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-10 lg:mt-0">
              <h2 className="text-lg font-medium text-gray-900">Order summary</h2>

              <div className="mt-4 rounded-lg border border-gray-200 bg-white shadow-xs">
                <h3 className="sr-only">Items in your cart</h3>
                <ul role="list" className="divide-y divide-gray-200">
                  {products.map((product) => (
                    <li key={product.id} className="flex px-4 py-6 sm:px-6">
                      <div className="shrink-0">
                        <img alt={product.imageAlt} src={product.imageSrc} className="w-20 rounded-md" />
                      </div>

                      <div className="ml-6 flex flex-1 flex-col">
                        <div className="flex">
                          <div className="min-w-0 flex-1">
                            <h4 className="text-sm">
                              <a href={product.href} className="font-medium text-gray-700 hover:text-gray-800">
                                {product.title}
                              </a>
                            </h4>
                            <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                            <p className="mt-1 text-sm text-gray-500">{product.size}</p>
                          </div>

                          <div className="ml-4 flow-root shrink-0">
                            <button
                              type="button"
                              className="-m-2.5 flex items-center justify-center bg-white p-2.5 text-gray-400 hover:text-gray-500"
                            >
                              <span className="sr-only">Remove</span>
                              <TrashIcon aria-hidden="true" className="size-5" />
                            </button>
                          </div>
                        </div>

                        <div className="flex flex-1 items-end justify-between pt-2">
                          <p className="mt-1 text-sm font-medium text-gray-900">{product.price}</p>

                          <div className="ml-4 grid grid-cols-1">
                            <select
                              id="quantity"
                              name="quantity"
                              aria-label="Quantity"
                              className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-2 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            >
                              <option value={1}>1</option>
                              <option value={2}>2</option>
                              <option value={3}>3</option>
                              <option value={4}>4</option>
                              <option value={5}>5</option>
                              <option value={6}>6</option>
                              <option value={7}>7</option>
                              <option value={8}>8</option>
                            </select>
                            <ChevronDownIcon
                              aria-hidden="true"
                              className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end fill-gray-500 sm:size-4"
                            />
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
                <dl className="space-y-6 border-t border-gray-200 px-4 py-6 sm:px-6">
                  <div className="flex items-center justify-between">
                    <dt className="text-sm">Subtotal</dt>
                    <dd className="text-sm font-medium text-gray-900">$64.00</dd>
                  </div>
                  <div className="flex items-center justify-between">
                    <dt className="text-sm">Shipping</dt>
                    <dd className="text-sm font-medium text-gray-900">$5.00</dd>
                  </div>
                  <div className="flex items-center justify-between">
                    <dt className="text-sm">Taxes</dt>
                    <dd className="text-sm font-medium text-gray-900">$5.52</dd>
                  </div>
                  <div className="flex items-center justify-between border-t border-gray-200 pt-6">
                    <dt className="text-base font-medium">Total</dt>
                    <dd className="text-base font-medium text-gray-900">$75.52</dd>
                  </div>
                </dl>
              </div>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}
