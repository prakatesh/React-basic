import React from 'react'
import { useSearchParams,Link} from 'react-router-dom'

function User() {
    const [search,setsearch]=useSearchParams()
    const filter=search.get('filter')==="active"
  return (
    <div>
      <h1>User1</h1>
      <h1>User2</h1>
      <h1>User3</h1>
      <Link to='/users/:userid'>UserId</Link>
      <button onClick={()=>setsearch({filter:"active"})} >Active</button>
      <button onClick={()=>setsearch({})} >All users</button>
      {filter?"Active user":"All user"}
    </div>
  )
}

export default User
