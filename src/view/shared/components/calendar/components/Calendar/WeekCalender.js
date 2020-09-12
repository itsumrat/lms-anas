import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { Calendar,momentLocalizer, Views } from 'react-big-calendar';
import Modal from '../common/Modal';
import { monthlyEvents, weekDays, windowBreakPoint } from './constants';
import NewIntervalModal from '../common/Modal/NewIntervalModal';
import { parseEvent } from './Calendar';
import { getRandomColor } from '../../utils/utils';
import { colors } from '../../temp/sampleJSON';
import overlap from 'react-big-calendar/lib/utils/layout-algorithms/overlap'
import { EventView, parseEventsData } from '../../../../../timeTableTeacher/list/timeTableTeacherListTable';
import './styles.css';
import MobileCalendar from './MobileCalendar';
import { useWindowSize } from '../../utils/hooks/useWindowSize';
const localizer = momentLocalizer(moment) // or globalizeLocalizer

const today = new Date();


const WeekCalender = ({type, roomsession, sampleJSON})=>{
  const windowSize = useWindowSize();
  const firstDayOfWeek = moment().startOf('isoWeek');
  const [visible, setVisible] = useState(false);
  const [newVisible, setNewVisible] = useState(false);
  const [activeSlot, setActiveSlot] = useState({});
  const [events, setEvents] = useState([]);

  useEffect(() => {
    if (
      roomsession &&
      roomsession.length > 0
    ) {
      const events = parseEventsData(
        roomsession,
        firstDayOfWeek,
      );
      setEvents(events);
    }
  }, [type, roomsession]);
  const closeEventModal = ()=>{
    setVisible(false)
  }
  const openEventModal = ()=>{
    setVisible(true)
  }
  const openEventModalForMobile = event => {
    setActiveSlot(event);
    setVisible(true)
  }
  const closeNewEventModal = () =>{
    setNewVisible(false)
  }
  const openNewEventModal = () =>{
   setNewVisible(true)
  }
  const handleCreateNewEvent = (form)=>{
    form.validateFields((err, values)=>{
      if(err){
        return;
      }
      console.log(values)
      closeNewEventModal();
    })
  }
    return <div style={{height: 800}}>
      <Modal
      event={activeSlot}
      isOpen={visible}
      onClose={closeEventModal}
      type={type}
      />
      {
        newVisible && (<NewIntervalModal
          newIntervals={activeSlot}
          visible={newVisible}
          setNewEventModalVisible={closeNewEventModal}
          handleCreateNewEvent={handleCreateNewEvent}
        />)
      }
      {
        windowSize.width > windowBreakPoint ? (
          <Calendar
            selectable={true}
            onSelectSlot={slot=>{
              setActiveSlot(slot)
              openNewEventModal();

            }}
            onSelectEvent={event=>{
              setActiveSlot(event)
              openEventModal()

            }}
            defaultDate={new Date()}
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            step={30}
            showMultiDayTimes
            timeSlots={60}
            views={["week"]}
            defaultView={Views.WEEK}
            scrollToTime={new Date(1970, 1, 1, 6)}
            dayLayoutAlgorithm="no-overlap"
            toolbar={false}
            min={
              new Date(
                today.getFullYear(),
                today.getMonth(),
                today.getDate(),
                8
              )
            }
            // end time 9:00pm
            max={
              new Date(
                today.getFullYear(),
                today.getMonth(),
                today.getDate(),
                21
              )
            }
            formats={{ eventTimeRangeFormat: () => null }}
            components={{
              week: {
                header: ({ date, localizer }) => localizer.format(date, 'dddd'),
              },
              event: EventView,

            }}

          />
        ): (
          <MobileCalendar
            data={sampleJSON}
            handleEventClick={openEventModalForMobile}
            firstDayOfWeek={firstDayOfWeek}
          />
        )}
    </div>

}
export default WeekCalender;
