import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as specialtyAction from "../../redux/actions/specialtyAction";
import * as studentAction from "../../redux/actions/studentAction";
import * as techWarriorsAction from "../../redux/actions/techWarriorsAction";
import EditStudent from "../edit/EditStudent";
import Swal from "sweetalert2";
class StudentList extends Component {
  componentDidMount() {
    this.props.actions.getStudents();
  }

  addToTechWarriors(student) {
    this.props.actions.addToTechWarriors(student);
    Swal.fire({
      position: "center",
      icon: "success",
      title: student.studentName + " komandaya əlavə edildi !",
      showConfirmButton: false,
      timer: 1500
    });
  }
  removeFromTechWarriors(student) {
    Swal.fire({
      title: "Əminsiniz?",
      text: student.studentName + ' "Tech Warriors" komandasından çıxarılsın ?',
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "green",
      cancelButtonColor: "red",
      confirmButtonText: "Bəli",
      cancelButtonText: "Xeyr"
    }).then(result => {
      if (result.value) {
        Swal.fire(
          "Çıxarıldı",
          student.studentName + " komandadan kənarlaşdırıldı!",
          "success"
        );

        this.props.actions.removeFromTechWarriors(student);
      }
    });
  }

  deleteStudent(student){
    Swal.fire({
      title: "Əminsiniz?",
      text: student.studentName + ' siyahıdan silinsin?',
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "green",
      cancelButtonColor: "red",
      confirmButtonText: "Bəli",
      cancelButtonText: "Xeyr"
    }).then(result => {
      if (result.value) {
        Swal.fire(
          "Silindi",
          student.studentName + " siyahıdan çıxarıldı",
          "success"
        );

        this.props.actions.deleteStudent(student);
      }
    });
  }
  render() {
    return (
      <div className="students">
        <h4>
          <span className="badge">{this.props.currentSpecialty} </span>
        </h4>
        <table className="table">
          <thead>
            {/* <div> */}
              <tr className="row">
                <th className="col-md-3">Ad,soyad</th>
                <th className="col-md-4">İxtisas</th>
                <th className="col-md-2">Qrup</th>
                <th className="col-md-1">Kurs</th>
                <th className="col-md-2"></th>
              </tr>
            {/* </div> */}
          </thead>
          <tbody>
            {this.props.students.map(student => (
              <div key={student.id}>
                {student.editing ? (
                  <EditStudent student={student} key={student.id} />
                ) : (
                  <tr key={student.id} className="row">
                    <td className="col-md-3">{student.studentName}</td>
                    <td className="col-md-4">{student.specialtyName} </td>
                    <td className="col-md-2">{student.groupNumber} </td>
                    <td className="col-md-1">{student.educationYear} </td>
                    <td className="col-md-2">
                      <i
                        className="fa fa-edit"
                        onClick={() => this.props.actions.editStudent(student)}
                      ></i>
                      {student.chosen ? (
                        <i
                          className="fa fa-minus"
                          onClick={() => this.removeFromTechWarriors(student)}
                        ></i>
                      ) : (
                        <i
                          className="fa fa-plus"
                          onClick={() => this.addToTechWarriors(student)}
                        ></i>
                      )}
                      <i
                        className="fa fa-trash"
                        onClick={() =>
                          this.deleteStudent(student)
                        }
                      />
                    </td>
                  </tr>
                )}
              </div>
            ))}

            {this.props.newStudents.map(newStudent => (
              <div>
                {newStudent.editing ? (
                  <EditStudent student={newStudent} />
                ) : (
                  <tr key={newStudent.id} className="row">
                    <td className="col-md-3">{newStudent.studentName}</td>
                    <td className="col-md-4">{newStudent.specialtyName} </td>
                    <td className="col-md-2">{newStudent.groupNumber} </td>
                    <td className="col-md-1">{newStudent.educationYear} </td>
                    <td className="col-md-2">
                      <i
                        className="fa fa-edit"
                        onClick={() =>
                          this.props.actions.editStudent(newStudent)
                        }
                      ></i>
                      {newStudent.chosen ? (
                        <i
                          className="fa fa-minus"
                          onClick={() =>
                            this.removeFromTechWarriors(newStudent)
                          }
                        ></i>
                      ) : (
                        <i
                          className="fa fa-plus"
                          onClick={() => this.addToTechWarriors(newStudent)}
                        ></i>
                      )}
                      <i
                        className="fa fa-trash"
                        onClick={() =>
                          this.deleteStudent(newStudent)
                        }
                      />
                    </td>
                  </tr>
                )}
              </div>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      lookSpecialty: bindActionCreators(
        specialtyAction.lookSpecialty,
        dispatch
      ),
      getStudents: bindActionCreators(studentAction.getStudents, dispatch),
      addToTechWarriors: bindActionCreators(
        techWarriorsAction.addToTechWarriors,
        dispatch
      ),
      removeFromTechWarriors: bindActionCreators(
        techWarriorsAction.removeFromTechWarriors,
        dispatch
      ),
      deleteStudent: bindActionCreators(studentAction.deleteStudent, dispatch),
      editStudent: bindActionCreators(studentAction.editStudent, dispatch)
      // editStudent: bindActionCreators(studentAction.editStudent, dispatch)
    }
  };
}

function mapStateToProps(state) {
  return {
    currentSpecialty: state.lookSpecialtyReducer,
    students: state.getStudentsReducer,
    newStudents: state.newStudentReducer
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentList);
