import React from 'react'

export const Question = ({qn,ind}) => {
    console.log(">>>>>>",qn,ind)
   const opt= [qn.correct_answer,...qn.incorrect_answers]
   document.getElementById("getValueButton")?.addEventListener("click", function() {
    // Get the selected radio button
    var selectedOption = document.querySelector('input[name="option"]:checked');
  
    if (selectedOption) {
      // Access the value of the selected radio button
      var selectedValue = selectedOption.value;
      console.log("Selected Value: " + selectedValue);
    } else {
      console.log("No option selected");
    }
  });
   
  return (
    <div className='question' >
        <h2>
        {qn.question}
        </h2>
<div className='question-options'>

<form>
  <label>
    <input type="radio" name="option" value={opt[0]}/> {opt[0]}
  </label>
  <label>
    <input type="radio" name="option" value={opt[1]}/> {opt[1]}
  </label>
  <label>
    <input type="radio" name="option" value={opt[2]}/> {opt[2]}
  </label>
  <label>
    <input type="radio" name="option" value={opt[3]}/> {opt[3]}
  </label>
</form>
   
</div>
<button id="getValueButton">submit</button>

    </div>
  )
}
