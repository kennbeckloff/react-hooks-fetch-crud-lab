import React,{useEffect, useState} from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {
  const [questions, setQuesions] = useState ([]);
  
  useEffect(() => {
    fetch("http://localhost:4000/questions")
    .then((resp) => resp.json())
    .then((questions) => {
      setQuesions(questions)
    })
  }, [])
  return (
    <div>
      <h1>Question List</h1>
      {questions.map((question) => (
        <QuestionItem key={question.id} question={question} />
      ))}
    </div>
  );
}



export default QuestionList;
