import React, { Component } from 'react'
import '../Admin/admin.css'
import UserModal from './UserModal'
import UserRegisterModal from './UserRegisterModal'


export default class UserManagement extends Component {

    render() {
        return (

            <div className="details container-fluid card text-center">
                {/* Header */}
                <div className="card-header myCardHeader">
                    <div className="row">
                        <div className="col-md-6 text-left mt-2">
                            <button className="btn btn-success" id="btnThem" data-toggle="modal" data-target="#myModal">Thêm người dùng</button>
                        </div>
                        <div className="col-md-6 text-right mt-2">
                            <span className="text-right text-dark font-weight-bold fs-1">Chào Trang,</span>
                            <img className="rounded-circle ml-2" style={{ width: '40px', height: '40px' }} src="../img/logo512.png" alt="" />
                            <span className="dropdown">
                                <button className="btn btn-lg btn-white dropdown-toggle ml-1" type="button" id="dropdownMenuButton1" data-toggle="dropdown" aria-expanded="false">

                                </button>
                                <ul className="dropdown-menu " aria-labelledby="dropdownMenuButton1">
                                    <li><a className="dropdown-item" href="#">Cập nhật thông tin</a></li>
                                    <li><a className="dropdown-item" href="#">Đăng xuất</a></li>
                                </ul>
                            </span>

                        </div>

                    </div>
                </div>
                {/* Body */}
                <div className="card-body">
                    <div className="row mb-3">
                        <div className="col">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Nhập vào tài khoản hoặc họ tên người dùng" id="searchName" />
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="btnTimNV"><i className="fa fa-search" /></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <table className="table table-bordered table-hover myTable">
                        <thead className="text-dark bg-light">
                            <tr>
                                <th>STT</th>
                                <th className="nowrap">Tài khoản</th>                
                                <th>Mật khẩu</th>
                                <th>Họ và tên</th>
                                <th>Email</th>
                                <th>Số điện thoại</th>

                                <th><em className="fa fa-cog" /></th>
                            </tr>
                        </thead>
                        <tbody id="tableDanhSach" >
                            <tr >
                                <td className="align-middle">1</td>
                                <td className="align-middle">bcdn01</td>
                                <td className="align-middle">Nguyen Van A</td>
                                <td className="align-middle">abc@123</td>
                                <td className="align-middle">a@gmail.com</td>
                                <td className="align-middle">0905205205</td>
                                <td>
                                    <button type="button" className="btn btn-success mx-1" data-toggle="modal" data-target="#userReg" >Ghi danh</button>
                                    <button className="btn btn-warning mx-1" >Sửa</button>
                                    <button className="btn btn-danger mx-1" >Xóa</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
               
                {/* The Modal */}
                <UserModal />
                <UserRegisterModal/>
            </div>



        )
    }
}
