import React from 'react';
import { Calendar,momentLocalizer, Views } from 'react-big-calendar';
import moment from 'moment';
import * as dates from './dates';
import 'react-big-calendar/lib/sass/styles.scss';
import { monthlyEvents } from './constants';
import NewIntervalModal from '../common/Modal/NewIntervalModal';
import EventModalForm from '../common/Modal/EventModalForm';
// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
import './styles.css'
const localizer = momentLocalizer(moment) // or globalizeLocalizer
let allViews = Object.keys(Views).map(k => Views[k])
const ColoredDateCellWrapper = ({ children }) =>
  React.cloneElement(React.Children.only(children), {
    style: {
      backgroundColor: 'lightblue',
    },
  })

class MonthCalendar extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      activeSlot: {},
      eventType: false, // for existing event eventType is false
    }
  }
  closeNewEventModal = ()=>{
    this.setState({
      visible: false
    })
  }
  openNewEventModal = ()=>{
    this.setState({
      visible: true
    })
  }
  onSubmit = form =>{
    form.validateFields((err, values)=>{
      if(err){
        return;
      }
      console.log(values)
    })

  }

  render() {
    return(
      <div style={{height: 1000}}>
        <EventModalForm
          onSubmit={this.onSubmit}
          type="responsible"
          eventType={this.state.eventType}
          activeSlot={this.state.activeSlot}
          visible={this.state.visible}
          closeNewEventModal={this.closeNewEventModal}
        />
        <Calendar
          selectable
          onSelectSlot={slot=>{

            this.setState({
              activeSlot: slot,
              eventType: true,
            },()=>{
              this.openNewEventModal();
            })
          }}
          onSelectEvent={event=>{{
            console.log(event);
            this.setState({
              activeSlot: event,
              eventType: false
            },()=>{
              this.openNewEventModal();
            })

          }}}
          events={monthlyEvents}
          views={["month", "week"]}
          step={60}
          showMultiDayTimes
          // components={{
          //   timeSlotWrapper: ColoredDateCellWrapper,
          // }}
          localizer={localizer}
        />
        </div>
    )
  }

}

export default MonthCalendar;