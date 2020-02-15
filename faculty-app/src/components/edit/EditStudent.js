import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionTypes from "../../redux/actions/actionTypes";
import axios from "axios";
class EditStudent extends Component {
  handleEdit = async e => {
    e.preventDefault();
    const studentName = this.getStudentName.value;
    const specialtyName = this.getSpecialtyName.value;
    const groupNumber = this.getGroupNumber.value;
    const educationYear = this.getEducationYear.value;
    var specialtyId;
    switch (specialtyName) {
      case "Kompüter elmləri":
        specialtyId = 1;
        break;
      case "Sistem mühəndisliyi":
        specialtyId = 2;
        break;
      case "Texnologiya mühəndisliyi":
        specialtyId = 3;
        break;
      case "Kompüter mühəndisliyi":
        specialtyId = 4;
        break;
      default:
        break;
    }

    const data = {
      studentName,
      specialtyName,
      specialtyId,
      groupNumber,
      educationYear
    };

    const response = await axios.put(
      `http://localhost:3004/students/${this.props.student.id}`,
      data
    );
    this.props.dispatch({
      type: actionTypes.UPDATE_STUDENT,
      data: response.data,
      id: this.props.student.id
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
      <form onSubmit={this.handleEdit}>
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
