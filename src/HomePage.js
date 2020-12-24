import React from 'react'
import { Link } from 'react-router-dom'
import config from './config'
import TokenService from './services/TokenServices'


export default class HomePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            params: {},
            dataParams: {},
            formValidationError: ''
        }
    }

    componentDidMount() {
        let user_id = TokenService.getUserId()
        let currentUserToken = TokenService.getAuthToken()
        console.log(user_id, currentUserToken)
        console.log(TokenService.hasAuthToken())

        if (!TokenService.hasAuthToken()) {
            window.location = '/'
        }
    }
    render() {
        let showErrorOutput = ''
        if (this.state.formValidationError) {
            showErrorOutput = <div className='alert alert-info'>
                <i className='fas fa-info'></i>
                <strong>Info</strong>
                {this.state.formValidationError}
            </div>
        }
        return (
            <section className='create-convo clearfix'>

                <h2>Home Page</h2>
                <div className='divTable blueTable media'>
                        <div className='divTableHeading'>
                            <div className='divTableRow'>
                                <div className='divTableHead'>Convo Events</div>
                                <div className='divTableHead'>Created Convos</div>
                            </div>
                        </div>
                        
                        <div className='divTableBody'>
                            <div className='divTableRow'>
                                <div className='divTableCell'>
                                <Link to="/convo-event-list/education">Education</Link>
                                </div>
                                <div className='divTableCell'></div>
                            </div>
                            <div className='divTableRow'>
                                <div className='divTableCell'>Entertainment</div>
                                <div className='divTableCell'></div>
                            </div>
                            <div className='divTableRow'>
                                <div className='divTableCell'>Exercise</div>
                                <div className='divTableCell'></div>
                            </div>
                            <div className='divTableRow'>
                                <div className='divTableCell'>Fashion</div>
                                <div className='divTableCell'></div>
                            </div>
                            <div className='divTableRow'>
                                <div className='divTableCell'>Food</div>
                                <div className='divTableCell'></div>
                            </div>
                            <div className='divTableRow'>
                                <div className='divTableCell'>Holidays</div>
                                <div className='divTableCell'></div>
                            </div>
                            <div className='divTableRow'>
                                <div className='divTableCell'>Leisure</div>
                                <div className='divTableCell'></div>
                            </div>
                            <div className='divTableRow'>
                                <div className='divTableCell'>Technology</div>
                                <div className='divTableCell'></div>
                            </div>
                            <div className='divTableRow'>
                                <div className='divTableCell'>Travel</div>
                                <div className='divTableCell'></div>
                            </div>
                            <div className='divTableRow'>
                                <div className='divTableCell'>Work</div>
                                <div className='divTableCell'></div>
                            </div>
                        </div>
                    </div>

                {showErrorOutput}
                
            </section>
        )
    }
}
