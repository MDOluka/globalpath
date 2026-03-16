"use client"

import { motion } from "framer-motion"
import { FaWifi, FaNetworkWired, FaBuilding, FaTools } from "react-icons/fa"

export default function Home() {
  return (

    <main className="bg-white text-gray-800">

{/* NAVBAR */}

<nav className="flex justify-between items-center px-10 py-6 border-b">

<h1 className="text-2xl font-bold text-blue-700">
GlobalPath
</h1>

<div className="hidden md:flex gap-8 font-medium">

<a className="hover:text-blue-600">Home</a>
<a className="hover:text-blue-600">Services</a>
<a className="hover:text-blue-600">Packages</a>
<a className="hover:text-blue-600">Coverage</a>
<a className="hover:text-blue-600">Contact</a>

</div>

<button className="bg-blue-600 text-white px-6 py-2 rounded-lg">
Get Connected
</button>

</nav>


{/* HERO */}

<section className="grid md:grid-cols-2 items-center px-10 py-24 bg-gradient-to-r from-blue-700 to-blue-500 text-white">

<motion.div
initial={{opacity:0,y:30}}
animate={{opacity:1,y:0}}
transition={{duration:0.8}}
>

<h1 className="text-5xl font-bold leading-tight">

Ultra-Fast Internet  
For Businesses & Homes

</h1>

<p className="mt-6 text-lg max-w-lg">

GlobalPath delivers reliable high-speed internet connectivity  
across Northern Uganda with scalable enterprise networking solutions.

</p>

<div className="mt-8 flex gap-4">

<button className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold">
View Packages
</button>

<button className="border border-white px-6 py-3 rounded-lg">
Check Coverage
</button>

</div>

</motion.div>

<div className="flex justify-center">
<img src="/hero-internet.png" className="w-4/5"/>
</div>

</section>


{/* TRUST */}

<section className="py-16 text-center">

<h2 className="text-3xl font-bold mb-10">
Trusted by Organisations Across Northern Uganda
</h2>

<div className="flex justify-center gap-12 opacity-70 text-xl">

<span>Hotels</span>
<span>NGOs</span>
<span>Schools</span>
<span>Businesses</span>

</div>

</section>


{/* SERVICES */}

<section className="bg-gray-50 py-24 px-10">

<h2 className="text-4xl font-bold text-center mb-16">
Our Services
</h2>

<div className="grid md:grid-cols-4 gap-10">

<ServiceCard
icon={<FaWifi size={30}/>}
title="Home Internet"
desc="High-speed unlimited connectivity for households."
/>

<ServiceCard
icon={<FaBuilding size={30}/>}
title="Business Internet"
desc="Reliable internet solutions for organisations."
/>

<ServiceCard
icon={<FaNetworkWired size={30}/>}
title="Dedicated Bandwidth"
desc="Guaranteed speeds for enterprise networks."
/>

<ServiceCard
icon={<FaTools size={30}/>}
title="Network Installation"
desc="Professional fibre and wireless infrastructure."
/>

</div>

</section>


{/* PACKAGES */}

<section className="py-24 px-10">

<h2 className="text-4xl font-bold text-center mb-16">
Internet Packages
</h2>

<div className="grid md:grid-cols-3 gap-10">

<Package
name="Basic"
speed="8 Mbps"
price="200,000 UGX"
/>

<Package
name="Silver"
speed="15 Mbps"
price="350,000 UGX"
/>

<Package
name="Gold"
speed="20 Mbps"
price="400,000 UGX"
/>

</div>

</section>


{/* ENTERPRISE */}

<section className="bg-blue-700 text-white py-24 px-10 text-center">

<h2 className="text-4xl font-bold mb-6">
Dedicated Enterprise Internet
</h2>

<p className="max-w-xl mx-auto text-lg">

Guaranteed bandwidth solutions designed for companies,
government institutions and large organisations.

</p>

<button className="mt-8 bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold">
Request Enterprise Quote
</button>

</section>


{/* COVERAGE */}

<section className="py-24 px-10 text-center">

<h2 className="text-4xl font-bold mb-6">
Network Coverage
</h2>

<p className="text-lg max-w-xl mx-auto">

Our high-speed network currently covers major areas in  
Gulu and Lira and continues expanding across Northern Uganda.

</p>

<button className="mt-8 bg-blue-600 text-white px-8 py-3 rounded-lg">
Check Availability
</button>

</section>


{/* INSTALLATION */}

<section className="bg-gray-100 py-24 text-center">

<h2 className="text-4xl font-bold">
Ready to Get Connected?
</h2>

<p className="mt-4 text-lg">

Installation fees starting from  
200,000 UGX for homes and 300,000 UGX for organisations.

</p>

<button className="mt-8 bg-blue-600 text-white px-10 py-3 rounded-lg text-lg">
Request Installation
</button>

</section>


{/* FOOTER */}

<footer className="bg-black text-white px-10 py-16">

<div className="grid md:grid-cols-3 gap-10">

<div>

<h3 className="text-xl font-bold">
GlobalPath Network
</h3>

<p className="mt-4 opacity-80">
Reliable high-speed internet provider in Northern Uganda since 2012.
</p>

</div>

<div>

<h4 className="font-semibold mb-3">
Services
</h4>

<p>Home Internet</p>
<p>Business Internet</p>
<p>Dedicated Bandwidth</p>

</div>

<div>

<h4 className="font-semibold mb-3">
Contact
</h4>

<p>Gulu – Airfield Road</p>
<p>Lira – Kanodiko Technology Park</p>

</div>

</div>

</footer>

</main>

)
}


function ServiceCard({icon,title,desc}){

return(

<div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition">

<div className="text-blue-600 mb-4">
{icon}
</div>

<h3 className="text-xl font-semibold mb-2">
{title}
</h3>

<p className="text-gray-600">
{desc}
</p>

</div>

)

}


function Package({name,speed,price}){

return(

<div className="border p-10 rounded-xl text-center hover:shadow-xl transition">

<h3 className="text-xl font-semibold">
{name}
</h3>

<h1 className="text-4xl font-bold text-blue-600 mt-4">
{speed}
</h1>

<p className="mt-2 text-gray-600">
{price}/month
</p>

<button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded">
Choose Plan
</button>

</div>

)

}