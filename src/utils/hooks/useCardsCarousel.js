import { useEffect, useState } from "react";

const useCardsCarousel = (cards, maxAmountItems) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const maxVisibleCards = maxAmountItems;

    useEffect(() => {
        let isMounted = true;

        if (cards.length <= maxVisibleCards) {
            isMounted && setCurrentIndex(0);
        }

        return () => {
            isMounted = false;
        }
    }, [cards])

    const nextGroup = () => {
        const newIndex = Math.min(cards.length - maxVisibleCards, currentIndex + maxVisibleCards);
        setCurrentIndex(newIndex);
    }

    const prevGroup = () => {
        const newIndex = Math.max(0, currentIndex - maxVisibleCards);
        setCurrentIndex(newIndex);
    }

    const visibleCards = cards.slice(currentIndex, currentIndex + maxVisibleCards);

    return { visibleCards, nextGroup, prevGroup };
}   

export default useCardsCarousel;