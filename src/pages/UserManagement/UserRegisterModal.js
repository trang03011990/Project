import React, { Component } from 'react'

export default class UserRegisterModal extends Component {
    render() {
        return (
            <div className="modal fade" id="userReg">
                <div className="modal-dialog">
                    <div className="modal-content px-3">
                        {/* Modal Header */}
                        <div className="modal-header">
                            <h4 className="modal-title" id="URM-title">Modal Heading</h4>
                            <a className="close text-danger" data-dismiss="modal">×</a>
                        </div>

                        {/* Modal body */}
                        <div className="URM-body">

                        </div>
                        {/* Modal footer */}
                        <div className="modal-footer" id="URM-footer">
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
