


////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
export function Section_middle_component({

supportive_prop_generate , 
player_won ,
winning_color ,
handle_new_game_btn_click

}) {

//-------------------------------------------------------------------------//
  return (

    <section className="section_middle">

      <button className="btn_new_game" onClick={(e) => handle_new_game_btn_click(e)}>🔄 NEW GAME</button>
      <div className="div_question_mark_display" 
      style={supportive_prop_generate===true ? {color:"green"} : 
      player_won === true ? {background:winning_color} : {} } >?</div>

    </section>

  );
//-------------------------------------------------------------------------//


}
