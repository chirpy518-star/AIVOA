import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  submissions: [],
  progress: 0,
};

const complaintSlice = createSlice({
  name: 'complaint',
  initialState,
  reducers: {
    submitComplaint(state, action) {
      state.submissions.push({
        ...action.payload,
        createdAt: new Date().toISOString(),
      });
    },
    setProgress(state, action) {
      state.progress = action.payload;
    },
    clearSubmissions(state) {
      state.submissions = [];
    },
  },
});

export const { submitComplaint, setProgress, clearSubmissions } = complaintSlice.actions;
export default complaintSlice.reducer;
