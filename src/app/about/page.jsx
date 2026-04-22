import Image from "next/image";
import Virat from "../../assets/images/virat.jpg";

const AboutPage = () => {
    return (
        <div>
            This is the about page. You can edit this page at src/app/about/page.jsx
            <Image src="/babor.jfif" alt="Babor" width="500" height="300" />
            <Image src={Virat} alt="Virat" width={500} height={300} />
            <Image src="https://images.unsplash.com/photo-1774199616762-31d947dc7d35" alt="Unsplash" width="500" height="300" />
        </div>
    );
};

export default AboutPage;