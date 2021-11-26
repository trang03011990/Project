import React, { Component } from 'react'
import '../Admin/admin.css'
import CourseModal from './CourseModal'


export default class CourseManagement extends Component {

    render() {
        return (

            <div className="details container-fluid card text-center">
                {/* Header */}
                <div className="card-header myCardHeader">
                    <div className="row">
                        <div className="col-md-6 text-left mt-2">
                            <button className="btn btn-success" id="btnThem" data-toggle="modal" data-target="#myModal">Thêm khóa học</button>
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
                                <th className="nowrap">Mã khóa học
                                    {/* <span>Tài khoản</span>
                                                <i className="fa fa-arrow-up" id="SapXepTang" />
                                                <i className="fa fa-arrow-down" id="SapXepGiam" /> */}
                                </th>
                                <th>Tên khóa học</th>
                                <th>Hình ảnh</th>
                                <th>Lượt xem</th>
                                <th>Người tạo</th>

                                <th>Thao tác<em className="fa fa-cog ml-3" /></th>
                            </tr>
                        </thead>
                        <tbody id="tableDanhSach" >
                            <tr >
                                <td className="align-middle">1</td>
                                <td className="align-middle">bcdn01</td>
                                <td className="align-middle">Lap trinh FrontEnd</td>
                                <td className="align-middle">Hinh Anh</td>
                                <td className="align-middle">12</td>
                                <td className="align-middle">Nguyễn Ngọc Trang</td>
                                <td>
                                    <button type="button" className="btn btn-success mx-1" >Ghi danh</button>
                                    <button className="btn btn-warning mx-1" >Sửa</button>
                                    <button className="btn btn-danger mx-1" >Xóa</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                {/* Footer */}
                {/* <div className="card-footer myCardFooter">
                                    <nav>
                                        <ul className="pagination justify-content-center" id="ulPhanTrang">
                                        </ul>
                                    </nav>
                                </div> */}


                {/* The Modal */}
                <CourseModal />
            </div>



        )
    }
}
