import {useSelector} from "react-redux";

export default function ComplaintAssistant(){

const progress=useSelector(state=>state.complaint.progress);

return(

<div className="assistant">

<h3>

AI Complaint Intake Assistant

<span className="beta">

BETA

</span>

</h3>

<div className="uploadBox">

☁️

<p>Drag & Drop Complaint Document</p>

<button>

Browse

</button>

</div>

<div className="divider">

OR

</div>

<textarea

rows={4}

placeholder="Paste Complaint Text / Email"

/>

<div className="formats">

Supported:

PDF DOCX TXT EML

</div>

<h4>

Extraction Progress

</h4>

<div className="progress">

<div
className="fill"
style={{width:`${progress}%`}}
></div>

</div>

<p>

{progress}% Complete

</p>

<div className="assistantBox">

🤖 Upload a complaint document and I will extract and populate the form automatically.

</div>

<div className="chat">

<input

placeholder="Ask me anything about this complaint..."

/>

<button>

➜

</button>

</div>

</div>

);

}
