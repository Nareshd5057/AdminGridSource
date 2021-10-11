import React, { Component } from 'react'
import CompAdminForm from '../../Components/CompAdminForm/CompAdminForm'
import CompAdminPanel from '../../Components/CompAdminPanel/CompAdminPanel'

export default class AdminForm extends Component {
    render() {
        return (
            <div className="pageMain">
                <CompAdminPanel title="Admin Form">
                    <CompAdminForm/>
                </CompAdminPanel>
            </div>
        )
    }
}
