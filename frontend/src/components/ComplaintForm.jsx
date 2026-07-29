import {useSelector,useDispatch} from "react-redux";
import {updateField,resetForm} from "../features/complaint/complaintSlice";

export default function ComplaintForm(){

const dispatch=useDispatch();

const form=useSelector(state=>state.complaint);

const handle=(e)=>{

dispatch(updateField({
field:e.target.name,
value:e.target.value
}));

};

return(

<div className="formCard">

<div className="header">

<div>

<h2>Log Customer Complaint</h2>

<p>API & FDF Quality Assurance Module</p>

</div>

<span className="badge">
Pending Triage
</span>

</div>

<section>

<h4>1. Origin & Customer Details</h4>

<div className="grid2">

<input
name="complaintSource"
placeholder="Complaint Source"
value={form.complaintSource}
onChange={handle}
/>

<input
name="customerName"
placeholder="Customer Name"
value={form.customerName}
onChange={handle}
/>

</div>

</section>

<section>

<h4>2. Product & Batch Identification</h4>

<div className="grid2">

<input
name="productName"
placeholder="Product Name"
value={form.productName}
onChange={handle}
/>

<input
name="productStrength"
placeholder="Strength / Grade"
value={form.productStrength}
onChange={handle}
/>

<input
name="batchLotNumber"
placeholder="Batch/Lot Number"
value={form.batchLotNumber}
onChange={handle}
/>

<input
type="date"
name="manufacturingDate"
value={form.manufacturingDate}
onChange={handle}
/>

<input
type="date"
name="expiryDate"
value={form.expiryDate}
onChange={handle}
/>

<input
name="quantityAffected"
placeholder="Quantity"
value={form.quantityAffected}
onChange={handle}
/>

</div>

</section>

<section>

<h4>3. Complaint Details</h4>

<div className="grid2">

<input
name="complaintType"
placeholder="Complaint Type"
value={form.complaintType}
onChange={handle}
/>

<input
type="date"
name="complaintDate"
value={form.complaintDate}
onChange={handle}
/>

</div>

<textarea

rows={4}

name="description"

placeholder="Detailed Complaint Description"

value={form.description}

onChange={handle}

/>

</section>

<section>

<h4>4. Initial Assessment & Priority</h4>

<div className="grid2">

<select
name="initialSeverity"
value={form.initialSeverity}
onChange={handle}
>

<option>Severity</option>
<option>Low</option>
<option>Medium</option>
<option>High</option>

</select>

<select
name="priority"
value={form.priority}
onChange={handle}
>

<option>Priority</option>
<option>Low</option>
<option>Medium</option>
<option>High</option>

</select>

</div>

</section>

<div className="buttons">

<button onClick={()=>dispatch(resetForm())}>
Reset Form
</button>

<button className="primary">
Save Complaint
</button>

</div>

</div>

);

}
