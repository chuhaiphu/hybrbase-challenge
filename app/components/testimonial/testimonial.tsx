export default function TestimonialComponent() {
  return (
    <section className="relative isolate overflow-hidden bg-white px-6 py-8 sm:py-16 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,var(--color-gray-200),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white ring-1 shadow-xl shadow-gray-600/10 ring-gray-100 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <figure className="mt-10">
          <blockquote className="text-center text-xl/8 font-semibold text-gray-900 sm:text-2xl/9">
            <p>
              "The quality of their clothes is exceptional! The customer service team was incredibly helpful in finding the perfect size. I've received so many compliments on my outfits from their latest collection."
            </p>
          </blockquote>
        </figure>
      </div>
    </section>
  )
}
