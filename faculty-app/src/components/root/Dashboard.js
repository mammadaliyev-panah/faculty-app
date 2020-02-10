import React, { Component } from "react";
import SpecialtyList from "../specialties/SpecialtyList";
import StudentList from "../students/StudentList";
class Dashboard extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-3">
          <SpecialtyList />
        </div>
        <div className="col-md-9">
          <StudentList />
        </div>
      </div>
    );
  }
}
export default Dashboard;
