import { SubmissionError } from 'redux-form'
import Store from './Store.Store';
import myReduxForm from 'myReduxForm';
import {actions} from './Store/actions';
import { connect } from 'react-redux';


const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

function submit(values) {
  return sleep(1000).then(() => {
    // simulate server latency
    if (!['miriam', 'chava', 'avital', 'chani'].includes(values.username)) {
      throw new SubmissionError({
        username: 'User does not exist',
        _error: 'Login failed!'
      })
    } else if (values.password !== 'hello') {
      throw new SubmissionError({
        password: 'Wrong password',
        _error: 'Login failed!'
      })
    } else if (toString(values.mobile).length !==9){
        throw new SubmissionError({
            mobile:'Wrong mobile',
            _error: 'Login failed'
        })
    } else {
      window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)
    }
  })
}

export default submit