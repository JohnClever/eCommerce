import React from 'react'
import './Homepage.style.scss'
import Directory from '../../components/Directory/Directory.component'

class Homepage extends React.Component{
    render(){
        return(
            <div className="homepage">
               <Directory />
            </div>
        )
    }
}

export default Homepage