import React from "react";
import {bindActionCreators} from 'redux/index';
import {connect} from 'react-redux';
import {changeFirstName, changeSecondName} from '../store/actions';

class MainComponent extends React.Component {
    render() {
        const {firstName, secondName, changeFirstName, changeSecondName} = this.props;

        return <div>
            <div>
                <input
                    type="text"
                    value={firstName}
                    placeholder="First Name"
                    onChange={(event) => {
                        changeFirstName(event.target.value);
                    }}
                />
            </div>

            <div>
                <input
                    type="text"
                    value={secondName}
                    placeholder="Second Name"
                    onChange={(event) => {
                        changeSecondName(event.target.value);
                    }}
                />
            </div>

            <div>
                {'${firstName} ${secondName}'}
            </div>
        </div>;
    }
}

const putStateToProps = (state) => {
    return {
        firstName: state.firstName,
        secondName: state.secondName
    };
};

const putActionsToProps = (dispatch) => {
    return {
        changeFirstName: bindActionCreators(changeFirstName, dispatch),
        changeSecondName: bindActionCreators(changeSecondName, dispatch)
    };
};

export default connect(putStateToProps, putActionsToProps)(MainComponent);