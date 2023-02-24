import Head from "next/head";

import Navbar from "@/components/navbar/Navbar";
import HeroSection from "@/components/hero-section/HeroSection";
import WhatSection from "@/components/what-section/WhatSection";
import WhySection from "@/components/why-section/WhySection";
import HowSection from "@/components/how-section/HowSection";
import Footer from "@/components/footer/Footer";

export default function Home() {
	return (
		<>
			<Head>
				<title>Cohering Minds</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<Navbar />
			<HeroSection />
			<WhatSection />
			<WhySection />
			<HowSection />
			<Footer />
		</>
	);
}
