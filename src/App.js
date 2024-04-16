import { Section_middle_component } from "./components_folder/Section_middle_component"
import { Section_color_component } from "./components_folder/Section_color_component"
import { useState } from "react"



////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
export default function App() {


            const [active_player , set_active_player] = useState(true) ;


            const [supportive_prop_generate , set_supportive_prop_generate] = useState(false) ;

            const arr_of_colors = ["green" , "blue" , "red" , "yellow" , "white" , "orange" , "black"] ;

            let random_color_index ;

            const [user_guessed_color_name , set_user_guessed_color_name] = useState("") ;


            //_______________________________________________________________________//
                        function handle_generate_btn_click_function(event_info_object) {

                          // 1: preventing defaults
                          event_info_object.preventDefault() ;

                          // 2: changing states
                          set_supportive_prop_generate(true) ;

                          // 3: generating random color for guessing
                          random_color_index = Math.trunc(Math.random()*7) ;
                      
                        }


  

//-------------------------------------------------------------------------//
  return(
    <main className="main_box">

      <Section_color_component />

      <section className="lower_section"> 


            <Player_component
            name_of_class={"div_player_1"} 
            player_no={"PLAYER 1"}  
            active_status={active_player === true ? " active_player" : ""} 
            supportive_prop_generate={supportive_prop_generate} set_supportive_prop_generate={set_supportive_prop_generate}
            user_guessed_color_name={user_guessed_color_name} set_user_guessed_color_name={set_user_guessed_color_name}
            
            >

              {active_player === true && <button className="btn_generate" onClick={(e)=> handle_generate_btn_click_function(e)}>GENERATE</button>}


            </Player_component>




            
            <Section_middle_component 
            supportive_prop_generate={supportive_prop_generate}
            />





            <Player_component
            name_of_class={"div_player_2"}  
            player_no={"PLAYER 2"} 
            active_status={active_player === false ? " active_player" : ""}
            supportive_prop_generate={supportive_prop_generate} set_supportive_prop_generate={set_supportive_prop_generate}
            user_guessed_color_name={user_guessed_color_name} set_user_guessed_color_name={set_user_guessed_color_name}


            
            >

            {active_player === false && <button className="btn_generate" onClick={(e)=> handle_generate_btn_click_function(e)}>GENERATE</button>}


            </Player_component>
        

      </section>


    </main>
  )
//-------------------------------------------------------------------------//

}





////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
function Player_component({

name_of_class , 
player_no ,
active_player , 
set_active_player , active_status ,
children ,
user_guessed_color_name , set_user_guessed_color_name ,

}) {










//-------------------------------------------------------------------------//
  return(

    <div 
    className={name_of_class+active_status} >

      <div className="div_turns_player_no">

        {player_no === "PLAYER 1" &&  <p className="text_no_turns" style={{marginLeft:"20px"}} >3</p> }
        
        <p className="text_player_no" style={player_no === "PLAYER 1" ? {marginLeft:"65px"} : player_no === "PLAYER 2" ? {marginLeft:"143px" , marginRight:"45px"} : {}  }  >{player_no}</p>

        {player_no === "PLAYER 2" &&  <p className="text_no_turns" style={{marginLeft:"20px"}} >3</p> }

      </div>


      <p className="text_player_score">30</p>

      <form className="form_input_color_name">
       <input type="input" className="input_color_name" placeholder="Type color name"/>
      </form>


      {children}

      
      

    </div>

  )
//-------------------------------------------------------------------------//

}