import React from 'react';

class Skill extends React.Component {
    render() {
        return (
            <div>
                <div className="border-title"><h3>Professional Skills</h3></div>
                <div className="resumeadd-form">
                    <div className="row">
                        <div className="col-lg-12">
                            <span className="pf-title">Technology</span>
                            <div className="pf-field">
                                <input placeholder="" type="text"/>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <button type="submit">Add</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Skill;