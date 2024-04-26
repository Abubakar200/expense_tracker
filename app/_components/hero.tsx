import Image from "next/image";

const Hero = () => {
    return ( 
        <section className="bg-gray-50 flex flex-col items-center">
      <div className="mx-auto max-w-screen-xl px-4 py-32 pb-16 ">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Manage Your Expense.
            <strong className="font-extrabold text-primary sm:block">
              {" "}
              Control Your Money.{" "}
            </strong>
          </h1>

          <p className="mt-4 sm:text-xl/relaxed">
            Start creating your budget and save ton of money
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded bg-[#14424C] px-12 py-3 text-sm font-medium hover:text-[#14424C] text-white shadow hover:bg-white focus:outline-none focus:ring active:bg-white sm:w-auto"
              href="/sign-up"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
      <Image
      src="/bg.jpg"
      height={1000}
      width={700}
      alt="Dashboard"
      className="pt-5 border-2 rounded-xl mx-4"
      />
    </section>
     );
}
 
export default Hero;