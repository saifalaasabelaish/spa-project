import './StaffCards.css'
const StaffCard = (props) => {
  return (
    <>
      <div className="staff col-12 d-flex m-3">
        <img src={props.img} className=" img-fluid six-col rounded-circle" alt={props.alt1}></img>
   <div className=" text-center mt-3">
    <h5 >{props.title}</h5></div><div className=" mt-3">
    <p>{props.paragraph1}</p>
    <div className="text-center">
     {props.children} </div></div></div>
    </>

  )
}

export default StaffCard