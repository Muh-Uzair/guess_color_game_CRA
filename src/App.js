import { Section_middle_component } from "./components_folder/Section_middle_component"
import { Section_color_component } from "./components_folder/Section_color_component"
import { useState } from "react"



////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
export default function App() {


            const [active_player , set_active_player] = useState(true) ;
            const [player_won , set_player_won] = useState(false) ;
            const [winning_color , set_winning_color] = useState("") ;
            const [tries , set_tries] = useState(2) ;
            let tries_flag = tries ;




            const [player_1_score , set_player_1_score] = useState(60) ;
            const [player_1_turns , set_player_1_turns] = useState(2) ;
            let player_1_won_check ;
            


            const [player_2_score , set_player_2_score] = useState(60) ;
            const [player_2_turns , set_player_2_turns] = useState(2) ;
            let player_2_won_check ;

    


            const arr_of_colors = ["green" , "blue" , "red" , "yellow" , "purple" , "orange" , "pink"] ;








            const [supportive_prop_generate , set_supportive_prop_generate] = useState(false) ;
            const [random_color_index , set_random_color_index] = useState("") ;
            //_______________________________________________________________________//
                        function handle_generate_btn_click_function(event_info_object , player_no ) {

                          // 1: preventing defaults
                          event_info_object.preventDefault() ;

                          if(tries===0) return ;



                          if((supportive_prop_generate || 
                            (player_no === 1 && player_1_turns === 0)  || 
                            (player_no === 2 && player_2_turns === 0 )) 
                          ) return ;

                          // 2: changing states
                          set_supportive_prop_generate(true) ;

                          // 3: generating random color for guessing
                          const random_num = Math.trunc(Math.random()*7 ) ;
                          set_winning_color(arr_of_colors[random_num])
                          console.log(arr_of_colors[random_num]) ;
                          set_random_color_index(random_num)  ;

                                                    
                          if((player_no === 1 && player_2_turns < 3 ) && (tries > 0)) {set_player_2_turns(2)}
                          if((player_no === 2 && player_1_turns < 3) && (tries > 1)) {set_player_1_turns(2)}
                      
                        }










            const [user_guessed_color_name , set_user_guessed_color_name] = useState("") ;
            const [no_of_turns , set_no_of_turns] = useState(3) ;
            //_______________________________________________________________________//
                        function winning_logic_function(guessed_color , player_no ) {


                              if(arr_of_colors[random_color_index] === guessed_color ) {

                                set_player_won(true) ;
                                set_active_player(!active_player) ;

                                
                                if(player_no === 2 ) { 
                                  
                                  set_tries(tries=> tries-1) ;

                                  }  
                                


                                
                              }
                              else {
                                
                                if(player_no === 1) { 

                                    set_player_1_score((player_1_score) => player_1_score-10 ) ; 
                                    set_player_1_turns(player_1_turns-1) ;
                                    if( player_1_turns-1 === 0 ) { set_active_player(false)}

                                }
                                else if(player_no === 2) { 

                                    set_player_2_score((player_2_score) => player_2_score-10 ) ;
                                    set_player_2_turns(player_2_turns-1) ;
                                    if( player_2_turns-1 === 0 ) { 
                                      set_active_player(true) ; 
                                      set_tries(tries=> tries-1)
                                    } 
                                }
                              

                                
                              }

                        }
            //_______________________________________________________________________//
                        function handle_input_change(event_info_object ) {
                          if(!supportive_prop_generate)return ;
                          set_user_guessed_color_name(event_info_object.target.value) ;      

                        }
            //_______________________________________________________________________//
                        function handle_form_submit(event_info_object , player_no ) {
                          event_info_object.preventDefault() ;


                          if(!supportive_prop_generate || user_guessed_color_name === "") return ;
                          if(player_won === true){set_player_won(false)} 

                          const guessed_color = user_guessed_color_name.toLowerCase() ; 

                          set_user_guessed_color_name("") ;   

                          set_supportive_prop_generate(false) ;
                          
                          winning_logic_function(guessed_color , player_no);

                        }



            if(tries_flag === 0) {

              if(player_1_score > player_2_score) {
                player_1_won_check = true ; 
              }
              else if(player_1_score < player_2_score) {    
                player_2_won_check = true ; 
              }
              
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
            tries={tries}
            player_1_score={player_1_score}
            player_2_score={player_2_score}
            after_win_styles_class={player_1_won_check === true ? " winning_styles" : "" }
            player_won_check={player_1_won_check}
            
            >


                  {active_player === true && 
                  <>

                      <div className="div_turns_player_no">

                        <p className="text_no_turns" style={ player_1_turns === 0 ? {marginLeft:"20px" , backgroundColor:"red"} : {marginLeft:"20px"}}>{player_1_turns}</p> 
                        
                        <p className="text_player_no" style={{marginLeft:"65px"}}>PLAYER 1</p>
                
                      </div>
                
                
                      <p className="text_player_score">{player_1_score}</p>

                      {tries !== 0 &&                       <form className="form_input_color_name" onSubmit={(e)=> handle_form_submit(e , 1)}>
                        <input type="input" className="input_color_name" 
                        placeholder="Type color name" value={user_guessed_color_name}
                        onChange={(e)=>handle_input_change(e)}
                                                                   
                        />
                      </form> }  

                      {tries === 0 &&                       <form className="form_input_color_name" onSubmit={(e)=> handle_form_submit(e , 1)}>
                        <input type="input" className="input_color_name" 
                        placeholder="Type color name" value={user_guessed_color_name}
                        onChange={(e)=>handle_input_change(e)}
                        disabled                                                                   
                        />
                      </form> }  




                      {tries !== 0 && <button className="btn_generate" onClick={(e)=> handle_generate_btn_click_function(e , 1)}>GENERATE</button> }
                       
                  </>
                  }

                  
                  {active_player === false && 
                  <>

                      <div className="div_turns_player_no">

                          <p className="text_no_turns" style={ player_1_turns === 0 ? {marginLeft:"20px" , backgroundColor:"red"} : {marginLeft:"20px"}} >{player_1_turns}</p> 

                          <p className="text_player_no" style={{marginLeft:"65px"}  }  >PLAYER 1</p>


                      </div>


                      <p className="text_player_score">{player_1_score}</p>

                  
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
            player_won={player_won}
            winning_color={winning_color}
            />
            {/*ICICICICICICIICIICICICICICCIICICICICICICICICICICCIICICICICIC*/}








            {/*ICICICICICICIICIICICICICICCIICICICICICICICICICICCIICICICICIC*/}
            <Player_component
            name_of_class={"div_player_2"}  
            active_status={active_player === false ? " active_player" : ""}
            supportive_prop_generate={supportive_prop_generate} set_supportive_prop_generate={set_supportive_prop_generate}
            user_guessed_color_name={user_guessed_color_name} set_user_guessed_color_name={set_user_guessed_color_name}
            tries={tries}
            player_1_score={player_1_score}
            player_2_score={player_2_score}
            after_win_styles_class={player_2_won_check === true ? " winning_styles" : "" }
            player_won_check={player_2_won_check}
            
            >

                  {active_player === false && 
                  <>
                      <div className="div_turns_player_no">

                          <p className="text_player_no" style={ player_2_turns === 0 ? {marginLeft:"143px" , marginRight:"45px" , backgroundColor:"red"} :  { marginLeft:"143px" , marginRight:"45px"} } >PLAYER 2</p>

                          <p className="text_no_turns" style={{marginLeft:"20px"}} >{player_2_turns}</p> 

                      </div>

                      <p className="text_player_score">{player_2_score}</p>
                      
                      <form className="form_input_color_name" onSubmit={(e)=> handle_form_submit(e , 2)}>
                        <input type="input" className="input_color_name" 
                        placeholder="Type color name" value={user_guessed_color_name}
                        onChange={(e)=>handle_input_change(e)}
                        
                        />
                      </form>
                      
                      <button className="btn_generate" onClick={(e)=> handle_generate_btn_click_function(e , 2)}>GENERATE</button>  
                  </>
      
                  }

                  {active_player === true && 
                  <>
                      <div className="div_turns_player_no">

                          <p className="text_player_no" style={{ marginLeft:"143px" , marginRight:"45px"} } >PLAYER 2</p>

                          <p className="text_no_turns" style={player_2_turns === 0 ? {marginLeft:"20px", background:"red"} : {marginLeft:"20px"}} >{player_2_turns}</p> 

                      </div>

                      <p className="text_player_score">{player_2_score}</p>

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
tries ,
player_1_score ,
player_2_score ,
after_win_styles_class ,
player_won_check ,


}) {



 









//-------------------------------------------------------------------------//
  return(

    <div 
    className={name_of_class+active_status } 
    style={tries === 0 ? 
      player_won_check  === true ? {backgroundColor:"rgba(18, 190, 18, 0.4)"} : {backgroundColor:"rgba(0 , 0 , 0 , 0)"} : {}}
    >


      {children}

      
      

    </div>

  )
//-------------------------------------------------------------------------//

}