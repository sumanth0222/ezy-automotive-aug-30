import React, { useEffect, useState } from "react";
import { Card, Col, Row, Form, Button } from "react-bootstrap";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { Fragment } from "react";
import Pageheader from "../../../layout/layoutcomponent/pageheader";
import Draggable from "react-draggable";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Paper,
} from "@mui/material";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { MultiSelect } from "react-multi-select-component";
import { states } from "../../../common/selectdata";

export function Calendar() {
  let eventGuid = 0;
  let todayStr = new Date().toISOString().replace(/T.*$/, "");
  const INITIAL_EVENTS = [
    {
      id: createEventId(),
      title: "Meeting",
      start: todayStr,
    },
    {
      id: createEventId(),
      title: "Meeting Time",
      start: todayStr + "T16:00:00",
    },
  ];

  function createEventId() {
    return String(eventGuid++);
  }

  const initialstate1 = {
    calendarEvents: [
      {
        title: "Atlanta Monster",
        start: new Date("2019-04-04 00:00"),
        id: "1001",
      },
      {
        title: "My Favorite Murder",
        start: new Date("2019-04-05 00:00"),
        id: "1002",
      },
    ],

    events: [
      {
        title: "My Event 1",
        id: "1",
        bg: "bg-primary",
        border: "border-primary",
      },
      {
        title: "My Event 2",
        id: "2",
        bg: "bg-secondary",
        border: "border-success",
      },
      {
        title: "My Event 3",
        id: "3",
        bg: "bg-warning",
        border: "border-warning",
      },
      { title: "My Event 4", id: "4", bg: "bg-info", border: "border-info" },
      {
        title: "My Event 5",
        id: "5",
        bg: "bg-success",
        border: "border-success",
      },
      {
        title: "My Event 6",
        id: "6",
        bg: "bg-danger",
        border: "border-danger",
      },
    ],
  };

  const [state] = useState(initialstate1);

  useEffect(() => {
    let draggableEl = document.getElementById("external-events");
    if (draggableEl) {
      new Draggable(draggableEl, {
        itemSelector: ".fc-event",
        eventData: function (eventEl) {
          let title = eventEl.getAttribute("title");
          let id = eventEl.getAttribute("data");
          let classValue = eventEl.getAttribute("class");
          return {
            title: title,
            id: id,
            className: classValue,
          };
        },
      });
    }
  }, []);

  function renderEventContent(eventInfo) {
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </>
    );
  }

  const handleEventClick = (clickInfo) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${clickInfo.event.title}'`
      )
    ) {
      clickInfo.event.remove();
    }
  };

  const handleEvents = (events) => {};

  const handleDateSelect = (selectInfo) => {
    let title = prompt("Please enter a new title for your event");
    let calendarApi = selectInfo.view.calendar;

    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      });
    }
  };

  function PaperComponent(props) {
    return (
      <Draggable
        handle="#draggable-dialog-title"
        cancel={'[class*="MuiDialogContent-root"]'}
      >
        <Paper {...props} />
      </Draggable>
    );
  }
  const [open1, setOpen1] = useState(false);

  const handleClickOpen2 = () => {
    setOpen1(true);
  };
  
  const handleClosedraggable = () => {
    setOpen1(false);
  };

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const [filter, setFilter] = useState("");

  // Filtering based on search term
  const filterData = (data, field) =>
    data.filter((item) =>
      item[field].toLowerCase().includes(filter.toLowerCase())
    );

    const [selected, setSelected] = useState([]);

  return (
    <Fragment>
      <Pageheader title="Loan Cars" heading="Loan Cars" active="Loan Cars Dairy" />
      <div className="pd-b-0  main-content-calendar pt-0">
        <Row>
          <Col md={12}>
            <Card>
            <Card.Header
              className="row-sm row justify-content-between bg-primary" style={{paddingBottom:"6px"}}>
              <div className="row-sm row">
                <div>
                  <a
                    className="btn ripple btn-dark text-white btn-icon mt-2"
                    data-placement="top"
                    data-bs-toggle="tooltip"
                    title=""
                    href="#"
                  >
                    <i className="fa fa-calendar"></i>
                  </a>
                </div>
                <div>
                  <h3 className="mt-2">Loan Car Schedule</h3>
                </div>
              </div>

              <div className="row-sm row">
               

              <div class="col-lg-3">
                            
                            <div class="input-group input-group">
                   

                              <div class="">
                                {/* <label class=""> */}

                                  <i className=" fa fa-star btn ripple btn-dark text-white btn-icon"
                                    href="#modaldemo8"
                                    variant="primary"
                                    title="Create Loan"
                                    onClick={handleClickOpen2}
                                  ></i>

                                  <Dialog
                                    open={open1}
                                    onClose={handleClosedraggable}
                                    PaperComponent={PaperComponent}
                                    aria-labelledby="draggable-dialog-title"
                                  >
                                    <DialogTitle style={{ cursor: "move", backgroundColor:"#38cab3" }} id="draggable-dialog-title">
                                      Create Loan Car Booking
                                    </DialogTitle>
                                    <DialogContent >
                                      <DialogContentText className='row-sm row'>

                                      <div className="col-lg-4">
                                        <label className="form-label" htmlFor="validationCustom05">Search Customer</label>
                                          <input
                                            autoComplete="off"
                                            placeholder="Choose a Customer"
                                            type="search"
                                            className="form-control"
                                            value={filter}
                                            onChange={(e) => setFilter(e.target.value)}
                                          />
                                        </div>

                                        <div className="col-lg-4">
                                        <label className="form-label" htmlFor="validationCustom05">Search Bookings</label>
                                          <input
                                            autoComplete="off"
                                            placeholder="Choose a Bookings"
                                            type="search"
                                            className="form-control"
                                            value={filter}
                                            onChange={(e) => setFilter(e.target.value)}
                                          />
                                        </div>

                                        <div className="col-lg-4">
                                        <label className="form-label" htmlFor="validationCustom05">Search Invoices</label>
                                          <input
                                            autoComplete="off"
                                            placeholder="Choose a Invoices"
                                            type="search"
                                            className="form-control"
                                            value={filter}
                                            onChange={(e) => setFilter(e.target.value)}
                                          />
                                        </div>

                                        
                                        <div className="col-lg-4">
                                          <label className="form-label" htmlFor="validationCustom05">First Name</label>
                                          <input className="form-control" id="validationCustom05" type="text" required />
                                        </div>

                                        <div className="col-lg-4">
                                          <label className="form-label" htmlFor="validationCustom05">Last Name</label>
                                          <input className="form-control" id="validationCustom05" type="text" required />
                                        </div>

                                        <div className="col-lg-4 ">
                                          <Form.Label>Loan Date</Form.Label>
                                          <div className="input-group">
                                            
                                            <DatePicker
                                              selected={startDate}
                                              onChange={(date) => setStartDate(date)}
                                              className="form-control"
                                              placeholderText="Select Date"
                                            />
                                          </div>
                                        </div>
                                        
                                        <div className="col-lg-6">
                                          <label className="form-label" htmlFor="validationCustom05">Address 1</label>
                                          <input className="form-control" id="validationCustom05" type="text" required />
                                        </div>

                                
                                        <div className="col-lg-6">
                                          <label className="form-label" htmlFor="validationCustom05">Address 2</label>
                                          <input className="form-control" id="validationCustom05" type="text" required />
                                        </div>
                                        <div className="col-lg-4">
                                          <label className="form-label" htmlFor="validationCustom05">City</label>
                                          <input className="form-control" id="validationCustom05" type="text" required />
                                        </div>
                                        
                                        <div className="col-lg-4">
                                          <label className="form-label" htmlFor="validationCustom05">States</label>
                                          <MultiSelect
                                            value={selected}
                                            onChange={setSelected}
                                            labelledBy="Select"
                                            options={states}
                                          />
                                        </div>

                                        <div className="col-lg-4">
                                          <label className="form-label" htmlFor="validationCustom05">Zip Code</label>
                                          <input className="form-control" id="validationCustom05" type="text" required />
                                        </div>

                                        <div className="col-lg-4">
                                          <label className="form-label" htmlFor="validationCustom05">Phone Number</label>
                                          <input className="form-control" id="validationCustom05" type="text" required />
                                        </div>

                                        <div className="col-lg-4">
                                          <label className="form-label" htmlFor="validationCustom05">Cell</label>
                                          <input className="form-control" id="validationCustom05" type="text" required />
                                        </div>

                                        <div className="col-lg-4">
                                          <label className="form-label" htmlFor="validationCustom05">Email</label>
                                          <input className="form-control" id="validationCustom05" type="text" required />
                                        </div>

                                        {/* Start Date Field */}
                                        <div className="col-lg-6">
                                          <Form.Label>Start Date</Form.Label>
                                          <div className="input-group">
                                            <span className="input-group-text">
                                              <i className="typcn typcn-calendar-outline tx-24 lh--9 op-6"></i>
                                            </span>
                                            <DatePicker
                                              selected={startDate}
                                              onChange={(date) => setStartDate(date)}
                                              className="form-control"
                                              placeholderText="Select Start Date"
                                            />
                                          </div>
                                        </div>
                                        {/* End Date Field */}
                                        <div className="col-lg-6">
                                          <Form.Label>Start Time</Form.Label>
                                          <div className="input-group">
                                            <span className="input-group-text">
                                              <i className="typcn typcn-calendar-outline tx-24 lh--9 op-6"></i>
                                            </span>
                                            <DatePicker
                                              selected={endDate}
                                              onChange={(date) => setEndDate(date)}
                                              className="form-control"
                                              placeholderText="Select End Date"
                                            />
                                          </div>
                                        </div>

                                        {/* Start Date Field */}
                                        <div className="col-lg-6">
                                          <Form.Label>Return Date</Form.Label>
                                          <div className="input-group">
                                            <span className="input-group-text">
                                              <i className="typcn typcn-calendar-outline tx-24 lh--9 op-6"></i>
                                            </span>
                                            <DatePicker
                                              selected={startDate}
                                              onChange={(date) => setStartDate(date)}
                                              className="form-control"
                                              placeholderText="Select Start Date"
                                            />
                                          </div>
                                        </div>
                                        {/* End Date Field */}
                                        <div className="col-lg-6">
                                          <Form.Label>Return Time</Form.Label>
                                          <div className="input-group">
                                            <span className="input-group-text">
                                              <i className="typcn typcn-calendar-outline tx-24 lh--9 op-6"></i>
                                            </span>
                                            <DatePicker
                                              selected={endDate}
                                              onChange={(date) => setEndDate(date)}
                                              className="form-control"
                                              placeholderText="Select End Date"
                                            />
                                          </div>
                                        </div>
                                      </DialogContentText>
                                    </DialogContent>
                                    <DialogActions>
                                      <Button variant="secondary" className="me-1" onClick={handleClosedraggable}>
                                        Cancel
                                      </Button>
                                      <Button onClick={handleClosedraggable} className="me-1" variant="success">
                                        Create
                                      </Button>
                                    </DialogActions>
                                  </Dialog>
                                {/* </label> */}
                              </div>
                            </div>

                          </div>

              </div>
              
            </Card.Header>
              <Card.Body>
                <Row>
                  {/* Commented Draggable Events */}
                  {/* 
                  <Col md={12} sm={12} lg={3}>
                    <div id="external-events">
                      <h4>Draggable Events</h4>
                      {state.events.map((event) => (
                        <div
                          className={`fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event ${event.bg} ${event.border}`}
                          title={event.title}
                          data={event.id}
                          key={event.id}
                        >
                          <div className="fc-event-main">{event.title}</div>
                        </div>
                      ))}
                    </div>
                  </Col> 
                  */}
                  <Col md={12} lg={12}>
                    <div id="calendar2">
                      <FullCalendar
                        plugins={[
                          dayGridPlugin,
                          timeGridPlugin,
                          interactionPlugin,
                        ]}
                        headerToolbar={{
                          left: "prev,next today",
                          center: "title",
                          right: "dayGridMonth,timeGridWeek,timeGridDay",
                        }}
                        initialView="dayGridMonth"
                        editable={true}
                        selectable={true}
                        selectMirror={true}
                        dayMaxEvents={true}
                        weekends={state.weekendsVisible}
                        initialEvents={INITIAL_EVENTS}
                        select={handleDateSelect}
                        eventContent={renderEventContent}
                        eventClick={handleEventClick}
                        eventsSet={handleEvents}
                      />
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </Fragment>
  );
}

Calendar.propTypes = {};

Calendar.defaultProps = {};

export default Calendar;
