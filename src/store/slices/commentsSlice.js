import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  comments: [
    {
      name: 'Samuel Jackson',
      date: '13 Apr 2022',
      comment: "Hey Eva! You're cool. Nice pic!",
    },
    {
      name: 'Angela Deimon',
      date: '10 Apr 2022',
      comment:
        'Thanks for your services! We really liked the ocean view room. We hope to cooperate in the near future. We are sure you will do everything to make our next holiday fantastic.',
    },
    {
      name: 'Ronald Harris',
      date: '8 Apr 2022',
      comment:
        'Eva, hello! There is such a question: How can I contact you if I am abroad in roaming?',
    },
  ],
};

const commentsSlice = createSlice({
  name: 'commentsSlice',
  initialState,
  reducers: {
    addComment(state, action) {
      state.comments.push(action.payload);
    },
  },
});

export const { addComment } = commentsSlice.actions;

export default commentsSlice.reducer;
