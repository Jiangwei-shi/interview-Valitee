import React, {useState, useEffect } from "react";
import "./Game.css";

export interface IGamePageProps{}

const GamePage:React.FunctionComponent<IGamePageProps> = (props) =>{
    const [userChoice, setClickedButton] = useState('');
    const [ComputerChoice, setComputerChoice] = useState('');
    const [Result,setResult] = useState('');
    const [Userpicture,setuserpicture] = useState('');
    const [Computerpicture,setcomputerpicture] = useState('');

    const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        const button: HTMLButtonElement = event.currentTarget;
        setClickedButton(button.name);
        generateComputerChoice();
        
      };
    
    const generateComputerChoice=() =>{
        const choice =['Rock','Paper','Scissors'];
        const randomChoice = choice[Math.floor(Math.random()*choice.length)];
        setComputerChoice(randomChoice)
    }

    useEffect(() =>{
        checkResult()
        
    },[ComputerChoice,userChoice])

    const checkResult = () => {
        switch(userChoice+ComputerChoice){
            case 'ScissorsPaper':
            case 'RockScissors':
            case 'PaperRock':
            setResult('You win')
            break
            case 'PaperScissors':
            case 'ScissorsRock':
            case 'RockPaper':
            setResult('you lose')
            break
            case 'PaperPaper':
            case 'ScissorsScissors':
            case 'RockRock':
            setResult('It is a draw')
            break
        }
        selectuserpicture();
    }

    const selectuserpicture=() =>{
        if(userChoice == "Rock")
        {
            setuserpicture('../images/rock.Png')
        }
        else if(userChoice == "Paper")
        {
            setuserpicture('../images/Paper.Png')
        }
        else if(userChoice == "Scissors")
        {
            setuserpicture('../images/Scissors.Png')
        }
        selectcomputerpicture();
    }

    const selectcomputerpicture=() =>{
        if(ComputerChoice == "Rock")
        {
            setcomputerpicture('../images/rock.Png')
        }
        else if(ComputerChoice  == "Paper")
        {
            setcomputerpicture('../images/Paper.Png')
        }
        else if(ComputerChoice  == "Scissors")
        {
            setcomputerpicture('../images/Scissors.Png')
        }
    }


    return <div className="container">
        <h1><span className="h1color">Result: {Result}</span></h1>
        <h1><span className="h1color">user choice is : {userChoice}</span></h1>
        <h1><span className="h1color">Computer choice is : {ComputerChoice}</span></h1>

        <div className="choice-user">
            <img className="user-hand" src={Userpicture}/>
        </div>
        <div className="choice-user">
            <img className="user-hand" src={Computerpicture}/>
        </div>
      
    
        <button onClick={buttonHandler} className="button" name="Rock">Rock</button>
        <button onClick={buttonHandler} className="button" name="Paper">Paper</button>
        <button onClick={buttonHandler} className="button" name="Scissors">Scissors</button>
     

    </div>;

};

export default GamePage;