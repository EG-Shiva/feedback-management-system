interface Feedback {
    name: string;
    feedback: string;
  }
  
  const feedbacks: Feedback[] = [];
  
  export const addFeedback = (name: string, feedback: string) => {
    feedbacks.push({ name, feedback });
  };
  
  export const getAllFeedback = () => {
    return feedbacks;
  };
  