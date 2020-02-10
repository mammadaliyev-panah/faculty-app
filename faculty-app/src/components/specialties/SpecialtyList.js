import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as specialtyActions from "../../redux/actions/specialtyAction";
import * as studentAction from "../../redux/actions/studentAction";
class SpecialtyList extends Component {
  componentDidMount() {
    this.props.actions.getSpecialties();
  }

  selectedSpecialty = specialtyItem => {
    this.props.actions.lookSpecialty(specialtyItem.specialtyName);
    this.props.actions.getStudents(specialtyItem.id);
  };
  render() {
    return (
      <div className="specialties">
        <h4>
          <span className="badge">Ixtisaslar </span>
        </h4>
        <ListGroup>
          {this.props.specialties.map(specialtyItem => (
            <ListGroupItem
              className="ListGroupItem"
              key={specialtyItem.id}
              tag="button"
              onClick={() => this.selectedSpecialty(specialtyItem)}
              active={
                specialtyItem.specialtyName === this.props.currentSpecialty
                  ? true
                  : false
              }
            >
              {specialtyItem.specialtyName}
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getSpecialties: bindActionCreators(
        specialtyActions.getSpecialties,
        dispatch
      ),
      lookSpecialty: bindActionCreators(
        specialtyActions.lookSpecialty,
        dispatch
      ),
      getStudents: bindActionCreators(studentAction.getStudents, dispatch)
    }
  };
}

function mapStateToProps(state) {
  return {
    specialties: state.getSpecialtiesReducer,
    currentSpecialty: state.lookSpecialtyReducer,
    students: state.getStudentsReducer
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SpecialtyList);
