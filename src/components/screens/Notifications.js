import React from 'react'

function Notifications(){

  var notifications=JSON.parse(sessionStorage.getItem("user"));
var noti=notifications['notifications'];
console.log("notification data",noti);
    return (
      <>
      <div className=" d-flex justify-content-between p-1">
                <div className="d-flex"><input class ="m-1 "type="checkbox" name="priti"id="push_checkAll"/>  Select All</div>
                <div>Total Notifications:2</div>
                <div>Selected Notifications:2</div>
                <div ><a href="#"  style={{"color":"red","font-weight":"bolder"}}>Delete Selected</a></div>
      </div>
      <div className="row p-4">
      <div className="bg-white border rounded-border " style={{"border-radius":"25px"}}>
<ol className='p-2' >
{noti.map((user) => (
  <li className='p-1 w-100'><div className="d-flex justify-content-between"><span><span className=" m-2 rounded-circle" >  <input type="checkbox" name="push_notifications" value="push_specialOffers" /></span>{user.title}[{user.Time}]


  </span> <span><i className="fa fa-trash " style={{"padding-left":"1.5rem"}} aria-hidden="true"></i></span></div>
  <div className='d-flex justify-content-start'style={{"padding-left":"1.5rem"}}><a style={{"color":"#50aeda"}}>{user.text}</a></div>
  <hr />
  </li>
))}

             
            </ol>
</div>

      </div>
      </>
    )
}
export default Notifications