import { useState } from "react"

export function UserInput(){
    const [userInput, setUserInput] = useState({
        initialInvestment: 10000,
        anualinvestment: 1200,
        expectedReturn: 6,
        duration:10,
    }); 
    
    const handleChange = (inputIdentifier, newValue) => {
        setUserInput((previousIput) => {
            return{
                ...previousIput,
                [inputIdentifier]: newValue
            }
        })
        console.log(newValue);
    }

    return(
        <section id="user-input">
                <div className="inputGroup">
                    <p>
                        <label>Initial investment</label>
                        <input type="number" value={userInput.initialInvestment} onChange={(event) => {
                            handleChange("initialInvestment", event.target.value)    
                        }} required/>
                    </p>
                    <p>
                        <label>Anual investment</label>
                        <input type="number" value={userInput.anualinvestment} onChange={(event) => {
                            handleChange("anualinvestment", event.target.value)    
                        }} required/>
                    </p>
                </div>
                <div className="inputGroup">
                    <p>
                        <label>Epected return</label>
                        <input type="number" value={userInput.expectedReturn} onChange={(event) => {
                            handleChange("expectedReturn", event.target.value)    
                        }} required/>
                    </p>
                    <p>
                        <label>Duration</label>
                        <input type="number" value={userInput.duration} onChange={(event) => {
                            handleChange("duration", event.target.value)    
                        }} required/>
                    </p>
                </div>
        </section>
    )
}

export default UserInput