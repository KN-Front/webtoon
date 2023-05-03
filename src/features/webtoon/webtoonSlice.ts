import { createSlice } from '@reduxjs/toolkit'
import { fetchWebtoonList} from './webtoonActions'
import { RootState } from '../store'

/**
 * 웹툰 정보 state
 */

interface initialState{
  weeks : Array<Object>,
  service : Array<String>,
  webtoonList : Array<Object>,
  error: any
}
const initialState = {
  weeks : [ {key: "mon" ,value : "월"}, 
            {key: "tue" ,value : "화"},
            {key: "wed" ,value : "수"},
            {key: "thu" ,value : "목"},
            {key: "fri" ,value : "금"},
            {key: "sat" ,value : "토"},
            {key: "sun" ,value : "일"}],
  service : ["naver", "kakao", "kakaoPage"],
  webtoonList : [] ,
  error : ''
}

/**
 * 웹툰 slice
 */
const webtoonSlice = createSlice({
  name: 'webtoon',
  initialState,
  reducers: {
 
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWebtoonList.pending, (state)=>{
        
      })
      .addCase(fetchWebtoonList.fulfilled, (state, action) => {
        state.webtoonList = action.payload;
      })
      .addCase(fetchWebtoonList.rejected, (state,action) => {
        // state.error = action.error.message;
      })
    
  }
})

/**
 * 웹툰 목록
 * @param state 
 * @returns 
 */
export const webtoonList = (state:RootState) => state.webtoon.webtoonList;

/**
 * 요일 목록
 * @param state 
 * @returns 
 */
export const weeksList = (state:RootState) => state.webtoon.weeks;


export const webtoonActions = webtoonSlice.actions;

export default webtoonSlice.reducer