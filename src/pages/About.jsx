import React from 'react'
import { Nav, Footer } from '../components'
import { skills, services, getAge, social, getGreeting, steps } from '../constant'
const About = () => {
    return (
        <div className='w-full bg-light min-h-screen'>
            {/* Section 1 - About */}
            <section className='p-10 text-3xl tracking-wider leading-10 font-text text-justify'>
                <p>
                    Hi, {getGreeting()}. Welcome to my portfolio. I already had {getAge('01-01-2022')}+ in website development. Specially in Frontend Development.
                </p>
                {skills.map((i, index) => {
                    return (
                        <div key={index}>
                            <p></p>
                        </div>
                    )
                })}
            </section>
            {/* Service */}
            {services.map((i, index) => {
                return (
                    <div key={index}></div>
                )
            })}
            {/* Step */}
            {steps.map((i, index) => {
                return (
                    <div key={index}>
                        <p>{i.title}</p>
                        <p>{i.desc}</p>
                    </div>
                )
            })}
            {/* Journey */}
            {/* CTA */}
            {/* <Footer /> */}
        </div>
    )
}

export default About