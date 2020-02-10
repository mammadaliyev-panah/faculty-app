import React, { Component } from "react";
import { Badge, Button } from "reactstrap";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as studentAction from "../../redux/actions/studentAction";
import uniqid from "uniqid";
import studentPic from "../../image/students.jpeg";

import Swal from "sweetalert2";
class NewStudentForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const studentName = this.getStudentName.value;
    const specialtyName = this.getSpecialtyName.value;
    const groupNumber = this.getGroupNumber.value;
    const educationYear = this.getEducationYear.value;
    var specialtyId;

    const data = {
      id: uniqid(),
      studentName,
      specialtyName,
      specialtyId,
      groupNumber,
      educationYear,
      editing: false,
      chosen: false
    };

    this.props.actions.addNewStudent(data);
    Swal.fire({
      position: "center",
      icon: "success",
      title: data.studentName + " siyahıya əlavə olundu",
      showConfirmButton: false,
      timer: 1500
    });
    
    this.getStudentName.value = "";
    this.getSpecialtyName.value = "";
    this.getGroupNumber.value = "";
    this.getEducationYear.value = "";
  };

  render() {
    return (
      <div className="row newStudent mt-1">
        <div className="col-md-6">
          <h4>
            <Badge className="Badge">Yeni tələbənin məlumatları</Badge>
          </h4>
          <form className="container" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>Ad,soyad</label>
              <input
                className="form-control"
                type="text"
                name="studentName"
                placeholder="Ad,soyad"
                ref={input => (this.getStudentName = input)}
              />
            </div>

            <div className="form-group">
              <label>Ixtisas</label>
              <select
                className="form-control"
                type="text"
                name="specialtyName"
                ref={input => (this.getSpecialtyName = input)}
              >
                <option disabled selected hidden className="placeholder">
                  Ixtisas
                </option>
                <option>Kompüter elmləri</option>
                <option>Sistem mühəndisliyi</option>
                <option>Texnologiya mühəndisliyi</option>
                <option>Kompüter mehəndisliyi</option>
              </select>
            </div>

            <div className="form-group">
              <label>Qrup</label>
              <input
                className="form-control"
                type="text"
                name="groupNumber"
                placeholder="Qrup"
                ref={input => (this.getGroupNumber = input)}
              />
            </div>

            <div className="form-group">
              <label>Kurs</label>
              <select
                className="form-control"
                type="text"
                name="educationYear"
                ref={input => (this.getEducationYear = input)}
              >
                <option disabled selected hidden className="placeholder">
                  Kurs
                </option>
                <option>I</option>
                <option>II</option>
                <option>III</option>
                <option>IV</option>
              </select>
            </div>

            <Button color="success" type="submit" className="submitButton">
              Əlavə et
            </Button>
          </form>
        </div>
        <div className="col-md-6 studentPic">
          <img src={studentPic} alt="newStudent"/>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    newStudents: state.newStudentReducer
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      addNewStudent: bindActionCreators(studentAction.addNewStudent, dispatch)
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewStudentForm);
