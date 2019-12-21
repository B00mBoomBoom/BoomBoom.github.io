import React, {useEffect, useRef, useState} from 'react'
import './jobScroll.scss'

const JobScroll = (props) => {
  const jobRef = useRef();
  var [jobInerval] = useState()
  const [topAll] = useState(50*props.data.length)
  const [scrollData] = useState(props.data.concat(props.data.slice(0,5)))
  useEffect(() => {
    mouseOut()
  })
  const claerInter = () => {
    clearInterval(jobInerval)
  }
  const mouseOut = () => {
    jobInerval = setInterval(() => {
      if(Number(jobRef.current.style.top.replace('px','')) < -topAll+50) {
        jobRef.current.style.top = '50px'
      } else {
        jobRef.current.style.top = jobRef.current.style.top.replace('px','') - 1 + 'px'
      }      
    }, 10)
  }
  return(
    <div className="job-scroll">
      <div className="job-header">
        最新职位
        <a className="job-more" href="https://job.alibaba.com/zhaopin/positionList.html?">更多</a>
      </div>
      <ul className="job-list" ref={jobRef} style={{top: '50px'}} onMouseOver={claerInter} onMouseOut={mouseOut}>
        {scrollData.map((item, index) => {
          return(
            <li key={'job-list'+index}>
              <span className="time">{item.applyTimeDesc}</span>
              <span className="city">{item.workLocation}</span>
              <a href={`https://job.alibaba.com/zhaopin/PositionDetail.htm?positionCode=${item.code}`}>{item.name}</a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

// class JobScroll extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       jobScroll:''
//     }
//   }
//   componentDidMount() {
//     console.log(this.refs.jobRef.style.top)
//     this.refs.jobRef.style.top = '-100px'
//     // this.state.jobScroll=setInterval(() => {
//     //   this.refs.jobRef.style.top = this.refs.jobRef.style.top.replace('px','') - 1 + 'px'
//     // }, 100)
//   }
//   render() {
//     console.log(this)
//     return(
//       <div className="job-scroll">
//         <div className="job-header">
//           最新职位
//           <a className="job-more" href="https://job.alibaba.com/zhaopin/positionList.html?">更多</a>
//         </div>
//         <ul className="job-list" ref="jobRef" style={{top: '50px'}}>
//           {this.props.data.map((item, index) => {
//             return(
//               <li >
//                 <span className="time">{item.applyTimeDesc}</span>
//                 <span className="city">{item.workLocation}</span>
//                 <a href={`https://job.alibaba.com/zhaopin/PositionDetail.htm?positionCode=${item.code}`}>{item.name}</a>
//               </li>
//             )
//           })}
//         </ul>
//       </div>
//     )
//   }
// }

export default JobScroll