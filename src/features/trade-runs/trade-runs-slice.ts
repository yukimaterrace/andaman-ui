import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { OffsetPaging } from 'model/definition'

type TradeRunsState = OffsetPaging & {}

const initialTradeRunsState: TradeRunsState = {
  all: 50,
  count: 5,
  offset: 0
}

const tradeRuns = createSlice({
  name: 'trade-runs',
  initialState: initialTradeRunsState,
  reducers: {
    setCountOffset(state, { payload }: PayloadAction<number>) {
      state.offset = payload
    }
  }
})

export const { setCountOffset } = tradeRuns.actions

export default tradeRuns.reducer