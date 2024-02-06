import Button from "../components/Button";
import Header from "../components/Header";
import {useState, useContext, useEffect} from "react";
import { DiaryStateContext } from "../App";
import { getMonthRangeByDate } from "../util";
import DiaryList from "../components/DiaryList";
import Editor from "../components/Editor";
const Home = () => {
    const data = useContext(DiaryStateContext);
    const [pivoDate, setPivoDate] = useState(new Date());
    const [filteredData, setFilteredData] = useState([]);
    const headerTitle = `${pivoDate.getFullYear()}년 ${pivoDate.getMonth() + 1}월`;

    useEffect(() => {
        if (data.length >= 1) {
            const { beginTimeStamp, endTimeStamp } = getMonthRangeByDate(pivoDate);
            setFilteredData(
                data.filter(
                    (it) => beginTimeStamp <= it.date && it.date <= endTimeStamp
                )
            );
        } else {
            setFilteredData([]);
        }
    }, [data, pivoDate]);
    const onIncreaseMonth = () => {
        setPivoDate(new Date(pivoDate.getFullYear(), pivoDate.getMonth() + 1));
    };

    const onDecreaseMonth = () => {
        setPivoDate(new Date(pivoDate.getFullYear(), pivoDate.getMonth() - 1));
    };

    return(
        <div>
            <Header
                title={headerTitle}
                leftChild={<Button text={"<"} onClick={onDecreaseMonth}/>}
                rightChild={<Button text={">"} onClick={onIncreaseMonth}/>} />
            <DiaryList data={filteredData} />
        </div>
    );
};

export default Home;
