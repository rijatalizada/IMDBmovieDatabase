import React, {useState} from "react";
import Collapsible from 'react-collapsible';
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai'

export const Person = (props) => {
  const { name, surname, mail, faculty, img, info, interests, github, githubUsername } = props;
  const [accrodionOpen, setAccordionOpen] = useState(false)
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      {/* <img className="w-full h-60" src={img} alt={`${name} ${surname}`} /> */}
      <div style={{
        backgroundImage: `url(${img})`
      }} className={`w-full h-96 bg-cover bg-center`}></div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{`${name} ${surname}`}</div>
        <p className="text-gray-700 text-base">
          Faculty: {faculty}
          <br />
          Email: {mail}
          <br />
          GitHub: <a className="text-[#0000ffb0]" href={github} target="_blank">{githubUsername}</a>
        </p>
      </div>
      <div className="px-6 py-4">
        <div className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          {interests.map((interest, index) => {
            return <span key={index}>{interest}{index !== interests.length - 1 ? "," : ""} </span>
          })}
        </div>
      </div>
      <div className="px-6 py-4 ">
       <Collapsible trigger={
        <div  onClick={() => setAccordionOpen(!accrodionOpen)} className="mb-3 flex justify-between">
          Show {accrodionOpen ? "Less" : "More"}
          {accrodionOpen ? <AiOutlineMinusCircle/> : <AiOutlinePlusCircle/>  } 
        </div>
       }>
          <p>{info}</p>
       </Collapsible>
      </div>
    </div>
  );
};
