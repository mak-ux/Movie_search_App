import React from 'react'
import styled from 'styled-components'
const Dashboard = () => {
    return (
        <AddArticleContainer>

        <div className="container">
            <h1>  WELCOME </h1>
        </div>
        <div className="container">
            <p>Login And Search For Your Favourite Movie </p>
       </div>
      </AddArticleContainer>
      
    )
}

export default Dashboard
const AddArticleContainer=styled.div`
margin:4rem auto;
padding:4rem;
width:31.25rem;
h1{
    font-weight:900;
    color:var(--dark-green);
}
p{
    font-weight:700;
}
`;