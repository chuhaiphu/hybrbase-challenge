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

export default function CheckoutShippingComponent() {
  const [selectedShipping, setSelectedShipping] = useState<'standard' | 'express'>('standard')

  return (
    <div className="bg-gray-50">

      <main className="mx-auto max-w-7xl px-4 pt-16 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <h1 className="sr-only">Checkout</h1>

          <form className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
            <div>
                <h2 className="text-lg font-medium text-gray-900">Shipping Method</h2>

                <div className="mt-4 mr-48 grid grid-cols-1 gap-8 sm:grid-cols-1">
                  {/* Standard Shipping Card */}
                  <div
                    className="relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none hover:border-indigo-600"
                    onClick={() => setSelectedShipping('standard')}
                  >
                    <div className="flex flex-1">
                      <div className="flex flex-col">
                        <span className="block text-sm font-medium text-gray-900">Standard Shipping</span>
                        <span className="mt-1 flex items-center text-sm text-gray-500">4-10 business days</span>
                        <span className="mt-2 text-sm font-medium text-gray-900">$5.00</span>
                      </div>
                    </div>
                    <div className={`h-5 w-5 rounded-full border flex items-center justify-center ${selectedShipping === 'standard' ? 'border-indigo-600 bg-indigo-600' : 'border-gray-300'
                      }`}>
                      {selectedShipping === 'standard' && (
                        <div className="h-2.5 w-2.5 rounded-full bg-white" />
                      )}
                    </div>
                  </div>

                  {/* Express Shipping Card */}
                  <div
                    className="relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none hover:border-indigo-600"
                    onClick={() => setSelectedShipping('express')}
                  >
                    <div className="flex flex-1">
                      <div className="flex flex-col">
                        <span className="block text-sm font-medium text-gray-900">Express Shipping</span>
                        <span className="mt-1 flex items-center text-sm text-gray-500">1-3 business days</span>
                        <span className="mt-2 text-sm font-medium text-gray-900">$15.00</span>
                      </div>
                    </div>
                    <div className={`h-5 w-5 rounded-full border flex items-center justify-center ${selectedShipping === 'express' ? 'border-indigo-600 bg-indigo-600' : 'border-gray-300'
                      }`}>
                      {selectedShipping === 'express' && (
                        <div className="h-2.5 w-2.5 rounded-full bg-white" />
                      )}
                    </div>
                  </div>

                  <div className="border-t border-gray-200 py-6">
                    <button
                      type="submit"
                      className="w-full rounded-md border border-transparent bg-indigo-600 px-4 py-3 text-base font-medium text-white shadow-xs hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 focus:outline-hidden"
                    >
                      Confirm order
                    </button>
                  </div>
                </div>

            </div>

            {/* Order summary */}
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
