import React,{Component} from "react";

import SurveyJson from "../surveyQuestions.json"
import SurveyFormat from "./SurveyFormat"






    

class Survey extends Component{


    
  state={
    SurveyForm :SurveyJson
};

 
render(){
    return(

        <ul>
        {this.state.SurveyForm.map(item => (
            <li>

            <SurveyFormat id={item.id}  name = {item.name} question={item.question} answers={item.answers}  image={item.image} />
            


            </li>
        ))}

        </ul>


    )
}

}


  export default Survey;

