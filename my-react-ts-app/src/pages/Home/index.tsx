import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Presentation from "../../components/Presentation";
import Projet from "../../components/Projet";
import Slider from "../../components/Slider";

export default function Home() {
	return (
		<>
			<Header />
			<Presentation />
			<Slider />
			<Projet />
			<Contact />
			<Footer />
		</>
	);
}
