import Head from "next/head";

import Navbar from "@/components/navbar/Navbar";
import HeroSection from "@/components/hero-section/HeroSection";
import WhatSection from "@/components/what-section/WhatSection";
import ProjectSection from "@/components/project-section/ProjectSection";
import AboutSection from "@/components/about-section/AboutSection";
import Footer from "@/components/footer/Footer";

export default function Home() {
	return (
		<>
			<Head>
				<title>Brad's Portfolio</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<Navbar />
			<HeroSection />
			<WhatSection />
			<ProjectSection />
			<AboutSection />
			<Footer />
		</>
	);
}
