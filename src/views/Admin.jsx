import React, { useEffect, useCallback} from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import * as adminActions from '../store/admin/admin.actions'

import SetSongDb from '../components/admin/SetSongDb'
import PendingSongs from '../components/admin/PendingSongs'


const Admin = ({
  userData,
  getPendingSongsFromDb
}) => {

  const setupAdmin = useCallback(async () => {
    await getPendingSongsFromDb()
  }, [getPendingSongsFromDb])

  useEffect(() => {
    setupAdmin()
  }, [setupAdmin])

  return (
    <AdminContainer>
      <SetSongDb />
      <PendingSongs getSongs = { getPendingSongsFromDb } />
    </AdminContainer>
  )
}

export default connect(st => ({
  userData: st.userData
}),{
  getPendingSongsFromDb: adminActions.getPendingSongsFromDb
}) (Admin)


const AdminContainer = styled.div`
  width: 100%;
  background: ${pr => pr.theme.colors.black};
  height: 100vh;
  color: white;


`