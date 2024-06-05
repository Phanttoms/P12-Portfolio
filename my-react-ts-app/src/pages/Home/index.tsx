import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Presentation from "../../components/Presentation";
import Projet from "../../components/Projet";
import Slider from "../../components/Slider";

const scrollToSection = (id: string) => {
	const element = document.getElementById(id);
	if (element) {
		element.scrollIntoView({ behavior: "smooth" });
	}
};

export default function Home() {
	return (
		<>
			<Header scrollToSection={scrollToSection} />
			<Presentation />
			<Slider />
			<Projet />
			<Contact />
			<Footer />
		</>
	);
}
