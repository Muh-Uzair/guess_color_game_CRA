


////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
export function Section_middle_component({

supportive_prop_generate ,

}) {

//-------------------------------------------------------------------------//
  return (

    <section className="section_middle">

      <button className="btn_new_game">🔄 NEW GAME</button>
      <div className="div_question_mark_display" style={supportive_prop_generate===true ? {color:"green"} : {}}>?</div>

    </section>

  );
//-------------------------------------------------------------------------//


}
