export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map(option => {
        return (
          <button
            onClick={() => onLeaveFeedback(option)}
            key={option}
            type="button"
          >
            {option}
          </button>
        );
      })}
    </>
  );
};
