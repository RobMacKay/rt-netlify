import React, { Component } from 'react'
import { Link } from 'gatsby'

const Next = () => (
    <Link to="/step/" className="button">Next</Link>
)

const Results = () => (
   <Link to="/results/" className="button">Results</Link>
)

const One = (props) =>
  (
     <div>
         <h2>Choose your market vertical</h2>
         <div className="columns">
             <div className="column">
                 <p>Casino</p>
             </div>
             <div className="column">
                 <p>Sport Book</p>
             </div>
         </div>

         <h2>Choose your Markets</h2>
         <div className="inline-flex">
             <div>Sweeden</div>
             <div>Finland</div>
             <div>Germany</div>
             <div>Spain</div>
             <div>Canada</div>
             <div>United Kingdom</div>
             <div>Norway</div>
         </div>
         <Next />
     </div>
 )

const Two = () =>
 (
     <div>
         <h2>Select the Time Interval of Dormant Players</h2>
         <div>Time Interval Slider</div>

         <h2>How Large Is Your Inactive Database ?</h2>
         <div>Database Size Slider</div>

         <h2>Choose Your Current Verification</h2>
         <div className="columns">
             <div className="column">Phone</div>
             <div className="column">Mail</div>
         </div>
         <Next />
     </div>
 )

const Three = () =>
 (
     <div>
         <h2>Your Average Wagering Requirements on Bonuses?</h2>
         <div className="columns">
             <div className="column">&lt; 35x</div>
             <div className="column">&gt; 35x</div>
         </div>
         <Results />
     </div>
 )

export default class Test extends Component {

  constructor(props) {
      super(props)

      const {name, company, email} = this.props

      this.state = {
          user: {
              name: name,
              company: company,
              email: email
          },
          one: {
              market: "casinos",
              countries: []
          },
          two: {
            interval: NaN,
            database: NaN,
            verifiy: []
          },
          three: {
            wagering: NaN
          }
      }
  }

  render() {
    
    let element = ""

    if(this.state.market !== null) {
        element = <Two />
    } else if(!this.state.wagering.isNaN()) {
        element = <Three />
    } else {
        element = <One />
    }

    return (
      <div>
        {element}
      </div>
    )
  }
}


