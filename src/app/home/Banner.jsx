"use client"
import Image from "next/image";
import worldImg from '@/app/ass/world-svgrepo-com.svg'
import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

const people = [
    { name: 'Worldwide', img:worldImg },
    { name: 'Arlene Mccoy', img:worldImg },
    { name: 'Devon Webb', img:worldImg },
    { name: 'Tom Cook', img:worldImg },
    { name: 'Tanya Fox', img:worldImg },
    { name: 'Hellen Schmidt', img:worldImg },
  ]
function Banner() {
    const [selected, setSelected] = useState(people[0])
    return (
        <div className="grid xl:grid-cols-5  sm:py-20 py-10 sm:grid-cols-3 gap-6">
            <div className="flex flex-col gap-6 xl:col-span-3 sm:col-span-2">
                <h1 className="xl:text-5xl text-3xl font-bold">Start doing work that matters</h1>
                <p className="xl:text-xl text-lg font-semibold">Our philosophy is simple -hire a team of diverse,passionate people and foster a culture that empowers you to do your best work</p>
            </div>
            <div className="sm:text-right xl:col-span-2">
                <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1 ">
          <Listbox.Button className="relative w-full sm:w-60 border cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="truncate flex gap-5 "><Image className="w-5" src={selected.img} alt="" />{selected.name}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {people.map((person, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                    }`
                  }
                  value={person}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`truncate flex gap-5 ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        <Image className="w-5" src={person.img} alt="" />
                        {person.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>

            </div>
        </div>
    );
}

export default Banner;