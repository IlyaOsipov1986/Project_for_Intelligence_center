import {useEffect, useState} from "react";
import {getEvents} from "../../api.js";

const useFetchEvents = () => {

    const [dataEvents, setDataEvents] = useState([]);
    const [isLoading, seIsLoading] = useState(true);

    const fetchData = async () => {
        try {
            await getEvents().then((res) => setDataEvents(res));
        } catch (err) {
            console.log(err);
        }
        seIsLoading(false);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return {
      dataEvents,
      isLoading,
      prefetch: dataEvents
    };
};
export default useFetchEvents;