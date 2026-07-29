import ComplaintForm from "../components/ComplaintForm";
import ComplaintAssistant from "../components/ComplaintAssistant";
import "../styles/complaint.css";

export default function ComplaintPage(){

    return(

        <div className="page">

            <ComplaintForm/>

            <ComplaintAssistant/>

        </div>

    );

}
