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


const WeekCalender = ({sampleJSON})=>{
  const windowSize = useWindowSize();
  const firstDayOfWeek = moment().startOf('isoWeek');
  const [visible, setVisible] = useState(false);
  const [newVisible, setNewVisible] = useState(false);
  const [activeSlot, setActiveSlot] = useState({});
  const [isRender, setIsRender] = useState(true);
  const [events, setEvents] = useState([]);
  const [endPointsForCalendar, setEndPoints] = useState({
    start: 9,
    end: 21,
  });
  useEffect(() => {
    let endPoints = {
      start: 0,
      end: 0,
    };

    if (
      sampleJSON &&
      sampleJSON.data &&
      sampleJSON.data.roomsession &&
      sampleJSON.data.roomsession.length &&
      isRender
    ) {
      const events = parseEventsData(
        sampleJSON.data.roomsession,
        firstDayOfWeek,
      );

      // endPoints.start = events.reduce((min, event) => {
      //   const hour = moment(event.start).format('HH');
      //
      //   return hour < min ? hour : min;
      // }, moment(events[0].start).format('HH'));
      //
      // endPoints.end = events.reduce((max, event) => {
      //   const hour = moment(event.end).format('HH');
      //
      //   return max < hour ? hour : max;
      // }, moment(events[0].end).format('HH'));
      //
      // endPoints.start &&
      // endPoints.end &&
      // setEndPoints(endPoints);
      setEvents(events);
      setIsRender(false);
    }
  }, [sampleJSON]);
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
    return <div style={{height: 1000}}>
      <Modal
      event={activeSlot}
      isOpen={visible}
      onClose={closeEventModal}
      />
      {
        newVisible && (<NewIntervalModal
          newIntervals={activeSlot}
          visible={newVisible}
          setNewEventModalVisible={closeNewEventModal}
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
            min={
              new Date(
                today.getFullYear(),
                today.getMonth(),
                today.getDate(),
                9
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
