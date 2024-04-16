import { Section_middle_component } from "./components_folder/Section_middle_component"
import { Section_color_component } from "./components_folder/Section_color_component"
import { useState } from "react"



////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
export default function App() {


            const [active_player , set_active_player] = useState(true) ;

            const [player_score , set_player_score] = useState(60) ;




            const arr_of_colors = ["green" , "blue" , "red" , "yellow" , "white" , "orange" , "black"] ;






            const [supportive_prop_generate , set_supportive_prop_generate] = useState(false) ;
            const [random_color_index , set_random_color_index] = useState("") ;
            //_______________________________________________________________________//
                        function handle_generate_btn_click_function(event_info_object) {

                          // 1: preventing defaults
                          event_info_object.preventDefault() ;

                          if(supportive_prop_generate) return ;

                          // 2: changing states
                          set_supportive_prop_generate(true) ;

                          // 3: generating random color for guessing
                          const random_num = Math.trunc(Math.random()*7 ) ;
                          console.log(arr_of_colors[random_num]) ;
                          set_random_color_index(random_num)  ;
                      
                        }










            const [user_guessed_color_name , set_user_guessed_color_name] = useState("") ;
            const [no_of_turns , set_no_of_turns] = useState(3) ;
            //_______________________________________________________________________//
                        function winning_logic_function(guessed_color) {


                          if(arr_of_colors[random_color_index] === guessed_color ) {
                            console.log("You won")
                          }
                          else {
                            console.log("Try again")
                          }

                        }
            //_______________________________________________________________________//l
                        function handle_input_change(event_info_object) {
                          if(!supportive_prop_generate)return ;
                          set_user_guessed_color_name(event_info_object.target.value) ;                                                
                        }
            //_______________________________________________________________________//
                        function handle_form_submit(event_info_object) {
                          event_info_object.preventDefault() ;

                          const guessed_color = user_guessed_color_name ; 

                          set_user_guessed_color_name("") ;   

                          set_supportive_prop_generate(false) ;
                          
                          winning_logic_function(guessed_color);
                        }



  

//-------------------------------------------------------------------------//
  return(
    <main className="main_box">

      {/*ICICICICICICIICIICICICICICCIICICICICICICICICICICCIICICICICIC*/}
      <Section_color_component />
      {/*ICICICICICICIICIICICICICICCIICICICICICICICICICICCIICICICICIC*/}


      
      <section className="lower_section"> 


            {/*ICICICICICICIICIICICICICICCIICICICICICICICICICICCIICICICICIC*/}
            <Player_component
            name_of_class={"div_player_1"} 
            active_status={active_player === true ? " active_player" : ""} 
            supportive_prop_generate={supportive_prop_generate} set_supportive_prop_generate={set_supportive_prop_generate}
            user_guessed_color_name={user_guessed_color_name} set_user_guessed_color_name={set_user_guessed_color_name}
            
            >


                  {active_player === true && 
                  <>

                      <div className="div_turns_player_no">

                        <p className="text_no_turns" style={{marginLeft:"20px"}} >3</p> 
                        
                        <p className="text_player_no" style={{marginLeft:"65px"}  }  >PLAYER 1</p>
        
                
                      </div>
                
                
                      <p className="text_player_score">{player_score}</p>
                  
                      <form className="form_input_color_name" onSubmit={(e)=> handle_form_submit(e)}>
                        <input type="input" className="input_color_name" 
                        placeholder="Type color name" value={user_guessed_color_name}
                        onChange={(e)=>handle_input_change(e)}
                        
                        />
                      </form>

                      <button className="btn_generate" onClick={(e)=> handle_generate_btn_click_function(e)}>GENERATE</button>  
                  </>
                  }

                  
                  {active_player === false && 
                  <>

                      <div className="div_turns_player_no">

                          <p className="text_no_turns" style={{marginLeft:"20px"}} >3</p> 

                          <p className="text_player_no" style={{marginLeft:"65px"}  }  >PLAYER 1</p>


                      </div>


                      <p className="text_player_score">{player_score}</p>

                  
                      <form className="form_input_color_name">
                        <input type="input" className="input_color_name" placeholder="Type color name" disabled />
                      </form>
 
                  </>
                  }




            </Player_component>
            {/*ICICICICICICIICIICICICICICCIICICICICICICICICICICCIICICICICIC*/}








            {/*ICICICICICICIICIICICICICICCIICICICICICICICICICICCIICICICICIC*/}
            <Section_middle_component 
            supportive_prop_generate={supportive_prop_generate}
            />
            {/*ICICICICICICIICIICICICICICCIICICICICICICICICICICCIICICICICIC*/}








            {/*ICICICICICICIICIICICICICICCIICICICICICICICICICICCIICICICICIC*/}
            <Player_component
            name_of_class={"div_player_2"}  
            active_status={active_player === false ? " active_player" : ""}
            supportive_prop_generate={supportive_prop_generate} set_supportive_prop_generate={set_supportive_prop_generate}
            user_guessed_color_name={user_guessed_color_name} set_user_guessed_color_name={set_user_guessed_color_name}


            
            >

                  {active_player === false && 
                  <>
                      <div className="div_turns_player_no">

                          <p className="text_player_no" style={{ marginLeft:"143px" , marginRight:"45px"} } >PLAYER 2</p>

                          <p className="text_no_turns" style={{marginLeft:"20px"}} >3</p> 

                      </div>

                      <p className="text_player_score">{player_score}</p>
                      
                      <form className="form_input_color_name">
                        <input type="input" className="input_color_name" placeholder="Type color name"/>
                      </form>
                      
                      <button className="btn_generate" onClick={(e)=> handle_generate_btn_click_function(e)}>GENERATE</button>  
                  </>
      
                  }

                  {active_player === true && 
                  <>
                      <div className="div_turns_player_no">

                          <p className="text_player_no" style={{ marginLeft:"143px" , marginRight:"45px"} } >PLAYER 2</p>

                          <p className="text_no_turns" style={{marginLeft:"20px"}} >3</p> 

                      </div>

                      <p className="text_player_score">{player_score}</p>

                      <form className="form_input_color_name">
                        <input type="input" className="input_color_name" placeholder="Type color name" disabled />
                      </form>
 
                  </>
                  }


            </Player_component>
            {/*ICICICICICICIICIICICICICICCIICICICICICICICICICICCIICICICICIC*/}
        

      </section>


    </main>
  )
//-------------------------------------------------------------------------//

}





////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
function Player_component({

name_of_class , 
active_player , 
set_active_player , active_status ,
children ,
user_guessed_color_name , set_user_guessed_color_name ,

}) {










//-------------------------------------------------------------------------//
  return(

    <div 
    className={name_of_class+active_status} >


      {children}

      
      

    </div>

  )
//-------------------------------------------------------------------------//

}