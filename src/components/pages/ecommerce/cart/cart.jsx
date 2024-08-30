import React, { useState, Fragment } from "react";
import { Card, Col, Button } from "react-bootstrap";
import { CForm } from "@coreui/react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import Draggable from "react-draggable";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Paper,
} from "@mui/material";
import Pageheader from "../../../../layout/layoutcomponent/pageheader";

const Cart = () => {
  const [Server, setServer] = useState("");
  const navigate = useNavigate();

  const handleOnchangeServer = () => {
    setServer(Server);
  };

  function PaperComponent(props) {
    return (
      <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
        <Paper {...props} />
      </Draggable>
    );
  }
  
  const [open1, setOpen1] = useState(false);

  const handleClickOpen1 = () => {
    setOpen1(true);
  };

  const handleClosedraggable = () => {
    setOpen1(false);
  };

  // Custom validation
  const [Custom, setCustom] = useState("");
  const handleOnchangeCustom = () => {
    setCustom(Custom);
  };
  
  const [validatedCustom, setValidatedCustom] = useState(false);
  
  const handleSubmitCustom = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidatedCustom(true);
  };

  const ordersData = [
    { name: "Edit Me Mechanic 1", cell: "", options: "" },
    { name: "Edit Me Mechanic 2", cell: "", options: "" },
    { name: "Edit Me Mechanic 3", cell: "", options: "" },
  ];

  const [filter, setFilter] = useState(""); // Search filter state
  const [isActive, setIsActive] = useState(false); // State for toggle button

  // Toggle button handler
  const toggleActiveState = () => {
    setIsActive(!isActive);
  };

  // Filtering based on search term
  const filterData = (data, field) =>
    data.filter((item) => item[field].toLowerCase().includes(filter.toLowerCase()));

  const handleEditClick = (itemCode) => {
    // Navigate to the edit page with the itemCode
    navigate(`${import.meta.env.BASE_URL}pages/settings`);
  };

  const handlePlusClick = () => {
    navigate("/advancedui/modals"); // Navigate to the form page
  };
  return (
   

     <Fragment>
           <Pageheader title="Service Advisors"  heading="Ecommerce"   active="Service Advisors" />
     <div className="row mt-5">
       <Col lg={12} md={12}>
         <Card>
           <Card.Header
             className="row-sm row justify-content-between"
             style={{ backgroundColor: "#41bde1" }}
           >
             <div className="row-sm row">
               <div>
                 <a
                   className="btn ripple btn-dark text-white btn-icon"
                   data-placement="top"
                   data-bs-toggle="tooltip"
                   title=""
                   href="#"
                 >
                   <i className="fa fa-user"></i>
                 </a>
               </div>
               <div>
                 <h3 className="">Service Advisors</h3>
               </div>
             </div>

             <div className="row-sm row">
               


               <div>
                 <a
                   className="btn ripple btn-success text-white btn-icon"
                   data-placement="top"
                   data-bs-toggle="tooltip"
                   title="Add File"
                   href="#"
                 >
                   <button
                     className="btn btn-sm btn-primary"
                     onClick={handlePlusClick}
                   >
                     <li className="fa fa-plus"></li>
                   </button>
                 </a>
               </div>
             </div>
           </Card.Header>
           <Card.Body>
             
               <div className="d-flex justify-content-center align-items-center">
                 <h5>No Advisors Found.</h5>
               </div>
            
           </Card.Body>
         </Card>
       </Col>
     </div>

   </Fragment>
  );
}

Cart.propTypes = {};

Cart.defaultProps = {};

export default Cart;
