import './StaffCards.css'
const StaffCard = (props) => {
  return (
    <>
      <div className="staff col-12 d-flex ">
        <div className='staffhome'> <img src={props.img} className="img-top img-fluid six-col rounded-circle mx-2" alt={props.alt1}/>
          <div className="titleStaff text-center mt-3">
            <h5 >{props.title}</h5><p>{props.paragraph1}</p> {props.children} </div></div></div>
    </>

  )
}

export default StaffCard