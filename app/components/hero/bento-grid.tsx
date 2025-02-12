import { Link } from "react-router";

export default function BentoGridComponent() {
  return (
    <div className="bg-gray-50 py-16 sm:py-24">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-center text-base/7 font-semibold text-gray-600">Elevate Your Style</h2>
        <p className="mx-auto mt-2 text-center text-4xl font-semibold tracking-tight text-balance text-gray-950 sm:text-5xl">
          Timeless Fashion, Sustainable Future
        </p>
        <div className="flex justify-center mt-8">
          <Link to="/shop" className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-8 py-1 text-sm font-medium text-white backdrop-blur-3xl hover:bg-slate-800 hover:scale-105 transition-all duration-300">
              Shop Now
            </span>
          </Link>
        </div>
        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
          <div className="relative overflow-hidden lg:row-span-2 group">
            <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
              <div className="@container relative min-h-[30rem] w-full grow">
                <img
                  className="size-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-110 group-hover:opacity-90"
                  src="https://tailwindui.com/plus-assets/img/ecommerce-images/home-page-03-favorite-01.jpg"
                  alt="Urban comfort collection showcase"
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 lg:rounded-l-[2rem]"></div>
          </div>
          
          <div className="relative overflow-hidden lg:row-span-2 group">
            <div className="absolute inset-px bg-white"></div>
            <div className="relative flex h-full flex-col overflow-hidden">
              <div className="@container relative min-h-[30rem] w-full grow">
                <img
                  className="size-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-110 group-hover:opacity-90"
                  src="https://tailwindui.com/plus-assets/img/ecommerce-images/home-page-03-favorite-02.jpg"
                  alt="Artisanal collection highlight"
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px ring-1 shadow-sm ring-black/5"></div>
          </div>
          
          <div className="relative overflow-hidden lg:row-span-2 group">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
              <div className="relative min-h-[30rem] w-full grow">
                <img
                  className="size-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-110 group-hover:opacity-90"
                  src="https://tailwindui.com/plus-assets/img/ecommerce-images/home-page-03-favorite-03.jpg"
                  alt="Limited edition seasonal collection"
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
