import "swiper/css";
import "swiper/css/navigation";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import '../public/css/bootstrap.min.css';
import '../public/css/style.css';
import '../public/css/style-dark.css';
import '../public/css/style-color-red.css';
import '../public/css/style-color-yellow.css';
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }) {
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);
    return (<>
        {!loading ? (
            <Component {...pageProps} />
        ) : (
            <div className="preloader"></div>
        )}
    </>)
}

export default MyApp
