'use client'

import { useState } from 'react'
import { PlusIcon } from '@heroicons/react/20/solid'
import { useQuery } from 'convex/react'
import { api } from 'convex/_generated/api'
import { Link } from 'react-router'


const filters = [
  {
    id: 'color',
    name: 'Color',
    options: [
      { value: 'white', label: 'White' },
      { value: 'beige', label: 'Beige' },
      { value: 'blue', label: 'Blue' },
      { value: 'brown', label: 'Brown' },
      { value: 'green', label: 'Green' },
      { value: 'purple', label: 'Purple' },
    ],
  },
  {
    id: 'category',
    name: 'Category',
    options: [
      { value: 'new-arrivals', label: 'All New Arrivals' },
      { value: 'tees', label: 'Tees' },
      { value: 'crewnecks', label: 'Crewnecks' },
      { value: 'sweatshirts', label: 'Sweatshirts' },
      { value: 'pants-shorts', label: 'Pants & Shorts' },
    ],
  },
  {
    id: 'sizes',
    name: 'Sizes',
    options: [
      { value: 'xs', label: 'XS' },
      { value: 's', label: 'S' },
      { value: 'm', label: 'M' },
      { value: 'l', label: 'L' },
      { value: 'xl', label: 'XL' },
      { value: '2xl', label: '2XL' },
    ],
  },
]

export default function CategoryCom() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('')

  const products = useQuery(
    api.clothes.getAllClothes
  ) || [];

  return (
    <div className="bg-white">
      <div>
        <main className="mx-auto max-w-2xl px-4 lg:max-w-7xl lg:px-8">
          <div className="border-b border-gray-200 pt-8 pb-4">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">New Arrivals</h1>
            <p className="mt-4 text-base text-gray-500">
              Checkout out the latest release of Basic Tees, new and improved with four openings!
            </p>
          </div>

          <div className="pt-12 pb-24 lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
            <aside>
              <h2 className="sr-only">Filters</h2>

              <button
                type="button"
                onClick={() => setMobileFiltersOpen(true)}
                className="inline-flex items-center lg:hidden"
              >
                <span className="text-sm font-medium text-gray-700">Filters</span>
                <PlusIcon aria-hidden="true" className="ml-1 size-5 shrink-0 text-gray-400" />
              </button>

              <div className="hidden lg:block">
                <form className="divide-y divide-gray-200">
                  {filters.map((section) => (
                    <div key={section.name} className="py-10 first:pt-0 last:pb-0">
                      <fieldset>
                        <legend className="block text-sm font-medium text-gray-900">{section.name}</legend>
                        <div className="space-y-3 pt-6">
                          {section.options.map((option, optionIdx) => (
                            <div key={option.value} className="flex gap-3">
                              <div className="flex h-5 shrink-0 items-center">
                                <div className="group grid size-4 grid-cols-1">
                                  <input
                                    defaultValue={option.value}
                                    id={`${section.id}-${optionIdx}`}
                                    name={`${section.id}[]`}
                                    type="checkbox"
                                    className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                  />
                                  <svg
                                    fill="none"
                                    viewBox="0 0 14 14"
                                    className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                                  >
                                    <path
                                      d="M3 8L6 11L11 3.5"
                                      strokeWidth={2}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      className="opacity-0 group-has-checked:opacity-100"
                                    />
                                    <path
                                      d="M3 7H11"
                                      strokeWidth={2}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      className="opacity-0 group-has-indeterminate:opacity-100"
                                    />
                                  </svg>
                                </div>
                              </div>
                              <label htmlFor={`${section.id}-${optionIdx}`} className="text-sm text-gray-600">
                                {option.label}
                              </label>
                            </div>
                          ))}
                        </div>
                      </fieldset>
                    </div>
                  ))}
                </form>
              </div>
            </aside>

            <section aria-labelledby="product-heading" className="mt-6 lg:col-span-2 lg:mt-0 xl:col-span-3">
              <h2 id="product-heading" className="sr-only">
                Products
              </h2>

              <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:gap-x-8 xl:grid-cols-3">
                {products?.map((product) => (
                  <div
                    key={product._id}
                    className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
                  >
                    <img
                      alt={product.images[0].alt}
                      src={product.images[0].src}
                      className="aspect-3/4 bg-gray-200 object-cover group-hover:opacity-75 sm:h-96"
                    />
                    <div className="flex flex-1 flex-col space-y-2 p-4">
                      <h3 className="text-sm font-medium text-gray-900">
                        <Link to={`/product/${product._id}`}>
                          <span aria-hidden="true" className="absolute inset-0" />
                          {product.name}
                        </Link>
                      </h3>
                      <p className="text-sm text-gray-500">{product.description}</p>
                      <div className="flex flex-1 flex-col justify-end">
                        <p className="text-sm text-gray-500 italic">{product.category}</p>
                        <p className="text-base font-medium text-gray-900">${product.price}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </main>

      </div>
    </div>
  )
}
