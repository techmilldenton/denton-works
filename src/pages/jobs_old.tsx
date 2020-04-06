export default () => {}

// import React, { FC } from 'react'

// import Page from '../components/Page'
// import Container from '../components/Container'
// import IndexLayout from '../layouts'
// import { useStaticQuery, graphql } from 'gatsby'

// type Job = {
//   id: string
//   timestamp: string
//   companyname: string
//   address: string
//   websiteurl: string
//   dentonchamberofcommercemember: string
//   emailaddress: string
//   phonenumber: string
//   jobtitle: string
//   jobdescription: string
//   typeofwork: string
//   parent: string
// }

// interface JobQuery {
//   allGoogleJobsSheet: {
//     nodes: Array<Job>
//   }
// }

// const Job: FC<Job> = j => (
//   <div key={j.id}>
//     <p>address: {j.address}</p>
//     <p>companyname: {j.companyname}</p>
//     <p>dentonchamberofcommercemember: {j.dentonchamberofcommercemember}</p>
//     <p>emailaddress: {j.emailaddress}</p>
//     <p>id: {j.id}</p>
//     <p>jobdescription: {j.jobdescription}</p>
//     <p>jobtitle: {j.jobtitle}</p>
//     <p>phonenumber: {j.phonenumber}</p>
//     <p>timestamp: {j.timestamp}</p>
//     <p>typeofwork: {j.typeofwork}</p>
//     <p>websiteurl: {j.websiteurl}</p>
//   </div>
// )

// export default () => {
//   const data: JobQuery = useStaticQuery(graphql`
//     query Jobs {
//       allGoogleJobsSheet {
//         nodes {
//           address
//           companyname
//           dentonchamberofcommercemember
//           emailaddress
//           id
//           jobdescription
//           jobtitle
//           phonenumber
//           timestamp
//           typeofwork
//           websiteurl
//         }
//       }
//     }
//   `)

//   const { nodes } = data.allGoogleJobsSheet

//   return (
//     <IndexLayout>
//       <Page>
//         <h1>Jobs</h1>
//         <Container>{nodes.map(Job)}</Container>
//       </Page>
//     </IndexLayout>
//   )
// }
