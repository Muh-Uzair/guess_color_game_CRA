



export default function App() {


  return(
    <main className="main_box">

      <Section_color_component />

      <section className="lower_section"> 

        
        <Player_component name_of_class={"div_player_1"} player_no={"PLAYER 1"} />

        
        <Section_middle_component />



        <Player_component name_of_class={"div_player_2"}  player_no={"PLAYER 2"}/>
        
      </section>


    </main>
  )
}


function Section_color_component() {

  return (

  <section className="section_colors">

    <div className="div_actual_colors">

      <div className="div_color_1 div_color"></div>
      <div className="div_color_2 div_color"></div>
      <div className="div_color_3 div_color"></div>
      <div className="div_color_4 div_color"></div>
      <div className="div_color_5 div_color"></div>
      <div className="div_color_6 div_color"></div>
      <div className="div_color_7 div_color"></div>
      

    </div>

  </section>
    
  )
}


function Section_middle_component() {

  return (

    <section className="section_middle">

      <button className="btn_new_game">🔄 NEW GAME</button>
      <div className="div_question_mark_display">?</div>

  </section>

  )
}


function Player_component({name_of_class , player_no }) {

  return(

    <div className={name_of_class} >

      <div className="div_turns_player_no">

        {player_no === "PLAYER 1" &&  <p className="text_no_turns" style={{marginLeft:"20px"}} >3</p> }
        
        <p className="text_player_no" style={player_no === "PLAYER 1" ? {marginLeft:"65px"} : player_no === "PLAYER 2" ? {marginLeft:"143px" , marginRight:"45px"} : {}  }  >{player_no}</p>

        {player_no === "PLAYER 2" &&  <p className="text_no_turns" style={{marginLeft:"20px"}} >3</p> }

      </div>

      <p className="text_player_score">30</p>
      <input type="input" className="input_color_name" placeholder="Type color name"/>
      <button className="btn_generate">GENERATE</button>

    </div>

  )
}