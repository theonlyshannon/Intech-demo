"use client";

import React from 'react'

const links = [
    { name: 'Get It With Us', href: '#contact' },
]
const stats = [
    { name: 'Deploy fast to market', value: 'Fast To Market' },
    { name: 'Using Modern Tech Like NextJS', value: 'Modern Technology' },
    { name: 'Good Quality & Performance', value: 'Reliable' },
    { name: 'Worth To Price', value: 'Worth To Price' },
]

const Company = () => {

    return (
        <div id='company'>
            <div className="relative isolate overflow-hidden py-24 sm:py-32" >
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="text-4xl font-bold tracking-tight text-dark sm:text-6xl">Digitalize With Us</h2>
                        <p className="mt-6 text-lg leading-8 text-dark">
                            Using our service you can save time and resource that would otherwise be spent on our development and maintenance
                        </p>
                    </div>
                    <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
                        <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-dark sm:grid-cols-2 md:flex lg:gap-x-10">
                            {links.map((link) => (
                                <a key={link.name} href={link.href}>
                                    {link.name} <span aria-hidden="true">&rarr;</span>
                                </a>
                            ))}
                        </div>
                        <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
                            {stats.map((stat) => (
                                <div key={stat.name} className="flex flex-col-reverse">
                                    <dt className="text-base leading-7 text-dark">{stat.name}</dt>
                                    <dd className="text-2xl font-bold leading-9 tracking-tight text-dark">{stat.value}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                    <div
                        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                        aria-hidden="true"
                    >
                        <div
                            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#1363DF] to-[#47B5FF] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                            style={{
                                clipPath:
                                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Company
