import { useState, useEffect } from "react";

const useMobile = () => {
    const [matches, setMatches] = useState(false);
    const query = '(max-width: 1200px';

    useEffect(() => {
        const media = window.matchMedia(query);
        if (media.matches !== matches) {
            setMatches(media.matches);
        }
        const listener = () => setMatches(media.matches);
        window.addEventListener("resize", listener);
        return () => window.removeEventListener("resize", listener);
    }, [matches, query]);

    return matches;
};

export default useMobile;