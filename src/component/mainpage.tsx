import { useState, Fragment } from "react";
import { Dialog, DialogPanel, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "../assets/logo.png";

import {
  ArrowPathIcon,
  CheckIcon,
  CloudArrowUpIcon,
  LockClosedIcon,
} from "@heroicons/react/20/solid";

// Define the types for the navigation items and features
interface NavigationItem {
  name: string;
  href: string;
}

interface Tier {
  name: string;
  id: string;
  href: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  featured: boolean;
}

interface FooterNavigation {
  solutions: NavigationItem[];
  support: NavigationItem[];
  company: NavigationItem[];
  legal: NavigationItem[];
}

const navigation: NavigationItem[] = [
  { name: "Home", href: "#" },
  { name: "Features", href: "#features" },
  { name: "Pricing", href: "#pricing" },
  { name: "Why TSG", href: "#whytsg" },
];

const secondaryFeatures = [
  {
    name: "Dedicated Hardware",
    description:
      "Your signal service runs on its own dedicated hardware, ensuring reliability and performance.",
    href: "#",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Self-Service Filters ",
    description:
      "Easily manage and customize your signal filters within Telegram. No technical expertise needed.",
    href: "#",
    icon: LockClosedIcon,
  },
  {
    name: "Comprehensive Support",
    description:
      "Enjoy peace of mind with our expert support team ready to assist you at every step.",
    href: "#",
    icon: ArrowPathIcon,
  },
];

const whyUs = [
  {
    name: "Accuracy and Speed:",
    description:
      "Our advanced technology delivers precise signals faster than the competition.",
    href: "#",
  },
  {
    name: "Customization at Your Fingertips: ",
    description:
      "Tailor your signal filters effortlessly to match your unique trading strategy.",
    href: "#",
  },
  {
    name: "Seamless Integration",
    description:
      "Manage your signals directly within Telegram, making it easier than ever to stay on top of your trades.",
    href: "#",
  },
];

const tiers: Tier[] = [
  {
    name: "Price",
    id: "tier-enterprise",
    href: "#",
    price: "1 ETH",
    period: 'month',
    description:
      "Invest in your trading success with our straightforward, value-driven pricing. For just 1 ETH per month, you receive unparalleled service and support.",
    features: [],
    featured: true,
  },
  {
    name: "Price",
    id: "tier-enterprise",
    href: "#",
    price: "10 ETH",
    period: 'year',
    description:
      "Invest in your trading success with our straightforward, value-driven pricing. For just 10 ETH per year, you receive unparalleled service and support.",
    features: [],
    featured: true,
  },
];

const footerNavigation: FooterNavigation = {
  solutions: [
    { name: "Marketing", href: "#" },
    { name: "Analytics", href: "#" },
    { name: "Commerce", href: "#" },
    { name: "Insights", href: "#" },
  ],
  support: [
    { name: "Pricing", href: "#" },
    { name: "Documentation", href: "#" },
    { name: "Guides", href: "#" },
    { name: "API Status", href: "#" },
  ],
  company: [
    { name: "About", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Jobs", href: "#" },
    { name: "Press", href: "#" },
    { name: "Partners", href: "#" },
  ],
  legal: [
    { name: "Claim", href: "#" },
    { name: "Privacy", href: "#" },
    { name: "Terms", href: "#" },
  ],
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white">
      {/* Header */}
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img className="h-20 w-auto" src={Logo} alt="" />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-white"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-white"
            ></a>
          </div>
        </nav>
        <Dialog
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img className="h-8 w-auto" src={Logo} alt="" />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  ></a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <main>
        {/* Hero section */}
        <div className="relative isolate overflow-hidden bg-gray-900 pb-16 pt-14 sm:pb-20">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2830&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
            alt=""
            className="absolute inset-0 -z-10 h-full w-full object-cover"
          />
          <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
            <svg
              className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
              viewBox="0 0 1155 678"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="url(#hero-pattern)"
                fillOpacity=".2"
                d="M317.263 518.714L318.61 156.466l-278.18-133.844 83.047-174.373 1042.367 437.682-278.42 230.191-570.761 2.417z"
              />
              <defs>
                <linearGradient
                  id="hero-pattern"
                  x1="1155.49"
                  x2="-78.2083"
                  y1=".177845"
                  y2="474.645"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#008b8b" />
                  <stop offset={1} stopColor="#111827" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl pt-20 pb-32 sm:pt-48 sm:pb-40">
                <div className="text-center">
                  <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                    Telegram Signal Generator (TSG)
                  </h1>
                  <p className="mt-6 text-lg leading-8 text-gray-300">
                    Your Dedicated Signal Service, Simplified
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute inset-x-0 bottom-0 -z-10 transform-gpu overflow-hidden blur-3xl">
              <svg
                className="relative left-[calc(50%+3rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%+40rem)] sm:h-[42.375rem]"
                viewBox="0 0 1155 678"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="url(#hero-pattern-bottom)"
                  fillOpacity=".2"
                  d="M317.263 518.714L318.61 156.466l-278.18-133.844 83.047-174.373 1042.367 437.682-278.42 230.191-570.761 2.417z"
                />
                <defs>
                  <linearGradient
                    id="hero-pattern-bottom"
                    x1="1155.49"
                    x2="-78.2083"
                    y1=".177845"
                    y2="474.645"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#008b8b" />
                    <stop offset={1} stopColor="#111827" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>

        {/* Feature section */}
        <div id="features" className="mx-auto max-w-7xl px-6 sm:mt-24 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need to know
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Unlock the Power of Precision Trading with the Telegram Signal
              Generator (TSG). Our cutting-edge, managed service is designed to
              elevate your trading game, providing you with real-time, accurate
              signals directly within your Telegram.
            </p>
          </div>
          <div className="mx-auto mt-12 max-w-2xl text-center lg:max-w-4xl">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">
              Features
            </h2>
            <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              This is what you get
            </p>
          </div>
          <div className="mx-auto mt-12 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {secondaryFeatures.map((feature) => (
                <div key={feature.name} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    <feature.icon
                      className="h-5 w-5 flex-none text-indigo-600"
                      aria-hidden="true"
                    />
                    {feature.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Pricing section */}
        <div
          id="pricing"
          className="relative justify-center content-center isolate mt-32 bg-white px-6 sm:mt-32 lg:px-8"
        >
          <div
            className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
            aria-hidden="true"
          >
            <div
              className="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
          <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">
              Pricing
            </h2>
            <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              The right price for you, whoever you are
            </p>
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
            Qui iusto aut est earum eos quae. Eligendi est at nam aliquid ad quo
            reprehenderit in aliquid fugiat dolorum voluptatibus.
          </p>
          <div className="mx-auto mt-8  lg:ml-[500px] grid max-w-lg items-center sm:mt-20 gap-20  lg:max-w-4xl lg:grid-cols-2">
            {tiers.map((tier, tierIdx) => (
              <div
                key={tier.id}
                className={classNames(
                  tier.featured
                    ? "relative bg-gray-900 shadow-2xl"
                    : "bg-white/60 sm:mx-8 lg:mx-0",
                  tier.featured
                    ? ""
                    : tierIdx === 0
                    ? "rounded-t-3xl sm:rounded-b-none lg:rounded-bl-3xl lg:rounded-tr-none"
                    : "sm:rounded-t-none lg:rounded-bl-none lg:rounded-tr-3xl",
                  "rounded-3xl ring-1 p-8 ring-gray-900/10 sm:p-10"
                )}
              >
                <h3
                  id={tier.id}
                  className={classNames(
                    tier.featured ? "text-indigo-400" : "text-indigo-600",
                    "text-base font-semibold leading-7"
                  )}
                >
                  {tier.name}
                </h3>
                <p className="mt-4 flex items-baseline gap-x-2">
                  <span
                    className={classNames(
                      tier.featured ? "text-white" : "text-gray-900",
                      "text-5xl font-bold tracking-tight"
                    )}
                  >
                    {tier.price}
                  </span>
                  <span
                    className={classNames(
                      tier.featured ? "text-gray-400" : "text-gray-500",
                      "text-base"
                    )}
                  >
                    /{tier.period}
                  </span>
                </p>
                <p
                  className={classNames(
                    tier.featured ? "text-gray-300" : "text-gray-600",
                    "mt-6 text-base leading-7"
                  )}
                >
                  {tier.description}
                </p>
                <ul
                  role="list"
                  className={classNames(
                    tier.featured ? "text-gray-300" : "text-gray-600",
                    "mt-8 space-y-3 text-sm leading-6 sm:mt-10"
                  )}
                >
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckIcon
                        className={classNames(
                          tier.featured ? "text-indigo-400" : "text-indigo-600",
                          "h-6 w-5 flex-none"
                        )}
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={tier.href}
                  aria-describedby={tier.id}
                  className={classNames(
                    tier.featured
                      ? "bg-indigo-500 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline-indigo-500"
                      : "text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300 focus-visible:outline-indigo-600",
                    "mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10"
                  )}
                >
                  Get started today
                </a>
              </div>
            ))}
          </div>
        </div>

        <div id="whytsg" className="mx-auto max-w-7xl px-6 sm:mt-24 lg:px-8">
          <div className="mx-auto mt-12 max-w-2xl text-center lg:max-w-4xl">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">
              Why us
            </h2>
            <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Why Choose TSG?
            </p>
          </div>
          <div className="mx-auto mt-12 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {whyUs.map((feature) => (
                <div key={feature.name} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 sm:text-xl text-gray-600">
                    {feature.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="mx-auto mt-32 max-w-7xl sm:mt-40 sm:px-6 lg:px-8">
          <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
            <div className="mx-auto text-center ">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Get Started Today!
                <br />
                Start using our app today.
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-400">
                Experience the future of trading signals with the Telegram
                Signal Generator. Join our growing community of satisfied
                traders and take your trading to the next level.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                  <button
                    type="button"
                    onClick={() => setOpen(true)}
                    className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Sign Up now
                  </button>

                  <Transition.Root show={open} as={Fragment}>
                    <Dialog
                      as="div"
                      className="relative z-10"
                      onClose={setOpen}
                    >
                      <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                      </Transition.Child>

                      <div className=" fixed inset-0 z-10 w-screen overflow-y-auto">
                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                          <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                          >
                            <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                              <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-md">
                                <h2 className=" text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                                  Sign up today
                                </h2>
                              </div>
                              <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
                                <form className="space-y-6" action="">
                                  <div>
                                    <label
                                      htmlFor="email"
                                      className="block text-sm font-medium leading-2 text-gray-900"
                                    >
                                      Email address
                                    </label>
                                    <div className="mt-2">
                                      <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                      />
                                    </div>
                                  </div>

                                  <div>
                                    <label
                                      htmlFor="password"
                                      className="block text-sm font-medium leading-2 text-gray-900"
                                    >
                                      Password
                                    </label>
                                    <div className="mt-2">
                                      <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                      />
                                    </div>
                                  </div>

                                  <div>
                                    <label
                                      htmlFor="password"
                                      className="block text-sm font-medium leading-2 text-gray-900"
                                    >
                                      Confirm Password
                                    </label>
                                    <div className="mt-2">
                                      <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                      />
                                    </div>
                                  </div>

                                  <div>
                                    <button
                                      type="submit"
                                      className="flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm bg-indigo-600 hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                      Submit
                                    </button>
                                  </div>
                                </form>
                              </div>
                            </Dialog.Panel>
                          </Transition.Child>
                        </div>
                      </div>
                    </Dialog>
                  </Transition.Root>
                </div>
              </div>
            </div>

            <div
              className="absolute -top-24 right-0 -z-10 transform-gpu blur-3xl"
              aria-hidden="true"
            >
              <div
                className="aspect-[1404/767] w-[87.75rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25"
                style={{
                  clipPath:
                    "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
                }}
              />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 sm:mt-56" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 lg:py-32">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <img className="h-48" src={Logo} alt="TSG" />
            <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold leading-6 text-white">
                    Solutions
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {footerNavigation.solutions.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-sm leading-6 text-gray-300 hover:text-white"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-sm font-semibold leading-6 text-white">
                    Support
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {footerNavigation.support.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-sm leading-6 text-gray-300 hover:text-white"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold leading-6 text-white">
                    Company
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {footerNavigation.company.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-sm leading-6 text-gray-300 hover:text-white"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-sm font-semibold leading-6 text-white">
                    Legal
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {footerNavigation.legal.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-sm leading-6 text-gray-300 hover:text-white"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
