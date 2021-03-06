// @flow
import { connect } from 'react-redux'
import * as ui from '../actions/ui'

import ProfileEdit from '../components/ProfileEdit'
import { Store } from '../utils/types'


const mapStateToProps = (state: Store) => ({
  profile: state.profile
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileEdit)
