import React, { MouseEventHandler, useState } from "react";
import { useSelector } from "react-redux";
import { weeksList, serviceList } from "../features/webtoon/webtoonSlice";
import { fetchWebtoonList} from "../features/webtoon/webtoonActions"
import { useAppDispatch } from "../features/hooks"
import "../styles/WeekList.css"
/**
 * 요일 목록 컴포넌트
 * @returns 
 */
export function WeekList(){
    const dispatch = useAppDispatch();
    const weeks = useSelector(weeksList);
    const service = useSelector(serviceList);

    const [selectedWeek, setSelectedWeek] = useState('');
    const [selectedService, setSelectedService] = useState('');
    const searchWebtoon = (week: string) =>{
      setSelectedWeek(week);
      let param = {
        service : "naver",
        updateDay : selectedWeek
      }
      dispatch(fetchWebtoonList(param))

    }

    const handleServiceChange = (e:React.ChangeEvent<HTMLSelectElement>) =>{
      setSelectedService(e.target.value);
        
    }
    return(
    <div>
        <nav>
          <ul className="SubNavigationBar__snb_list--tAZvu">    
              {weeks.map((item) => (
                  <button key={item.key} onClick={()=> searchWebtoon(item.key)}>{item.value}</button>
              ))}

              <select id="selectBox" value={selectedService} onChange={handleServiceChange}>
                          {service.map((item)=>(
                              <option value = {item} > {item}</option>
                          ))}
              </select>
          </ul>  
        </nav> 
    </div>
    )
}