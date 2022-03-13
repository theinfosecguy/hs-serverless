export default function Home() {
return (
  <section class="bg-gray-50">
    <div class="max-w-screen-xl px-4 py-32 mx-auto lg:h-screen lg:items-center lg:flex">
      <div class="max-w-xl mx-auto text-center">
        <h1 class="text-3xl font-extrabold sm:text-5xl mb-4">
          Todo List
          <strong class="font-extrabold text-blue-700 lg:block">
            Increase Productivity With Todo List
          </strong>
        </h1>
        <p class="mt-4 sm:leading-relaxed sm:text-xl">
          Mini todo list application to help you manage your tasks.
        </p>
        <div class="flex flex-wrap justify-center gap-4 mt-8">
          <a href="/todo" class="block w-full px-12 py-3 text-sm font-medium text-white bg-blue-600 rounded shadow sm:w-auto active:bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring">
            Get Started
          </a>
          <a class="block w-full px-12 py-3 text-sm font-medium text-blue-600 rounded shadow sm:w-auto hover:text-blue-700 active:text-blue-500 focus:outline-none focus:ring" href="/about">
            Learn More
          </a>
        </div>
      </div>
    </div>
  </section>
  )
}
