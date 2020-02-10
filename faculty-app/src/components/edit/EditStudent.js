import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionTypes from "../../redux/actions/actionTypes";
class EditStudent extends Component {
  handleEdit = e => {
    e.preventDefault();
    const newStudentName = this.getStudentName.value;
    const newSpecialtyName = this.getSpecialtyName.value;
    const newGroupNumber = this.getGroupNumber.value;
    const newEducationYear = this.getEducationYear.value;
    var newSpecialtyId;

    const data = {
      newStudentName,
      newSpecialtyName,
      newSpecialtyId,
      newGroupNumber,
      newEducationYear
    };

    this.props.dispatch({
      type: actionTypes.UPDATE_STUDENT,
      id: this.props.student.id,
      data: data
    });
  };

  handleCancel(student) {
    this.props.dispatch({
      type: actionTypes.CANCEL_EDITING,
      id: this.props.student.id,
      student: student
    });
  }

  render() {
    return (
      <form onSubmit={this.handleEdit} >
        <tr className="row editForm">
          <td className="col-md-3">
            <input
              required
              type="text"
              ref={input => (this.getStudentName = input)}
              defaultValue={this.props.student.studentName}
              placeholder="Ad,soyad"
              className="form-control form-control-sm"
            />
          </td>
          <td className="col-md-3">
            <input
              required
              type="text"
              ref={input => (this.getSpecialtyName = input)}
              defaultValue={this.props.student.specialtyName}
              placeholder="Ixtisas"
              className="form-control form-control-sm"
            />
          </td>
          <td className="col-md-3">
            <input
              required
              type="text"
              ref={input => (this.getGroupNumber = input)}
              defaultValue={this.props.student.groupNumber}
              placeholder="Qrup"
              className="group form-control form-control-sm"
            />
          </td>
          <td className="col-md-1">
            <input
              required
              type="text"
              ref={input => (this.getEducationYear = input)}
              defaultValue={this.props.student.educationYear}
              placeholder="Kurs"
              className="year form-control form-control-sm"
            />
          </td>
          <td className="col-md-2 flex-row d-flex">
            <i
              className="fa fa-window-close"
              onClick={() => this.handleCancel(this.props.student)}
            ></i>
            <button className="editFormSubmit">
              <i className="fa fa-save" />
            </button>
          </td>
        </tr>
      </form>
    );
  }
}

export default connect()(EditStudent);
