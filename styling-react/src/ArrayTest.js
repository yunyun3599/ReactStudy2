import React,{useState} from 'react';

const ArrayList = () => {
    const [questions, setQuestions] = useState({
        quiz_list: [
            {quiz_id: 1, quiz_content:"hi"},
            {quiz_id:2, quiz_content:"hello"} 
        ]
    });
    const [answers, setAnswers] = useState({
        quiz_list: [
            {quiz_id: 1, quiz_answer:""},
            {quiz_id:2, quiz_answer:""} 
        ]
      })
      const onAnswerChange = async (event) => {
        const { name, value } = event.target;
            setAnswers(
                answers.quiz_list.map((question) => {
                    Number(question.quiz_id)===Number(post[question.quiz_id].quiz_id)?
                    setReply({
                      quiz_list:reply.quiz_list.push(post[question.quiz_id])
                  })
                  :console.log("error");
                })
            )
      }
      return (
        <div>
            {questions.quiz.map((quiz, i)=>{
            var answers = JSON.parse(window.localStorage.getItem('answer_arr'));
            return(
            <div>
                {quiz.content}
              <input placeholder=" Input your answer." key={quiz.quiz_id} name={quiz.quiz_id} value={questions.quiz.quiz_id} onChange={onAnswerChange}></input>
            </div>
            );
          })}
        </div>
      );
}
export default ArrayList;