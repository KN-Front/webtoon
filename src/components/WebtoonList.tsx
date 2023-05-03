import React from "react";
import { useSelector } from "react-redux";
import { webtoonList } from "../features/webtoon/webtoonSlice"
export function WebtoonList(){
    const list: Array<any> = useSelector(webtoonList);
    console.log(list);
    return(
        <div>
            {
                list.map((data,key)=>(
                    <div>
                        <li> 작가 : {data.author}</li>
                        <li> 제목 : {data.title}</li>
                        <li> 도메인 : {data.service}</li>
                    </div>
                ))
            }
        </div>
    )
}