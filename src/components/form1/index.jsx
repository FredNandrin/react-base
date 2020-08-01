import React from 'react'
import {connect} from 'react-redux'
import axios from 'axios';

import {fetchDataError, fetchDataPending, setEligibility, fetchDefaultDataSuccess,updateFieldAction,sendFormAction} from './actions';

class Form extends React.Component {
    componentDidMount() {
        isCustomerEligible(this.props)
    }

    render() {
        if (!this.props.isPending) {

            return (
                <div>
                    form here : {this.props.msg}
                    <form onSubmit={submitForm.bind(this)}>
                        <input type={"text"} name="field1" onChange={updateField.bind(this)} value={this.props.field1}/>
                        <input type={"submit"} />
                    </form>
                </div>
            )
        } else {
            return (
                <div className={"col-12 my-5 text-center spin-default"}>
                    <p><i className="fas fa-spinner fa-pulse"></i></p>
                </div>
            )
        }
    }
}

function updateField(props) {
    this.props.updateFieldAction(props.target.name,props.target.value);
}
function submitForm(event) {
    event.preventDefault();
    this.props.sendForm(this);
}
function isCustomerEligible(props) {
    props.dataPending(true)
    axios.get('http://localhost:8080/api/eligibility' )
        .then(res => {
            props.getEligibility(res.data)
            dataFetching(props)
        })
        .catch(errors => {
            props.getEligibility(false)
            console.log(errors)
        })
}

function dataFetching(props) {
    axios.get('http://localhost:8080/api/offer_data' )
        .then(res => {
            props.defaultDataSuccess(res.data)
            props.dataPending(false)
        })
        .catch(errors => {
            props.dataError(errors.response.statusText)
            props.dataPending(false)
        })
}

const mapStateToProps = (state) => {
    return {
        isPending: state.data.pending,
        msg: state.data.msg,
        field1: state.data.form1.field1,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getEligibility: (isEligible) => dispatch(setEligibility(isEligible)),
        dataPending: (t) => {
            dispatch(fetchDataPending(t))
        },
        defaultDataSuccess: (data) => {
            dispatch(fetchDefaultDataSuccess(data))
        },
        dataError: (error) => {
            dispatch(fetchDataError(error))
        },
        updateFieldAction: (name,value) => {
            dispatch(updateFieldAction({name,value}))
        },
        sendForm: (t) => {
            console.log(t.props.field1)
            const data = {
                field1:t.props.field1
            }
            axios.post('http://localhost:8080/api/send_data',data )
                .then(res => {
                })
                .catch(errors => {

                })
        }
    }
}

const FormContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Form)

export default FormContainer