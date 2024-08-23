import React, { useState } from 'react';

const Survey = () => {
  const [submit, setSubmit] =useState(false);
  const [answer, setAnswer] = useState("");
  const [selected, setSelected] = useState("");

  
 
const survey = [
  {numero:"1",
   question: "What is your age?",
   option1:"18-20",
    option2:"20-25",
    option3:"25-28"
  },
  {numero:"2",
    question: "What is your highest level of education?",
    option1:"High-School Diploma",
    option2:"Bachelor Degree",
    option3:"No Degree"
   },
   {numero:"3",
    question: "How many children do you have?",
    option1:"1-2",
    option2:"2-4",
    option3:"4-6"
   },
   {numero:"4",
    question: "What type of career do you envision for your child?",
    option1:"Nursing",
    option2:"Tech",
    option3:"Engineering"
   },
   {
    numero:"5",
    question:"How important is job stability in your career choice for your child?",
    option1:"Important",
    option2:"Very important",
    option3:"Not Important"
   },
   {
    numero:"6",
    question:"How important is job flexibility in your career choice for your child?",
    option1:"Important",
    option2:"Very important",
    option3:"Not Important"
   },
   {
    numero:"7",
    question:"How important is it for your child’s career to have a positive social impact?",
    option1:"Important",
    option2:"Very important",
    option3:"Not Important"
   },
   {
    numero:"8",
    question:"Do you feel confident in guiding your child towards a suitable career?",
    option1:"Yes",
    option2:"NO",
    option3:"Not Sure"
   },
   {
    numero:"9",
    question:"Are you encouraging your child to learn coding or other technical skills?",
    option1:"Yes",
    option2:"No",
    option3:"Not sure"
   },
   {
    numero:"10",
    question:"What level of education do you believe is necessary for your child’s future career?",
    option1:"High-School Diploma",
    option2:"Bachelor Degree",
    option3:"No Degree"
   },
];

const handleSubmit = (e)=>{
e.preventDefault();
setSubmit(true);
};
const handleAnswer =(data)=>{
  console.log(data)
setAnswer(data); 
setSelected(selected);
}
const setAnswer1 = ()=>{
  const ans1 = document.getElementByTagName('li')[0].value;
  console.log(ans1);
  setAnswer(ans1)
};

const setAnswer2 = ()=>{
  const ans2 = document.getElementByClassName('option2').value;
  console.log(ans2);
  setAnswer(ans2)
};

const setAnswer3 = ()=>{
  const ans3 = document.getElementByClassName('option3').value;
  console.log(ans3);
  setAnswer(ans3)
};



  return (
    <div>
      <form onSubmit={handleSubmit} className='input-form'>
        {survey.map((item, id) =>{
          return (
          <div key={id} className='answer-div'>
            <span>{item.numero} - {item.question}</span>
            <ul>
              <li onClick={setAnswer1} className='option1'>{item.option1}</li>
              <li onClick={setAnswer2} className='option2'>{item.option2}</li>
              <li onClick={setAnswer3} className='option3'>{item.option3}</li>
            </ul>
          </div>
          )
        })}
        <button onClick={handleSubmit}>Submit</button>
      </form>
      <>
      <div className='input-form'>
        {submit === true ? (
          <div className='answer-div'>
            {survey.map((item)=>{
              return (
              <div className='result-form'>
              <span>{item.numero} - {item.question}</span>
              <span>{answer}</span>
              </div>
              )
            })}
        
        </div>

        ):null
        }
      </div>
      </>
    </div>
  )
}

export default Survey;

