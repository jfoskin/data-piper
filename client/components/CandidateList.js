import React from "react";
import axios from "axios";
import { CandidateTable } from "./CandidateTable";


class CandidateList extends React.Component {
    constructor(){
        super();
        this.state = {
            getCandidates: null
        }
    }
    async componentDidMount(){
        const response = await axios.get('/api/candidate')
        const data = response.data
        console.table(`this is in candidatelist component`, data)
        this.setState({ getCandidates: data})
    }
    render(){
        console.log(this)
        if(this.state.getCandidates === null){
            return <h4>Loading...</h4>
        }

        return (
            <div id='candidate-list' >
                <CandidateTable /> 


            </div>
        )
    }
}

export default CandidateList;