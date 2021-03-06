import React, { Component } from "react";
import { connect } from "react-redux";
import { Table } from "reactstrap";
import { bindActionCreators } from "redux";
import * as techWarriorsAction from "../../redux/actions/techWarriorsAction";
import Swal from "sweetalert2";
import axios from "axios";
class TechWarriors extends Component {
  removeFromTechWarriors= async(member)=> {
    await axios.delete(`http://localhost:3004/techwarriors/${member.id}`);
    Swal.fire({
      title: "Əminsiniz?",
      text: member.studentName + ' "Tech Warriors" komandasından çıxarılsın ?',
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
          member.studentName + " komandadan kənarlaşdırıldı!",
          "success"
        );
        
        this.props.actions.removeFromTechWarriors(member);
      }

      
    });
    const data={
      ...member,
      chosen: false
    }

    const resp = await axios.put(`http://localhost:3004/students/${member.id}`,data)
  }

  componentDidMount = async () => {
    const response = await axios.get("http://localhost:3004/techwarriors");
    this.props.actions.getTechWarriors(response.data);
  };

  render() {
    return (
      <div className="techWarriorsProject mt-1">
        {this.props.techWarriors.length > 0 ? (
          <Table>
            <thead>
              <tr>
                <th scope="col">Ad,soyad</th>
                <th scope="col">İxtisas</th>
                <th scope="col">Qrup</th>
                <th scope="col">Kurs</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {this.props.techWarriors.map(member => (
                <tr key={member.id}>
                  <td>{member.studentName} </td>
                  <td>{member.specialtyName} </td>
                  <td>{member.groupNumber} </td>
                  <td>{member.educationYear} </td>
                  <td>
                    <i
                      className="fa fa-minus"
                      onClick={() => this.removeFromTechWarriors(member)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          <h2 className="emptyGroup">
            Bu komandada heç bir iştirakçı yoxdur !
          </h2>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    techWarriors: state.techWarriorsReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getTechWarriors: bindActionCreators(
        techWarriorsAction.getTechWarriors,
        dispatch
      ),
      removeFromTechWarriors: bindActionCreators(
        techWarriorsAction.removeFromTechWarriors,
        dispatch
      )
    }
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(TechWarriors);
