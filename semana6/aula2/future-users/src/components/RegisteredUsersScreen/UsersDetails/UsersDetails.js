import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import axios from 'axios'
import { async } from 'q'

const UsersDetailsReturnBtn = styled.button``
const eachUserDetails = styled.div``
const UsersListDelete = styled.div``
const UserDetails = styled.div``

export default class UsersDetails extends Component {
  constructor(props) {
    super(props)
  }

  onClickReturnBtn = () => {
    this.props.toggleRegisteredUsersVisibility();
    this.props.toggleUsersDetailsVisibility();
  }

  render() {

       
    return (
      <div>
        <UserDetails></UserDetails>
        <UsersDetailsReturnBtn onClick={this.onClickReturnBtn}>Voltar</UsersDetailsReturnBtn>
      </div>
    )
  }
}
