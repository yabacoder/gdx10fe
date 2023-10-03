import React from 'react';
import Education from "./education";
import Work from "./work";
import Portfolio from "./portfolio";
import Layout from "../../statics/layout";

class Resume extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            education:false,
            portfolio:false,
            work:false,
        }
    }
    componentDidMount(){
        window.scroll(0,0);
    }
    render() {
        const state = this.state;
        return (
            <Layout>
                {/*<section className="overlape">
                    <div className="block no-padding">
                        <div data-velocity="-.1" style={{background: "url('../../images/head_bg.jpg') repeat scroll 50% 422.28px transparent"}} className="parallax scrolly-invisible layer color light"></div>
                        <div className="container fluid">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="inner-header">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>*/}
                <section>
                    <div className="block gray">
                        <div className="container w3-white" style={{maxWidth:750}}>
                            <div className="w3-margin">
                                <h3>Resume</h3>
                            </div>

                            <div className="row no-gape">
                                <div className="col-lg-12 column">
                                    <div className="page-inner resumeadd-form">
                                        <div className="manage-jobs-sec">
                                            <div><button onClick={()=>{this.setState({education:!state.education})}} className="w3-block w3-hover-red w3-white">Add Education</button></div>
                                            {state.education?<Education/>:""}
                                            <div><button onClick={()=>{this.setState({portfolio:!state.portfolio})}} className="w3-block w3-hover-red w3-white">Add Work Experience</button></div>
                                            {state.portfolio?<Work/>:""}
                                            <div><button onClick={()=>{this.setState({work:!state.work})}} className="w3-block w3-hover-red w3-white">Add Portfolio</button></div>
                                            {state.work?<Portfolio/>:""}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        );
    }
}

export default Resume;